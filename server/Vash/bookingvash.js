 // Funtion to change availability of car for a given date

import Booking from "../models/Booking.js"
import Car from "../models/Car.js";


const checkAvailability = async (car, pickupDate, returnDate)=>{
    const bookings = await Booking.find({
        car,
        pickupDate: {$lte: returnDate},
        returnDate: {$lte: pickupDate},
    })
    return bookings.length === 0; 
}

//  API to check availabillity of cars for the given date on 

export const checkAvailabilityOfCar = async (req, res)=>{
    try {
        const {location, pickupDate, returnDate} = req.body;

        // fetch all available ccars for given location

        const cars = await Car.find({location, isAvailable: true});

        // check car availability for given dare range using promise

        const availableCarsPromise = cars.map(async (car)=>{
            const isAvailable = await checkAvailability(car._id, pickupDate, returnDate);
            return {...car._doc, isAvailable: isAvailable};
        })

        let availableCars = await Promise.all(availableCarsPromise);
        availableCars = availableCars.filter(car => car.isAvailable ===true);

        res.json({success: true, availableCars});

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// API to create Booking

export const createBooking = async (req,res)=>{
    try {
        const {_id} = req.user;
        const {car, pickupDate, returnDate} = req.body;

        const isAvailable = await checkAvailability(car, pickupDate, returnDate)
        if(!isAvailable){
            return res.json({success:false, message: "Car is Not Available"})
        }

        const carData = await Car.findById(car)

        // Calculate price based on pickup and return date

        const picked = new Date(pickupDate);
        const returned = new Date(returnDate);
        const noOfDays = Math.ceil((returned - picked) / (1000 * 60 * 60 *24))
        const price = carData.pricePerDay * noOfDays

        await Booking.create({car, owner: carData.owner, user: _id, pickupDate, returnDate, price})

        res.json({success: true, message: "Booking Created" })

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// API to create get List User 

export const getUserBooking = async(req,res)=>{
    try {
        const {_id} =req.user;
        const bookings= (await Booking.find({user:req.user. _id}).populate("car"))
        res.json({success:true, bookings})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Endpoint

export const getOwnerBooking = async(req,res)=>{
    try {
        if(req.user.role !== 'owner'){
            return res.json({success: false, message: "Booking Status Updated"})
        }
        const bookings = (await Booking.find({owner: req.user._id}).populate('car user', '-password').sort({createdAt: -1}))

        res.json({ success: true, bookings })
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

//  API to change booking 

export const changeBookingStatus = async(req,res)=>{
    try {
        const {_id} =req.user;
        const {bookingId, status} = req.body

        const booking=await Booking.findById(bookingId)

        if(booking.owner.toString() !== _id.toString()){
            return res.json({success:false, message: "Unauthorized"})
        }

        booking.status = status;
        await booking.save()

        res.json({success: true, message: "unauthorized"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}
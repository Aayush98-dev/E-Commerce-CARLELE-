import imagekit from "../configs/Imagekit.js";
import Booking from "../models/Booking.js";
import Car from "../models/car.js";
import User from "../models/User.js";
import fs from "fs";


export const changeRoleToOwner = async (req, res) => {
    try {
        const { _id } = req.user;
        await User.findByIdAndUpdate(_id, { role: "owner" })
        res.json({ success: true, message: "Now you can list our Car" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// export const addCar = async(req,res)=>{
//     try {
//         const {_id} = req.user;
//         let car = JSON.parse(req.body.carData)
//         const imageFile = req.file;

//         // upload image to imagekit
//         const fileBuffer = fs.readFileSync(imageFile.path)
//         const response = await imagekit.upload({
//             file: fileBuffer,
//             fileName: imageFile.originalname,
//             folder: '/cars'
//         })

//         // optimize through imagekit url transformation
//         const imageURL = imagekit.url({
//             path: response.filePath,
//             transformation: [
//                 {width: '1280'},
//                 {quality: 'auto'},
//                 {format: 'webp'}
//             ]
//         })

//         await Car.create({...car, owner: _id, image: imageURL})

//         res.json({success:true, message: "Car Added"})

//     } catch (error) {
//         console.log(error.message)
//         res.json({success: false, message: error.message})
//     }
// }
export const addCar = async (req, res) => {
    try {
        const { _id } = req.user;

        if (!req.body.carData) {
            return res.json({ success: false, message: "carData is missing" });
        }

        let car;
        try {
            car = JSON.parse(req.body.carData);
        } catch (error) {
            return res.json({ success: false, message: "carData is not valid JSON" });
        }

        if (!req.file) {
            return res.json({ success: false, message: "Image is required" });
        }

        const fileBuffer = fs.readFileSync(req.file.path);
        const uploaded = await imagekit.upload({
            file: fileBuffer,
            fileName: req.file.originalname,
            folder: '/cars',
        });

        const imageURL = imagekit.url({
            path: uploaded.filePath,
            transformation: [
                { width: '1280' },
                { quality: 'auto' },
                { format: 'webp' }
            ]
        });

        await Car.create({ ...car, owner: _id, image: imageURL });

        res.json({ success: true, message: "Car Added" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// API to List owner cars
export const getOwnerCars = async (req, res) => {
    try {
        const { _id } = req.user;
        const cars = await Car.find({ owner: _id })
        res.json({ success: true, cars })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// API to toggle car availabilitiy

export const toggleCarAvailability = async (req, res) => {
    try {
        const { _id } = req.user;
        const { carId } = req.body
        const car = await Car.findById(carId)

        // Chckeing is car belongs to the car
        if (car.owner.toString() !== _id.toString()) {
            return res.json({ success: false, message: "Unauthorized" })
        }

        car.isAvailable = !car.isAvailable
        await car.save()

        res.json({ success: true, message: "Availability Toogled" })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}


// API to delete a car


export const deleteCar = async (req, res) => {
    try {
        const { _id } = req.user;
        const { carId } = req.body
        const car = await Car.findById(carId)

        // Chckeing is car belongs to the car
        if (car.owner.toString() !== _id.toString()) {
            return res.json({ success: false, message: "Unauthorized" })
        }

        car.owner = null;
        car.isAvailable = false;
        await car.save()

        res.json({ success: true, message: "car removed" })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}


// API to get dashboard data
export const getDashData = async (req, res) => {
    try {
        const { _id, role } = req.user;

        if (role !== 'owner') {
            return res.json({ success: false, message: "Unauthorized" })
        }

        const cars = await Car.find({ owner: _id })
        // const booking = await Booking.find({owner: _id}).populate('car').sort({createdAt: -1});
        const booking = await Booking.find({ owner: _id })
            .populate('car')
            .sort({ createdAt: -1 })

        const pendingBooking = await Booking.find({ owner: _id, status: "pending" })
        const completeBooking = await Booking.find({ owner: _id, status: "confirmed" })

        // calculate monthly revenue from booking where status oos confirmed

        const monthlyRevenue = booking.slice().filter(booking => booking.status === 'confirmed').reduce((acc, booking) => acc + booking.price, 0)

        const dashboardData = {
            totalCars: cars.length,
            totalBookings: booking.length,
            pendingBookings: pendingBooking.length,
            completedBookings: completeBooking.length,
            recentBookings: booking.slice(0, 3),
            monthlyRevenue

        }
        res.json({ success: true, dashboardData })

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

// API to update user image in dashboard data

export const updateUserImage = async (req, res) => {
    try {
        const { _id } = req.user;

        const imageFile = req.file;

        // upload image to imagekit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/users'
        })
        // optimization through imagekit URL transformation
        var optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { width: '400' },
                { quality: 'auto' },
                { format: 'webp' }
            ]
        });

        const image = optimizedImageUrl
        await User.findByIdAndUpdate(_id, { image });

        res.json({ success: true, message: 'image updated' })

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

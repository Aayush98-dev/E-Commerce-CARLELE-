//  this is a controller file

import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Car from "../models/Car.js";


// Genetrating JWT token
// const generateToken = (userId)=>{
//     const payload = userId;
//     return jwt.sign(payload, process.env.JWT_SECRET)
// }

const generateToken = (userId) => {
   return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};



//  uSer Registration

export const registerUser = async (req, res)=>{
    try{
        const {name, email, password} = req.body

        if(!name || !email ||!password || password.length < 8){
            return res.json({success: false, message:'fill al the fields'})
        }

        const userExists = await User.findOne({email})

        if(userExists){
            return res.json({success: false, message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({name, email, password: hashedPassword})

        const token = generateToken(user._id.toString())

        res.json({success: true, token})

    }catch(error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// Login User and singup

export const loginUser = async(req, res) =>{
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.json({success: false, message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success:false, message: "Invalid Password"})
            
        }

        const token = generateToken(user._id.toString())
        res.json({success: true, token})

    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}



// Get the user data using token

export const getUserData = async (req,res)=>{
    try {
        const user = req.user;
        if (!user) return res.status(401).json({ success: false, message: 'Not authorized' });
        res.json({
            success: true, 
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// get aal cars from the frontend
export const getCars = async (req,res)=>{
    try {
        const cars = await Car.find({isAvailable: true})
        res.json({success: true, cars})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}
import express from "express";
import { protect } from "../auth/auth.js";
import { addCar, changeRoleToOwner, deleteCar, getDashData, getOwnerCars, toggleCarAvailability, updateUserImage } from "../Vash/Ownervash.js";
import upload from "../auth/Multer.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner)

ownerRouter.post("/add-car", upload.single("image"), protect, addCar)

ownerRouter.get("/cars", protect, getOwnerCars)

ownerRouter.post("/toggle-car", protect, toggleCarAvailability)

ownerRouter.post("/delete-car", protect, deleteCar)

ownerRouter.get('/dashboard', protect, getDashData)

ownerRouter.post('/update-image', upload.single("image"), protect, updateUserImage)

export default ownerRouter


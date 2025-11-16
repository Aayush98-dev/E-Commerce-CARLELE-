// This is a routes file

import express from "express";
import { getCars, getUserData, loginUser, registerUser } from "../Vash/UserVash.js";
import { protect } from "../auth/auth.js";
// import upload from "..auth/multer.js";  
import upload from "../auth/Multer.js";

// import imagekit from "..configs/Imagekit.js";
import imagekit from "../configs/Imagekit.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/data', protect, getUserData)
userRouter.get('/cars', getCars)


userRouter.post('/upload-car', protect, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload file to ImageKit
    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname,
      folder: "/cars"
    });

    console.log("ImageKit URL:", result.url);

    // Here, you can save result.url to your DB, e.g.,
    // await saveCarImageToDB(req.user.id, result.url);

    res.json({ url: result.url });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});

  

export default userRouter
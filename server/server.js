import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./rasta/userRasta.js";
import ownerRouter from "./rasta/Ownerrasta.js";
import bookingRouter from "./rasta/bookingRasta.js";


// Initailize Express App

const app = express()

// Connect database

await connectDB()

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> res.send("Server is running"))

app.use('/api/user', userRouter)

app.use('/api/owner', ownerRouter)

app.use('/api/bookings', bookingRouter)

const PORT = process.env.PORT ||  3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))  
// export default serverless(app);
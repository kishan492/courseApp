import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const connectdb = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("database connected sucessfully")
    } catch (error) {
        console.log('error in connection',error)
    }
}

export default connectdb;
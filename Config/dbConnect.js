import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connectDB = async ()=>{
try {
    const res = mongoose.connect(process.env.db_uri)
    if(res){
        console.log('Database Connected Successfully...');
    }
} catch (error) {
        console.log(error);
}   
}
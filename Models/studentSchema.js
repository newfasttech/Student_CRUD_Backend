import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studName:{
        type :String,
        required:true
    },
    studAddress :{
        type:String,
        required:true
    },
    studMob :{
        type : String,
        required:true
    },
    studCourse :{
        type:String,
        required:true
    }   

})

export const studData =  mongoose.model('Students',studentSchema)
import {studData} from '../Models/studentSchema.js'
export const addData = async (req,res)=>{
        try {
            const {studName,studAddress,studMob,studCourse} = req.body
            const checkField = !studName || !studAddress || !studMob || !studCourse

            if(checkField){
                return res.status(400).json({message:"Some Field Missing..!"})
                console.log("some field Missing...!");                
            }

            await studData.create({
                studName,studAddress,studMob,studCourse
            })

            return res.status(200).json({message:"Add Student Data Successfully.."})

        } catch (error) {
            console.log(error);     
            res.status(500).json({message:"Internal Server Error..!"})                                                  
        }
}
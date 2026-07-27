import { studData } from "../Models/studentSchema.js"

export const getData = async (req,res)=>{
    try {
      const getData = await studData.find()
      const dataCount = await studData.countDocuments()

      if(getData){
        res.send({studentData : getData,totalStudent:dataCount})
      }else{
        res.send(`<h1>Data is Empty..</h1>`)
      }
      
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"})
        
    }
}
import mongoose from "mongoose"

// const connection_url ="mongodb+srv://admin:TPKwRjSO9LBhBNWM@cluster0.mj7hrv9.mongodb.net/?retryWrites=true&w=majority"

const atlasDB =async()=>{
    try {
       const connect = await mongoose.connect("mongodb+srv://admin:TPKwRjSO9LBhBNWM@cluster0.mj7hrv9.mongodb.net/?retryWrites=true&w=majority",)
      console.log(`MongoDB connected:${connect.connection} `);
    }catch(error){
      console.error(`Error: ${error.message}`);
      }
    }
export default atlasDB
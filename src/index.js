import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app/index.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is connected to ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.error("MongoDB connection error:", err);
      throw error;
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection failed!!!: ${error}`);
  });

// import express from 'express';
// const app = express();
// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
//     app.on("error",(error)=>{
//         console.error("MongoDB connection error:", err)
//         throw error
//     })
//     app.listen(process.env.PORT , ()=>{
//         console.log(`Server is running on port ${process.env.PORT}`)
//         // console.log(`MongoDB connection established with ${DB_NAME}`)
//         // app.use(express.json())
//         // routes here...

//     })
//     }
//     catch(err){
//         console.error("Error", err)
//         throw err
//     }
// })()

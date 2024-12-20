const  asyncHandler = (reqestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export { asyncHandler };




// Example function that we use 

// const asyncHandler = ()=>{}
// const asyncHandler = (fn) => ()=>{}
// const asyncHandler = (fn) => async()=>{}
// Higer order function
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

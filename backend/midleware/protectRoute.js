const jwt = require("jsonwebtoken")
const User = require("../models/user")

const protectRoute = async (req,res,next)=>{
    try{

        const token = req.cookies.jwt ;
         if(!token){
            return res.status(401).json("token not found") ;
         }

         const decoded = jwt.verify(token,process.env.JWT_SECRET) ;
         
         if(!decoded){
            return res.status(401).json("unotherized - token invalid") ;
        }
        
        const user = await User.findById({_id:decoded.userId}).select("-password")  ;
        if(!user){
            return res.status(401).json("user not found") ;
         }
         req.user = user ;
         next() ;

    }catch(err){
        console.log("error :",err.message) ;
        res.status(500).json({
            success:false ,
            message:"internal server error " 
        })
    }
}

module.exports = {protectRoute} ;
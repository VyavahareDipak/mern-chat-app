const User = require("../models/user") ;

const getUsers = async(req,res)=>{

    try{
 
        const logedinUserId = req.user._id ;
        const users =await User.find({_id:{$ne:logedinUserId}}).select("-password")

        if(!users){
            return res.status(404).json("users not found") ;

        }

        res.status(200).json({success:true,users:users}) ;

    }catch(err){
        console.log("error in getuser",err.message) ;
        res.status(500).json("internal server error")
    }
}

module.exports = {getUsers} ;
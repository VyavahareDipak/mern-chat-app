const User = require("../models/user");
const bcrypt = require("bcryptjs") ;
const tokengenerator = require("../utils/tokenGenerator")
 const  signup = async  (req,res)=>{
    try{
            const {fullName,username,gender,password,conformpassword} = req.body ;

            //check password
            if(password!==conformpassword){
                return res.status(400).json({succuss:false,
                message:"password and conform password not same"})
            }

            //check is user exist
            const pastUser = await User.findOne({username})
            if(pastUser){
                return res.status(401).json({succuss:false,
                message:"user already exist"})
            }

            //hash password
            let hashPassword ;
            try{
                hashPassword =await bcrypt.hash(password,10) ;
            }catch(err){
                res.status(403).json({
                    succuss:false,
                    message:"got error while password hashing" 
                })
            }

            //get avatar from api
            const boyAvtar = `https://avatar.iran.liara.run/public/boy?username=${username}`
            const girlAvtar = `https://avatar.iran.liara.run/public/girl?username=${username}`

            //create user
            const user = await User.create({fullName,username,password:hashPassword,
            gender,
            profilePic:gender==="male"?boyAvtar:girlAvtar
            }) ;

            //if user not exist return error
            if(user){
                console.log("user created successfully") ;
                try{
                    await tokengenerator(user._id,res) ;
                }catch(err){
                    res.status(403).json({
                        succuss:false,
                        message:`error while token creation : ${err}`
                    })
                }
                
                return res.status(200).json({
                    succuss:true,
                    user:user,
                    message:"successful"
                })
            }

            return res.status(400).json({
                succuss:false,
                user:null,
                message:"unsuccessful"
            })

    }catch(err){
        res.status(500).json({
            succuss:false,
            Message:"server not respond"
        })
    }
    res.send("sign route") ;
}

const login = async (req,res)=>{
    try{
        const {username,password}= req.body ;

        const user = await User.findOne({username}) ;

        const iscorrect =await bcrypt.compare(password,user?.password || "") ;

        if(!user || !iscorrect){
            return res.status(403).json({
                succuss:false,
                message:"username or password is incorrect" ,
            })
        }

        await tokengenerator(user._id,res) ;

        res.status(200).json({
            succuss:true,
            message:"login successful"
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            succuss:false,
            message:"internal server response"
        })
    }
}

const logout = async (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});
        console.log("logout successfully")
        res.status(200).json({
            succuss:true,
            message:"logout successful"
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            succuss:false,
            message:"internal server response"
        })
    }
}

module.exports = {signup,login,logout}
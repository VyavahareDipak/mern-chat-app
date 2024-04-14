const jwt = require("jsonwebtoken")

const tokengenerator = async (userId,res)=>{

    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    }) ;

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000 ,
        httpOnly:true,  //prevent cross site scripting attack
        sameSite:"strict", //CSRF cross site request forgery attacks
        secure:process.env.NODE_ENV !== "development"
    })
}

module.exports =  tokengenerator ;

const mongoose = require("mongoose")
const { propfind } = require("../routes/auth.routes")

const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true ,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        requireed:true,
    },
    profilePic:{
        type:String,
        default:""
    },

},{timestamps:true}) ;


const User = mongoose.model("User",userSchema) ;

module.exports = User ;
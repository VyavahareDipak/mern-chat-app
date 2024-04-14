
const  mongoose = require("mongoose") ;
require("dotenv").config() ;
const dbconnect =async ()=>{mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("connection to db is successful") ;
}).catch((err)=>{
    console.log("got an error while db connection",err) ;
})
}

module.exports = dbconnect ;


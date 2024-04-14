const express= require("express") 
const dotenv = require("dotenv")
const cookieparser = require("cookie-parser")
const authroutes = require("./routes/auth.routes")
const messageroutes = require("./routes/message.routes")
const userroutes = require("./routes/user.routes")
dotenv.config() ;

const app  = express() ;
const PORT = process.env.PORT || 4000;

app.use(express.json()) ;
app.use(cookieparser()) ;

app.use("/api/auth",authroutes) ;
app.use("/api/message",messageroutes) ;
app.use("/api/user",userroutes) ;

app.listen(PORT,(err)=>{
if(err){
    console.log("got error") ;
}else{
    console.log(`running on port ${PORT}`)
}
})


const dbconnect = require("./database/config") ;
dbconnect() ;
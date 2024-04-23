//imp for deploy:1
const path =require("path") ;
const express= require("express") 
const dotenv = require("dotenv")
const cookieparser = require("cookie-parser")
const authroutes = require("./routes/auth.routes")
const messageroutes = require("./routes/message.routes")
const userroutes = require("./routes/user.routes")
const {app,server} = require("./socket/socket")

const PORT = process.env.PORT || 5000;

__dirname = path.resolve() ;

dotenv.config() ;

app.use(express.json()) ;
app.use(cookieparser()) ;

app.use("/api/auth",authroutes) ;
app.use("/api/message",messageroutes) ;
app.use("/api/user",userroutes) ;

//deploy 3
//use server static files like html,css ,image, sound etc.  dist folder will create when we build vite frontend .(build frontend npm run build)
app.use(express.static(path.join(__dirname,"/frontend/dist"))) ;   

//deploy 4 . go in package.json
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

//deploy 5 add following in package.json
// "start":"node backend/server.js",
//     "build":"npm install && npm install --prefix frontend && npm run build --prefix frontend"

server.listen(PORT,(err)=>{
if(err){
    console.log("got error") ;
}else{
    console.log(`running on port ${PORT}`)
}
})


const dbconnect = require("./database/config") ;
dbconnect() ;
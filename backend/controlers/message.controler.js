const Conversation = require("../models/conversation");
const Message = require("../models/message")
const {getReceiverSocketId, io} = require("../socket/socket")
const sendMessage =async (req,res)=>{

    try{
        const {message} = req.body ;
        console.log(message) ;
    const {id} = req.params ;
    const receiverId = id ;
    const senderId = req.user._id ;

    let conversation =await Conversation.findOne({
        participants:{$all:[senderId,receiverId]} 
    }) 

    if(!conversation){
        conversation = new Conversation({
            participants:[senderId,receiverId],
        })
        
    }


    const newMessage = new Message({
        senderId,
        receiverId,
        message
    })

    conversation.messages.push(newMessage._id) ;

   
        // this takes more time
        // await newMessage.save() ;
        // await conversation.save() ;

        await Promise.all([conversation.save(),newMessage.save()]) ;

         //ADD SCOKET.IO FUCTIONALITY 
        const receiverSocketId = getReceiverSocketId(receiverId) ;
        if(receiverSocketId){
            //io.to(<socket.id>).emit() used to send events to specific user
            io.to(receiverSocketId).emit("newMessage",newMessage) ;
        }
    
    res.status(200).json(newMessage)

}catch(err){
    console.log("error in sendMessage",err) ;
    res.status(500).json("internal server error")
    }
}

const getMessages = async (req,res)=>{
    try{

        const {id:userToChatId} = req.params ;
        const senderId = req.user._id ;

        const conversation = await Conversation.findOne({participants:{$all:[userToChatId,senderId]}}).populate("messages") ;

        if(conversation){
            return res.status(200).json({messages:conversation.messages})
        }
        return res.status(200).json({messages:[]}) ;


    }catch(err){
        console.log("error in getMessages")
    res.status(500).json("internal server error")
    }
}
    

module.exports = {sendMessage,getMessages} ;
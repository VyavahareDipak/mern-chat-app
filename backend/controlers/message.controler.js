const Conversation = require("../models/conversation");
const Message = require("../models/message")

const sendMessage =async (req,res)=>{

    try{
        const {message } = req.body ;
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

    //ADD SCOKET.IO FUCTIONALITY 

        // this takes more time
        // await newMessage.save() ;
        // await conversation.save() ;

        await Promise.all([conversation.save(),newMessage.save()]) ;
    
    res.status(200).json({conversation:conversation,message:"msg sent successfully"})

}catch(err){
    console.log("error in sendMessage")
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
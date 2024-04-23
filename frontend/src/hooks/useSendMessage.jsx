import  { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';


function useSendMessage() {
  const [loading,setLoading] = useState(false) ;
  const {messages,setMessages,selectedConversation} = useConversation() ;

  const sendMessage = async (message)=>{
    setLoading(true) ;
    try{
        console.log(message) ;
        const res = await fetch(`/api/message/send/${selectedConversation._id}`,{
            method:"POST",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify({message}) 
        })

        const data = await res.json() ;
        if(data.error) throw new Error(data.error) ;
        console.log(data) ;
        setMessages([...messages,data]) ;
        console.log("messages in sendmessage: ",messages) ;
    }catch(err){
        toast.error(err.message) ;
    }finally{
        setLoading(false) ;
    }
}
    return {loading,sendMessage} ; 
}

export default useSendMessage

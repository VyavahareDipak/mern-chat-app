import React, { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import useSendMessage from '../hooks/useSendMessage';

function MessageInput() {
    const {loading,sendMessage} = useSendMessage() ;
    const [message,setMessage] = useState("") ;

    const handleSubmit =async (event)=>{
        event.preventDefault() ;
        if(message.length<=0) return ;
        await sendMessage(message) ;
        setMessage("") ;
    }
    return (
        <form className='flex w-full relative' onSubmit={handleSubmit}>
            
                <input type="text" placeholder="Send a message" onChange={(event)=>{
                    setMessage(event.target.value) ;
                    console.log(message) ;
                }} value={message} className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" />

           <button  type="submit"  disabled={loading}>
            {loading ?(<span className=' loading loading-spinner'></span>):<AiOutlineSend className=" w-7 h-full " />}
            </button>
             
        </form>
    );
}

export default MessageInput

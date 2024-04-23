import React from 'react'
import useConversation from '../zustand/useConversation'
import { extractTime } from '../utils/extractTime';

function Message({ message }) {
    const { selectedConversation } = useConversation();
    const formattedTime = extractTime(message.createdAt) ;
    return (
        <>
            <div className={`chat ${message.senderId === selectedConversation._id ? ("chat-start ") : ("chat-end")} flex flex-col`}>
                 <time className="text-xs opacity-50 text-gray-300">{formattedTime}</time>
                <div className={`chat-bubble ${message.senderId === selectedConversation._id ? ("") : ("bg-sky-500")}`}> {message.message}</div>
                
            </div>

        </>
    )
}

export default Message

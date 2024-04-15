import React from 'react'
import { AiOutlineSend } from "react-icons/ai";

function MessageInput() {
    return (
        <form className='flex w-full relative'>
            
                <input type="text" placeholder="Send a message" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" />

            <button type='submit'   className='absolute inset-y-0 end-0 flex items-center pe-3 text-white'><AiOutlineSend className=''/></button>
        </form>
    );
}

export default MessageInput

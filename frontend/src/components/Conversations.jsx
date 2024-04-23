import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
function Conversations() {
  const  {loading,conversations} = useGetConversations() ;
  const {selectedConversation,setSelectedConversation} = useConversation() ;
  
  return (
    <div className='  overflow-auto  '>
      { conversations.length >0 &&
        conversations.map((conversation)=>{
            return <Conversation  key={conversation._id} conversation = {conversation} 
              />
        })
      }
    </div>
  )
}

export default Conversations

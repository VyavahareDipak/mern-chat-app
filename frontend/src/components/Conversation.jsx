import React from 'react'
import useGetConversations from '../hooks/useGetConversations'
import useConversation from '../zustand/useConversation';
function Conversation({conversation}) {
  // console.log("in conversation :",conversation)
  const selectedConversation = useConversation((state)=>state.selectedConversation)
  const setSelectedConversation = useConversation((state)=>state.setSelectedConversation);
  const selected = selectedConversation?._id===conversation._id ;
  return (
    <>
    <div onClick={()=>{setSelectedConversation(conversation)
    console.log(conversation)
            }} className={`${selected?("bg-sky-500"):("")} flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}>
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
          <img src={`${conversation.
profilePic}`} alt="user icon" />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
        </div>
      </div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation

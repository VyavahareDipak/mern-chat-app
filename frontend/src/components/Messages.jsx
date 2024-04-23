import React, { useEffect ,useRef } from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages';
import useListenMessages from '../hooks/useListenMessages';
function Messages() {
  const {loading,messages} = useGetMessages() ;
  useListenMessages() ;
  const lastMessageRef = useRef() ;

  useEffect(()=>{
      setTimeout(()=>{
        lastMessageRef.current?.scrollIntoView({behaviour:"smooth"})
      },500)
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto '>
      { loading ?(
        <div className="flex flex-col gap-4 w-52">
        <div className="flex gap-4 items-center">
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
      </div>):
      (
       <div>
         
         {
          messages.length===0?(<p className=' text-gray-400'>Send message to start conversation</p>):
          ( messages.map((message)=>
          <div key={message._id} ref={lastMessageRef}  >
            <Message  message={message}/>
          </div> )
         
        )
        }
       </div>
     
      )
      }
    </div>
  )
}

export default Messages

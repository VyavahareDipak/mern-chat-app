import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation';
import notificationSound  from '../assets/notification.mp3' ;

function useListenMessages() {
    const {socket} = useSocketContext();
    const {messages,setMessages} = useConversation() ;
    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            const sound = new Audio(notificationSound) ;
            sound.play() ;
            setMessages([...messages,newMessage]) ;
        })

        return ()=> socket?.off("newMessage")
    },[socket,messages,setMessages]) ;
  
}

export default useListenMessages ;


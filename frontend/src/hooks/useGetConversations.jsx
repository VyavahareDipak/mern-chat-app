import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function useGetConversations() {
  const [loading,setLoading] =useState(false) ;
  const [conversations,setConversations] = useState([]);
  
  useEffect(()=>{

    const getConversation = async()=>{
        setLoading(true) ;
        try{
        const res = await fetch("/api/user") ;
        const data = await res.json() ;

        if(data.error) throw new Error(data.error) ;
        // console.log(data) 
        // console.log("before : ",conversations)
        setConversations(data.users) ;
        // console.log("after : ",conversations)

        
        }catch(err){
            toast.error(err.message) ;
        }finally{
            setLoading(false) ;
        }
    }

    getConversation() ; 
  },[]) ;
  return {loading,conversations} ;
}

export default useGetConversations

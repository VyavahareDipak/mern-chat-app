import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useAuthContext } from '../context/AuthContext';
import {  useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation';
function LogoutButton() {
  const {authUser,setAuthUser} = useAuthContext() ;
  const {setSelectedConversation} = useConversation() ;
  const navigate = useNavigate() ;
  const handleLogout =async ()=>{
        localStorage.clear("chat-user") ;
        try{
          const res =await fetch("/api/auth/logout",{
            method:"POST",
            headers:{"content-type":"application/json"}
          })
          const data = await res.json() ;
          if(data.error) throw new Error(data.error) ;
          toast.success("logout successfully") ;
          setAuthUser(null) ;
          setSelectedConversation(null) ;
          navigate("/login") ; 

        }catch(err){
          toast.error(err.message) ;
        }
        
  }


  return (
    <div className='mt-auto'>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={handleLogout}/>
    </div>
  )
}

export default LogoutButton

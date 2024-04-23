import React, { useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import useConversation from '../zustand/useConversation';
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast';
function SearchInput() {
  const [search,setSearch] = useState("") ;
  const {setSelectedConversation} = useConversation() ;
  const {conversations} = useGetConversations() ;
  const handleSubmit = (e)=>{
    e.preventDefault() ;
    if(search.length===0) return ;
    else if(search.length<3 ){
      return toast.error("invalid search");
    }

    const conversation = conversations.find((c)=>
      
      c.fullName.toLowerCase().includes(search.toLowerCase())) ;

    if(conversation) {
      setSelectedConversation(conversation) ;
      setSearch("") ;
    }else{
      toast.error("converstion not found ") ;
    }

  }
  return (
    <form onSubmit={handleSubmit}className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' 
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        className=' input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'><BiSearchAlt /></button>
    </form>
  )
}

export default SearchInput
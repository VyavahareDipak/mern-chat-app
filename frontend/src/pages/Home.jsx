import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageContainer from '../components/MessageContainer'
function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0 '>
    <Sidebar/>
     <MessageContainer/> 
    </div>
  )
}

export default Home

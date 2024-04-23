import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'
function Login() {
  const [formData,setFormData] = useState({username:"",password:""})
  const {login,loading} = useLogin() ;

  const handleSubmit = (event)=>{
    event.preventDefault() ;
    login(formData) ;
    console.log(formData) ;
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className=' w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login  <span className='text-blue-500 '>Chatapp</span></h1>
       
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'></label>
            <span className='text-base label-text'>Username</span>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' name="username" value={formData.username} onChange={(event)=>{setFormData({...formData,username:event.target.value})}}/>
          </div>
          <div>
            <label className='label'></label>
            <span className='text-base label-text'>Password</span>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' onChange={(event)=>{setFormData({...formData,password:event.target.value})}}/>
          </div>
          <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account</Link>
          <button className="btn btn-neutral w-full mt-3" disabled={loading}>{loading ?(<span className=' loading loading-spinner'></span>):"Login"}
          </button>
        </form>
      </div>
      
    </div>
  )
}

export default Login

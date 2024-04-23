import React, { useState } from 'react'
import GenderCheckBox from '../components/GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup';
function Signup() {
  const {signup,loading} = useSignup() ;
  const [formData,setFormData] = useState({fullName:"",
      username:"",
      password:"",
      confirmpassword:"",
      gender:""}) ;
//--------------------------------------------------
const handleCheckBoxChange = (selectedGender)=>{
  setFormData({...formData,gender:selectedGender}) ;
}
//--------------------------------------------------
const handleChange = (event)=>{
  setFormData(()=>{
    return({...formData ,
    [event.target.name]:event.target.value ,})
  })
  console.log(formData) ;
}

const handleSubmit =async (event)=>{
    event.preventDefault() ;
   await signup(formData) ;
    
}
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0 '>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Signup <span className='text-blue-500'>ChatApp</span></h1>
      <form onSubmit={handleSubmit}>
      <div>
            <label className='label p-2'></label>
            <span className='text-base label-text'>Name</span>
            <input type="text" name="fullName" 
            value={formData.fullName}
            onChange={handleChange}
            placeholder='Enter name' className='w-full input input-bordered h-10'/>
          </div>
        
          <div>
            <label className='label p-2'></label>
            <span className='text-base label-text'>Username</span>
            <input type="text" placeholder='Enter Username' name="username" 
            value={formData.username}
            onChange={handleChange}  className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'></label>
            <span className='text-base label-text'>Password</span>
            <input type="text" placeholder='Enter Password'
            name="password" 
            value={formData.password}
            onChange={handleChange} className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'></label>
            <span className='text-base label-text'>Conform Password</span>
            <input type="text" placeholder='Enter Password'
            name="confirmpassword" 
            value={formData.confirmpassword}
            onChange={handleChange} className='w-full input input-bordered h-10'/>
          </div>

          {/* gender checkbox */}
          {/* -------------------------------------- */}
          <GenderCheckBox onCheckboxChange = {handleCheckBoxChange} selectedGender={formData.gender} />
          {/* ----------------------------------------- */}
          <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Already"} have an account</Link>
          <button className="btn btn-neutral w-full mt-3" disabled={loading}>{loading ?(<span className=' loading loading-spinner'></span>):"Sign up"}</button>
      </form>
      </div>
    </div>
  )
}

export default Signup

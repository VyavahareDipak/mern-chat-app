import React from 'react'
import GenderCheckBox from '../components/GenderCheckBox'

function signup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0 '>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Signup <span className='text-blue-500'>ChatApp</span></h1>
      <form >
      <div>
            <label className='label p-2'></label>
            <span className='text-base label-text'>Name</span>
            <input type="text" placeholder='Enter name' className='w-full input input-bordered h-10'/>
          </div>
        
          <div>
            <label className='label p-2'></label>
            <span className='text-base label-text'>Username</span>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'></label>
            <span className='text-base label-text'>Password</span>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'></label>
            <span className='text-base label-text'>Conform Password</span>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
          </div>
          {/* gender checkbox */}
          <GenderCheckBox/>
          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Already"} have an account</a>
          <button className="btn btn-neutral w-full mt-3">Sign up</button>
      </form>
      </div>
      

    </div>
  )
}

export default signup

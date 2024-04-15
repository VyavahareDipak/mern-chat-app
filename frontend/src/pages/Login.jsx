import React from 'react'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className=' w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login</h1>
        <span className='text-blue-500 '>Chatapp</span>
        <form >
          <div>
            <label className='label p-2'></label>
            <span className='text-base label-text'>Username</span>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label'></label>
            <span className='text-base label-text'>Password</span>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
          </div>
          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account</a>
          <button className="btn btn-neutral w-full mt-3">Login</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login

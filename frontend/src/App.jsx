import './App.css'
import {Routes,Route, Navigate} from "react-router-dom" 
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Home from "./pages/Home.jsx"
import { Toaster } from 'react-hot-toast'

import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const {authUser,setAuthuser} = useAuthContext()
  console.log(authUser) ;
  return (
    <div className=' flex h-screen justify-center items-center p-4'>
    
     <Routes>
      <Route path='/' element={!authUser?<Navigate to='/login'></Navigate>:<Home/>}></Route>
      <Route path="/signup" element={authUser?<Navigate to='/'></Navigate>:<Signup/>}></Route>
      <Route path="/login" element={authUser?<Navigate to='/'></Navigate>:<Login/>}></Route>
     </Routes>
     <Toaster/>
    </div>
  )
}

export default App

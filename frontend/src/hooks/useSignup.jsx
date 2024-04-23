import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function useSignup() {
    const [loading,setLoading] = useState(false) ;
    const {authUser,setAuthUser} = useAuthContext() ;
   const signup =async ({fullName,username,password,confirmpassword,gender})=>{
        console.log({fullName,username,password,confirmpassword,gender}) ;
       const success =  handleError({fullName,username,password,confirmpassword,gender}) ;

       if(!success) return ;

       try{
        setLoading(true) ;
        // https://localhttp://localhost:5000/api/auth/signup 
        //if we use it directly it gives cors error . we have to set proxy : https://localhttp://localhost:5000 in vite.config file .
        const res =await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"content-Type":"application/json",},
            body:JSON.stringify({fullName,username,password,confirmpassword,gender}) 
        })

        const data = await res.json() ;
        if(data.error) throw new Error(data.error) ;
        console.log(data) ;
        //set in localstorage
        localStorage.setItem("chat-user",JSON.stringify(data)) ;

        //save this in context api
        setAuthUser(data) ;

       }catch(err){
        toast.error(err.message) ;
       }finally{
        setLoading(false) ;
       }
    }
    return {signup,loading} ;
}

export default useSignup


const handleError = ({fullName,username,password,confirmpassword,gender})=>{
    if(!fullName || !username || !password || !confirmpassword || !gender ){   toast.error("fill all the fields. ")
        return ;

    }

    if(confirmpassword!==password){
        toast.error("password and confirm password field must be same")
        return false ;
    }

    if(password.length <6){
        toast.error("password should contain atleast 6 characters ")
        return false ;
    }

    return true ;

}
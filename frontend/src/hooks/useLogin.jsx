import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';

function useLogin() {
    const [loading,setLoading] = useState(false) ;
    const {authUser,setAuthUser} = useAuthContext() ;
    const login =async ({username,password})=>{
        //handle errors
        const success = handleErrors(username,password) ;

        if(!success) return ;
        try{
                setLoading(true) ;
                const res =await fetch("/api/auth/login",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({username,password}) 
            })
    
            const data = await res.json() ;
            if(data.success==false){
                console.log("error occured") ;
                throw new Error(data.message) ;
            } 
            console.log("data : ",data) ;
            console.log("data : ",data.message) ;
            console.log("data : ",data.success) ;
            //set in localstorage
            localStorage.setItem("chat-user",JSON.stringify(data.user)) ;
            setAuthUser(data.user) ;

        }catch(err){
            toast.error(err.message) ;
        }finally{
            setLoading(false) ;
        }
        
    }

    return {login,loading} ;
}

export default useLogin

const handleErrors = (username,password)=>{
    if(!password || !username){
        toast.error("fill all fields correctly")
        return false;
    }

    if(password.length<6){
        toast.error("password field atleast contain 6 character ")
        return false ;

    }
    return true ;

}

import React, { useEffect, useState } from 'react'
import Messages from './Messages'
import user from '../../assets/user.json'
import { data, useNavigate } from 'react-router-dom'
import { is_Authanticated, login } from './Autantication'

const initialerror={
    user:{
        is_Required:false
    },
    password:{
        is_Required:false,
        // length_error:false
    }
}
const Login = () => {
    let nav=useNavigate()
    const [has,setHas]=useState(false)
    const[error,setError]=useState({message:"",errors:{...initialerror}})
    const[inputdata,setInputdata]=useState({
        user_name:"",password:""
    })
    function handleLogin(){
        let local_errors=initialerror
        let has_error=false
        if(inputdata.user_name===""){
            local_errors.user.is_Required=true
            has_error=true
        }
        if(inputdata.password===""){
            local_errors.password.is_Required=true
            has_error=true
        }

        setError({...error,errors:{...local_errors}})

      if(!has_error){
        if(user.user.user_name===inputdata.user_name && user.user.password===inputdata.password){
           console.log("Successfully login")  
           login() 
           nav("/")
        }
        else{
            console.log("error")
            setError({...error,message:"Invailed Username or Password"})
            setHas(!has)
        }
      }  
    }
    useEffect(()=>{
        if(is_Authanticated()){
            nav("/")            
        }
    },[])
    return (
        <>
            <div className='login-container'>
                <Messages error={error.message} has={has} />
                    <div class="mb-3 col-md-5 form-box p-3 rounded col-sm-8 col-11">
                        <h2 className='text-center'>Login</h2>
                        <div class="gap-4 flex-column d-flex">
                            <form action="">

                            <input onChange={(e)=>setInputdata({...inputdata,user_name:e.target.value})} type="text" class="form-control" id="staticEmail"  placeholder='Username' />
                            {error.errors.user.is_Required && <p className='text-danger'>Username is Required</p>}
                            </form>
                            <div>

                            <input onChange={(e)=>setInputdata({...inputdata,password:e.target.value})} type="password" placeholder='Password' class="form-control" id="inputPassword" />
                            {error.errors.password.is_Required && <p className='text-danger'>Password is Required</p>}
                            {/* {error.errors.password.length_error && <p className='text-danger'>Password is must be 8 charactors</p>} */}
                            </div>
                     
                        </div>
                    <div className='col-12 d-flex justify-content-center p-3'>
                        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
                        </div> 
                </div>

            </div>
        </>
    )
}

export default Login

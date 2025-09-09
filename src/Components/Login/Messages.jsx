import React, { useEffect, useState } from 'react'

const Messages = (prps) => {
    
    const[messages,setmessages]=useState({
        opactity:0,
        transform:"translateY(-120px)",
        bg_color:"",
    })
useEffect(()=>{
    if(prps.error){
        setmessages({
            ...messages,opactity:1,transform:"translateY(0)"
        })
        setTimeout(()=>{
            setmessages({
                ...messages,opactity:0,transform:"translateY(-120px)"
            }) 
        },3000)
    }
},[prps.error,prps.has])

  return (
    <div className='col-6 messages alert alert-danger bg-danger ' style={{transform:messages.transform,opacity:messages.opactity,}}>
         <p className='text-center d-flex align-items-center justify-content-center'>{prps.error}</p>
    </div>
  )
}

export default Messages

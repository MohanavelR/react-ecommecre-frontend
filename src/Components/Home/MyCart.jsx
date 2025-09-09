import React, { useEffect, useState } from 'react'
import { is_Authanticated } from '../Login/Autantication'
import { useNavigate } from 'react-router-dom'
import user from "../../assets/user.json"
import data from "../../assets/data.json"
import Card from './Card'
const MyCart = () => {

  const [fav,setfav]=useState([])
    let nav=useNavigate()
    useEffect(()=>{
    if(!is_Authanticated()){
        nav("/login")
    }
    else{
      let getfav=(user.user.favorites).filter((e)=>{
      if(user.user.user_id=e.user_id){
        return e
      }
      })
       const result=data.data.filter((item)=>{
        for(let product of getfav ){
             if(product.product_id==item.id){
              return item
             }
        }
        
       })
       
      setfav(result)
    }
},[is_Authanticated])
  return (
    <>
      <h1 className='m-3'>My Cart</h1>
      <div className='mycart-container mx-5 d-flex gap-2 justify-content-center flex-wrap '>
        {fav ? fav.map((e,index)=><Card details={e} key={index} added={true} />):<p className='text-secondary fs-3 text-center mt-5'>No Product..</p>}
      </div> 
    </>
  )
}

export default MyCart

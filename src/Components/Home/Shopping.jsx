import React from 'react'
import Card from './Card'
import data from "../../assets/data.json"
import { useEffect, useState } from 'react'


const Shopping = () => {
    const [mydata, setData] = useState([])
    useEffect( ()=>setData(data.data) 
,[])
  return (
    <>
    <h2 className='ms-2 mt-3'>Products</h2>
    <div  className='mx-5 mt-5 d-flex gap-2 justify-content-center flex-wrap'>
                 {mydata.map((data,index)=><Card details={data} added={false} key={index}/>)}
    </div> 
    </>
  )
}

export default Shopping

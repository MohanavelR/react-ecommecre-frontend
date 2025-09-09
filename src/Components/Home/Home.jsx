import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import Card from './Card'
import data from "../../assets/data.json"

const Home = () => {
  const [mydata, setData] = useState([])
useEffect( ()=>{
  setData(data.data.filter(res=>res.is_tranding===true 
  ))
},[])


  return (
    <>
      <div className=''>
        <Slider />
        <div className='mt-3'>
          <h1>Trending Products</h1>
          <div className='mx-5 d-flex gap-2 justify-content-center flex-wrap'>
                 {mydata.map((data,index)=><Card details={data} added={false} key={index}/>)}
          </div>
        </div>
      </div>

    </>
  )
}

export default Home

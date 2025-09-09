import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from "../../assets/data.json"
import Card from './Card'

const Details = () => {
    const[count,setCount]=useState(0)
   let {id}=useParams()
   let [detailsproduct,setproduct]=useState({})
   let [related,setRelated]=useState([])

   useEffect(()=>{
    let localdata=data.data.find((item)=>{
        if(item.id==id){
            setCount(0)
         return item
        }
       })
      console.log(localdata.product_img)
    setproduct(localdata)
    
    let related_product=data.data.filter((item)=>{
        if((item.catogory.toLowerCase())===(localdata.catogory.toLowerCase())){
            return item
        }
    })
    setRelated(related_product)

},[id])
useEffect(()=>{
  if(count<0){
    setCount(0)
  }
  if(detailsproduct.quintity<count){
    setCount(detailsproduct.quintity)
  }
  return clearInterval(count)
},[count])
      return (
    <>
    <div className='product-container d-flex justify-content-center '>
    <div class="card mt-5" style={{width: "18rem"}}>
        <img src={detailsproduct?.product_img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{(detailsproduct.product_name)}</h5>
           
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between"><span>price$</span><span>{detailsproduct.price}</span></li>
            <li class="list-group-item d-flex justify-content-between"><span>Quantity </span><span>{detailsproduct.quintity}</span></li>
            <li class="list-group-item d-flex justify-content-between"><span>Offers</span><span>{detailsproduct.offers}</span></li>
        </ul>
        <div class="card-body">
            <div className='d-flex justify-content-evenly'>
            <button  class="btn btn-danger" onClick={()=>setCount(count-1)}>-</button>
            <input type="text"  readOnly value={count} className='col-3 text-center rounded'  />
            <button  class="btn btn-primary" onClick={()=>setCount(count+1)}>+</button>
            </div>
            <div className='d-flex mt-3 justify-content-center col-12'>
               <Link href="" onClick={()=>alert('successfully ordered ...')} className='btn btn-success col-11'>Order</Link>
            </div>
        </div>
    </div>
    </div>
    <div className='mt-3'>
          <h1>Related Products</h1>
          <div className='mx-5 d-flex gap-2 justify-content-center flex-wrap'>
                 {related.map((details_data,index)=><Card  details={details_data} added={false} key={index}/>)}
          </div>
        </div>
    </>
  )
}

export default Details

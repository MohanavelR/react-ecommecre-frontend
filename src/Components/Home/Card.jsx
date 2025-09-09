import React from 'react'
import img from "../../assets/images/mobile-img.png"
import { Link } from 'react-router-dom'

const Card = ({details,added}) => {

  return (
    <>

     <div className="card" style={{width: "18rem"}}>
        <img src={details.product_img} className="card-img-top" alt="" />
        <div className="card-body">
            <div className='d-flex justify-content-between col-12'>
              <h5 className="card-title"> {(details.product_name).toUpperCase()}</h5>
              <h5>${details.price}
              </h5>
            </div>
            <div className='d-flex justify-content-between col-12'>
              <p>
              Quantity : <span>{details.quintity}</span>
              </p>
              <p>Offer: <span>{details.offers}</span></p>   
            </div>
             <div className='d-flex justify-content-between col-12'>
            <Link  to={`/details/${details.id}`} className="btn btn-primary">Shop</Link>
            {added?<a href="" className="btn btn-secondary">Added</a>
            :<Link 
            // to={`/details/${details.id}`} 
            className="btn btn-warning">Add Cart</Link>
          }
              </div>            
        </div>
    </div>
    </>
  )
}

export default Card




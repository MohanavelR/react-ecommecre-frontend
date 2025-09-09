import React from 'react'
import slider_4 from "../../assets/images/no_img.png"
import slider_2 from "../../assets/images/slider.jpg"
import slider_3 from "../../assets/images/makeup.jpg"
import slider_1 from "../../assets/images/slider-2.jpg"
const Slider = () => {
    return (
        <>
  <div className=' d-flex justify-content-center mt-3'>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner rounded">
            <div className="carousel-item active">
                <img src={slider_1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src={slider_2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src={slider_3} className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
            </div>
        </>
    )
}

export default Slider

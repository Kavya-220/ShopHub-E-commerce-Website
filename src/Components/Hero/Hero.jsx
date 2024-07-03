import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="container-fluid bg" id="menu">
              <div className="row">
              <div className="col-md-12">
             
   <div className="hero d-flex  align-items-center justify-content-center">
   <div className="col-md-6">
    <div className="hero-left">
    <h2 className='ps-5 p-3 text-center fs-2'>Discover the Latest Trends and Exclusive Deals at ShopHub</h2>
    </div>
       <div className="hand-hand-icon">
         <p className='ps-5'>Welcome to ShopHub, your premier destination for the latest fashion trends. Explore our curated collection of stylish clothing, shoes, and accessories. Elevate your wardrobe with top brands,
             exclusive designs, and unbeatable prices, all at ShopHub!</p>
       </div>
       <div className="hero-latest-button d-flex flex-dirextion-column align-items-center justify-content-center ">
     <Link to='/latest'>  <button className='btn-bg text-white mt-1 p-2 px-3'>Latest Collection 
      <img src={assets.arrow} width={20} alt="" /></button>
      </Link>
        
       </div>
       </div>
       <div className="col-md-6">
       <div className="hero-right">      
        <img src={assets.hero_image} width={550} alt="" />
       </div>
   </div>
   
        
        </div>
        </div>
   </div>
   </div>
  )
}

export default Hero
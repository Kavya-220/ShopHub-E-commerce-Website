import React from 'react'
import './Offers.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
   <>
     <div className="container-fluid mt-5" >
              <div className="row">
              <div className="col-md-12">
             
   <div className="offers d-flex mt-5 ">
   <div className="col-md-6">
    <div className="offers-left d-flex flex-column justify-content-center mt-5">
    <h1 className='mt-5 fs-1'>Exclusive</h1>
            <h1>Offers For You</h1>
                     <p>ONLY ON BEST SELLERS PRODUCTS</p>
                    <Link to='/offer'> <button className='btn-bg text-white mt-2'>Check Now</button></Link>
    </div>
       
       </div>
       <div className="col-md-6">
       <div className="offers-right d-flex align-items-center ps-5">      
       <img src={assets.exclusive_image}  alt="" />
              </div>
   </div>
   
        
        </div>
        </div>
   </div>
   </div>










   
   </>
  )
}

export default Offers
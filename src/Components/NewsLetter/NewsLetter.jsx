import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
   <>
    <div className="container-fluid ">
              <div className="row">
              <div className="col-md-12">
                <div className="newsletter mx-auto d-flex flex-column justify-content-center">
                    <h1 className='text-center fs-1'>Get Exclusive Offers On Your Email</h1>
                    <p className='text-center mt-2 fs-5'>Subscribe to our newsletter and stay updated</p>
                <div className='d-flex align-items-center bg-white justify-content-between mt-2'>
                    <input type="email" className='ms-2 ps-2' placeholder='Your Email id' />
                    <button className='btn-bg text-white button px-4 py-2 '>Subscribe</button>
                </div>
                </div>
                </div>
                </div>
              </div>
   </>
  )
}

export default NewsLetter
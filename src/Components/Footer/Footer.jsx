import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
   <footer className="bg-color text-white pt-3 " >
                  <div className=" container text-center ">
                    <div className="row text-center">
                      <div className="col-md-12 col-lg-12 col-xl-12 mx-auto mt-5 mb-2 ">
                       <img src={assets.logo} alt="" width="80" height="80" />
                        <span className="font-weight-bold fs-3">ShopHub</span>
                      <ul className="list-unstyled list-inline  mt-3">
                        <li className="list-inline-item ">
                          <a href="#" className="btn-floating btn-sm text-white"><img src={assets.instagram_icon} height="30" width="30" alt="" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="btn-floating btn-sm text-white"><img src={assets.whatsapp_icon} height="30" width="30" alt="" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="btn-floating btn-sm text-white"><img src={assets.pintester_icon} height="30" width="30" alt="" /></a>
                        </li>                 
                        </ul>
                      </div>
                      <hr />
            
                      <div className="col-md-12 col-lg-12 col-xl-12 mx-auto mt-3 mb-3 ">
                                         
                        <div className="links d-flex align-items-center justify-content-center mt-2 mb-2">
                         
                        <Link to="/" className='text-white font'>Shop</Link>
                        <Link to="/mens" className='text-white font'>MEN</Link>
                        <Link to="/womens" className='text-white font'>WOMEN</Link>
                        <Link to="/kids" className='text-white font'>KIDS</Link>
                         
                          </div>
                          </div>

                      <hr />
                      <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8 mx-auto">
                          <p>Copyright &copy;2024 All rights reserved by :
                            <a href="#" >
                            <strong className="color"> ShopHub</strong> </a>
                          </p>
                        </div>
                      </div>




                    </div>
                  </div>
                </footer>
   </>
  )
}

export default Footer
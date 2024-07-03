import React from 'react'
import './BreadCrum.css'
import assets from '../../assets/assets'

const BreadCrums = (props) => {

   const {product} = props

  return (
    <div className="container-fluid">
              <div className="row">
              <div className="col-md-12">
               <div className="breadcrum d-flex align-items-center">
                HOME <img src={assets.breadcrum_arrow} alt="" />
                SHOP <img src={assets.breadcrum_arrow} alt="" />
                {product.category} <img src={assets.arrow} alt="" />
                {product.name}
               </div>
                </div>
                </div>
              </div>
  )
}

export default BreadCrums
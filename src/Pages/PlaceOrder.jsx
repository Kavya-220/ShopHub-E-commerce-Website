import React, { useContext } from 'react'
import './CSS/PlaceOrder.css'
import { ShopContext } from '../Context/ShopContext'


export const PlaceOrder = () => {
  
  const {getTotalCartAmount} = useContext(ShopContext)

  return (

   <>
   <div className="container-fluid mb-5">
                  <div className="container ">
                  <div className="row">
                    <div className="col-md-12 "></div>
    <form className='place-order'>
      <div className="place-order-left">
       <p className="title">Delivery Information</p>
       <div className="multi-fields">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
       </div>
       <input type="email" placeholder='Email address'/>
       <input type="text" placeholder='Street'/>
       <div className="multi-fields">
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='State'/>
       </div>
       <div className="multi-fields">
        <input type="text" placeholder='Zip-code'/>
        <input type="text" placeholder='Country'/>
       </div>
       <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total mt-5">
        <h2 className='fs-3'>Cart Total</h2>
        <div>
            <div className="cart-total-details mt-4">
                <p>Subtotal</p>
                <p className='text-danger fw-bold'>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p className='text-danger fw-bold'>Free</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <b className='text-danger'>₹{getTotalCartAmount()}</b>
            </div>
        </div>
        <button className='btn-box text-white p-2 px-3' >PROCEED TO PAYMENT</button>
    </div>
      </div>
      </form>
      </div>
      </div>
      </div>

   </>
  )
}

import React from 'react'
import './CSS/NewOffers.css'
import offer from '../assets/offer'
import Item from '../Components/Items/Item'

const NewOffers = () => {
  return (
   <>
    <div className="container-fluid">
              <div className="row ">
              <div className="col-md-12">
                <div className="offer pt-2 d-flex flex-column align-items-center justify-content-center mb-5 mt-5">
                    <h1>Exclusive Offers</h1>
                    <hr />
                    <div className="new-offer mt-5">
                        {offer.map((item, i)=>{
                         return <Item key={i} id={item.id} name={item.name} 
                         image={item.image} old_price={item.old_price} new_price={item.new_price} />
                        })}
                    </div>
                </div>
                </div>
                </div>
              </div>
   </>
  )
}

export default NewOffers
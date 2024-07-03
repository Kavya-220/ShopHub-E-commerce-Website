import React from 'react'
import './CSS/LatestCollection.css'
import latest_collection from '../assets/latest_collection'
import Item from '../Components/Items/Item'


const LatestCollection = () => {
  return (
    <>
    <div className="container-fluid">
              <div className="row ">
              <div className="col-md-12">
                <div className="latest pt-2 d-flex flex-column align-items-center justify-content-center mb-5 mt-5">
                    <h1>Latest Collection</h1>
                    <hr />
                    <div className="latest-collection mt-5">
                        {latest_collection.map((item, i)=>{
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

export default LatestCollection
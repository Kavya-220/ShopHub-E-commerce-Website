import React from 'react'
import './NewCollection.css'
import new_collection from '../../assets/new_collections'
import Item from '../Items/Item'

const NewCollection = () => {
  return (
  <>
   <div className="container-fluid">
              <div className="row ">
              <div className="col-md-12">
                <div className="new-collection pt-2 d-flex flex-column align-items-center justify-content-center mb-5">
                    <h1>NEW COLLECTION</h1>
                    <hr />
                    <div className="collection mt-5">
                        {new_collection.map((item, i)=>{
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

export default NewCollection
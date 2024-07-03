import React from 'react'
import './RelatedProducts.css'
import data_product from '../../assets/data'
import Item from '../Items/Item'

const RelatedProducts = () => {
  return (
   <>
    <div className="container-fluid">
              <div className="row">
              <div className="col-md-12">
                <div className="relatedproducts d-flex flex-column align-items-center">
                    <h1>Related Products</h1>
                    <hr />
                    <div className="relatedproducts-items-wrapper mt-5">
                    <div className="relatedproducts-item d-flex ">
                        {data_product.map((item, i)=>{
                        return <Item key={i} id={item.id} name={item.name} 
                        image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                        })}
                    </div>
                    </div>
                </div>
                </div>
                </div>
              </div>
   </>
  )
}

export default RelatedProducts
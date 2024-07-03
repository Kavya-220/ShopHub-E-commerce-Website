import React from 'react';
import './Popular.css';
import data_product from '../../assets/data.js';
import Item from '../Items/Item.jsx';

const Popular = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="popular mt-5 pt-2 d-flex flex-column align-items-center justify-content-center">
              <h1>POPULAR IN WOMEN</h1>
              <hr />
              <div className="popular-items-wrapper mt-5">
                <div className="popular-item d-flex">
                  {data_product.map((item, i) => {
                    return (
                      <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        old_price={item.old_price}
                        new_price={item.new_price}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;

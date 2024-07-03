import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import assets from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="cartitems">
            <div className="cartitems-format-main">
              <p>Products</p>
              <p>Title</p>
              <p>Size</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
              if (cartItems[e.id].quantity > 0) {
                return (
                  <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main ms-2">
                      <img src={e.image} alt="" className="carticon-product-icon" />
                      <p className="product-name">{e.name}</p>
                      <p>{cartItems[e.id].size}</p>
                      <p>₹{e.new_price}</p>
                      <div className="cartitems-quantity-container">
                        <button 
                          className="cartitems-quantity-btn btn-bg" 
                          onClick={() => removeFromCart(e.id)}
                        >
                          -
                        </button>
                        <span className="cartitems-quantity d-flex align-items-center justify-content-center">{cartItems[e.id].quantity}</span>
                        <button 
                          className="cartitems-quantity-btn btn-bg" 
                          onClick={() => addToCart(e.id, cartItems[e.id].size)}
                        >
                          +
                        </button>
                      </div>
                      <p>${e.new_price * cartItems[e.id].quantity}</p>
                      <img 
                        src={assets.cart_cross_icon} 
                        className="cartitems-remove-icon" 
                        onClick={() => { removeFromCart(e.id) }} 
                        alt="" 
                      />
                    </div>
                    <hr />
                  </div>
                )
              }
              return null;
            })}
            <div className="cart-bottom mb-5">
              <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                  <div className="cart-total-details">
                    <p className="no-wrap">Subtotal</p>
                    <p className="text-danger fw-bold">₹{getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p className="no-wrap">Delivery Fee</p>
                    <p className="text-danger fw-bold">Free</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <b className="no-wrap">Total</b>
                    <b className="text-danger">₹{getTotalCartAmount()}</b>
                  </div>
                </div>
                <div className="button">
                  <button onClick={() => navigate('/order')} className="btn-box p-2 px-3 text-white">PROCEED TO CHECKOUT</button>
                </div>
              </div>
              <div className="cart-promocode">
                <div>
                  <p>If you have a promo code, Enter it here</p>
                  <div className="cart-promocode-input">
                    <input type="text" placeholder="promo code" />
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;

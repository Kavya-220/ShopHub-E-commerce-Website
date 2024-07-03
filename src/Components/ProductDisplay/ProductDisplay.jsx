import React, { useContext, useState } from 'react';
import assets from '../../assets/assets';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="productdisplay d-flex">
                        <div className="productdisplay-left d-flex">
                            <div className="productdisplay-img-list d-flex flex-column">
                                <img src={product.image} alt="" />
                                <img src={product.image} alt="" />
                                <img src={product.image} alt="" />
                                <img src={product.image} alt="" />
                            </div>
                            <div className="productdisplay-img">
                                <img className='productdisplay-main-img' src={product.image} alt="" />
                            </div>
                        </div>
                        <div className="productdisplay-right d-flex flex-column">
                            <h1>{product.name}</h1>
                            <div className="productdisplay-right-star d-flex align-items-center">
                                <img src={assets.star_icon} alt="" />                            
                                <img src={assets.star_icon} alt="" />                            
                                <img src={assets.star_icon} alt="" />                            
                                <img src={assets.star_icon} alt="" />                            
                                <img src={assets.star_dull_icon} alt="" />
                                <span>(284)</span>                           
                            </div>
                            <div className="productdisplay-right-prices d-flex">
                                <div className="productdisplay-right-price-old">
                                ₹{product.old_price}
                                </div> 
                                <div className="productdisplay-right-price-new">
                                ₹{product.new_price}
                                </div>
                            </div>
                            <div className="productdisplay-right-desc">
                                Introducing our versatile Classic Cotton T-Shirt Collection for men, women, and kids. Crafted from premium 100% cotton, these tees offer unbeatable comfort and durability, making them perfect for everyday wear. For men, enjoy a timeless crew neckline and a comfortable fit, ideal for casual outings or layering. Women can elevate their look with a flattering silhouette that pairs effortlessly with jeans or skirts. Kids will love the lightweight, breathable fabric that keeps them comfortable during playtime. 
                                Available in a variety of sizes and colors, our Classic Cotton T-Shirts ensure style and comfort for the whole family, every day.
                            </div>
                            <div className="productdisplay-right-size">
                                <h1 className='mt-2'>Select Size</h1>
                                <div className="productdisplay-right-sizes d-flex my-4">
                                    {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                        <div
                                            key={size}
                                            className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                            onClick={() => handleSizeSelect(size)}>
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="quantity-selector d-flex align-items-center my-3">
                                <button className="quantity-btn btn-box" onClick={handleDecrement}>-</button>
                                <span className="quantity fw-bold">{quantity}</span>
                                <button className="quantity-btn btn-box" onClick={handleIncrement}>+</button>
                            </div>
                            <button onClick={() => {
                                console.log(`Adding Product ID: ${product.id}, Size: ${selectedSize}, Quantity: ${quantity}`);
                                addToCart(product.id, selectedSize, quantity);
                            }} className='btn-box py-3 px-4 text-white my-3'>ADD TO CART</button>
                            <p className='productdisplay-right-category mt-1'><span className='fw-bold'>Category:</span> Men, T-shirt, Jacket</p>
                            <p className='productdisplay-right-category'><span className='fw-bold'>Tags:</span> Modern, Latest</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;

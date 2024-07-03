import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Items/Item';
import DropDownMenu from '../Components/DropDownMenu/DropDownMenu'; // Ensure this path is correct

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [selectedSection, setSelectedSection] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [visibleProducts, setVisibleProducts] = useState({});

  useEffect(() => {
    // Initialize visibleProducts state for the current category if not already set
    setVisibleProducts(prevState => ({
      ...prevState,
      [props.category]: prevState[props.category] || 12
    }));
  }, [props.category]);

  const handleSelectSection = (section) => {
    setSelectedSection(section);
    setVisibleProducts(prevState => ({
      ...prevState,
      [props.category]: 12 // Reset visible products when section changes
    }));
  };

  const handleSelectPriceRange = (range) => {
    setPriceRange(range);
    setVisibleProducts(prevState => ({
      ...prevState,
      [props.category]: 12 // Reset visible products when price range changes
    }));
  };

  // Function to filter products
  const filterProducts = (products) => {
    return products.filter((item) => {
      const matchesCategory = props.category === 'all' || item.category === props.category;
      const matchesSection = selectedSection ? item.section === selectedSection : true;
      const matchesPrice = (priceRange.min === '' || item.new_price >= priceRange.min) &&
                           (priceRange.max === '' || item.new_price <= priceRange.max);
      return matchesCategory && matchesSection && matchesPrice;
    });
  };

  const filteredProducts = filterProducts(all_product);
  const currentVisibleProducts = visibleProducts[props.category] || 12;
  const displayedProducts = filteredProducts.slice(0, currentVisibleProducts);

  const handleExploreMore = () => {
    setVisibleProducts(prevState => ({
      ...prevState,
      [props.category]: prevState[props.category] + 12
    }));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="shop-category">
            <img src={props.banner} alt="Banner" className="img-fluid shopcategory-banner mt-5" />
            <div className="shopcategory-indexSort d-flex justify-content-between align-items-center">
              <p>
                <span className='fw-bold'>Showing {displayedProducts.length} </span> out of {filteredProducts.length} products
              </p>
              <div className="shopcategory-sort p-2">
                <DropDownMenu
                  category={props.category}
                  onSelectSection={handleSelectSection}
                  onSelectPriceRange={handleSelectPriceRange}
                />
              </div>
            </div>
            <div className="shopcategory-products">
              {displayedProducts.map((item, i) => (
                <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
              ))}
            </div>
            {currentVisibleProducts < filteredProducts.length && (
              <div className="shopcategory-loadmore d-flex align-items-center justify-content-center">
                <button className='btn-bg p-3 px-4 text-white' onClick={handleExploreMore}>Explore More</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;

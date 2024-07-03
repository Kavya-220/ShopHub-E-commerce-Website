import React from 'react';
import { useLocation } from 'react-router-dom';
import all_product from '../assets/all_product'; // Adjust this path accordingly
import Item from '../Components/Items/Item';
import './CSS/SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  // Ensure query is not null or undefined before calling toLowerCase
  const lowerCaseQuery = query ? query.toLowerCase() : '';

  const filteredProducts = all_product.filter(product => {
    const productName = product.name ? product.name.toLowerCase() : '';
    const productCategory = product.category ? product.category.toLowerCase() : '';

    // Check if the query matches the category exactly or is part of the product name
    return productCategory === lowerCaseQuery || productName.includes(lowerCaseQuery);
  });

  return (
    <div className="search-results pt-2 d-flex flex-column align-items-center justify-content-center mb-5 mt-3">
      <h2>Search Results for "{query}"</h2>
      <div className="product-grid mt-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Item
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;

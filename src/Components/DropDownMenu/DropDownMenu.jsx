import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext'; 
import './DropDownMenu.css'

const DropDownMenu = ({ category, onSelectSection, onSelectPriceRange }) => {
    const { all_product } = useContext(ShopContext);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    // Extracting unique sections from all_product based on the selected category
    const sections = [...new Set(all_product
        .filter(product => product.category === category)
        .map(product => product.section))];

    const handlePriceRangeChange = () => {
        onSelectPriceRange({ min: minPrice, max: maxPrice });
    };

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle btn-bg" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Filters
            </button>
            <ul className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">
                <li className="mb-2">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <a className="dropdown-item" href="#" onClick={() => onSelectSection(section)}>
                                {section}
                            </a>
                        </div>
                    ))}
                </li>
                <li className="mb-2">
                    <label>Price Range:</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            placeholder="Min"
                            className="form-control me-2"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Max"
                            className="form-control"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary mt-2 btn-box" onClick={handlePriceRangeChange}>
                        Apply
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default DropDownMenu;

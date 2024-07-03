import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { assets } from '../../assets/assets';
import { ShopContext } from '../../Context/ShopContext';

const NavBar = ({ setShowLogin }) => {
const { getTotalCartItems } = useContext(ShopContext);
const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<span className="navbar-brand" href="#">
<img src={assets.logo} alt="Logo" width="60" height="60" className="" />
<span className='fw-bold title-color pointer'>ShopHub</span>
</span>
<button className="navbar-toggler icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
<ul className="navbar-nav mx-auto">
<li className="nav-item ms-4 me-4">
<NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Shop</NavLink>
</li>
<li className="nav-item ms-4 me-4">
<NavLink to="/mens" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Men</NavLink>
</li>
<li className="nav-item ms-4 me-4">
<NavLink to="/womens" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Women</NavLink>
</li>
<li className="nav-item ms-4 me-4">
<NavLink to="/kids" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Kids</NavLink>
</li>
</ul>
</div>
<div className=" top-boxes d-flex align-items-center justify-content-between ms-auto">
<div className="d-flex align-items-center justify-content-end ">
<form className="searchBox d-flex align-items-start justify-content-start search-form" onSubmit={handleSearch}>
<input className="searchInput form-control"type="text" value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search"/>
<button className="btn searchButton me-3" type="submit" >
<img src={assets.search} height={25} width={25} alt="Search" />
</button>
</form>
</div>
<div className='d-flex align-items-center cart ms-auto'>
<Link to='/cart' className="nav-link">
<div className="cart-items">
<img src={assets.cart} width={25} height={20} alt="Cart" className='me-3' />
<div className="nav-cart-count text-white d-flex align-items-center justify-content-center">{getTotalCartItems()}</div>
</div>
</Link>
<Link to='/login' className="nav-link ms-2 me-5">
<img src={assets.login} alt="Login" onClick={() => setShowLogin(true)} width={25} />
</Link>
</div>
</div>
</div>
</nav>
);
}

export default NavBar;

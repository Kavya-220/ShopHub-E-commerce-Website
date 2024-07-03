import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import assets from './assets/assets';
import { PlaceOrder } from './Pages/PlaceOrder';
import SearchResults from './Pages/SearchResults';
import LatestCollection from './Pages/LatestCollection';
import NewOffers from './Pages/NewOffers';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ?? <LoginSignUp setShowLogin={setShowLogin} />}
      <BrowserRouter>
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={assets.banner_mens} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={assets.banner_women} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={assets.banner_kids} category="kid" />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp setShowLogin={setShowLogin} />} />
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/search' element={<SearchResults/>}/>
          <Route path='/latest' element={<LatestCollection/>}/>
          <Route path='/offer' element={<NewOffers/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

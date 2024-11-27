import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Boutique from './components/Boutique/Boutique';
import Panier from './components/Panier/Panier';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Boutique addToCart={setCartItems} />}
        />
        <Route
          path="/panier"
          element={<Panier cartItems={cartItems} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
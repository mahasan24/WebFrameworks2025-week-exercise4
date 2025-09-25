import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetailsView />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </div>
  );
};

export default App;

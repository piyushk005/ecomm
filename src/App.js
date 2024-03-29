import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home"
import About from "./About";
import Products from "./Product";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import { Cart } from "./Cart";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} /> 
    <Route path="/products" element={<Products />} /> 
    <Route path="/contact" element={<Contact />} /> 
    <Route path="/singleproduct/:id" element={<SingleProduct />} /> 
    <Route path="/Cart" element={<Cart />} /> 
    </Routes>
    </BrowserRouter>
  )
};

export default App;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import NavBar2 from './Navbar2';

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');

  useEffect(() => {
    // Fetch products for the selected category from backend
    axios.get(`https://uniswap-backend-gj25.onrender.com/api/products?category=${category}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [category]);

  return (
    <>
      <NavBar2 />
      <div className="Products">
        <h1>Products in {category}</h1>
        <div className="product-list">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div key={index} className="product">
                <img src={product.photos[0]} alt={product.adTitle} />
                <h2>{product.adTitle}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;

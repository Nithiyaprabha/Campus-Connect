import React, { useState, useEffect } from 'react';
import NavBar2 from './Navbar2';
import { useLocation } from 'react-router-dom';
import './Viewproducts.css'; // Add a CSS file for styling the slideshow

const ViewProductsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userId');

  const [products, setProducts] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (!userId) return; // Ensure userId is present before making the API call

    fetch(`https://uniswap-backend-gj25.onrender.com/api/products3/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        // Handle error, e.g., redirect to an error page
      });
  }, [userId]);

  const handleEditProduct = (productId) => {
    // Handle edit product action
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openSlideshow = (product) => {
    setSelectedProduct(product);
    setCurrentSlideIndex(0); // Reset to the first slide
  };

  const closeSlideshow = () => {
    setSelectedProduct(null);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? selectedProduct.photos.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === selectedProduct.photos.length - 1 ? 0 : prevIndex + 1));
  };

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <>
      <NavBar2 />
      <div className="view-products-container">
        <h1>View Products</h1>
        {Object.keys(groupedProducts).length === 0 ? (
          <p>No products found</p>
        ) : (
          Object.keys(groupedProducts).map(category => (
            <div key={category} className="product-category">
              <h2>{category}</h2>
              <ul className="product-list">
                {groupedProducts[category].map(product => (
                  <li key={product._id} className="product-item">
                    <div>
                      <h3>{product.adTitle}</h3>
                      <img 
                        src={product.photos[0]} 
                        alt={`Product ${product.adTitle}`} 
                        className="product-thumbnail"
                      />
                      <p>Price: ${product.price}</p>
                      <p>Description: {product.description}</p>
                      <button onClick={() => handleEditProduct(product._id)}>Edit</button>
                      <button onClick={() => openSlideshow(product)}>View Photos</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}

        {selectedProduct && (
          <div className="slideshow">
            <span className="close" onClick={closeSlideshow}>&times;</span>
            <div className="slides">
              {selectedProduct.photos.map((photo, index) => (
                <div
                  className="slide"
                  key={index}
                  style={{ display: index === currentSlideIndex ? 'block' : 'none' }}
                >
                  <img src={photo} alt={`Product ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewProductsPage;

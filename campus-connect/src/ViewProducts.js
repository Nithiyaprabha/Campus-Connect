import React, { useState, useEffect } from 'react';
import NavBar2 from './Navbar2';
import { useLocation } from 'react-router-dom';
import './Viewproducts.css';

const ViewProductsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userId');

  const [products, setProducts] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    adTitle: '',
    description: '',
    price: '',
    category: '',
  });

  const [shouldReload, setShouldReload] = useState(false); // State to track reload

  useEffect(() => {
    if (!userId) return;

    fetchProducts();
  }, [userId, shouldReload]); // Adding shouldReload as a dependency

  const fetchProducts = () => {
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
      });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      adTitle: product.adTitle,
      description: product.description,
      price: product.price,
      category: product.category,
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://uniswap-backend-gj25.onrender.com/api/editproduct/${editingProduct._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const updatedProduct = await response.json();
      setProducts(prevProducts => prevProducts.map(product => (product._id === updatedProduct._id ? updatedProduct : product)));
      setEditingProduct(null);
      setShouldReload(!shouldReload); // Toggle shouldReload to trigger reload
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`https://uniswap-backend-gj25.onrender.com/api/deleteproduct/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openSlideshow = (product) => {
    setSelectedProduct(product);
    setCurrentSlideIndex(0);
  };

  const closeSlideshow = () => {
    setSelectedProduct(null);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(prevIndex => (prevIndex === 0 ? selectedProduct.photos.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex(prevIndex => (prevIndex === selectedProduct.photos.length - 1 ? 0 : prevIndex + 1));
  };

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
                      <button onClick={() => handleEditProduct(product)}>Edit</button>
                      <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
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

        {editingProduct && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="modal-close" onClick={() => setEditingProduct(null)}>&times;</span>
              <div className="edit-product-form">
                <h2>Edit Product</h2>
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <label>Title:</label>
                    <input type="text" name="adTitle" value={formData.adTitle} onChange={handleFormChange} />
                  </div>
                  <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleFormChange}></textarea>
                  </div>
                  <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleFormChange} />
                  </div>
                  <div>
                    <label>Category:</label>
                    <input type="text" name="category" value={formData.category} onChange={handleFormChange} />
                  </div>
                  <button type="submit">Save Changes</button>
                  <button type="button" onClick={() => setEditingProduct(null)}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewProductsPage;






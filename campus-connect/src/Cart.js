import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import './cart.css';
import Navbar2 from './Navbar2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userId');

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        if (!userId) return;

        const response = await fetch(`https://uniswap-backend-gj25.onrender.com/api/cart?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cart products');
        }
        const cartData = await response.json();

        const products = await Promise.all(cartData.map(async (cartItem) => {
          try {
            const productResponse = await fetch(`https://uniswap-backend-gj25.onrender.com/api/products2?productId=${cartItem._id}`);
            if (!productResponse.ok) {
              throw new Error('Failed to fetch product');
            }
            return productResponse.json();
          } catch (error) {
            console.error(`Error fetching product with ID ${cartItem._id}:`, error);
            return null;
          }
        }));

        setCartProducts(products.filter(product => product !== null));
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    fetchCartProducts();
  }, [userId]);

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`https://uniswap-backend-gj25.onrender.com/api/removecart/${userId}/${productId}`, { method: 'DELETE' });
      if (!response.ok) {
        toast.error("Failed to remove product from cart");
      } else {
        toast.success("Product removed successfully!");
        setCartProducts(cartProducts.filter(product => product._id !== productId));
      }
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const checkoutProduct = async (productId) => {
    try {
      const response = await fetch(`https://uniswap-backend-gj25.onrender.com/api/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productId }),
      });

      if (!response.ok) {
        throw new Error('Failed to proceed to checkout');
      }

      toast.success('Product checkout successful!');
      setCartProducts(cartProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error during checkout:', error);
      toast.error(error.message);
    }
  };

  const checkoutAll = async () => {
    try {
      const response = await fetch(`https://uniswap-backend-gj25.onrender.com/api/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to proceed to checkout');
      }

      toast.success('Checkout successful!');
      setCartProducts([]);
    } catch (error) {
      console.error('Error during checkout:', error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Navbar2 />
      <ToastContainer autoClose={2000} />
      <div>
        <h1>Cart</h1>
        {cartProducts.length === 0 ? (
          <div className="empty-cart-message">
            <h2>Your cart is empty</h2>
            <p>Add some products to your cart now!</p>
          </div>
        ) : (
          <div className="cart-container">
            {cartProducts.map(product => (
              <div key={product._id} className="cart-item">
                <img src={product.photos[0]} alt={product.productName} />
                <div className="cart-details">
                  <h3>{product.productName}</h3>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: ${product.price}</p>
                  <p>Description: {product.description}</p>
                  <div className="buttons">
                    <button onClick={() => removeFromCart(product._id)} className='remove-btn'><FaTrash className="remove-icon" /> Remove</button>
                    <button onClick={() => checkoutProduct(product._id)} className='checkout-btn'>Checkout</button>
                  </div>
                </div>
              </div>
            ))}
            <button className='checkout-btn' onClick={checkoutAll}>Proceed to Checkout All</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;

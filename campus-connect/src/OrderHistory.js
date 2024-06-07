import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar2 from './Navbar2';

// Custom hook to get query parameters
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const query = useQuery();
  const userId = query.get('userId');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`https://uniswap-backend-gj25.onrender.com/api/getbuyerorders?userId=${userId}`);
        const data = await response.json();
        
        // Sort orders from newest to oldest based on orderDate
        const sortedOrders = data.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
        setOrders(sortedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  return (
    <>
      <NavBar2 />
      <style>{`
        .order-history-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .order-history-title {
          width: 100%;
          text-align: center;
          font-size: 2.5rem;
          font-family: 'Alegreya', serif;
          font-weight: bold;
          color: #136736;
          margin-top: 20px;
          margin-bottom: 40px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .order {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
          width: 30%; /* Adjust as needed */
          margin-bottom: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .order:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .products {
          display: flex;
          flex-direction: column;
        }

        .product {
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 10px;
          width: calc(100% - 20px); /* Adjust as needed */
          border-radius: 5px;
          padding: 10px;
        }

        .product:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .product h3 {
          margin-top: 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }

        .product p {
          margin: 5px 0;
          font-size: 1rem;
          color: #555;
        }

        .product img {
          max-width: 100px;
          border-radius: 5px;
          margin-top: 10px;
        }

        .no-orders {
          text-align: center;
          font-size: 1.2rem;
          color: #555;
          margin-top: 40px;
          width: 100%;
        }
      `}</style>
      <div className="order-history-container">
        <h1 className="order-history-title">Order History</h1>
        {orders.length === 0 ? (
          <p className="no-orders">No orders found</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="order">
              <div className="products">
                {order.products.map((product) => (
                  <div key={product.productId} className="product">
                    <h3>{product.adTitle}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                    <img src={product.imageUrl} alt={product.adTitle} />
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default OrderHistory;

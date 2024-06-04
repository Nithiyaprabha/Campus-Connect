// import React, { useState, useEffect } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import NavBar2 from './Navbar2';

// const Home = () => {
//   const [userId, setUserId] = useState('');
//   const [message, setMessage] = useState('Welcome to the Home Page!');
//   const [searchParams] = useSearchParams();
//   const location = useLocation();

//   useEffect(() => {
//     const userIdFromParams = searchParams.get('userId');
//     if (userIdFromParams) {
//       // Update local storage
//       localStorage.setItem('userId', userIdFromParams);
//       // Update state
//       setUserId(userIdFromParams);
//     } else {
//       // Get userId from local storage
//       const storedUserId = localStorage.getItem('userId');
//       if (storedUserId) {
//         // Update state with stored userId
//         setUserId(storedUserId);
//       }
//     }
//   }, [searchParams]);

//   return (
//     <>
//    <NavBar2/>
//     <div className="Home">
//       <h1>{message}</h1>
//       {userId && <p>Your user ID is: {userId}</p>}
//     </div>
//     </>
//   );
// };

// export default Home;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import NavBar2 from './Navbar2';

// const Home = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch categories with products from the backend
//     axios.get(`https://uniswap-backend-gj25.onrender.com/api/categories-with-products`)
//       .then(response => {
//         setCategories(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching categories with products:', error);
//       });
//   }, []);

//   return (
//     <>
//       <NavBar2 />
//       <div className="Home">
//         <h1>Categories</h1>
//         <div className="categories">
//           {categories.map((category, index) => (
//             <div key={index} className="category">
//               <Link to={`/products?category=${category.name}`}>
//                 <img src={category.imageUrl} alt={category.name} />
//                 <h2>{category.name}</h2>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import './Categories.css';
import NavBar2 from './Navbar2';

const categories = [
  { id: 1, name: 'Beverages', image: 'image1.jpg' },
  { id: 2, name: 'Category 2', image: 'image2.jpg' },
  { id: 3, name: 'Category 3', image: 'image3.jpg' },
  { id: 4, name: 'Category 4', image: 'image4.jpg' },
  { id: 5, name: 'Category 5', image: 'image5.jpg' },
  { id: 6, name: 'Category 6', image: 'image6.jpg' },
];

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the query parameters from the URL
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userId');

  const handleCategoryClick = (name) => {
    navigate(`/products?category=${name}&userId=${userId}`);
  };

  return (
    <>
      <NavBar2 />
      <div className="categories-container">
        {categories.map(category => (
          <div key={category.id} className="category-box" onClick={() => handleCategoryClick(category.name)}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;



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



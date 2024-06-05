// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// // import './Categories.css';
// import NavBar2 from './Navbar2';

// const categories = [
//   { id: 1, name: 'Beverages', image: 'image1.jpg' },
//   { id: 2, name: 'Category 2', image: 'image2.jpg' },
//   { id: 3, name: 'Category 3', image: 'image3.jpg' },
//   { id: 4, name: 'Category 4', image: 'image4.jpg' },
//   { id: 5, name: 'Category 5', image: 'image5.jpg' },
//   { id: 6, name: 'Category 6', image: 'image6.jpg' },
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Retrieve the query parameters from the URL
//   const searchParams = new URLSearchParams(location.search);
//   const userId = searchParams.get('userId');

//   const handleCategoryClick = (name) => {
//     navigate(`/products?category=${name}&userId=${userId}`);
//   };

//   return (
//     <>
//       <NavBar2 />
//       <div className="categories-container">
//         {categories.map(category => (
//           <div key={category.id} className="category-box" onClick={() => handleCategoryClick(category.name)}>
//             <img src={category.image} alt={category.name} />
//             <h3>{category.name}</h3>
//           </div>
//         ))}
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
  { id: 1, name: 'Beverages', image: 'https://eu-images.contentstack.com/v3/assets/blta023acee29658dfc/blta9f158c45627aa62/651dbb742365a678d7ec7f18/AdobeStock_279692163_Editorial_Use_Only-Beverage-FTR-new.jpg?disable=upscale&width=1200&height=630&fit=crop' },
  { id: 2, name: 'Books', image: 'https://miro.medium.com/v2/resize:fit:1200/1*S81O15rjKfG-BFdnNC6-GQ.jpeg' },
  { id: 3, name: 'Stationaries', image: '' },
  { id: 4, name: 'IOT Kits', image: 'image4.jpg' },
  { id: 5, name: 'Electronic Gadgets', image: 'image5.jpg' },
  { id: 6, name: 'Snacks & Branded Foods', image: 'image6.jpg' },
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
      <style>
        {`
          .categories-container {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 20px;
            padding: 20px;
          }
          .category-box {
            flex: 0 0 auto;
            width: 150px;
            text-align: center;
            cursor: pointer;
          }
          .category-box img {
            width: 100%;
            height: auto;
          }
        `}
      </style>
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

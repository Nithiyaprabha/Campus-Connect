
// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import NavBar2 from './Navbar2';

// const categories = [
//   { id: 1, name: 'Beverages', image: 'https://eu-images.contentstack.com/v3/assets/blta023acee29658dfc/blta9f158c45627aa62/651dbb742365a678d7ec7f18/AdobeStock_279692163_Editorial_Use_Only-Beverage-FTR-new.jpg?disable=upscale&width=1200&height=630&fit=crop' },
//   { id: 2, name: 'Books', image: 'https://miro.medium.com/v2/resize:fit:1200/1*S81O15rjKfG-BFdnNC6-GQ.jpeg' },
//   { id: 3, name: 'Stationaries', image: 'https://media.istockphoto.com/id/485725200/photo/school-and-office-accessories-on-wooden-background.jpg?s=612x612&w=0&k=20&c=PWgiIA-7_QDC_PXnEhwZqDLDDzrNMIxxJjBeD4h4oLM=' },
//   { id: 4, name: 'IOT Kits', image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/347979126/TZ/JW/NV/198942079/iot-starter-kit-for-getting-started-with-iot-500x500.png' },
//   { id: 5, name: 'Electronic Gadgets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TwIC2ed15bmoLfTsFPLmKu5bXYSMzjSFhQ&s' },
//   { id: 6, name: 'Snacks & Branded Foods', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUU0RJFFZHWU9JCiSdfaFYriFErxQvpWHSfA&s' },
//   { id: 7, name: 'Sports Equipment', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XiBKa4r9iA1v0gYGRUGcP2RCQYhVe32cFg&s'},
//   { id: 8, name: 'Music instruments', image: 'https://media.istockphoto.com/id/894058154/photo/musical-instruments.jpg?s=612x612&w=0&k=20&c=uB0TFyqeY1wu1BPyH2EB7NMoOCaSb86pk7YNQ5QVCGQ='},
//   { id: 9, name: 'Fruits & Vegetables', image: 'https://media.istockphoto.com/id/1409236261/photo/healthy-food-healthy-eating-background-fruit-vegetable-berry-vegetarian-eating-superfood.jpg?s=612x612&w=0&k=20&c=kYZKgwsQbH_Hscl3mPRKkus0h1OPuL0TcXxZcO2Zdj0='},
//   { id:10, name: 'Dairy & Bakery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIEkNeUI8VfwML0Ools5lzizh-TRN711-Hg&s'}
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
//       <style>
//         {`
//           body {
//             margin: 0;
//             padding: 0;
//             font-family: Arial, sans-serif;
//           }
//           .background {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: url('https://images.unsplash.com/photo-1516110833967-0b5716e70b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center fixed;
//             background-size: cover;
//             filter: blur(10px);
//             z-index: -1;
//           }
//           .main-container {
//             position: relative;
//             z-index: -1;
//             width: 100%;
//             height: 100%;
//             padding: 20px;
//             box-sizing: border-box;
//             background: rgba(255, 255, 255, 0.8);
//             overflow: auto;
//           }
//           .categories-container {
//             display: grid;
//             grid-template-columns: repeat(4, 1fr);
//             gap: 20px;
//             padding: 20px;
//             justify-content: center;
//             align-items: center;
//           }
//           .category-box {
//             text-align: center;
//             cursor: pointer;
//             background: rgba(255, 255, 255, 0.7);
//             padding: 10px;
//             border-radius: 10px;
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//           }
//           .category-box:hover {
//             transform: scale(1.05);
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//           }
//           .category-box img {
//             width: 100%;
//             height: auto;
//             border-radius: 5px;
//           }
//         `}
//       </style>
//       <div className="background"></div>
//       <div className="main-container">
//         <div className="categories-container">
//           {categories.map(category => (
//             <div key={category.id} className="category-box" onClick={() => handleCategoryClick(category.name)}>
//               <img src={category.image} alt={category.name} />
//               <h3>{category.name}</h3>
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
import NavBar2 from './Navbar2';

const categories = [
  { id: 1, name: 'Beverages', image: 'https://eu-images.contentstack.com/v3/assets/blta023acee29658dfc/blta9f158c45627aa62/651dbb742365a678d7ec7f18/AdobeStock_279692163_Editorial_Use_Only-Beverage-FTR-new.jpg?disable=upscale&width=1200&height=630&fit=crop' },
  { id: 2, name: 'Books', image: 'https://miro.medium.com/v2/resize:fit:1200/1*S81O15rjKfG-BFdnNC6-GQ.jpeg' },
  { id: 3, name: 'Stationaries', image: 'https://media.istockphoto.com/id/485725200/photo/school-and-office-accessories-on-wooden-background.jpg?s=612x612&w=0&k=20&c=PWgiIA-7_QDC_PXnEhwZqDLDDzrNMIxxJjBeD4h4oLM=' },
  { id: 4, name: 'IOT Kits', image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/347979126/TZ/JW/NV/198942079/iot-starter-kit-for-getting-started-with-iot-500x500.png' },
  { id: 5, name: 'Electronic Gadgets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TwIC2ed15bmoLfTsFPLmKu5bXYSMzjSFhQ&s' },
  { id: 6, name: 'Snacks & Branded Foods', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUU0RJFFZHWU9JCiSdfaFYriFErxQvpWHSfA&s' },
  { id: 7, name: 'Sports Equipment', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XiBKa4r9iA1v0gYGRUGcP2RCQYhVe32cFg&s' },
  { id: 8, name: 'Music instruments', image: 'https://media.istockphoto.com/id/894058154/photo/musical-instruments.jpg?s=612x612&w=0&k=20&c=uB0TFyqeY1wu1BPyH2EB7NMoOCaSb86pk7YNQ5QVCGQ=' },
  { id: 9, name: 'Fruits & Vegetables', image: 'https://media.istockphoto.com/id/1409236261/photo/healthy-food-healthy-eating-background-fruit-vegetable-berry-vegetarian-eating-superfood.jpg?s=612x612&w=0&k=20&c=kYZKgwsQbH_Hscl3mPRKkus0h1OPuL0TcXxZcO2Zdj0=' },
  { id: 10, name: 'Dairy & Bakery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIEkNeUI8VfwML0Ools5lzizh-TRN711-Hg&s' }
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
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://images.unsplash.com/photo-1516110833967-0b5716e70b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center fixed;
            background-size: cover;
            filter: blur(10px);
            z-index: -1;
          }
          .main-container {
            position: relative;
            z-index: -1;
            width: 100%;
            height: 100%;
            padding: 20px;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.8);
            overflow: auto;
          }
          .categories-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            padding: 30px;
            justify-content: center;
            align-items: center;
          }
          .category-box {
            text-align: center;
            cursor: pointer;
            background: white;
            padding: 10px;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .category-box:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          .category-box img {
            width: 100%;
            height: 220px; /* Set a fixed height */
            object-fit: cover; /* Maintain aspect ratio and cover the area */
            border-radius: 5px;
          }
        `}
      </style>
      <div className="background"></div>
      <div className="main-container">
        <div className="categories-container">
          {categories.map(category => (
            <div key={category.id} className="category-box" onClick={() => handleCategoryClick(category.name)}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

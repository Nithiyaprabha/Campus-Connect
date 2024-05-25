import React from 'react';
import NavBar from './NavBar'; // Corrected import statement
import './Homepage.css'
// import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
      <div className="HomePage">
      {/* <div className="background-image"></div> */}
      <div className="content"></div>
      <h1>Welcome to Campus Connect!</h1>
      <p>Connect with fellow students and explore your campus community.</p>
      {/* <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link> */}
    <NavBar />
      
    </div>
  );
};

export default HomePage;
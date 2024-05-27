import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import NavBar2 from './Navbar2';

const Home = () => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('Welcome to the Home Page!');
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const userIdFromParams = searchParams.get('userId');
    if (userIdFromParams) {
      // Update local storage
      localStorage.setItem('userId', userIdFromParams);
      // Update state
      setUserId(userIdFromParams);
    } else {
      // Get userId from local storage
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        // Update state with stored userId
        setUserId(storedUserId);
      }
    }
  }, [searchParams]);

  return (
    <>
   <NavBar2/>
    <div className="Home">
      <h1>{message}</h1>
      {userId && <p>Your user ID is: {userId}</p>}
    </div>
    </>
  );
};

export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavBar2() {
//   return (
//     <nav className="NavBar">
//       <ul className="NavList">
//       <li><Link to="/home">Home</Link></li>
//       <li><Link to="/addproduct">Add Product</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar2;

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

function NavBar2() {
  const [userId, setUserId] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

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
    <nav className="NavBar">
      <ul className="NavList">
        <li>
          <Link to={`/home?userId=${userId}`}>Home</Link>
        </li>
        <li>
          <Link to={`/addproduct?userId=${userId}`}>Add Product</Link>
        </li>
        <li>
          <Link to={`/addproduct?userId=${userId}`}>Cart</Link>
        </li>
        <li>
          <button
            className="btn btn-link nav-link"
            onClick={() => {
              // Clear userId from local storage and state on logout
              localStorage.removeItem('userId');
              setUserId('');
              // Navigate to login or home page
              navigate('/');
            }}
          >
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar2;


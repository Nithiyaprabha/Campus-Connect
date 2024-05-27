// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/register', formData);
//       setMessage('Registration successful!');
//     } catch (err) {
//       setMessage(err.response.data.error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//       {message && <p>{message}</p>}
//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css'
// import { Link } from 'react-router-dom';


// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`https://uniswap-backend-4hjg.onrender.com/register`,formData);
//       setMessage('Registration successful!');
//     } catch (err) {
//       setMessage(err.response.data.error);
//     }
//   };

//   return (
//     <div className='Register'> 
//         <p className="welcome">Welcome to Campus Connect!<br/>Building bridges, forging bonds</p>
//         <div className="overlay-container">
//   <div className="overlay"></div>
// </div>


//     <div className="form-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//       <p>
//   <span className="white-text">Already have an account?</span>{" "}
//   <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Login</Link>
// </p>
//     </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://uniswap-backend-gj25.onrender.com/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem('adminData', JSON.stringify(user));
        navigate(`/home?userId=${user._id}`);
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className='Register'>
      <p className="welcome">Welcome to Campus Connect!<br />Building bridges, forging bonds</p>
      <div className="overlay-container">
        <div className="overlay"></div>
      </div>
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        {message && <p>{message}</p>}
        <p>
          <span className="white-text">Already have an account?</span>{" "}
          <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;



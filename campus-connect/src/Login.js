// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './App.css'

// const Login = () => {
//   const [formData, setFormData] = useState({
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
//       const response = await axios.post(`https://uniswap-backend-4hjg.onrender.comi/login`);
//       setMessage('Login successful!');
//     } catch (err) {
//       setMessage(err.response.data.error);
//     }
//   };

//   return (
//     <div className='Register'>
//         <p className="welcome">Campus Connect: <br/>Your hub for exchanging books and supplies,<br/> making student life simpler and more sustainable.</p>
//         <div className="overlay-container">
//   <div className="overlay"></div>
// </div>
//     <div className="form-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
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
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//       <p>
//   <span className="white-text"> Not a member yet?</span>{" "}
//   <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Register</Link>
// </p>
//     </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './App.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
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
//       const response = await fetch('https://uniswap-backend-4hjg.onrender.com/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         const { token, user } = await response.json();
//         localStorage.setItem('adminToken', token);
//         localStorage.setItem('adminData', JSON.stringify(user));
//         navigate(`/home?userId=${user._id}`);
//       } else {
//         const errorData = await response.json();
//         setMessage(errorData.error || 'Login failed. Please try again.');
//       }
//     } catch (err) {
//       setMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className='Register'>
//       <p className="welcome">Campus Connect: <br/>Your hub for exchanging books and supplies,<br/> making student life simpler and more sustainable.</p>
//       <div className="overlay-container">
//         <div className="overlay"></div>
//       </div>
//       <div className="form-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//         {message && <p>{message}</p>}
//         <p>
//           <span className="white-text">Not a member yet?</span>{" "}
//           <Link to="/register" style={{ color: 'black', textDecoration: 'none' }}>Register</Link>
//         </p>
//         <p>
//           <Link to="/forgot-password" style={{ color: 'black', textDecoration: 'none' }}>Forgot Password?</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React from 'react';
// import styled from 'styled-components';
// import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
// import background from './photo-1607237138185-eedd9c632b0b.avif';

// const Background = styled.div`
//   background-image: url(${background});
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   overflow: hidden;
//   &:before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.5);
//   }
// `;

// const LoginContainer = styled.div`
//   background: rgba(255, 255, 255, 0.9);
//   padding: 40px;
//   width: 400px;
//   border-radius: 15px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
//   z-index: 1;
//   backdrop-filter: blur(10px);
//   animation: fadeIn 1s ease-in-out;
  
//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(-20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// const InputContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   margin: 10px 0;
//   background: #f1f1f1;
//   border-radius: 5px;
//   padding: 10px;
//   transition: border-color 0.3s ease;

//   &:focus-within {
//     border: 1px solid #007bff;
//   }
// `;

// const Icon = styled.div`
//   margin-right: 10px;
//   color: #555;
// `;

// const Input = styled.input`
//   width: 100%;
//   border: none;
//   background: none;
//   outline: none;
//   font-size: 16px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 15px;
//   margin-top: 20px;
//   background: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 18px;
//   cursor: pointer;
//   transition: background 0.3s ease, transform 0.3s ease;

//   &:hover {
//     background: #0056b3;
//     transform: scale(1.05);
//   }
// `;

// const Title = styled.h2`
//   margin-bottom: 30px;
//   color: #333;
//   text-align: center;
//   font-family: 'Arial', sans-serif;
//   font-weight: bold;
//   font-size: 24px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const LinksContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;
// `;

// const Link = styled.a`
//   color: #007bff;
//   text-decoration: none;
//   font-size: 14px;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Login = () => {
//   return (
//     <Background>
//       <LoginContainer>
//         <Title><Icon><FaSignInAlt /></Icon>Welcome to Login</Title>
//         <InputContainer>
//           <Icon><FaUser /></Icon>
//           <Input type="text" placeholder="Username" />
//         </InputContainer>
//         <InputContainer>
//           <Icon><FaLock /></Icon>
//           <Input type="password" placeholder="Password" />
//         </InputContainer>
//         <Button>Login</Button>
//         <LinksContainer>
//           <Link href="/forgot-password">Forgot Password?</Link>
//           <Link href="/register">Create an Account</Link>
//         </LinksContainer>
//       </LoginContainer>
//     </Background>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import background from './photo-1607237138185-eedd9c632b0b.avif';
import './App.css';
import NavBar from './NavBar';

const Background = styled.div`
  background-image: url(${background});
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const LoginContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  width: 400px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 1;
  backdrop-filter: blur(10px);
  animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;
  background: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  transition: border-color 0.3s ease;

  &:focus-within {
    border: 1px solid #007bff;
  }
`;

const Icon = styled.div`
  margin-right: 10px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  margin-bottom: 30px;
  color: #333;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://uniswap-backend-4hjg.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const { token, user } = await response.json();
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminData', JSON.stringify(user));
        navigate(`/home?userId=${user._id}`);
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center', // Centering the form horizontally
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(https://digicartofficial.shop/wp-content/uploads/2024/05/digital-marketing-commerce-online-sale-600nw-2269149669.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'left',
    },
    formContainer: {
      maxWidth: '600px', // Increase the maximum width of the form
      width: '80%', // Adjusting the width of the form
      padding: '40px', // Increase padding for better spacing
      border: '1px solid #ccc',
      borderRadius: '10px', // Increase border radius for rounded corners
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: 'rgba(0,0,0, 0.7)', // Adding transparency to white background
      textAlign: 'center',
      color:'white'
    },
    formInput: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px'
    },
    formButton: {
      width: '100%',
      padding: '10px',
      margin: '20px 0',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer'
    },
    link: {
      color: '#007bff',
      textDecoration: 'none'
    },
    message: {
      color: 'red',
      marginTop: '10px'
    }
  };

  return (
    <Background> 
      <LoginContainer>
        <Title><Icon><FaSignInAlt /></Icon>Welcome to Login</Title>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Icon><FaUser /></Icon>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <Icon><FaLock /></Icon>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputContainer>
          <Button type="submit">Login</Button>
        </form>
        {message && <p>{message}</p>}
        <LinksContainer>
          <StyledLink to="/forgot-password">Forgot Password?</StyledLink>
          <StyledLink to="/register">Create an Account</StyledLink>
        </LinksContainer>
      </LoginContainer>
    </Background>
  );
};

export default Login;
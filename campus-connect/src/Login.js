import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaLock } from 'react-icons/fa';
import background from './new89.png';
import './App.css';

const Background = styled.div`
  background-image: url("https://image.slidesdocs.com/responsive-images/background/line-professional-frame-blue-square-shape-business-powerpoint-background_9c874dd0f4__960_540.jpg");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const LoginContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  width: 800px;
  display: flex;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 1;
  backdrop-filter: blur(9px);
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

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centering vertically */
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  font-size: 24px;
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

const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label`
  margin-left: 10px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px; /* Reduced padding */
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
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

  return (
    <Background>
      <LoginContainer>
        <LeftSide>
          <img src={background} alt="Illustration" />
        </LeftSide>
        <RightSide>
          <Title>Login to Campus Connect</Title>
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
           
            <CheckboxContainer>
              <input type="checkbox" name="remember" id="remember" />
              <CheckboxLabel htmlFor="remember">Remember Me</CheckboxLabel>
            </CheckboxContainer>
            <br></br>
            <Button type="submit">Login</Button>
          </form>
          {message && <p>{message}</p>}
          <LinksContainer>
            <StyledLink to="/forgot-password">Forgot Password?</StyledLink>
            <StyledLink to="/register">Sign Up</StyledLink>
          </LinksContainer>
        </RightSide>
      </LoginContainer>
    </Background>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserPlus, FaUser, FaLock } from 'react-icons/fa';
import background from './photo-1607237138185-eedd9c632b0b.avif';
import './App.css';

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

const RegisterContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  width: 400px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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

const Title = styled.h2`
  margin-bottom: 30px;
  color: #333;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  margin-right: 10px;
  color: #555;
  display: flex;
  align-items: center;
`;

const RegisterNow = styled.span`
  display: flex;
  align-items: center;
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
      const response = await fetch('https://uniswap-backend-4hjg.onrender.com/api/register', {
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
    <Background>
      <RegisterContainer>
        <Title>
          <Icon><FaUserPlus /></Icon>
          <RegisterNow>Register Now</RegisterNow>
        </Title>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Icon><FaUser /></Icon>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputContainer>
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
          <Button type="submit">Register</Button>
        </form>
        {message && <p>{message}</p>}
        <LinksContainer>
          <StyledLink to="/login">Already have an account? Login</StyledLink>
        </LinksContainer>
      </RegisterContainer>
    </Background>
  );
};

export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
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
      const response = await axios.post('/api/login', formData);
      setMessage('Login successful!');
    } catch (err) {
      setMessage(err.response.data.error);
    }
  };

  return (
    <div>
        <p className="welcome">Campus Connect: <br/>Your hub for exchanging books and supplies,<br/> making student life simpler and more sustainable.</p>
        <div className="overlay-container">
  <div className="overlay"></div>
</div>
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p>
  <span className="white-text"> Not a member yet?</span>{" "}
  <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Register</Link>
</p>
    </div>
    </div>
  );
};

export default Login;

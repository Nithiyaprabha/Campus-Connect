import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    resetToken: ''
  });
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokenResponse = await fetch('https://uniswap-backend-gj25.onrender.com/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: formData.email })
      });

      if (tokenResponse.ok) {
        const data = await tokenResponse.json();
        setFormData({ ...formData, resetToken: data.resetToken });

        const resetResponse = await fetch('https://uniswap-backend-gj25.onrender.com/api/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token: data.resetToken, password: formData.password })
        });

        if (resetResponse.ok) {
          setFormData({ email: '', password: '', error: '' });
          setConfirmPassword('');
          setStep(1);
          toast.success('Password has been reset. Please login with your new password.');
        } else {
          throw new Error('Password reset failed');
        }
      }
    } catch (err) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    formContainer: {
      maxWidth: '400px',
      width: '100%',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      textAlign: 'center'
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
      color: 'black',
      textDecoration: 'none'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <ToastContainer autoClose={2000} />
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.formInput}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.formInput}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.formInput}
            required
          />
          <button type="submit" style={styles.formButton}>Reset Password</button>
        </form>
        {message && <p>{message}</p>}
        <p>
          <Link to="/login" style={styles.link}>Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

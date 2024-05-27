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
  const [step, setStep] = useState(1); // 1 for getting reset token, 2 for resetting password
  const [confirmPassword, setConfirmPassword] = useState(''); // Define confirmPassword state

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
        setFormData({ ...formData, resetToken: data.resetToken }); // Set resetToken in formData
        console.log(data.resetToken);  // Log the reset token

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
          setStep(1); // Set step back to 1 after successful password reset
          toast.success('Password has been reset. Please login with your new password.');
        } else {
          throw new Error('Password reset failed');
        }
      }
    } catch (err) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <ToastContainer autoClose={2000} />

        <>
          <h2>Forgot Password</h2>
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
              placeholder="New Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
        </>
      {message && <p>{message}</p>}
      <p>
        <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Back to Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;

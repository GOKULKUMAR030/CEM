import { useState } from 'react';
import '../assets/css/Login.css';
import LandingNav from './LandingNav';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Simple validation
    const errors = {};
    if (!formData.email) {
      errors.email = 'Username is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
  
    // If there are errors, set them and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  
    try {
      // Send POST request to backend for authentication
      const response = await axios.post("http://localhost:8181/api/auth/authenticate", formData);
  
      // If authentication is successful, redirect the user
      console.log('Form submitted:', formData);
      console.log('Response:', response.data);
      // Assuming the backend returns a token upon successful authentication
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', formData.email);
      
  
      if (formData.email.endsWith("@cem.com")) {
        window.location.href = '/AdminHome'; // Change this to the appropriate admin page URL
      } else {
        window.location.href = '/Home'; // Redirect to regular user page
      }
  
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle authentication failure (e.g., display error message)
    }
  };
  

  return (
    <>
     <LandingNav/>
      <div className="login-page">
        <div className="left-container"></div>
        <div className="right-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <p style={{ fontSize: "2vw", fontWeight: "bold" }}>Welcome Back</p>
            <h2>Login</h2>
            <div className="lform-group">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="lform-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <center><button type="submit">Login</button></center>
            <p style={{ textAlign: "center" }}>Looking to get started?
              <Link to="/signup" className='authlink'> Begin here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

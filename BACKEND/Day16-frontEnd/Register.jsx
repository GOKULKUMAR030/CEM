import { useState } from 'react';
import axios from 'axios';
import '../assets/css/Register.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import LandingNav from './LandingNav';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    organizationName: '', // Changed from OrganizationName to organizationName
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

    // Add default role to formData
    const formDataWithRole = {
      ...formData,
      role: 'user'
    };

    // Simple validation
    const errors = {};
    for (const key in formDataWithRole) {
      if (!formDataWithRole[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8181/api/auth/register", formDataWithRole);
      console.log('Form submitted:', formDataWithRole);
      console.log('Response:', response.data);
      window.location.href = "/login"; // Changed from window.location.href("/login")
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <LandingNav/>
      <div className="registration-page">
        <div className="left-container">
         
        </div>
        <div className="right-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <p style={{ fontSize: "2vw", fontWeight: "bold" }}>Registration</p>
            <div className="rform-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="rform-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="rform-group">
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Contact No"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
            </div>
            <div className="rform-group">
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
            <div className="rform-group">
              <input
                type="text"
                id="organizationName"
                name="organizationName" // Changed from OrganizationName to organizationName
                placeholder="Organization Name"
                value={formData.organizationName} // Changed from formData.OrganizationName to formData.organizationName
                onChange={handleChange}
              />
              {errors.organizationName && <span className="error">{errors.organizationName}</span>}
            </div>
            <center><button type="submit">Register</button></center>
            <p style={{textAlign:"center"}}>Already have an account?
              <Link to="/login" className='authlink'> Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

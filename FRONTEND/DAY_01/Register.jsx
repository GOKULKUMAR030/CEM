import { useState } from 'react';
import '../assets/css/Register.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    password: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const errors = {};
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If validation passes, you can submit the form
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item navbar-title">CEM</li>
          <li className="navbar-item navbar-signup"><Link to='/' className='authlink'>Sign In</Link></li>
        </ul>
      </nav>
      <div className="registration-page">
        <div className="left-container">
         
        </div>
        <div className="right-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <p style={{ fontSize: "2vw", fontWeight: "bold" }}>Registration</p>
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
              <input
                type="text"
                id="contactNo"
                name="contactNo"
                placeholder="Contact No"
                value={formData.contactNo}
                onChange={handleChange}
              />
              {errors.contactNo && <span className="error">{errors.contactNo}</span>}
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <span className="error">{errors.city}</span>}
            </div>
            <center><button type="submit">Register</button></center>
          <p style={{textAlign:"center"}}>Already have an account?
         <Link to="/" className='authlink'> Sign In</Link>
        </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

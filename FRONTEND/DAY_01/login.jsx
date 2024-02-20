import { useState } from 'react';
import '../assets/css/Login.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    if (!formData.username) {
      errors.username = 'Username is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
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
        <li className="navbar-item navbar-signup"><Link to='/signup'className='authlink'>Sign Up</Link></li>
      </ul>
    </nav>
    <div className="login-page">
      <div className="left-container">
        
      </div>
      <div className="right-container">
        {/* Form for the login */}
        
        <form className="login-form" onSubmit={handleSubmit}>
        <p style={{fontSize:"2vw", fontWeight:"bold"}}>Welcome Back</p>
          <h2>Login</h2>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
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
        <center> <button type="submit">Login</button></center>
        <p style={{textAlign:"center"}}>Don't have  account?
         <Link to="/signup" className='authlink'> Create One</Link>
        </p>
        </form>
      </div>
    </div></>
  );
};

export default LoginPage;

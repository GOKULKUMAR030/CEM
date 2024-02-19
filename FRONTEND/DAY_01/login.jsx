import { useState } from "react";
import doodle_login from "../assets/images/doodle3.jpg";
import '../assets/css/Login.css'

export default function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      clearError("email");
    } else if (name === "password") {
      setPassword(value);
      clearError("password");
    }
  };

  const clearError = (fieldName) => {
    const updatedErrors = { ...errors };
    delete updatedErrors[fieldName];
    setErrors(updatedErrors);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email) {
      validationErrors.email = "Username is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } 
  };

  return (
    <div className="main">
      <img src={doodle_login} alt="Logo" className="llogo" />
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className="email">
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleInputChange}
              placeholder="Enter Email"
            />
            {errors.password && (
              <p className="error" style={{ 
                top:"0",
                color:"red",
                fontWeight: "600",
                fontSize:"small" }}>
                {errors.email}
              </p>
            )}
          </div>

          <div className="email">
            <label>
              <input
               type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                placeholder="Password"
              />
              {errors.password && (
                <p className="error"
                style={{ 
                    top:"0",
                    color:"red",
                    fontWeight: "600",
                    fontSize:"small" }}>{errors.password}</p>
              )}
            
            </label>
          </div>
          <div>
            <button type="submit">Sign In</button>
          </div>
        </form>
        
         
          <p style={{
              textDecoration: "none",
              color: "#001dbe",
              fontWeight: "bolder",
              marginLeft:"30px"
            }}
          >
           Don't have an account? SignUp
          </p>
        
      </div>
      
    </div>
  );
}

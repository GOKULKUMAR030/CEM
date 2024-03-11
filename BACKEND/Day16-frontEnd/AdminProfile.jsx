import  { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/css/UserProfie.css";
import Footer from '../components/Footer';
import AdminNavbar from '../components/AdminNavbar';

const AdminProfile = () => {
  const [user, setUser] = useState({});
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    organizationName: '',
    
  });
  const [errors, setErrors] = useState({});

  const token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/users/me');
      setUser(response.data);
      setFormData(response.data); // Populate form fields with user data
      console.log(response.data.role);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      axios.put('http://localhost:8181/api/users/me', formData)
        .then(response => {
          setUser(response.data);
          setEditable(false);
          setErrors({});
        })
        .catch(error => {
          console.error("Error updating user data:", error);
          // Handle error, display message to user, etc.
        });
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const errors = {};

    if (!emailPattern.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!phonePattern.test(formData.mobileNumber)) {
        errors.mobileNumber = 'Please enter a valid mobileNumber number';
    }

    if (!formData.name.trim()) {
        errors.name = 'Please enter your name';
    }

    if (!formData.organizationName.trim()) {
        errors.organizationName = 'Please enter your organizationName';
    }

 

    return errors;
};


  return (
    <>
      <AdminNavbar />
      <div id="userProfile-page">
        <div className="user-profile">
          <h2>User Profile</h2>
          <form>
            <div className="profile-form-group">
              <label>Name:</label>
              {editable ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{user.name}</span>
              )}
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="profile-form-group">
              <label>Email:</label>
              {editable ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{user.email}</span>
              )}
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="profile-form-group">
              <label>mobileNumber:</label>
              {editable ? (
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{user.mobileNumber}</span>
              )}
              {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
            </div>
            <div className="profile-form-group">
              <label>organizationName:</label>
              {editable ? (
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{user.organizationName}</span>
              )}
              {errors.organizationName && <span className="error">{errors.organizationName}</span>}
            </div>
            
            <div id="button">
              {editable ? (
                <>
                  <button id="profile-button" type="button" onClick={handleSaveClick}>Save</button>
                  <button  type="button" onClick={() => setEditable(false)}>Cancel</button>
                </>
              ) : (
                <button type="button" onClick={handleEditClick}>Edit</button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminProfile;

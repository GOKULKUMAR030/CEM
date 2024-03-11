import { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/css/Addon.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddOnForm = () => {
  const [formData, setFormData] = useState({
    eventDuration: '',
    planningAndCoordination: '',
    venueDecoration: '',
    audiovisualSetup: '',
    onSiteManagement: '',
    email: ''
  });
const [rpayid , setRpayid] = useState('');
  const [errors, setErrors] = useState({
    eventDuration: '',
    planningAndCoordination: '',
    venueDecoration: '',
    audiovisualSetup: '',
    onSiteManagement: '',
    email: ''
  });

  useEffect(() => {
    const currentUserEmail = localStorage.getItem('email');
    setFormData({
      ...formData,
      email: currentUserEmail
    });
  }, []); // Run once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };
  const handlePayment=async()=>{
    
    var options = {
      key: "rzp_test_YZQIuky03MvCcz",
      key_secret:"v2K56IkjzMIzhGIaZSNRcueJ",
      amount: 12000*100,
      currency:"INR",
      name:"BigBash",
      description:"Payment page",
      handler: function(response){
        setRpayid(response.razorpay_payment_id);
      },
      prefill: {
        // name:formData.name,
        // email:formData.email,
        // contact:formData.mobile
      },
      notes:{
        address:"Razorpay Corporate office"
      },
      theme: {
        color:"#007bff"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
   
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { ...errors };

    // Validate each field
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key] = 'This field is required';
        formValid = false;
      }
    });

    if (!formValid) {
      setErrors(newErrors);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to login page or handle unauthorized access
        return;
      }

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const response = await axios.post('http://localhost:8181/api/pricings', formData, config);
      console.log(response.data);
      // Reset form after submission
      setFormData({
        eventDuration: '',
        planningAndCoordination: '',
        venueDecoration: '',
        audiovisualSetup: '',
        onSiteManagement: '',
        email: ''
      });
      // Redirect to payment page or handle response accordingly
      handlePayment();
    } catch (error) {
      console.error('Error:', error.response.data);
      // Handle error, display error message, etc.
    }
  };

  return (
   <>
      <Navbar />
      <center><h1>AddOn Services</h1></center>
      <div className="addon-form-container" style={{ marginTop: "30px", marginBottom: "40vh" }}>
        <h3 style={{marginBottom:"40px", color:"#007bff"}}>Fill the following form (either<span style={{color:"red"}}>  YES or NO </span>)whether you need the respective feature or not</h3>
        <form onSubmit={handleSubmit}>
          <div className="addon-form-row">
            <label className="addon-form-label">
              Event Duration:
            </label>
            <input type="text" name="eventDuration" value={formData.eventDuration} onChange={handleChange} className="addon-form-input" />
            <br></br>
            {errors.eventDuration && <span className="error">{errors.eventDuration}</span>}
          </div>
          <div className="addon-form-row">
            <label className="addon-form-label">
              Planning & Coordination:
            </label>
            <input type="text" name="planningAndCoordination" value={formData.planningAndCoordination} onChange={handleChange} className="addon-form-input" />
            {errors.planningAndCoordination && <span className="error">{errors.planningAndCoordination}</span>}
          </div>
          <div className="addon-form-row">
            <label className="addon-form-label">
              Venue Decoration:
            </label>
            <input type="text" name="venueDecoration" value={formData.venueDecoration} onChange={handleChange} className="addon-form-input" />
            {errors.venueDecoration && <span className="error">{errors.venueDecoration}</span>}
          </div>
          <div className="addon-form-row">
            <label className="addon-form-label">
              Audiovisual Setup:
            </label>
            <input type="text" name="audiovisualSetup" value={formData.audiovisualSetup} onChange={handleChange} className="addon-form-input" />
            {errors.audiovisualSetup && <span className="error">{errors.audiovisualSetup}</span>}
          </div>
          <div className="addon-form-row">
            <label className="addon-form-label">
              On-site Management:
            </label>
            <input type="text" name="onSiteManagement" value={formData.onSiteManagement} onChange={handleChange} className="addon-form-input" />
{errors.onSiteManagement && <span className="error">{errors.onSiteManagement}</span>}
</div>
<h3 style={{marginBottom:"40px", color:"#007bff"}}>Any messages regarding the event will be sent to this email.</h3>
<div className="addon-form-row">
<label className="addon-form-label">
Email:
</label>
<input type="email" name="email" value={formData.email} onChange={handleChange} className="addon-form-input" disabled />
{errors.email && <span className="error">{errors.email}</span>}
</div>
<center>
<button type="submit" className="addon-form-submit">Submit</button>
</center>
</form>
</div>
<Footer />
</>
);
};

export default AddOnForm;
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    organization: '',
    email: '',
    phoneNumber: '',
    eventDate: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Get email from localStorage and set it as default value for email field
    const emailFromLocalStorage = localStorage.getItem('email');
    const mobileFromLocalStorage = localStorage.getItem('mobile');
    const organizationFromLocalStorage = localStorage.getItem('organization');

    if (emailFromLocalStorage) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: emailFromLocalStorage,
      }));
    }

    if (mobileFromLocalStorage) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        phoneNumber: mobileFromLocalStorage,
      }));
    }

    if (organizationFromLocalStorage) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        organization: organizationFromLocalStorage,
      }));
    }
  }, []); // Empty dependency array to run this effect only once

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
    if (!formData.organization) {
      errors.organization = 'Name is required';
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    }
    if (!formData.eventDate) {
      errors.eventDate = 'Event Date is required';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const token = localStorage.getItem('token');

    // If validation passes, you can proceed with form submission
    try {
      const response = await axios.post('http://localhost:8181/api/enquiries', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        console.log('Form submitted successfully!');
        // Clear form data
        setFormData({
          organization: '',
          email: '',
          phoneNumber: '',
          eventDate: '',
          message: '',
        });
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="enquiry-form-container">
        <div className="Eleft-container"></div>
        <div className="Eright-container">
          <h2>Enquiry Form</h2>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="enquiry-form-group">
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Organization Name"
                value={formData.organization}
                onChange={handleChange}
                disabled
              />
              {errors.organization && <span className="error">{errors.organization}</span>}
            </div>
            <div className="enquiry-form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                disabled // Disable the email field
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="enquiry-form-group">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                disabled
              />
              {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
            <div className="enquiry-form-group">
              <input
                type="date"
                id="eventDate"
                placeholder="EventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
              />
              {errors.eventDate && <span className="error">{errors.eventDate}</span>}
            </div>
            <div className="enquiry-form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <center>
              <button className="contact-button" type="submit">
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EnquiryForm;

import { useState, useEffect } from 'react';
import '../assets/css/BookEvents.css'; // Import CSS file for styling
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
const BookEvents = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    mobile: '',
    city: '',
    venue: '',
    fromDate: '',
    toDate: '',
    attendees: '',
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
        mobile: mobileFromLocalStorage,
      }));
    }

    if (organizationFromLocalStorage) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        organization: organizationFromLocalStorage,
      }));
    }
  }, []);


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const validationErrors = {};

    // Custom validation rules for each field
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.organization) {
      validationErrors.organization = 'Organization name is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } 
    if (!formData.mobile) {
      validationErrors.mobile = 'Mobile number is required';
    } 
    if (!formData.city) {
      validationErrors.city = 'City is required';
    }
    if (!formData.venue) {
      validationErrors.venue = 'Venue is required';
    }
    if (!formData.fromDate) {
      validationErrors.fromDate = 'From date is required';
    }
    if (!formData.toDate) {
      validationErrors.toDate = 'To date is required';
    }
    if (!formData.attendees) {
      validationErrors.attendees = 'Number of attendees is required';
    } else if (isNaN(formData.attendees) || parseInt(formData.attendees) <= 0) {
      validationErrors.attendees = 'Number of attendees must be a positive number';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, do something with the form data, like send it to a server
    console.log('Form submitted:', formData);

    // Reset form fields and errors after submission
    setFormData({
      name: '',
      organization: '',
      email: '',
      mobile: '',
      city: '',
      venue: '',
      fromDate: '',
      toDate: '',
      attendees: '',
    });
    setErrors({});
    const token = localStorage.getItem('token');
    axios.post('http://localhost:8181/api/events', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Event booked successfully:', response.data);
        // Optionally, you can reset the form fields and errors after successful submission
        setFormData({
          name: '',
          organization: '',
          email: '',
          mobile: '',
          city: '',
          venue: '',
          fromDate: '',
          toDate: '',
          attendees: '',
        });
        setErrors({});
      })
      .catch((error) => {
        console.log('Error booking event:', error);
      });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />

      <div className="book-events-container">
        <h1>Book Events </h1>
        <form className="bookevent-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="bookinput"
                value={formData.name}
                onChange={handleChange}
              /><br></br>
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization:</label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="bookinput"
                value={formData.organization}
                onChange={handleChange}
                disabled
              /><br></br>
              {errors.organization && <span className="error">{errors.organization}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="bookinput"
                value={formData.email}
                onChange={handleChange}
                disabled // Disable the field
              /><br></br>
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile:</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="bookinput"
                value={formData.mobile}
                onChange={handleChange}
                disabled
              /><br></br>
             {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                className="bookinput"
                value={formData.city}
                onChange={handleChange}
              /><br></br>
             {errors.city && <span className="error">{errors.city}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="venue">Venue:</label>
              <input
                type="text"
                id="venue"
                name="venue"
                className="bookinput"
                value={formData.venue}
                onChange={handleChange}
              /><br></br>
             {errors.venue && <span className="error">{errors.venue}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fromDate">From Date:</label>
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                className="bookinput"
                value={formData.fromDate}
                onChange={handleChange}
              /><br></br>
             {errors.fromDate && <span className="error">{errors.fromDate}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="toDate">To Date:</label>
              <input
                type="date"
                id="toDate"
                name="toDate"
                className="bookinput"
                value={formData.toDate}
                onChange={handleChange}
              />
              <br></br>
             {errors.toDate && <span className="error">{errors.toDate}</span>}
</div>
</div>
<div className="form-row">
<div className="form-group">
<label htmlFor="attendees">Number of Attendees:</label>
<input
             type="number"
             id="attendees"
             name="attendees"
             className="bookinput"
             value={formData.attendees}
             onChange={handleChange}
           /><br></br>
{errors.attendees && <span className="error">{errors.attendees}</span>}
</div>
</div>
<center>
<button type="submit">Book Event</button>
</center>
</form>
</div>
<Footer />
</>
);
};

export default BookEvents;
import { useState } from 'react';
import '../assets/css/BookEvents.css'; // Import CSS file for styling
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookEvents = () => {
  // State variables to store form data and validation errors
  const [corporateName, setCorporateName] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventFromDate, setEventFromDate] = useState('');
  const [eventToDate, setEventToDate] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [venue, setVenue] = useState('');
  const [attendeesCount, setAttendeesCount] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [contactMail, setContactMail] = useState('');
  const [errors, setErrors] = useState({});

  // Define options for Country, Province, and Venue
  const countryOptions = ['Country1', 'Country2', 'Country3']; // Replace with actual country options
  const provinceOptions = {
    Country1: ['Province1', 'Province2', 'Province3'], // Replace with provinces for Country1
    Country2: ['Province4', 'Province5', 'Province6'], // Replace with provinces for Country2
    Country3: ['Province7', 'Province8', 'Province9'], // Replace with provinces for Country3
  };
  const venueOptions = {
    Province1: ['Venue1', 'Venue2', 'Venue3'], // Replace with venues for Province1
    Province2: ['Venue4', 'Venue5', 'Venue6'], // Replace with venues for Province2
    Province3: ['Venue7', 'Venue8', 'Venue9'], // Replace with venues for Province3
    // Define venues for other provinces as needed
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const validationErrors = {};
    if (!corporateName) {
      validationErrors.corporateName = 'Corporate name is required';
    }
    if (!eventName) {
      validationErrors.eventName = 'Event name is required';
    }
    if (!eventFromDate) {
      validationErrors.eventFromDate = 'Event from date is required';
    }
    if (!eventToDate) {
      validationErrors.eventToDate = 'Event to date is required';
    }
    if (!country) {
      validationErrors.country = 'Country is required';
    }
    if (!province) {
      validationErrors.province = 'Province is required';
    }
    if (!venue) {
      validationErrors.venue = 'Venue is required';
    }
    if (!attendeesCount) {
      validationErrors.attendeesCount = 'Number of attendees is required';
    } else if (isNaN(attendeesCount) || parseInt(attendeesCount) <= 0) {
      validationErrors.attendeesCount = 'Number of attendees must be a positive number';
    }
    if (!contactNo) {
      validationErrors.contactNo = 'Contact number is required';
    }
    if (!contactMail) {
      validationErrors.contactMail = 'Contact email is required';
    } else if (!isValidEmail(contactMail)) {
      validationErrors.contactMail = 'Invalid email address';
    }

    // If there are validation errors, set the state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, do something with the form data, like send it to a server
    console.log('Form submitted:', { corporateName, eventName, /* other fields */ });

    // Reset form fields and errors after submission
    setCorporateName('');
    setEventName('');
    setEventFromDate('');
    setEventToDate('');
    setCountry('');
    setProvince('');
    setVenue('');
    setAttendeesCount('');
    setContactNo('');
    setContactMail('');
    setErrors({});
  };

  // Function to validate email address
  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Navbar />

      <div className="book-events-container">
        <h1>Book Events</h1>
        <form className="bookevent-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="corporateName">Corporate Name:</label>
              <input
                type="text"
                id="corporateName"
                className="bookinput"
                value={corporateName}
                onChange={(e) => setCorporateName(e.target.value)}
                
              /><br></br>
              {errors.corporateName && <span className="error">{errors.corporateName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="eventName">Event Name:</label>
              <input
                type="text"
                id="eventName"
                className="bookinput"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                
              /><br></br>
              {errors.eventName && <span className="error">{errors.eventName}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="eventFromDate">Event From Date:</label>
              <input
                type="date"
                id="eventFromDate"
                className="bookinput"
                value={eventFromDate}
                onChange={(e) => setEventFromDate(e.target.value)}
                
              /><br></br>
              {errors.eventFromDate && <span className="error">{errors.eventFromDate}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="eventToDate">Event To Date:</label>
              <input
                type="date"
                id="eventToDate"
                className="bookinput"
                value={eventToDate}
                onChange={(e) => setEventToDate(e.target.value)}
                
              /><br></br>
              {errors.eventToDate && <span className="error">{errors.eventToDate}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <select
                id="country"
                className="dropx"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setProvince('');
                }}
                
              >
                <option value="">Select Country</option>
                {countryOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select><br></br>
              {errors.country && <span className="error">{errors.country}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="province">Province:</label>
              <select
                id="province"
                className="dropx"
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                  setVenue('');
                }}
                
              >
                <option value="">Select Province</option>
                {provinceOptions[country]?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select><br></br>
              {errors.province && <span className="error">{errors.province}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="venue">Venue:</label>
              <select
                id="venue"
                className="dropx"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                required={province !== ''}
              >
                <option value="">Select Venue</option>
                {venueOptions[province]?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select><br></br>
              {errors.venue && <span className="error">{errors.venue}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="attendeesCount">No of Attendees:</label>
              <input
                type="number"
                id="attendeesCount"
                className="bookinput"
                value={attendeesCount}
                onChange={(e) => setAttendeesCount(e.target.value)}
                
              /><br></br>
              {errors.attendeesCount && <span className="error">{errors.attendeesCount}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactNo">Contact No:</label>
              <input
                type="tel"
                id="contactNo"
                className="bookinput"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                
              /><br></br>
              {errors.contactNo && <span className="error">{errors.contactNo}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="contactMail">Contact Mail:</label>
              <input
                type="email"
                id="contactMail"
                className="bookinput"
                value={contactMail}
                onChange={(e) => setContactMail(e.target.value)}
                
              />
            <br></br>
              {errors.contactMail && <span className="error">{errors.contactMail}</span>}
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

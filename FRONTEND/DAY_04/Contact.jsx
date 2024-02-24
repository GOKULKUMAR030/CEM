import { useState } from 'react';
import "../assets/css/Contact.css";
import Navbar from '../components/Navbar';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [packageType, setPackageType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send enquiry data to backend or perform desired action
    console.log("Enquiry Submitted:", { name, email, phone, state, city, packageType, eventDate, termsAccepted });
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setState('');
    setCity('');
    setPackageType('');
    setEventDate('');
    setTermsAccepted(false);

    window.location.href="/Home";
  };

  return (
    <>
    <Navbar/>
    <div className="enquiry-form-container" style={{marginTop:"20px", marginBottom:"20px"}}>
      <h2>Enquiry Now</h2>
        <div className='enquiry-form'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="enquiry-label">Name*</label>
          <input type="text" id="name" className="enquiry-input" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="enquiry-label">Email*</label>
          <input type="email" id="email" className="enquiry-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="enquiry-label">Phone*</label>
          <input type="tel" id="phone" className="enquiry-input" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="state" className="enquiry-label">State*</label>
          <input type="text" id="state" className="enquiry-input" value={state} onChange={(e) => setState(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="enquiry-label">City*</label>
          <input type="text" id="city" className="enquiry-input" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="packageType" className="enquiry-label">Package Type*</label>
          <select id="packageType" className="enquiry-select" value={packageType} onChange={(e) => setPackageType(e.target.value)} required style={{width:"100%"}}>
            <option value="">Select Package</option>
            <option value="Standard">Standard</option>
              <option value="Advanced">Advanced</option>
             <option value="High-end">Premium</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="eventDate" className="enquiry-label">Event Date*</label>
          <input type="date" id="eventDate" className="enquiry-input" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
        </div>
        <center>
        <button type="submit" className="enquiry-submit-btn">Submit</button></center>
      </form></div>
    </div></>
  );
};

export default EnquiryForm;

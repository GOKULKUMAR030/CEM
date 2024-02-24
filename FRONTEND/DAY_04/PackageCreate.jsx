import { useState } from 'react';
import '../assets/css/CreatePackage.css'; // Import CSS file for styling
import Footer from '../components/Footer';
import AdminNavbar from '../components/AdminNavbar';

const CreatePackage = () => {
  // State variables to store form data and validation errors
  const [packageName, setPackageName] = useState('');
  const [packageDescription, setPackageDescription] = useState('');
  const [packagePrice, setPackagePrice] = useState('');
  const [packageDuration, setPackageDuration] = useState('');
  const [eventDuration, setEventDuration] = useState('Single-day');
  const [planningCoordination, setPlanningCoordination] = useState(false);
  const [venueDecoration, setVenueDecoration] = useState('Basic');
  const [audiovisualSetup, setAudiovisualSetup] = useState('Standard');
  const [onSiteManagement, setOnSiteManagement] = useState('Standard');
  const [additionalServices, setAdditionalServices] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form data to be sent to the server
    const formData = {
      packageName,
      packageDescription,
      packagePrice,
      packageDuration,
      eventDuration,
      planningCoordination,
      venueDecoration,
      audiovisualSetup,
      onSiteManagement,
      additionalServices
    };

    // Send formData to server or do further processing
    console.log('Package created:', formData);

    // Reset form fields
    setPackageName('');
    setPackageDescription('');
    setPackagePrice('');
    setPackageDuration('');
    setEventDuration('Single-day');
    setPlanningCoordination(false);
    setVenueDecoration('Basic');
    setAudiovisualSetup('Standard');
    setOnSiteManagement('Standard');
    setAdditionalServices([]);
    window.location.href="/Pricing"
  };

  return (
    <>
    <AdminNavbar/>
      <div className="create-package-container">
        <h1 className="create-package-title">Edit Package</h1>
        <form className="create-package-form" onSubmit={handleSubmit}>
          {/* Other fields */}
          <div className="form-row">
            <div className="form-group-package">
              <label htmlFor="eventDuration" className="form-label">Event Duration:</label>
              <select
                id="eventDuration"
                className="create-input"
                value={eventDuration}
                style={{width:"100%"}}
                onChange={(e) => setEventDuration(e.target.value)}
              >
                <option value="Single-day">Single-day</option>
                <option value="Multi-day">Multi-day</option>
                <option value="Customizable">Customizable</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group-package">
              <label className="form-label">Features:</label>
              <ul className="features-list">
              <select
                      className='create-input'
                      value={venueDecoration}
                      onChange={(e) => setVenueDecoration(e.target.value)}
                    >
                      <option value="Basic">Basic</option>
                      <option value="Customized">Customized</option>
                      <option value="Bespoke">Bespoke</option>
                    </select>
                <li>
                  <label className="feature-label">
                    Venue Decoration:
                    <select
                      className='create-input'
                      value={venueDecoration}
                      onChange={(e) => setVenueDecoration(e.target.value)}
                    >
                      <option value="Basic">Basic</option>
                      <option value="Customized">Customized</option>
                      <option value="Bespoke">Bespoke</option>
                    </select>
                  </label>
                </li>
                <li>
                  <label className="feature-label">
                    Audiovisual Setup:
                    <select
                      className='create-input'
                      value={audiovisualSetup}
                      onChange={(e) => setAudiovisualSetup(e.target.value)}
                    >
                      <option value="Standard">Standard</option>
                      <option value="Advanced">Advanced</option>
                      <option value="High-end">High-end</option>
                    </select>
                  </label>
                </li>
                <li>
                  <label className="feature-label">
                    On-site Management:
                    <select
                      className='create-input'
                      value={onSiteManagement}
                      onChange={(e) => setOnSiteManagement(e.target.value)}
                    >
                      <option value="Standard">Standard</option>
                      <option value="Priority">Priority</option>
                      <option value="Dedicated Team">Dedicated Team</option>
                    </select>
                  </label>
                </li>
                {/* Add additional services as needed */}
              </ul>
            </div>
          </div>
          <button type="submit" className="submit-button">Edit Package</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreatePackage;

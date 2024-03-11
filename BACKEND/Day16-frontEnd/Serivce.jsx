import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import "../assets/css/Service.css"
import { Link } from 'react-router-dom';
import axios from 'axios';


const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");
  
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const fetchEventData = async () => {
  try {
    const response = await axios.get('http://localhost:8181/api/eventdetails');
    setEvents(response.data);
  
  } catch (error) {
    console.error(error);
}
};
  useEffect(() => {
   
    fetchEventData();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Navbar />
      <div className="service-comp-container">
        <h1 className="mt-4 mb-4">Our Services for Corporate Event Management</h1>
        <div className="service-comp-row">
          <input
            type="text"
            style={{padding:"14px", border:"1px solid #ccc", transition:"border-color 0.3s ease-in-out"}}
            className="service-comp-search"
            placeholder="Search services..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          {filteredEvents.map(event => (
            <div key={event.id} className="col-md-6">
              <div className="service-comp-card mb-4">
                <div className="service-comp-card-body">
                  <h5 className="service-comp-card-title">{event.name}</h5>
                  <p className="service-comp-card-text" style={{margin:"30px" , color:"#007bff"}}>``{event.description}´´ </p>
                  <Link to="/BookEvents" className="global-link">Book Event</Link>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

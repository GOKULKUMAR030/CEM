import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import "../assets/css/UpcomingEvents.css";
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
const UpcomingEvents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([]); // State to store events
  
  const token = localStorage.getItem("token");

 useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get('http://localhost:8181/api/events/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
        // Handle error, e.g., show a message to the user
      }
    };

    fetchEventData();
  }, [token]); // Include token as a dependency

  // Rest of the component code


  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="event-comp-container">
        <h1 className="event-comp-title">Upcoming Events</h1>
        <div className="event-comp-row">
          <input
            type="text"
            style={{padding:"14px", border:"1px solid #ccc", transition:"border-color 0.3s ease-in-out"}}
            className="event-comp-search"
            placeholder="Search events..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          {filteredEvents.map(event => (
            <div key={event.id} className="col-md-6">
              <div className="event-comp-card mb-4">
                <div className="event-comp-card-body">
                  <h5 className="event-comp-card-title">{event.name}</h5>
                  <p className="event-comp-card-text"><BsFillCalendar2DateFill style={{color:"#007bff"}}/><span style={{color:"black" , marginLeft:"20px"}}>From:</span> <span style={{color:"green" , marginLeft:"20px"}}>{event.fromDate}</span> <span style={{color:"black" , marginLeft:"20px"}}>to</span> <span style={{color:"red" , marginLeft:"20px"}}>{event.toDate}</span></p>
                  <p className="event-comp-card-text"><FaLocationDot style={{color:"red" , marginRight:"20px"}}/>Location: {event.city}</p>
                  <p className="event-comp-card-text"><FaBuilding style={{color:"#445760" , marginRight:"20px"}}/>Venue {event.venue}</p>
                  <Link to="/Contact" className="global-link">Quick Enquiry</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;

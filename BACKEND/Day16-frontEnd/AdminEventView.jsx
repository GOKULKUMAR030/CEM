import { useState, useEffect } from 'react';
import "../assets/css/Login.css"
import "../assets/css/AdminEventView.css"
import AdminNavbar from '../components/AdminNavbar';
import axios from 'axios';

const AdminEventView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get('http://localhost:8181/api/events', {
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
  }, [token]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8181/api/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setEvents(events.filter(event => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
      // Handle error, e.g., show a message to the user
    }
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AdminNavbar />
      <div className="admin-event-view-container">
        <h1 className="admin-event-view-title">Admin Event View</h1>
        <div className="admin-event-view-row">
          <input
            type="text"
            className="admin-event-view-search"
            style={{ padding: "14px", border: "1px solid #ccc", transition: "border-color 0.3s ease-in-out" }}
            placeholder="Search events..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          {filteredEvents.map(event => (
            <div key={event.id} className="col-md-6">
              <div className="admin-event-view-card mb-4">
                <div className="admin-event-view-card-body">
                  <h5 className="admin-event-view-card-title">{event.name}</h5>
                  <p className="admin-event-view-card-text">Client Name: {event.email}</p>
                  <p className="admin-event-view-card-text">Corporate Name: {event.organization}</p>
                  <p className="event-comp-card-text"><p style={{color:"#007bff"}}/><span style={{color:"black" , marginLeft:"20px"}}>From:</span> <span style={{color:"green" , marginLeft:"20px"}}>{event.fromDate}</span> <span style={{color:"black" , marginLeft:"20px"}}>to</span> <span style={{color:"red" , marginLeft:"20px"}}>{event.toDate}</span></p>
                  <p className="admin-event-view-card-text">Location: {event.city}</p>
                  <p className="admin-event-view-card-text">Venue {event.venue}</p>
                  <p className="admin-event-view-card-text">{event.description}</p>
                  <button onClick={() => handleDeleteEvent(event.id)} style={{backgroundColor:"red"}}>Decline</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminEventView;

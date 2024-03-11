import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';
import "../assets/css/Service.css";

const AdminServiceView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([]);
  const [editableEvent, setEditableEvent] = useState(null);
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

  const handleEditClick = (event) => {
    setEditableEvent(event);
  };

  const handleCancelEdit = () => {
    setEditableEvent(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableEvent({
      ...editableEvent,
      [name]: value
    });
  };

  const handleUpdateEvent = async () => {
    try {
      await axios.put(`http://localhost:8181/api/eventdetails/${editableEvent.id}`, editableEvent);
      setEditableEvent(null);
      fetchEventData(); // Refresh events after update
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8181/api/eventdetails/${eventId}`);
      fetchEventData(); // Refresh events after deletion
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AdminNavbar />
      <div className="service-comp-container">
        <h1 className="mt-4 mb-4">Our Services for Corporate Event Management</h1>
        <div className="service-comp-row">
          <input
            type="text"
            style={{ padding: "14px", border: "1px solid #ccc", transition: "border-color 0.3s ease-in-out" }}
            className="service-comp-search"
            placeholder="Search services..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          /><Link to="/CreateEvent"><button style={{ margin: "20px" }}>Add Service</button></Link>
          {filteredEvents.map(event => (
            <div key={event.id} className="col-md-6">
              <div className="service-comp-card mb-4">
                {editableEvent && editableEvent.id === event.id ? (
                  <div className="service-comp-card-body">
                    <div className="service-form-group">
                      <input
                        type="text"
                        name="name"
                        value={editableEvent.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="service-form-group">
                      <textarea
                        name="description"
                        value={editableEvent.description}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="service-form-group">
                      <input
                        type="number"
                        name="startingPrice"
                        value={editableEvent.startingPrice}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button onClick={handleUpdateEvent}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </div>
                ) : (
                  <div className="service-comp-card-body">
                    <h5 className="service-comp-card-title">{event.name}</h5>
                    <p className="service-comp-card-text" style={{ margin: "30px", color: "#007bff" }}>{event.description}</p>
                    <Link to="/BookEvents" className="global-link">Book Event</Link>
                    <button onClick={() => handleEditClick(event)} style={{backgroundColor:"transparent", color:"#007b" , fontWeight:"bolder" , padding:"0px", fontSize:"large", float:"right"}}>Edit</button>
                    <button onClick={() => handleDeleteEvent(event.id)} style={{backgroundColor:"transparent", color:"#f00" , fontWeight:"bolder" , padding:"0px", fontSize:"large", float:"right", marginRight: "10px"}}>Delete</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminServiceView;

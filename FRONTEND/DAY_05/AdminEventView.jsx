import { useState } from 'react';
import "../assets/css/Login.css"
import "../assets/css/AdminEventView.css"
import AdminNavbar from '../components/AdminNavbar';


const AdminEventView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const events = [
    {
      id: 1,
      corporateName: 'ABC Corporation',
      name: 'Annual Conference 2024',
      date: 'March 15, 2024',
      location: 'Convention Center',
      paymentStatus: 'Paid',
      description: 'Join us for our annual conference where industry leaders gather to discuss the latest trends and innovations.',
    },
    {
      id: 2,
      corporateName: 'XYZ Enterprises',
      name: 'Product Launch: XYZ',
      date: 'April 20, 2024',
      location: 'Event Hall',
      paymentStatus: 'Pending',
      description: 'Be the first to witness the launch of our newest product, XYZ. Experience innovation at its best!',
    },
    {
      id: 3,
      corporateName: 'LMN Corporation',
      name: 'Employee Appreciation Day',
      date: 'May 10, 2024',
      location: 'Company Headquarters',
      paymentStatus: 'Paid',
      description: 'Celebrate our dedicated employees on this special day filled with recognition and gratitude.',
    },
    // Add more events as needed
  ];

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <AdminNavbar/>
      <div className="admin-event-view-container">
        <h1 className="admin-event-view-title">Admin Event View</h1>
        <div className="admin-event-view-row">
          <input
            type="text"
            className="admin-event-view-search"
            placeholder="Search events..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          {filteredEvents.map(event => (
            <div key={event.id} className="col-md-6">
              <div className="admin-event-view-card mb-4">
                <div className="admin-event-view-card-body">
                  <h5 className="admin-event-view-card-title">{event.name}</h5>
                  <p className="admin-event-view-card-text">Corporate Name: {event.corporateName}</p>
                  <p className="admin-event-view-card-text">Date: {event.date}</p>
                  <p className="admin-event-view-card-text">Location: {event.location}</p>
                  <p className="admin-event-view-card-text">Payment Status: {event.paymentStatus}</p>
                  <p className="admin-event-view-card-text">{event.description}</p>
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

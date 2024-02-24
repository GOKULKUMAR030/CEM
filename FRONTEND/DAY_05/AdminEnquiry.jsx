import { useState } from 'react';
import "../assets/css/Login.css";
import "../assets/css/AdminEnquiryView.css"; // You'll need to create this CSS file
import AdminNavbar from '../components/AdminNavbar';

const AdminEnquiryView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data for enquiries
  const enquiries = [
    {
      id: 1,
      corporateName: 'ABC Corporation',
      corporateEmail: 'abc@example.com',
      corporatePhone: '123-456-7890',
      state: 'California',
      city: 'Los Angeles',
      packageType: 'Premium',
      eventDate: 'March 25, 2024'
    },
    {
      id: 2,
      corporateName: 'XYZ Enterprises',
      corporateEmail: 'xyz@example.com',
      corporatePhone: '987-654-3210',
      state: 'New York',
      city: 'New York City',
      packageType: 'Standard',
      eventDate: 'April 10, 2024'
    },
    // Add more enquiries as needed
  ];

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEnquiries = enquiries.filter(enquiry =>
    enquiry.corporateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    enquiry.corporateEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <AdminNavbar/>
      <div className="admin-enquiry-view-container">
        <h1 className="admin-enquiry-view-title">Admin Enquiry View</h1>
        <div className="admin-enquiry-view-row">
          <input
            type="text"
            className="admin-enquiry-view-search"
            placeholder="Search enquiries..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          {filteredEnquiries.map(enquiry => (
            <div key={enquiry.id} className="col-md-6">
              <div className="admin-enquiry-view-card mb-4">
                <div className="admin-enquiry-view-card-body">
                  <h5 className="admin-enquiry-view-card-title">{enquiry.subject}</h5>
                  <p className="admin-enquiry-view-card-text">Corporate Name: {enquiry.corporateName}</p>
                  <p className="admin-enquiry-view-card-text">Corporate Email: {enquiry.corporateEmail}</p>
                  <p className="admin-enquiry-view-card-text">Corporate Phone: {enquiry.corporatePhone}</p>
                  <p className="admin-enquiry-view-card-text">State: {enquiry.state}</p>
                  <p className="admin-enquiry-view-card-text">City: {enquiry.city}</p>
                  <p className="admin-enquiry-view-card-text">Package Type: {enquiry.packageType}</p>
                  <p className="admin-enquiry-view-card-text">Event Date: {enquiry.eventDate}</p>
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${enquiry.corporateEmail}`} className="admin-enquiry-reply-link">Reply</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminEnquiryView;

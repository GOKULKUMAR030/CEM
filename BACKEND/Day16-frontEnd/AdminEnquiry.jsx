import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';
import "../assets/css/AdminEnquiryView.css";

const AdminEnquiryView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [enquiries, setEnquiries] = useState([]);
  const token = localStorage.getItem("token");

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/enquiries');
      setEnquiries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEnquiries = enquiries.filter(enquiry =>
    enquiry.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    enquiry.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AdminNavbar />
      <div className="admin-enquiry-view-container">
        <h1 className="admin-enquiry-view-title">Admin Enquiry View</h1>
        <div className="admin-enquiry-view-row">
          <input
            type="text"
            style={{padding:"14px", border:"1px solid #ccc", transition:"border-color 0.3s ease-in-out"}}
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
                  <p className="admin-enquiry-view-card-text">Corporate Name: {enquiry.organization}</p>
                  <p className="admin-enquiry-view-card-text">Corporate Email: {enquiry.email}</p>
                  <p className="admin-enquiry-view-card-text">Corporate Phone: {enquiry.phoneNumber}</p>
                  <p className="admin-enquiry-view-card-text">Message:<br></br> <br></br> <span style={{margin:"20px" , color:"black"}}>{enquiry.message}</span></p>
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

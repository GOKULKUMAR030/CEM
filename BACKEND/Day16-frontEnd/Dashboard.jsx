import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "../assets/css/Home.css";
import Navbar from "../components/Navbar";
import axios from 'axios';

const Home = () => {
  const [name , setName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');

        // Fetch user data including organization name
        const response = await axios.get('http://localhost:8181/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        localStorage.setItem('mobile' , response.data.mobileNumber);
        localStorage.setItem('organization',response.data.organizationName);
        
        setName(response.data.name);
        setOrganizationName(response.data.organizationName);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error
      }
    };

    const fetchUpcomingEvents = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');

        // Fetch upcoming events from the backend
        const response = await axios.get('http://localhost:8181/api/events/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Assuming the response contains an array of upcoming events
        setUpcomingEvents(response.data);
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
        // Handle error
      }
    };

    fetchUserData();
    fetchUpcomingEvents();
  }, []);
 

  const countUpcomingEvents = upcomingEvents.length;

  const yetToPayDetails = [
    { id: 1, event: 'Marketing Summit', amount: '$500' },
    { id: 2, event: 'Trade Show Booth', amount: '$1000' },
  ];

  return (
    <>
      <Navbar />
      <div className='welcome-note'style={{fontSize:"30px", padding:"20px", marginTop:"10px",fontWeight:"bolder"}}>Welcome Back!{name}</div>
      <div className='dashboard-top-cardx'>
        <div className="cardx mcorporate-name">
          <h2>Corporate Name</h2>
          <p>{organizationName}</p> 
        </div>
        <div className="cardx mevents-booked">
          <h2>Events Booked</h2>
          <p>{countUpcomingEvents}</p>
        </div>
        <div className="cardx mupcoming-event">
          <h2>Upcoming Event</h2>
          <p>Company Conference</p>
        </div>
      </div>
      <div className="xdashboard">
        <div className="card upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-calendar">
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              height="500px"
              events={upcomingEvents.map(event => ({
                title: event.name,
                date: event.fromDate
              }))}
            />
          </div>
        </div>
      </div>

      <div className="dashboard">
        <div className="card recently-booked">
          <h2>Recently Booked</h2>
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-item">
              <p>Title: {event.name}</p>
              <p>Date: {event.fromDate}</p>
              <p>Location: {event.city}</p>
            </div>
          ))}
        </div>

        <div className="card yet-to-pay">
          <h2>Yet to Pay</h2>
          {yetToPayDetails.map(detail => (
            <div key={detail.id} className="payment-item">
              <p>Event: {detail.event}</p>
              <p>Amount: {detail.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

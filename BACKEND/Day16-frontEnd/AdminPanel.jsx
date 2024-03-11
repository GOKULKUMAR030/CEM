import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ReactApexChart from 'react-apexcharts';
import '../assets/css/AdminHome.css';
import AdminNavbar from '../components/AdminNavbar';
import axios from 'axios';


const AdminHome = () => {
  const [eventsData, setEventsData] = useState({
    finished: 0,
    upcoming: 0,
    atEnquiry: 0,
  });
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [uniqueOrganizations, setUniqueOrganizations] = useState(0);
  useEffect(() => {
    // Fetch upcoming events from backend
    const token = localStorage.getItem("token");
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    const fetchUpcomingEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8181/api/events');
        setUpcomingEvents(response.data);
        
        console.log(response.data);
   
        
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
      }
    };

    

    const finishedCount = upcomingEvents.filter(event => new Date(event.fromDate) > new Date()).length;
    const upcomingCount = upcomingEvents.length+1;
    const atEnquiryCount = yetToPayDetails.length;

    // Update the state with the counts
    setEventsData({
      finished: finishedCount,
      upcoming: upcomingCount,
      atEnquiry: atEnquiryCount,
    });
    const fetchUniqueOrganizations = async () => {
      try {
        const response = await axios.get('http://localhost:8181/api/users/count');
        setUniqueOrganizations(response.data);
      } catch (error) {
        console.error('Error fetching unique organizations count:', error);
      }
    };

    fetchUniqueOrganizations();
    
    fetchUpcomingEvents();
  
  }, []);
   
  // const recentlyBookedEvents = [
  //   { id: 1, title: 'Team Building Workshop', date: '2024-02-20', location: 'Chicago' },
  //   { id: 2, title: 'Annual Gala Dinner', date: '2024-01-30', location: 'Los Angeles' },
  // ];

  const yetToPayDetails = [
    { id: 1, event: 'Marketing Summit', amount: '$500' },
    { id: 2, event: 'Trade Show Booth', amount: '$1000' },
  ];

  const donutChartData = {
    options: {
      labels: ['Finished Events', 'Upcoming Events', 'At Enquiry'],
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
    },
    series: [eventsData.finished, eventsData.upcoming, eventsData.atEnquiry],
  };

  return (
    <>
      <AdminNavbar/>
      <div className='admin-welcome-note' style={{ fontSize: "30px", padding: "20px", marginTop: "10px", fontWeight: "bolder" }}>Welcome Back!</div>
      <div className='admin-dashboard-top-cardx'>
        <div className="admin-cardx admin-mcorporate-name">
          <h2>Total Corporate Registered</h2>
          <h2>{uniqueOrganizations}+</h2>
        </div>
        <div className="admin-cardx admin-mevents-booked">
          <h2>Events Booked</h2>
          <h3>{upcomingEvents.length}</h3>
        </div>
        <div className="admin-cardx admin-mupcoming-event">
          <h2>Upcoming Events</h2>
          {upcomingEvents.map(event => (
            <div key={0}>
              <p>Title: {event.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="admin-xdashboard">
        <div className="admin-card admin-upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="admin-event-calendar">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              height="500px"
              events={upcomingEvents.map(event => ({
                title:`${event.organization}  ${event.name}`,             
                date: event.fromDate
              }))}
            />
          </div>
        </div>
      </div>

      <div className="admin-dashboard">
        <div className="admin-card admin-recently-booked">
          <h2>Recently Booked</h2>
          {upcomingEvents.map(event => (
            <div key={event.id} className="admin-event-item">
              <p>Title: {event.name}</p>
              <p>Date: {event.fromDate}</p>
              <p>Location: {event.city}</p>
            </div>
          ))}
        </div>

        <div className="admin-card admin-yet-to-pay">
          <ReactApexChart options={donutChartData.options} series={donutChartData.series} type="donut" height={350} />
        </div>
      </div>
    </>
  );
};

export default AdminHome;

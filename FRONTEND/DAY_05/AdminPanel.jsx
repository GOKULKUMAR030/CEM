import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ReactApexChart from 'react-apexcharts';
import '../assets/css/AdminHome.css';
import AdminNavbar from '../components/AdminNavbar';

const AdminHome = () => {
  const [eventsData, setEventsData] = useState({
    finished: 0,
    upcoming: 0,
    atEnquiry: 0,
  });

  useEffect(() => {
    // Calculate the count of events for each category
    const finishedCount = recentlyBookedEvents.filter(event => new Date(event.date) < new Date()).length;
    const upcomingCount = upcomingEvents.length;
    const atEnquiryCount = yetToPayDetails.length;

    // Update the state with the counts
    setEventsData({
      finished: finishedCount,
      upcoming: upcomingCount,
      atEnquiry: atEnquiryCount,
    });

  }, []);

  const upcomingEvents = [
    { id: 1, title: 'Company Conference', date: '2024-02-02', location: 'New York' },
    { id: 2, title: 'Product Launch', date: '2024-04-10', location: 'San Francisco' },
  ];

  const recentlyBookedEvents = [
    { id: 1, title: 'Team Building Workshop', date: '2024-02-20', location: 'Chicago' },
    { id: 2, title: 'Annual Gala Dinner', date: '2024-01-30', location: 'Los Angeles' },
  ];

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
          <h2>50+</h2>
        </div>
        <div className="admin-cardx admin-mevents-booked">
          <h2>Events Booked</h2>
          <p>5</p>
        </div>
        <div className="admin-cardx admin-mupcoming-event">
          <h2>Upcoming Event</h2>
          <p>Company Conference</p>
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
                title: event.title,
                date: event.date
              }))}
            />
          </div>
        </div>
      </div>

      <div className="admin-dashboard">
        <div className="admin-card admin-recently-booked">
          <h2>Recently Booked</h2>
          {recentlyBookedEvents.map(event => (
            <div key={event.id} className="admin-event-item">
              <p>Title: {event.title}</p>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </div>
          ))}
        </div>

      {/* <div className="chart-container"> */}
        <div className="admin-card admin-yet-to-pay">
        
        <ReactApexChart options={donutChartData.options} series={donutChartData.series} type="donut" height={350} />
      </div>
      </div>
    </>
  );
};

export default AdminHome;

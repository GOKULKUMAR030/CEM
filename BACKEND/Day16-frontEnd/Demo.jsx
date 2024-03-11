
import '../assets/css/Demo.css';

const EventServiceDescription = () => {
  return (
    <div className='event-service-outer'>
        <div className='event-picture' height="80%"></div>
    <div className="event-service-container">
      <div className="event-service-item">
        <h2>Service 1</h2>
        <p>Description of service 1...</p>
      </div>
      <div className="event-service-item" >
        <h2 style={{color:"black"}}>Service 2</h2>
        <p>Description of service 2...</p>
      </div>
      <div className="event-service-item">
        <h2>Service 3</h2>
        <p>Description of service 3...</p>
      </div>
      <div className="event-service-item">
        <h2>Service 4</h2>
        <p>Description of service 4...</p>
      </div>
      {/* Add more services here */}
    </div></div>
  );
};

export default EventServiceDescription;

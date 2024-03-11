import { ReactTyped } from 'react-typed';
import '../assets/css/LandingPage.css';
import client1Logo from '../assets/images/doodle10.jpg';
import client2Logo from '../assets/images/doodle11.jpg';
import client3Logo from '../assets/images/doodle12.jpg';
import client4Logo from '../assets/images/doodle13.jpg';
import client5Logo from '../assets/images/doodle14.jpg';
import client6Logo from '../assets/images/doodle15.jpg';
import { Link } from 'react-router-dom';
import LandingNav from './LandingNav';
// Add more client logos as needed

const LandingPage = () => {
  return (
    <>
      <LandingNav/>
      <div className="landing-page"> 
        <section className="hero-section">
          <div className="hero-content" >
            <h1 style={{textAlign:"center"}}>Welcome to{" "} <span id='logo' style={{fontSize:"40px", fontFamily:"Marck Script"}}><ReactTyped strings={["BizBash"]} typeSpeed={100} eraseSpeed={50} loop /></span></h1>
            <p style={{textAlign:"center"}}>Elevate your event planning experience with our cutting-edge app. From scheduling to attendee management, our intuitive platform streamlines every aspect. Seamlessly coordinate tasks, communicate with stakeholders, and ensure nothing falls through the cracks. Empower your team with real-time updates and collaboration tools, enhancing productivity and efficiency. With customizable features, tailor the app to suit your unique event needs effortlessly. Stay ahead of deadlines, anticipate challenges, and deliver flawless events that exceed expectations. Download now and revolutionize the way you plan and execute events</p>
           <center> <Link to ="/login"><button className="cta-button" style={{marginRight:"10PX", borderColor:"none"}}> LOGIN NOW </button></Link></center>
          </div>
        </section>
        <section className="client-section">
          <h2>Our Clients</h2>
          <div className="client-grid">
            <div className="client"><img src={client1Logo} alt="Client 1" /></div>
            <div className="client"><img src={client2Logo} alt="Client 2" /></div>
            <div className="client"><img src={client3Logo} alt="Client 3" /></div>
            <div className="client"><img src={client4Logo} alt="Client 1" /></div>
            <div className="client"><img src={client5Logo} alt="Client 2" /></div>
            <div className="client"><img src={client6Logo} alt="Client 3" /></div>
          </div>
        </section>
        <div className='wave'>
          <section className="services-section"></section>
        </div>
        <section className="servicesection">
          <h2 style={{marginLeft:"100px"}}>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <h3>Conference Management</h3>
              <p>Our meticulous planning and attention to detail ensure flawlessly executed conferences, featuring engaging content, smooth logistics, and memorable experiences for all participants.</p>
            </div>
            <div className="service-card">
              <h3>Product Launch Services</h3>
              <p>From inception to execution, we specialize in crafting captivating product launches that generate buzz, excitement, and brand awareness, leaving a lasting impact on your audience.</p>
            </div>
            <div className="service-card">
              <h3>Team Building Events</h3>
              <p>Elevate team cohesion and morale with our bespoke team-building events, thoughtfully curated to inspire collaboration, communication, and a sense of unity among participants.</p>
            </div>
          </div>
        </section>
        <footer className="footer-bottom">
        
        <p>&copy; 2024 Corporate Events Management. All rights reserved.</p>
  
        </footer>
      </div>
    </>
  );
};

export default LandingPage;

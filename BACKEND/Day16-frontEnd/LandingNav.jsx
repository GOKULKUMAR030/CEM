import React from 'react';
import "../assets/css/LandingNav.css";
class LandingNav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-brand-logo">BizBash</span>
        </div>
        <ul className="navbar-menu">
       {/* <Link to="/Home" className='global-link'><li className="navbar-menu-item">Home</li></Link>   
       <Link to="/EventsList" className='global-link'> <li className="navbar-menu-item">Events</li></Link> 
        <Link to="/services" className='global-link'> <li className="navbar-menu-item">Services</li></Link> 
        <Link to="/Pricing" className='global-link'> <li className="navbar-menu-item">Packages</li></Link>           
        <Link to="/Contact" className='global-link'> <li className="navbar-menu-item">Contact</li></Link>            */}
        </ul>
        {/* <div className="navbar-profile">
        <Link to="/Profile" className='global-link'> <li className="navbar-menu-item"style={{listStyle:"none"}} >Sign In</li></Link>           
        <Link to="/" className='global-link'> <li className="navbar-menu-item"style={{listStyle:"none"}}>Logout</li></Link>           
        </div> */}
      </nav>
    );
  }
}

export default LandingNav;

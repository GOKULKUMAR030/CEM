import React from 'react';
import "../assets/css/Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-brand-logo">BigBash</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-menu-item">Home</li>
          <li className="navbar-menu-item">Events</li>
          <li className="navbar-menu-item">Services</li>
          <li className="navbar-menu-item">About</li>
          <li className="navbar-menu-item">Contact</li>
        </ul>
        <div className="navbar-profile">
        <span className="profile-name"style={{paddingRight:"50px"}}>Profile</span>
          <span className="profile-name"style={{paddingRight:"50px"}}>Logout</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;

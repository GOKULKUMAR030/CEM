import { Link } from "react-router-dom";
import "../assets/css/Pricing.css";
import Navbar from "../components/Navbar";

const Pricing = () => {
  return (
    <>
    <Navbar/>
    <div className="pricing-container">
      <div className="pricing-card">
        <h2 className="pricing-title">Basic</h2>
        <div className="pricing-price">$499</div>
        <ul className="pricing-features">
          <li>1 Event</li>
          <li>Event Planning</li>
          <li>Basic Decorations</li>
          <li>No Customization</li>
        </ul>
        <Link to={{ pathname: "/Addon", state: { packageName: "Basic", price: 499 } }}>
          <button className="pricing-btn">Select</button>
        </Link>
      </div>
      <div className="pricing-card">
        <h2 className="pricing-title">Standard</h2>
        <div className="pricing-price">$999</div>
        <ul className="pricing-features">
          <li>Up to 3 Events</li>
          <li>Event Planning & Coordination</li>
          <li>Themed Decorations</li>
          <li>Limited Customization</li>
        </ul>
        <Link to={{ pathname: "/Addon", state: { packageName: "Standard", price: 999 } }}>
          <button className="pricing-btn">Select</button>
        </Link>
      </div>
      <div className="pricing-card-premium">
        <h2 className="pricing-title">Premium</h2>
        <div className="pricing-price">$1999</div>
        <ul className="pricing-features">
          <li>Unlimited Events</li>
          <li>Event Planning & Coordination</li>
          <li>Luxury Decorations</li>
          <li>Full Customization</li>
        </ul>
        <Link to={{ pathname: "/Addon", state: { packageName: "Premium", price: 1999 } }}>
          <button className="pricing-premium-btn">Select</button>
        </Link>
      </div>
      <div className="comparison-table">
        <table className="comparison-table-a">
          <thead>
            <tr>
              <th>Features</th>
              <th>Standard</th>
              <th>Premium</th>
              <th>Custom</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Event Duration</td>
              <td>Single-day</td>
              <td>Multi-day</td>
              <td>Customizable</td>
            </tr>
            <tr>
              <td>Planning & Coordination</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Venue Decoration</td>
              <td>Basic</td>
              <td>Customized</td>
              <td>Bespoke</td>
            </tr>
            <tr>
              <td>Audiovisual Setup</td>
              <td>Standard</td>
              <td>Advanced</td>
              <td>High-end</td>
            </tr>
            <tr>
              <td>On-site Management</td>
              <td>Standard</td>
              <td>Priority</td>
              <td>Dedicated Team</td>
            </tr>
            <tr>
              <td>Additional Services</td>
              <td>-</td>
              <td>Priority</td>
              <td>Customizable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Pricing;

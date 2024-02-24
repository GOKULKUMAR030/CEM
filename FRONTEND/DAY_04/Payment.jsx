import { useState } from 'react';
import "../assets/css/Payment.css";
import Navbar from '../components/Navbar';

const Payment = () => {
  const [packageName, setPackageName] = useState('');
  const [price, setPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [address, setAddress] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePlanSelection = (planName, planPrice) => {
    setPackageName(planName);
    setPrice(planPrice);
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      alert('Payment successful!');
    }, 1500);
  };

  return (
    <>
    <Navbar/>
    <center>
    <div className="payment-container">
         <h2>Select a Plan</h2>
      <select className='dropx' onChange={(e) => handlePlanSelection(e.target.value, e.target.options[e.target.selectedIndex].getAttribute('data-price'))}>
        <option value="">Select Plan</option>
        <option value="Basic" data-price="499">Basic - $499</option>
        <option value="Standard" data-price="999">Standard - $999</option>
        <option value="Premium" data-price="1999">Premium - $1999</option>
      </select>
      <div className="selected-plan">
        <h2>Selected Plan: {packageName}</h2>
        <p>Price: ${price}</p>
      </div>
      <div className="payment-methods">
        <p>Select Payment Method:</p><div className='payment-radios'>
       <div> <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" onChange={() => setPaymentMethod('creditCard')} /></div>
        <label htmlFor="creditCard">Credit Card</label><br />
        <div>  <input type="radio" id="upiBhim" name="paymentMethod" value="upiBhim" onChange={() => setPaymentMethod('upiBhim')} /></div>
        <label htmlFor="upiBhim">UPI/BHIM</label><br />
      </div></div>

      {paymentMethod === 'creditCard' && (
        <div className="credit-card-details">
          <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} /><br />
          <input type="text" placeholder="Expiry Date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} /><br />
          <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} /><br />
          <input type="text" placeholder="Name on Card" value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} /><br />
        </div>
      )}

      {paymentMethod === 'upiBhim' && (
        <div className="credit-card-details" style={{marginRight:"20px"}}>
          <p>Select your UPI app:</p>
          <select className='dropx' style={{width:"40%"}}>
            <option value="BH">BH</option>
            <option value="MD">MD</option>
          </select><br />
          <p>Enter your UPI ID:</p>
          <input type="text" placeholder="UPI ID" value={upiId} onChange={(e) => setUpiId(e.target.value)} /><br />
        </div>
      )}

      <div className="address-details">
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
      </div>

      <button className="pay-btn" onClick={handlePayment}>Pay Now</button>

     
    </div></center></>
  );
};

export default Payment;

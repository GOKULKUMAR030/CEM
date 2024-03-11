import { useState } from 'react';
import "../assets/css/Payment.css";
import Navbar from '../components/Navbar';

const Payment = () => {
  
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [address, setAddress] = useState('');
  const [upiId, setUpiId] = useState('');

  

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
          <input type="password"  placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} /><br />
          <input type="text" placeholder="Name on Card" value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} /><br />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
        </div>
      )}

{paymentMethod === 'upiBhim' && (
  <div className="credit-card-details" style={{ marginRight: "20px" }}>
    <div className="custom-select">
      <select id="upiApp" className='dropx' style={{ display: "flex", width: "40%", justifyContent: "flex-start" }}>
        <option value="default">Select Your UPI app</option>
        <option value="BHIM">BHIM</option>
        <option value="Google Pay" >Google Pay</option>
        <option value="PhonePe">PhonePe</option>
        <option value="Paytm">Paytm</option>
        {/* Add more options here as needed */}
      </select>
      <div className="select-arrow"></div>
    </div>
    <input type="text" placeholder="UPI ID" value={upiId} onChange={(e) => setUpiId(e.target.value)} /><br />
  </div>
)}

    

      <button className="pay-btn" onClick={handlePayment}>Pay Now</button>

     
    </div></center></>
  );
};

export default Payment;

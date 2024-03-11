import { useState } from 'react';
import '../assets/css/CreateEvent.css'; // Import your CSS file
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';
import axios from 'axios';

const CreateEventForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        startingPrice: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Replace this with your actual auth token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const response = await axios.post('http://localhost:8181/api/eventdetails', formData, config);
            console.log(response.data); // Log the response from the backend
            // Clear the form after successful submission if needed
            setFormData({
                name: '',
                description: '',
                startingPrice: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <>
        <AdminNavbar/>
        <div className="create-event-form-container" style={{marginTop:"40px" , marginBottom:"10vh"}}>
            <h2 style={{textAlign:"center"}}>Create Service</h2>
            <form onSubmit={handleSubmit}>
                <div className="create-event-form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="create-event-form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="create-event-form-group">
                    <label>Starting Price:</label>
                    <input
                        type="number"
                        name="startingPrice"
                        value={formData.startingPrice}
                        onChange={handleChange}
                        step="0.01"
                        required
                    />
                </div>
            <center>  <button type="submit">Submit</button></center>  
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default CreateEventForm;

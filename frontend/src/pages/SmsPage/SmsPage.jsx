import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Sms.css'; 
function Sms() {
  const [message, setMessage] = useState('');

  const sendSMS = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/msg/send-sms`, { body: 'Your appoinment has been approved from our side' });
      setMessage('Message sent successfully');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server Error:', error.response.data);
        setMessage('Server Error: Please try again later');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Network Error:', error.request);
        setMessage('Network Error: Please check your internet connection');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
        setMessage('Error: Something went wrong. Please try again later');
      }
    }
  };

  useEffect(() => {
    if (message) {
      alert(message);
    }
  }, [message]);

  return (
    <div className="sms-container">
    <h1 className="sms-heading">Send SMS</h1>
    <button className="sms-button" onClick={sendSMS}>Send SMS</button>
  </div>
  );
}

export default Sms;
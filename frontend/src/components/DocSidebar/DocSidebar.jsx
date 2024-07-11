import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/DoctorProfile.module.css'; 
import { Img } from "components"; 
import { useLocation } from "react-router-dom";

function DocSidebar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [doctorInfo, setDoctorInfo] = useState({});
  const [appointmentsCount, setAppointmentsCount] = useState(0); // Initialize appointmentsCount state
  
  const { profileId } = location.state; // Fetching the doctor's username from the location state
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchDoctorInfo = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/doctors/profile/${profileId}`);
        setDoctorInfo(response.data);
      } catch (error) {
        console.error('Error fetching doctor info:', error);
      }
    };

    fetchDoctorInfo();
  }, [profileId]);

  useEffect(() => {
    const fetchAppointmentsCount = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/appointments/approved-active/${profileId}`);
        // Filter appointments where isApproved is true and isActive is true
        const filteredAppointments = response.data.filter(appointment => appointment.isApproved && appointment.isActive);
        // Update the appointmentsCount state with the length of the filtered appointments array
        setAppointmentsCount(filteredAppointments.length);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointmentsCount();
  }, [profileId]);

  return (
    <div>
      <div className={styles.hamburger}>
        <div style={{ position: 'relative' }} className={`${styles.bar} ${isVisible ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isVisible ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isVisible ? styles.open : ''}`}></div>
      </div>
      <div className={`${styles.sidebar} ${isVisible ? styles.visible : styles.hidden}`} style={isMobile ? { height: isExpanded ? '20%' : '20%' } : {}}>
  
        <div className={styles.sidebarContent}>
          <ul>
            <li>
              {/* Display doctor's image */}
              {doctorInfo.image && (
                <Img
                style={{width:'160px',height:'160px'}}
                  src={`${process.env.REACT_APP_BACKEND_URL}/${doctorInfo.image.replace(/\\/g, '/')}`}
                  alt={doctorInfo.name}
                  className={styles.profile}
                />
              )}
            </li>
            <li>
              {/* Display doctor's name */}
              <p style={{ color: 'white', fontSize: '0.9em' }}>{doctorInfo.name}</p> {/* Use doctorInfo.name instead of doctor.name */}
            </li>
            <li style={{ color: 'white', fontSize: '1em' }}>
              Total Patients : {appointmentsCount}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
}

export default DocSidebar;
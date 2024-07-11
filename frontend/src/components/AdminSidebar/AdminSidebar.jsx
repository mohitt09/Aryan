import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaUserMd } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import { FaBlog } from 'react-icons/fa';
import styles from '../../styles/DashboardSidebar.module.css';

function AdminSidebar() {

  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        <div style={{ position: 'relative' }} className={`${styles.bar} ${isVisible ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isVisible ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isVisible ? styles.open : ''}`}></div>
      </div>
      <div className={`${styles.sidebar} ${isVisible ? styles.visible : styles.hidden}`} style={isMobile ? { height: isExpanded ? '80vh' : '5em' } : {}}>

        <div className={styles.sidebarContent}>
          <ul>

            <li className={styles.Utilities} onClick={toggleHeight}>
              Menu
              <div className={styles.icon} style={{ color: 'white', fontSize: '1.2em' }}>
                <FaAngleDown />
              </div>
            </li>

            <Link to="/Dashboard">
              <li style={{ display: 'flex', gap: '9px' }}>
                <div className={styles.icon} style={{ color: 'white', fontSize: '1.2em' }}>
                  <AiOutlineHome />
                </div>
                Dashboard
              </li>
            </Link>

            <Link to="/appointments">
              <li style={{ display: 'flex', gap: '9px' }}>
                <div className={styles.icon}>
                  <FaCalendar />
                </div>
                Appointments
              </li>
            </Link>

            <Link to="/upload-doctor">
              <li style={{ display: 'flex', gap: '9px' }}>
                <div className={styles.icon}>
                  <FaUserMd />
                </div>
                Doctors
              </li>
            </Link>

            <Link to="/upload-admin">
              <li style={{ display: 'flex', gap: '9px' }}>
                <div className={styles.icon}>
                  <FaPencilAlt />
                </div>
                Admin
              </li>
            </Link>

            <Link to="/upload-blog">
              <li style={{ display: 'flex', gap: '9px' }}>
                <div className={styles.icon}>
                  <FaBlog />
                </div>
                Blog
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;

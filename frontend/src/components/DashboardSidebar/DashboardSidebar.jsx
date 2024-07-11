import React, { useState, useEffect } from 'react';
import { NavLink ,Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaPencilAlt, FaCalendar, FaUserMd, FaAngleDown, FaBlog, FaUserEdit } from 'react-icons/fa';
import { RiSecurePaymentFill } from "react-icons/ri";
import styles from '../../styles/DashboardSidebar.module.css';

function DashboardSidebar() {

  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1168);

  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1168);
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

  const isActive = (path) => location.pathname === path; // Check if the path is active

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

            <NavLink
              to="/Dashboard"
              style={({ isActive }) => ({

                display: 'flex',
                gap: '9px',
                fontSize: '1.6em',
                alignItems: 'center',
                padding: '0.5rem 3rem',
                backgroundColor: isActive ? '#01A1A4' : 'transparent',
                textDecoration: isActive ? 'underline' : 'none',
                
              })}
            > 
              
              <div className={styles.icon} style={{ color: 'white', fontSize: '1.2em' }}>
                <AiOutlineHome />
              </div>
              Dashboard
              
            </NavLink>

            <Link to="/appointments">
              <li style={{ display: 'flex', gap: '9px', backgroundColor: isActive('/appointments') ? '#01A1A4' : 'transparent', textDecoration: isActive('/appointments') ? 'underline' : 'none' }}>
                <div className={styles.icon}>
                  <FaCalendar />
                </div>
                Appointments
              </li>
            </Link>

            <Link to="/upload-doctor">
              <li style={{ display: 'flex', gap: '9px', backgroundColor: isActive('/upload-doctor') ? '#01A1A4' : 'transparent', textDecoration: isActive('/upload-doctor') ? 'underline' : 'none' }}>
                <div className={styles.icon}>
                  <FaUserMd />
                </div>
                Doctors
              </li>
            </Link>

            <Link to="/upload-admin">
              <li style={{ display: 'flex', gap: '9px', backgroundColor: isActive('/upload-admin') ? '#01A1A4' : 'transparent', textDecoration: isActive('/upload-admin') ? 'underline' : 'none' }}>
                <div className={styles.icon}>
                  <FaPencilAlt />
                </div>
                Admin
              </li>
            </Link>

            <Link to="/upload-blog">
              <li style={{ display: 'flex', gap: '9px', backgroundColor: isActive('/upload-blog') ? '#01A1A4' : 'transparent', textDecoration: isActive('/upload-blog') ? 'underline' : 'none' }}>
                <div className={styles.icon}>
                  <FaBlog />
                </div>
                Blog
              </li>
            </Link>

            <Link to="/AdminPayments">
              <li style={{ display: 'flex', gap: '9px', backgroundColor: isActive('/AdminPayments') ? '#01A1A4' : 'transparent', textDecoration: isActive('/AdminPayments') ? 'underline' : 'none' }}>
                <div className={styles.icon}>
                  <RiSecurePaymentFill />
                </div>
                Payments
              </li>
            </Link>

            <Link to="/User-Queries">
              <li style={{ display: 'flex', gap: '9px', backgroundColor: isActive('/User-Queries') ? '#01A1A4' : 'transparent', textDecoration: isActive('/User-Queries') ? 'underline' : 'none' }}>
                <div className={styles.icon}>
                  <FaUserEdit />
                </div>
                User Queries
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;

import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import logo from '../../data/images/logo.png'
import { useNavigate } from "react-router-dom";
import  styles from '../../styles/DoctorProfile.module.css'
import hospitalImage from "../../data/images/hospitalimage.jpeg";

function DocHeader() {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = async () => {
        sessionStorage.removeItem('docToken'); // Remove the doc token from session storage
        await navigate('/');
        console.log("Logged out!");
    };

    const handleImageClick = () => {
        sessionStorage.removeItem('docToken'); // Remove the doc token from session storage
        navigate('/');
    };

    return (
        <header className={styles.dashboardHeader}>
            <h1 style={{display:'flex',alignItems:'center',gap:'0.4em',fontSize:'2.5em'}}>
                {/* {<img src={logo} width={'200px'} style={{mixBlendMode:'multipl'}} alt="" /> */}
                <div onClick={handleImageClick} style={{cursor: 'pointer'}}>
                    <img src={hospitalImage} width={'200px'} style={{mixBlendMode:'multiply'}} alt="" />
                </div> 
            </h1>
            <div className={styles.userDropdown}>
                <div className={styles.userIcon} onClick={handleDropdownToggle}>
                    <FaUser style={{color:"black"}}/>
                </div>
                {showDropdown && (
                    <div className={styles.dropdownContent}>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default DocHeader;

import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import styles from "../../styles/DashboardHeader.module.css";
import hospitalImage from "../../data/images/hospitalimage.jpeg";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Retrieve the username from session storage when the component mounts
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = async () => {
    sessionStorage.removeItem("token"); // Remove token from session storage
    sessionStorage.removeItem("username");
    await navigate("/");
    console.log("Logged out!");
  };

  const handleImageClick = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    navigate("/");
  };

  return (
    <header className={styles.dashboardHeader}>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4em",
          fontSize: "2.5em",
        }}
      >
        <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
          <img
            src={hospitalImage}
            width={"200px"}
            style={{ mixBlendMode: "multiply" }}
            alt=""
          />
        </div>
      </h1>
      <div className={styles.userDropdown}>
        <div style={{display: "flex", gap: "5px", alignItems: "center"}}>
          {username && (
            <div className={styles.username}>Welcome, {username}!</div>
          )}
          <div className={styles.userIcon} onClick={handleDropdownToggle}>
            <FaUser style={{ color: "black" }} />
          </div>

          {showDropdown && (
            <div className={styles.dropdownContent}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;

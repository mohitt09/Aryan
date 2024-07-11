import React, { useState, useEffect } from "react";

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const torchStyle = {
    position: "fixed",
    top: `${mousePosition.y}px`,
    left: `${mousePosition.x}px`,
    width: "200px",
    height: "200px",
    boxShadow: "0 0 0 9999em #000000f7",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.3)",
    zIndex: 1, // Ensure the torch is above the text
  };

  return (
    <div style={{
      height: "100vh", // Use vh for viewport height
      background: "url('https://wallpapercave.com/wp/6SLzBEY.jpg') no-repeat center center",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#FFF", // Change text color to white for better visibility
      fontFamily: "monospace",
      textShadow: "none", // Remove text shadow for clarity
    }}>
      <div className="text">
        <h1 style={{ fontSize: "15em", textAlign: "center", marginBottom: "1em" }}>404</h1>
        <h2 style={{ fontSize: "5em", textAlign: "center", marginBottom: "1em" }}>Uh, Ohh</h2>
        <h3 style={{ fontSize: "2em", textAlign: "center", marginBottom: "2em" }}>Sorry we can't find what you are looking for 'cuz it's so dark in here</h3>
      </div>
      <div style={torchStyle}></div>
    </div>
  );
};

export default NotFoundPage;

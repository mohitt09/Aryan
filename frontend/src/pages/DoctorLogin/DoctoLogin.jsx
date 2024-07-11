import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../../styles/DoctorLogin.module.css";
import logo from "../../data/images/hospitalimage.jpeg";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [doctorId, setDoctorId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (username && password) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/credentials/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          }
        );
  
        const data = await response.json();
        console.log(data);
        console.log(data.profileId);
  
        if (response.ok) {
          if (data.type === 1) {
            // Save the token into session storage
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("username", username);
            toast.success("Admin login successful");
            navigate(`/dashboard`); // Navigate to the dashboard
          } else if (data.type === 2) {
            // Save the docToken into session storage
            sessionStorage.setItem("docToken", data.docToken);
            toast.success("Doctor login successful");
            console.log(data.profileId);
            navigate("/doctor-appointment-profile", {
              state: { profileId: data.profileId },
            });
          }
          return;
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("An error occurred during login");
      }
    }
  
    // If neither login attempt was successful, show a generic error toast
    toast.error("Invalid username/doctor ID or password");
  };
  

  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-gray-100 ${style.backgroundImage}`}
    >
      <div
        className={`w-full max-w-2xl text-white p-10 rounded-lg shadow-md ${style.bg}`}
      >
        <h2
          style={{ color: "white" }}
          className="text-3xl font-bold pb-5 text-center"
        >
          Sign In
        </h2>
        <h2
          style={{ color: "white" }}
          className="text-3xl font-bold pb-5 text-center"
        >
          <img src={logo} style={{ borderRadius: "8px" }} alt="" onClick={()=>{navigate('/')}} />
        </h2>
        <form onSubmit={handleLogin}>
          

          <div className="mb-4">
            <label
              htmlFor="username"
              className={`block mb-2 text-sm font-medium ${style.text}`}
            >
              Username
            </label>
            <div style={{ position: "relative" }}>
              <AiOutlineUser
                style={{
                  color: "#4444e1",
                  position: "absolute",
                  top: "10px",
                  left: "5px",
                  fontSize: "1.2em",
                }}
              />
              <input
                style={{ paddingLeft: "2.5em", cursor: "pointer" }}
                type="text"
                id="username"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[98%] sm:w-[100%] py-2.5"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className={`block mb-2 text-sm font-medium ${style.text}`}
            >
              Password
            </label>
            <div style={{ position: "relative", cursor: "pointer" }}>
              <AiOutlineLock
                style={{
                  color: "#4444e1",
                  position: "absolute",
                  top: "10px",
                  left: "5px",
                  fontSize: "1.2em",
                }}
              />
              <input
                type={showPassword ? "text" : "password"}
                style={{ paddingLeft: "2.5em" }}
                id="password"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[98%] sm:w-[100%] py-2.5"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  onClick={togglePasswordVisibility}
                  style={{
                    color: "#4444e1",
                    position: "absolute",
                    top: "12px",
                    right: "6%",
                    fontSize: "1.2em",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <AiOutlineEye
                  onClick={togglePasswordVisibility}
                  style={{
                    color: "#4444e1",
                    color: "#4444e1",
                    position: "absolute",
                    top: "12px",
                    right: "6%",
                    fontSize: "1.2em",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mb-4">
            <button
              type="submit"
              style={{ color: "white", fontWeight: "600", display: "flex" }}
              className="text-white bg-blue-600 hover:bg-blue-700  focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5  "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

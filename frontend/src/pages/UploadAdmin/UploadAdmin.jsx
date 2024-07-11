import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "components/DashboardSidebar/DashboardSidebar";
import style from "../../styles/UploadAdmin.module.css";

const UploadAdmin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [deleteAdminId, setDeleteAdminId] = useState("");
  const [toggleAdminId, setToggleAdminId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      toast.error("Please fill out all required fields", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const adminResponse = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin`,
        { username, password, type: 1 }
      );
      console.log(adminResponse.data);
      toast.success("New Admin data has been successfully added", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(adminResponse.data);
      const adminId = adminResponse.data.adminId;

      const credentialsData = {
        profileId: adminId,
        username,
        password,
        type: 1, // Set type to 1 for admin
      };
      const credentialsResponse = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/credentials`,
        credentialsData
      );
      console.log(credentialsResponse.data);
      toast.success("Credentials have been successfully added", {
        position: toast.POSITION.TOP_RIGHT,
      });

      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
  };

  const handleDeleteAdmin = async (event) => {
    event.preventDefault();
    if (!deleteAdminId) {
      toast.error("Please enter an Admin ID to delete", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/${deleteAdminId}`
      );
      console.log(response.data);
      toast.success("Admin has been successfully deleted", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setDeleteAdminId("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete admin", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleToggleActiveStatus = async (event) => {
    event.preventDefault();
    if (!toggleAdminId) {
      toast.error("Please enter an Admin ID to toggle active status", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/${toggleAdminId}/toggle-active`
      );
      console.log(response.data);
      toast.success("Admin's active status has been successfully toggled", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setToggleAdminId("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to toggle admin's active status", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="username">
            Username
          </label>
          <input
            className={style.input}
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={style.formGroup}>
          <label className={style.label} htmlFor="password">
            Password
          </label>
          <input
            className={style.input}
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={style.formGroup}>
          <button
            className={`${style.button} ${style.blueButton}`}
            type="submit"
          >
            Add Admin
          </button>
        </div>
      </form>

      <form className={style.form} onSubmit={handleToggleActiveStatus}>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="toggleAdminId">
            Enter Admin ID
          </label>
          <input
            className={style.input}
            id="toggleAdminId"
            type="text"
            placeholder="Admin ID"
            value={toggleAdminId}
            onChange={(e) => setToggleAdminId(e.target.value)}
          />
        </div>

        <div className={style.flexcontainer}>
          <button className={style.button} type="submit">
            Remove Admin Temporarily
          </button>
        </div>
      </form>

      <form onSubmit={handleDeleteAdmin} className={style.form}>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="deleteAdminId">
            Enter Admin ID 
          </label>
          <input
            className={style.input}
            id="deleteAdminId"
            type="text"
            placeholder="Admin ID"
            value={deleteAdminId}
            onChange={(e) => setDeleteAdminId(e.target.value)}
          />
        </div>
        <div className={style.flexcontainer}>
          <button className={style.button} type="submit">
            Delete Admin Permanently
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadAdmin;

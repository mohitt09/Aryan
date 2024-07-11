import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/DashboardMain.module.css";

function AdminMain() {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all appointments
        const appointmentsResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/appointments`
        );
        setAppointments(appointmentsResponse.data);
        setAppointmentCount(appointmentsResponse.data.length);

        // Fetch all doctors
        const doctorsResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/doctors`
        );
        setDoctorCount(doctorsResponse.data.length);

        // Fetch all blogs
        const blogsResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/blogs`
        );
        setBlogCount(blogsResponse.data.length);

        // Fetch all admins
        const adminsResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/admin`
        );
        setAdminCount(adminsResponse.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Logic to get current items based on page number
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ marginBottom: "2em" }}>
      <div className={styles.homeContainer}>
        <div className={styles.box}>
          <p style={{ fontSize: "1.4em" }}>Total Doctor</p>
          <p style={{ fontSize: "1.4em" }}>{doctorCount}</p>
        </div>
        <div className={styles.box1}>
          <p style={{ fontSize: "1.4em" }}>Total Blog</p>
          <p style={{ fontSize: "1.4em" }}>{blogCount}</p>
        </div>
        <div className={styles.box}>
          <p style={{ fontSize: "1.4em" }}>Total Admin</p>
          <p style={{ fontSize: "1.4em" }}>{adminCount}</p>
        </div>
        <div className={styles.box1}>
          <p style={{ fontSize: "1.4em" }}>Total Appointment</p>
          <p style={{ fontSize: "1.4em" }}>{appointmentCount}</p>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Dr. ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Number</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {currentAppointments.reverse().map((appointment, index) => (
              <tr
                key={index}
                style={{ backgroundColor: appointment.statusColor }}
              >
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.doctorId}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.phoneNo}</td>
                <td>{appointment.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <button onClick={() => paginate(currentPage - 1)}>Prev</button>
          )}
          <button>{currentPage}</button>
          {currentPage < Math.ceil(appointments.length / itemsPerPage) && (
            <button onClick={() => paginate(currentPage + 1)}>Next</button>
          )}
        </div>
      </div>

    </div>
  );
}

export default AdminMain;

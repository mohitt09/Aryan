import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/DashboardMain.module.css";
import { FaUserMd, FaBloggerB, FaCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from '../../data/images/icon2.jpg';
import blogicon from '../../data/images/blog2.jpg';
import doctoricon from '../../data/images/doctoricon2.png';
import appointmenticon from '../../data/images/appointicon2.jpg';

function DashboardMain() {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7); // Number of items per page
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);
  const [doctors, setDoctors] = useState({});
  const [doctorCount, setDoctorCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all appointments
        const appointmentsResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/appointments`
        );
        const appointments = appointmentsResponse.data;

        // Sort appointments by date in descending order
        appointments.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();

        // Set the state with the sorted array
        setAppointments(appointments);

        setAppointmentCount(appointmentsResponse.data.length);

        // Fetch all doctors
        const doctorsResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/doctors`
        );
        const doctorsData = {};
        doctorsResponse.data.forEach((doctor) => {
          doctorsData[doctor.doctorId] = doctor.name;
        });
        setDoctors(doctorsData);
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
  const currentAppointments = appointments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ marginBottom: "2em", background: "#f9f9f9" }}>
      <div className={styles.homeContainer}>
        <div className={styles.box} onClick={() => navigate("/upload-doctor")}>
          <img src={doctoricon} alt="Logo" style={{ width: "5em", height: "5em" }} />
          <p style={{ color: "#1f2b6c", fontSize: "1.4em" }}> Doctors</p>
          <p style={{ color: "#1f2b6c", fontSize: "1.4em", mixBlendMode:'darken' }}>{doctorCount}</p>
        </div>
        <div className={styles.box1} onClick={() => navigate("/upload-blog")}>
          <img src={blogicon} alt="Logo" style={{ width: "5em", height: "5em",mixBlendMode:'darken'  }} />
          <p style={{ color: "#1f2b6c", fontSize: "1.4em" }}> Blogs</p>
          <p style={{ color: "#1f2b6c", fontSize: "1.4em" }}>{blogCount}</p>
        </div>
        <div className={styles.box2} onClick={() => navigate("/upload-admin")}>
          <img src={Logo} alt="Logo" style={{ width: "5em", height: "5em",mixBlendMode:'darken'  }} />
          <p style={{ color: "#1f2b6c", fontSize: "1.4em" }}>Admin</p>
          <p style={{ color: "#1f2b6c", fontSize: "1.4em" }}>{adminCount}</p>
        </div>
        <div className={styles.box3} onClick={() => navigate("/appointments")}>
          <img src={appointmenticon} alt="Logo" style={{ width: "5em", height: "5em",mixBlendMode:'darken' }} />
          <p style={{ color: "#1f2b6c", fontSize: "1.4em" }}>Appointments</p>
          <p style={{ color: "#1f2b6c", fontSize: "1.4em" }}>{appointmentCount}</p>
        </div>
      </div>
      <div
        style={{ marginTop: "5em" }}
        className={`overflow-x-auto shadow-md sm:rounded-lg ${styles.tab}`}
      >
        <table className="w-full border-[4px] text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase border-b-[4px] bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Doctor Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
            </tr>
          </thead>
          <tbody>
            {currentAppointments.map((appointment, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b-[4px] dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                  {appointment.name}
                </td>
                <td className="px-6 py-4 text-gray-900">{appointment.email}</td>
                <td className="px-6 py-4 text-gray-900">
                  {appointment.gender}
                </td>
                <td className="px-6 py-4 text-gray-900">
                  {doctors[appointment.doctorId]}
                </td>
                <td className="px-6 py-4 text-gray-900">
                  {new Date(appointment.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-gray-900">{appointment.time}</td>
                <td className="px-6 py-4 text-gray-900">
                  {appointment.phoneNo}
                </td>
                <td className="px-6 py-4 text-gray-900">
                  {appointment.department}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={`${styles.pagination} my-4`}>
          {currentPage > 1 && (
            <button
              onClick={() => paginate(currentPage - 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
            >
              Prev
            </button>
          )}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline">
            {currentPage}
          </button>
          {currentPage < Math.ceil(appointments.length / itemsPerPage) && (
            <button
              onClick={() => paginate(currentPage + 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;

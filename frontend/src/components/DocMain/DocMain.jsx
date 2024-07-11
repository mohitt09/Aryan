import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styles from "../../styles/DoctorProfile.module.css";

function DocMain() {
  const location = useLocation();
  const { profileId } = location.state;
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/appointments/${profileId}`
        );
        const appointments = response.data;

        // Sort appointments by date in descending order
        appointments
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .reverse();

        setAppointments(appointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [profileId]);

  const handleStatusChange = async (id, action, customMessage = null) => {
    let statusMessage;

    // Set default message based on action
    switch (action) {
      case "approve":
        statusMessage = "Appointment has been approved by the doctor.";
        break;
      case "reject":
        statusMessage = "Appointment has been rejected by the doctor.";
        break;
      case "reschedule":
        statusMessage = "Appointment has been rescheduled by the doctor.";
        break;
      default:
        statusMessage = ""; // Default message if action is not recognized
    }

    // If customMessage is provided, use it instead
    if (customMessage) {
      statusMessage = customMessage;
    }

    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/appointments/${id}/status`,
        { action, statusMessage }
      );
      const updatedAppointment = response.data;

      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) => {
          if (appointment._id === id) {
            return {
              ...appointment,
              isApproved: updatedAppointment.isApproved,
              isRescheduled: updatedAppointment.isRescheduled,
              statusMessage: updatedAppointment.statusMessage,
            };
          }
          return appointment;
        })
      );
    } catch (error) {
      console.error("Error updating appointment status:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAppointments = appointments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusColor = (appointment) => {
    if (appointment.isApproved) {
      return "green";
    } else if (appointment.isRescheduled) {
      return "orange";
    } else if (
      appointment.isApproved === false &&
      appointment.isRescheduled === false
    ) {
      return "red";
    } else {
      return "blue"; // Pending by default
    }
  };

  const getStatusText = (appointment) => {
    if (appointment.isApproved) {
      return "Approved";
    } else if (appointment.isRescheduled) {
      return "Rescheduled";
    } else if (
      appointment.isApproved === false &&
      appointment.isRescheduled === false
    ) {
      return "Rejected";
    } else {
      return "Pending"; // Pending by default
    }
  };

  return (
    <div
      className={`overflow-x-auto shadow-md sm:rounded-lg ml-65 ${styles.tab}`}
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <th scope="col" className="px-6 py-3">
              Status Message
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentAppointments.map((appointment, index) => (
            <tr
              key={index}
              className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}
            >
              <td className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                {appointment.name}
              </td>
              <td className="px-6 py-4 text-gray-900">{appointment.email}</td>
              <td className="px-6 py-4 text-gray-900">{appointment.gender}</td>

              <td className="px-6 py-4 text-gray-900">
                {new Date(appointment.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-gray-900">{appointment.time}</td>
              <td className="px-6 py-4 text-gray-900">{appointment.phoneNo}</td>
              <td className="px-6 py-4 text-gray-900">
                {appointment.department}
              </td>
              <td className="px-6 py-4 text-gray-900">
                {appointment.statusMessage || "-"}{" "}
                {/* Display statusMessage or dash if not available */}
              </td>
              <td
                className="px-6 py-4"
                style={{ color: getStatusColor(appointment) }}
              >
                {getStatusText(appointment)}
              </td>
              <td className="px-6 py-4 text-gray-900">

                <button
                  style={{
                    color: "white",
                    background: "red",
                    marginRight: "5px",
                  }}
                  className="relative  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleStatusChange(appointment._id, "reject")}
                >
                  Reject
                  <span className="button-animation"></span>
                </button>

                <button
                  style={{ color: "white", background: "orange", marginTop: "5px" }}
                  className="relative  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() =>
                    handleStatusChange(appointment._id, "reschedule")
                  }
                >
                  Reschedule
                  <span className="button-animation"></span>
                </button>
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
  );
}

export default DocMain;

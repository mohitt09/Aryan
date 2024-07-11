import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/Appointment.module.css";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "components/DashboardSidebar/DashboardSidebar";
import RescheduleModal from "components/RescheduleModal/RescheduleModal";

function DashboardMain() {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [doctors, setDoctors] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentsResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/appointments`
        );
        const appointments = appointmentsResponse.data;
        appointments
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .reverse();
        setAppointments(appointments);

        const doctorsResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/doctors`
        );
        const doctorsData = doctorsResponse.data;
        const specialitiesSet = new Set();
        doctorsData.forEach((doctor) => {
          specialitiesSet.add(doctor.speciality);
        });
        setDoctors(doctorsData);
        setSpecialities(Array.from(specialitiesSet));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAppointments = appointments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleStatusChange = async (id, action) => {

    if (action === 'reschedule') {
      const appointment = appointments.find((appt) => appt._id === id);
      setCurrentAppointment(appointment);
      setModalIsOpen(true);
      return;
    }
    
    let statusMessage;

    // Set default message based on action
    switch (action) {
      case "approve":
        statusMessage = "Appointment has been approved by the Admin.";
        break;
      case "reject":
        statusMessage = "Appointment has been rejected by the Admin.";
        break;
      case "reschedule":
        statusMessage = "Appointment has been rescheduled by the Admin.";
        break;
      default:
        statusMessage = ""; // Default message if action is not recognized
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

  const handleModalClose = () => {
    setModalIsOpen(false);
    setCurrentAppointment(null);
  };

  const handleAppointmentUpdate = (updatedAppointment) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment._id === updatedAppointment._id
          ? updatedAppointment
          : appointment
      )
    );
    handleModalClose();
  };

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
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <div
        style={{ marginTop: "1em" }}
        className={`overflow-x-auto shadow-md sm:rounded-lg ml-65 ${styles.tab}`}
      >
        <table className="w-full text-sm border-[4px] text-left rtl:text-right text-black dark:text-gray-400">
          <thead className="text-xs text-gray-700 border-b-[4px] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                Dr. Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
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
            {currentAppointments.map((appointment) => (
              <tr
                key={appointment._id}
                className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b-[4px] dark:border-gray-700 ${styles.tableRow}`}
              >
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  {appointment.name}
                </td>
                <td className="px-6 py-4">{appointment.email}</td>
                <td className="px-6 py-4">{appointment.gender}</td>
                <td className="px-6 py-4">
                  {doctors.find((doc) => doc.doctorId === appointment.doctorId)
                    ?.name || ""}
                </td>
                <td className="px-6 py-4">
                  {new Date(appointment.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{appointment.time}</td>
                <td className="px-6 py-4">{appointment.phoneNo}</td>
                <td className="px-6 py-4">{appointment.department}</td>
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
                <td className="px-6 py-4">
                  <button
                    style={{ color: "white", background: "#3470ff" }}
                    className="relative hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={() =>
                      handleStatusChange(appointment._id, "approve")
                    }
                  >
                    Approve
                  </button>
                  <button
                    style={{
                      color: "white",
                      background: "red",
                      marginTop: "5px",
                    }}
                    className="relative hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() =>
                      handleStatusChange(appointment._id, "reject")
                    }
                  >
                    Reject
                  </button>
                  <button
                    style={{
                      color: "white",
                      background: "orange",
                      marginTop: "5px",
                    }}
                    className={` ${styles.reschedule} relative hover:bg-orange-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                    onClick={() =>
                      handleStatusChange(appointment._id, "reschedule")
                    }
                  >
                    Reschedule
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
      {currentAppointment && (
        <RescheduleModal
          isOpen={modalIsOpen}
          onClose={handleModalClose}
          appointment={currentAppointment}
          onUpdate={handleAppointmentUpdate}
          doctors={doctors}
          specialities={specialities}
        />
      )}
    </div>
  );
}

export default DashboardMain;

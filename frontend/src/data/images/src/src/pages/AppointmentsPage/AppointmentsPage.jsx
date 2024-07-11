import React, { useState, useEffect } from "react";
import axios from "axios";

const AppointmentsPage = () => {
 const [appointments, setAppointments] = useState([]);

 useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/appointments`);
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
 }, []);

 const approveAppointment = async (id) => {
    try {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/appointments/${id}/approve`);
      setAppointments(appointments.map(appointment => appointment._id === id ? { ...appointment, isApproved: true } : appointment));
    } catch (error) {
      console.error("Error approving appointment:", error);
    }
 };

 const rejectAppointment = async (id) => {
    try {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/appointments/${id}/reject`);
      setAppointments(appointments.map(appointment => appointment._id === id ? { ...appointment, isApproved: false } : appointment));
    } catch (error) {
      console.error("Error rejecting appointment:", error);
    }
 };

 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-4xl font-bold underline m-5">Appointments</h1>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Doctor Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Department</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id} className={appointment.isApproved ? "bg-green-100" : "bg-red-100"}>
                <td className="border px-4 py-2">{appointment._id}</td>
                <td className="border px-4 py-2">{appointment.name}</td>
                <td className="border px-4 py-2">{appointment.email}</td>
                <td className="border px-4 py-2">{appointment.gender}</td>
                <td className="border px-4 py-2">{appointment.doctorName}</td>
                <td className="border px-4 py-2">{appointment.date}</td>
                <td className="border px-4 py-2">{appointment.time}</td>
                <td className="border px-4 py-2">{appointment.phoneNo}</td>
                <td className="border px-4 py-2">{appointment.message}</td>
                <td className="border px-4 py-2">{appointment.department}</td>
                <td className="border px-4 py-2">
                 {appointment.isApproved === true ? (
                    <span className="text-green-500">Approved</span>
                 ) : appointment.isApproved === false ? (
                    <span className="text-red-500">Rejected</span>
                 ) : (
                    <>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => approveAppointment(appointment._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                        onClick={() => rejectAppointment(appointment._id)}
                      >
                        Reject
                      </button>
                    </>
                 )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
 );
};

export default AppointmentsPage;
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import style from './Reschedule.module.css';

Modal.setAppElement("#root");

function RescheduleModal({
  isOpen,
  onClose,
  appointment,
  onUpdate,
  doctors,
  specialities,
}) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    doctorId: "",
    department: "",
    email: "",
    patientNumber: "", // Added state for patient number
    name: "",
  });
  const [doctorName, setDoctorName] = useState("");
  const [timeslots, setTimeslots] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [weekdays, setWeekdays] = useState([]);

  useEffect(() => {
    if (appointment) {
      setFormData({
        date: new Date(appointment.date).toISOString().split("T")[0],
        time: appointment.time,
        doctorId: appointment.doctorId,
        department: appointment.department,
        email: appointment.email,
        patientNumber: appointment.phoneNo || "", // Set patient number from appointment data
        name: appointment.name || "",
      });

      fetchDoctorDetails(
        appointment.doctorId,
        new Date(appointment.date).toISOString().split("T")[0]
      );
    }
  }, [appointment]);

  const fetchDoctorDetails = async (doctorId, date) => {
    try {
      console.log(`Fetching doctor details for doctorId: ${doctorId}`);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/doctors/${doctorId}`
      );
      const doctor = response.data;
      console.log("Doctor details:", doctor);

      if (doctor) {
        setWeekdays(doctor.workingDays || []);
        setDoctorName(doctor.name);
        const availableTimeSlots = doctor.timeSlots
          ? doctor.timeSlots.flatMap(({ startTime, endTime }) =>
              generateTimeSlots(startTime, endTime, 15)
            )
          : [];
        console.log("Generated time slots:", availableTimeSlots);
        setTimeslots(availableTimeSlots);
        filterAvailableTimeslots(doctorId, availableTimeSlots, date);
        setFormData((prevFormData) => ({
          ...prevFormData,
          department: doctor.speciality,
        }));
      } else {
        setDoctorName("");
        setTimeslots([]);
        setWeekdays([]);
      }
    } catch (error) {
      console.error("Error fetching doctor details:", error);
      setDoctorName("");
      setTimeslots([]);
      setWeekdays([]);
    }
  };

  const generateTimeSlots = (startTime, endTime, intervalMinutes) => {
    const slots = [];
    let current = parseTime(startTime);
    const end = parseTime(endTime);

    while (current < end) {
      slots.push(formatTimeSlot(current));
      current.setMinutes(current.getMinutes() + intervalMinutes);
    }

    return slots;
  };

  const formatTimeSlot = (date) => {
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, "0");
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  };

  const parseTime = (time) => {
    const [hourString, minute] = time.split(":");
    const date = new Date();
    date.setHours(parseInt(hourString, 10));
    date.setMinutes(parseInt(minute, 10));
    return date;
  };

  const filterAvailableTimeslots = async (
    doctorId,
    availableTimeSlots,
    date
  ) => {
    try {
      console.log(
        `Fetching appointments for filtering timeslots for doctorId: ${doctorId}, date: ${date}`
      );
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/appointments/${doctorId}/${date}`
      );
      const appointments = response.data;
      console.log("Appointments for selected date:", appointments);
      const appointmentTimesSet = new Set(appointments);
      console.log("Appointment times set:", appointmentTimesSet);

      const availableSlotsAfterBooking = availableTimeSlots.filter(
        (slot) => !appointmentTimesSet.has(slot)
      );
      console.log(
        "Available time slots after filtering:",
        availableSlotsAfterBooking
      );

      setAvailableTimes(availableSlotsAfterBooking);
    } catch (error) {
      console.error("Error fetching appointment times:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (name === "doctorId") {
      console.log(`Doctor selected: ${value}`);
      fetchDoctorDetails(value, formData.date);
    } else if (name === "date") {
      console.log(`Date selected: ${value}`);
      fetchDoctorDetails(formData.doctorId, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedDate = new Date(formData.date);
    const selectedDay = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
    }).toLowerCase();

    const errors = [];
    if (!weekdays.map((day) => day.toLowerCase()).includes(selectedDay)) {
      console.log(weekdays);
      console.log(selectedDay);
      errors.push("Selected day is not available. Please select another day.");
    }
    if (!formData.date) {
      errors.push("Please select a date.");
    }
    if (!formData.time) {
      errors.push("Please select a time.");
    }
    if (!formData.doctorId) {
      errors.push("Please select a doctor.");
    }
    if (!formData.department) {
      errors.push("Please select a department.");
    }
    if (!formData.email) {
      errors.push("Please enter an email address.");
    }

    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    try {
      console.log("Submitting form with data:", formData);
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/appointments/${appointment._id}`,
        formData
      );
      console.log("Appointment updated:", response.data);
      onUpdate(response.data);
      onClose();
      toast.success("Your appointment has been rescheduled successfully!");
      sendRescheduleConfirmationEmail();
      sendWhatsAppNotification(response.data);
    } catch (error) {
      console.error("Error updating appointment:", error);
      toast.error("An error occurred while updating the appointment.");
    }
  };

  const sendRescheduleConfirmationEmail = async () => {
    try {
      const doctorResponse = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/doctors/${formData.doctorId}`
      );
      const doctor = doctorResponse.data;
      const doctorName = doctor.name;

      console.log(formData);

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/appointments/send-reschedule-email`,
        {
          email: formData.email,
          appointmentDetails: {
            name: formData.name,
            date: formData.date,
            time: formData.time,
            department: formData.department,
            doctorName: doctorName,
          },
        }
      );

      console.log("Reschedule email sent:", response.data);
      toast.success("Reschedule confirmation email sent successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error sending reschedule email:", error.message);
      toast.error("Failed to send reschedule confirmation email", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const sendWhatsAppNotification = async (updatedAppointment) => {
    const submissionData = {
      name: updatedAppointment.name,
      number: formData.patientNumber, // Using the patient's number from formData
      doctorName: doctorName,
    };

    console.log(submissionData);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/WhatappRoutes/send-whatsapp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      const data = await response.json(); // Try to parse response as JSON

      if (response.ok) {
        console.log("WhatsApp notification sent:", data);
        // toast.success("WhatsApp notification sent successfully", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
      } else {
        console.error("Failed to send WhatsApp notification:", data);
        toast.error("Failed to send WhatsApp notification", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error sending WhatsApp notification:", error.message);
      toast.error("Failed to send WhatsApp notification", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <ToastContainer />

      <div className={style.Modal}
        isOpen={isOpen}
        onRequestClose={onClose}
        data-aos='fade-down'
      >
        <div style={{ background: 'white' }} className={` ${style.box} p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto`}>
          <h2 className="text-xl font-semibold text-center mb-4">Reschedule Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="time"
              >
                Time
              </label>
              <select
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {availableTimes.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="doctorId"
              >
                Doctor
              </label>
              <select
                name="doctorId"
                id="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.doctorId} value={doctor.doctorId}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="department"
              >
                Department
              </label>
              <select
                name="department"
                id="department"
                value={formData.department}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                disabled
              >
                <option value="">Select Department</option>
                {specialities.map((speciality, index) => (
                  <option key={index} value={speciality}>
                    {speciality}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="weekdays"
              >
                Available Days
              </label>
              <ul className="list-disc list-inside">
                {weekdays.map((day, index) => (
                  <li key={index}>{day}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                style={{ color: 'white' }}
                className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reschedule
              </button>
              <button
                type="button"
                onClick={onClose}
                style={{ color: 'white' }}
                className="bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RescheduleModal;

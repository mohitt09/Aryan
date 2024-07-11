import React, { useState, useEffect } from "react";
import style from "../../styles/home.module.css";
import { Img, SelectBox } from "components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomeColumnNine = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    doctorId: "",
    date: "",
    time: "",
    phoneNo: "",
    department: "",
    message: "",
  });
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [workingDays, setWorkingDays] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/doctors`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error.message);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      const doctor = doctors.find(
        (doc) => doc.speciality === selectedDepartment
      );
      if (doctor) {
        fetchDoctorDetails(
          doctor.doctorId,
          formData.date // Use formData.date here
        );
      }
    }
  }, [selectedDepartment, doctors, formData.date]);

  useEffect(() => {
    if (formData.doctorId && formData.date) {
      fetchDoctorDetails(formData.doctorId, formData.date);
    }
  }, [formData.doctorId, formData.date]);

  const fetchDoctorDetails = async (doctorId, date) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/doctors/${doctorId}`
      );
      const doctor = response.data;

      if (doctor) {
        setSelectedDoctor(doctor.name);
        setFormData((prevFormData) => ({
          ...prevFormData,
          doctorId: doctor.doctorId,
          department: doctor.speciality,
        }));
        setWorkingDays(doctor.workingDays || []);
        const availableTimeSlots = doctor.timeSlots
          ? doctor.timeSlots.flatMap(({ startTime, endTime }) =>
              generateTimeSlots(startTime, endTime, 15)
            )
          : [];
        setTimeSlots(availableTimeSlots);
        filterAvailableTimeslots(doctorId, availableTimeSlots, date);
      }
    } catch (error) {
      console.error("Error fetching doctor details:", error.message);
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

  const filterAvailableTimeslots = async (doctorId, availableTimeSlots, date) => {
    try {
      console.log("Filtering available timeslots for date:", date);

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/appointments/${doctorId}/${date}`
      );

      console.log("Appointments for selected date:", response.data);

      const appointments = response.data;
      const appointmentTimesSet = new Set(appointments.map((app) => app.time));

      const availableSlotsAfterBooking = availableTimeSlots.filter(
        (slot) => !appointmentTimesSet.has(slot)
      );

      console.log(
        "Available timeslots after filtering:",
        availableSlotsAfterBooking
      );

      setAvailableTimes(availableSlotsAfterBooking);
    } catch (error) {
      console.error("Error filtering appointment times:", error.message);
    }
  };

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "department") {
      const doctor = doctors.find((doc) => doc.speciality === value);
      if (doctor) {
        fetchDoctorDetails(doctor.doctorId, formData.date);
      }
    }

    if (name === "date") {
      if (formData.doctorId) {
        console.log("Date changed:", value);
        fetchDoctorDetails(formData.doctorId, value);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "email",
      "gender",
      "doctorId",
      "date",
      "time",
      "phoneNo",
      "department",
    ];

    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      const emptyFieldNames = emptyFields.join(", ");
      alert(`Please fill in the following fields: ${emptyFieldNames}`);
      return;
    }

    if (!selectedDoctor || !selectedDepartment) {
      alert("Please select a doctor and a department.");
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      toast.error("Name can only contain letters and spaces.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNo)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    const selectedDate = new Date(formData.date);
    const selectedDay = selectedDate
      .toLocaleString("en-US", { weekday: "long" })
      .toLowerCase();

    if (!workingDays.includes(selectedDay)) {
      toast.error(
        "The selected date does not match the doctor's working days."
      );
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/doctors/${formData.doctorId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch doctor details");
      }
      const doctorDetails = await response.json();
      const doctorFees = doctorDetails.fees;

      navigate("/payment", { state: { formData, doctorFees } });
    } catch (error) {
      console.error(
        "Error fetching doctor details or navigating:",
        error.message
      );
    }
  };

  const departments = [...new Set(doctors.map((doctor) => doctor.speciality))];

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center justify-start w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex sm:flex-col flex-row items-center justify-evenly w-full">
            <div className="flex sm:flex-1 flex-col items-center justify-start w-1/2 sm:w-full">
              <input
                style={{ color: "white" }}
                type="text"
                className="bg-indigo-900 rounded-tl-md h-[50px] justify-center pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] text-base text-white placeholder-white w-[245px]"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <input
                style={{ color: "white" }}
                type="text"
                className="bg-indigo-900 h-[50px] justify-center pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] text-base text-white placeholder-white w-[245px]"
                placeholder="Email ID"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <SelectBox
                style={{ color: "white" }}
                className="bg-indigo-900 h-[50px] pl-5 sm:pr-5 pr-[35px] pt-[17px] text-base text-white placeholder-white w-[245px]"
                placeholder="Gender"
                options={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                ]}
                value={selectedGender}
                onChange={(value) => {
                  setSelectedGender(value);
                  handleChange("gender", value);
                }}
              />
              <SelectBox
                style={{ color: "white" }}
                className="bg-indigo-900 h-[50px] pl-5 sm:pr-5 pr-[35px] pt-[17px] text-base text-white placeholder-white w-[245px]"
                placeholder="Department"
                options={departments.map((dept) => ({
                  value: dept,
                  label: dept,
                }))}
                value={selectedDepartment}
                onChange={(value) => {
                  setSelectedDepartment(value);
                  handleChange("department", value);
                }}
              />
              <input
                style={{ color: "white" }}
                name="date"
                type="date"
                className="bg-indigo-900 h-[50px] justify-center pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] text-base text-white placeholder-white w-[245px]"
                placeholder="Date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />
              <SelectBox
                style={{ color: "white" }}
                className="bg-indigo-900 h-[50px] pl-5 sm:pr-5 pr-[35px] pt-[17px] text-base text-white placeholder-white w-[245px]"
                placeholder="Available Time"
                options={availableTimes.map((time) => ({
                  value: time,
                  label: time,
                }))}
                value={formData.time}
                onChange={(value) => handleChange("time", value)}
              />
            </div>
            <div className="flex sm:flex-1 flex-col items-center justify-start w-1/2 sm:w-full">
              <input
                style={{ color: "white" }}
                type="tel"
                className="bg-indigo-900 rounded-tr-md h-[50px] justify-center pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] text-base text-white placeholder-white w-[245px]"
                placeholder="Phone Number"
                value={formData.phoneNo}
                onChange={(e) => handleChange("phoneNo", e.target.value)}
              />
              <textarea
                style={{ color: "white" }}
                className="bg-indigo-900 h-[200px] pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] text-base text-white placeholder-white w-[245px]"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 cursor-pointer font-medium leading-[normal] mt-10 sm:mt-5 py-4 rounded-[10px] text-black text-center text-lg w-[245px]"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default HomeColumnNine;

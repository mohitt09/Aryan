import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PhoneIcon from "@material-ui/icons/Phone";

import style from "../../styles/Map.module.css";

import { Img, Line, SelectBox, Text, Button } from "components";
import Navbar from "components/Navbar";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";
import AboutUsSubhead from "components/AboutUsSubhead";

const AppointmentPage = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleHide = () => {
    setIsVisible(false);
  };

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);
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
  const [selectedDoctorDetails, setSelectedDoctorDetails] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [workingDays, setWorkingDays] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [appointmentTimes, setAppointmentTimes] = useState([]);

  useEffect(() => {
    // Fetch doctors when the component mounts
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
        setSelectedDoctor(doctor.name);
        setFormData((prevData) => ({
          ...prevData,
          doctorId: doctor.doctorId,
        }));
        // Generate and set unique time slots for the selected doctor
        const availableTimeSlots = generateTimeSlots(doctor.timeSlots);
        setTimeSlots(availableTimeSlots);
        setWorkingDays(doctor.workingDays);
        // fetchAppointmentTimes(doctor.doctorId, availableTimeSlots);
      }
    }
  }, [selectedDepartment, doctors]);

  // Function to handle date change
  const handleDateChange = async (selectedDate) => {
    console.log("Selected date:", selectedDate);
    setStartDate(selectedDate);
    if (selectedDepartment && selectedDoctor) {
      console.log(formData.doctorId);
      const formattedDate = formatDateForDatabase(selectedDate);
      console.log(formattedDate);
      console.log(
        "Fetching appointment times for doctor:",
        formData.doctorId,
        "on date:",
        selectedDate
      );
      fetchDoctorAppointmentTimes(formData.doctorId, formattedDate);
    } else {
      console.log("Selected department or doctor is not available yet.");
    }
  };

  const formatDateForDatabase = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so we add 1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const fetchDoctorAppointmentTimes = async (doctorId, selectedDate) => {
    try {
      console.log(
        `Fetching appointments for filtering timeslots for doctorId: ${doctorId}, date: ${selectedDate}`
      );
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/appointments/${doctorId}/${selectedDate}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }
      const appointments = await response.json();
      console.log("Appointments fetched successfully:", appointments);

      const appointmentTimesSet = new Set(appointments);
      console.log("Appointment times set:", appointmentTimesSet);

      console.log(timeSlots);

      // Filter out the booked times from the available time slots using the Set for O(1) lookups
      const availableSlotsAfterBooking = timeSlots.filter((slot) => {
        return !appointmentTimesSet.has(slot);
      });
      console.log(
        "Available slots after filtering:",
        availableSlotsAfterBooking
      );

      setAppointmentTimes(Array.from(appointmentTimesSet));
      setTimeSlots(availableSlotsAfterBooking); // Update time slots after setting appointment times
    } catch (error) {
      console.error("Error fetching appointment times:", error.message);
    }
  };

  const fetchAppointmentTimes = async (doctorId, availableTimeSlots) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/appointments/${doctorId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }
      const appointments = await response.json();

      // Check if there are appointments for the selected date
      if (appointments.length === 0) {
        // If no appointments, set the available time slots directly
        setTimeSlots(availableTimeSlots);
      } else {
        // If appointments exist, process them
        const appointmentTimesSet = new Set(
          appointments.map((appointment) => appointment.time)
        );

        // Set appointment times from fetched appointments
        setAppointmentTimes(Array.from(appointmentTimesSet));

        // Filter out the booked times from the available time slots using the Set for O(1) lookups
        const availableSlotsAfterBooking = availableTimeSlots.filter((slot) => {
          return !appointmentTimesSet.has(slot);
        });

        // Set the time slots after filtering
        setTimeSlots(availableSlotsAfterBooking);
      }
    } catch (error) {
      console.error("Error fetching appointment times:", error.message);
    }
  };

  function formatTimeTo12Hour(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    let period = hours >= 12 ? "PM" : "AM";
    let formattedHours = hours % 12 || 12; // Convert to 12-hour format and handle 0 (midnight) as 12
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  }

  const generateTimeSlots = (doctorTimeSlots) => {
    const slots = [];
    doctorTimeSlots.forEach((slot) => {
      const start = new Date(`1970-01-01T${slot.startTime}Z`);
      const end = new Date(`1970-01-01T${slot.endTime}Z`);
      while (start < end) {
        const time24 = start.toISOString().slice(11, 16);
        const time12 = formatTimeTo12Hour(time24); // Format to 12-hour format
        slots.push(time12);
        start.setMinutes(start.getMinutes() + 15);
      }
    });
    return slots;
  };

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Directly update formData with the selected date
    const formattedDate = startDate.toISOString().split("T")[0];
    const updatedFormData = {
      ...formData,
      date: formattedDate,
    };
    setFormData(updatedFormData);

    // Use the updated formData for validation and submission
    console.log("Submission data:", updatedFormData);

    // Validate form data
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

    const emptyFields = requiredFields.filter(
      (field) => !updatedFormData[field]
    );

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
    if (!nameRegex.test(updatedFormData.name)) {
      toast.error("Name can only contain letters and spaces.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Email validation: Check for proper format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(updatedFormData.email)) {
      toast.error("Please enter a valid email address.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Phone Number validation: Exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(updatedFormData.phoneNo)) {
      toast.error("Phone number must be exactly 10 digits.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const selectedDate = new Date(updatedFormData.date);
    const selectedDay = selectedDate
      .toLocaleString("en-US", { weekday: "long" })
      .toLowerCase();
    console.log(selectedDay);
    if (!workingDays.includes(selectedDay)) {
      toast.error(
        "The selected date does not match the doctor's working days.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return;
    }

    // Fetch doctor fees based on the selected doctor's ID
    try {
      // Submit the appointment
      const appointmentResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/appointments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );

      if (!appointmentResponse.ok) {
        const errorData = await appointmentResponse.json();
        console.error("Error submitting appointment:", errorData);
        toast.error(errorData.error || "Failed to submit appointment", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      const appointmentData = await appointmentResponse.json();
      console.log("Appointment submitted successfully:", appointmentData);
      toast.success(
        "Your appointment has been submitted successfully, now complete your payment to book your slot",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );

      // Fetch doctor fees based on the selected doctor's ID
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/doctors/${updatedFormData.doctorId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch doctor details");
      }
      const doctorDetails = await response.json();
      const doctorFees = doctorDetails.fees;

      // Navigate to the payment page with form data and doctor fees
      navigate("/payment", { state: { updatedFormData, doctorFees } });
    } catch (error) {
      console.error(
        "Error submitting appointment or fetching doctor details:",
        error.message
      );
      toast.error("Failed to submit appointment or fetch doctor details", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const departments = [...new Set(doctors.map((doctor) => doctor.speciality))];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        
        <Navbar
          className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"
          activePage="appointment"
        />
        <AboutUsSubhead
          className="h-[250px] md:px-5 relative w-full"
          rectanglethree="images/img_rectangle3.png"
          homeabouttext="Home / Appointment"
          aboutustext="Book an Appointment"
        />
        <div className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row items-end gap-5 justify-between w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[1px] items-center justify-start w-1/2 md:w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                <Text
                  className={` ${style.book} md:text-3xl sm:text-[28px] text-[32px] `}
                  size="txtYesevaOneRegular32"
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    color: "#3e3e3e",
                    fontSize: "2em",
                    Textalign: "center",
                  }}
                >
                  Book an Appointment
                </Text>
                <div className={style.line}></div>

                <Text
                  className={` ${style.appoint} leading-[140.00%] text-justify text-base text-gray-900 w-full`}
                  size="txtWorkSansRegular16"
                  style={{
                    fontFamily: "Habibi, serif",
                    color: "#8997a7",
                    fontSize: "1.25em",
                  }}
                >
                  Book your appointment at Aryan Hospital effortlessly. Choose
                  your specialist, select a time, and begin your journey to
                  better health. Experience expert care, modern facilities, and
                  a patient-first approach. Need help? Contact us. Your wellness
                  is our priority.
                </Text>
              </div>

              <form
                style={{ zIndex: "0" }}
                onSubmit={handleSubmit}
                className={style.model}
              >
                <div className={style.form}>
                  

                  <h2>Appointment Details</h2>

                  <div className={style.line}></div>

                  <div className={style.field}>
                    <div className={style.left}>
                      <label htmlFor="name">
                        Name <span style={{ color: "red" }}>*</span>{" "}
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                    </div>

                    <div className={style.right}>
                      <label htmlFor="Email">
                        Your Email <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={style.field}>
                    <div className={style.left}>
                      <label htmlFor="Birth">Department</label>

                      <SelectBox
                        className={style.SelectBox}
                        placeholderClassName="!text-white"
                        indicator={
                          <Img
                            style={{ color: "gray" }}
                            className="h-[9px] mr-[0] w-4 !text-white"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="department"
                        options={departments.map((department) => ({
                          label: department,
                          value: department,
                        }))}
                        isSearchable={false}
                        placeholder="Department"
                        value={selectedDepartment}
                        onChange={(value) => {
                          handleChange("department", value);
                          setSelectedDepartment(value);
                        }}
                      />
                    </div>

                    <div className={style.left}>
                      <label htmlFor="Birth">Gender</label>
                      <SelectBox
                        className={style.SelectBox}
                        placeholderClassName="!text-white"
                        indicator={
                          <Img
                            className="h-[9px] mr-[0] w-4 text-white"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="gender"
                        options={[
                          { label: "Male", value: "male" },
                          { label: "Female", value: "female" },
                        ]}
                        isSearchable={false}
                        placeholder="Gender"
                        value={selectedGender}
                        onChange={(value) => {
                          handleChange("gender", value);
                          setSelectedGender(value);
                        }}
                      />
                    </div>
                  </div>

                  <div className={style.field}>
                    <div className={style.right}>
                      <label htmlFor="phone">Date</label>

                      <input
                        type="date"
                        name="date"
                        id="date"
                        value={startDate.toISOString().split("T")[0]}
                        onChange={(e) =>
                          handleDateChange(new Date(e.target.value))
                        }
                        placeholder="Select Date"
                      />
                    </div>

                    <div className={style.right}>
                      <label htmlFor="phone">Phone</label>

                      <input
                        type="text"
                        placeholder="Phone"
                        value={formData.phoneNo}
                        onChange={(e) =>
                          handleChange("phoneNo", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className={style.field}>
                    <div className={style.left}>
                      <label htmlFor="Birth">Doctor</label>
                      <input
                        type="text"
                        placeholder="Doctor"
                        value={selectedDoctor}
                        readOnly
                      />
                    </div>

                    <div className={style.right}>
                      <label htmlFor="phone">Time</label>
                      <select
                        value={formData.time}
                        onChange={(e) => handleChange("time", e.target.value)}
                      >
                        <option
                          style={{ color: "gray" }}
                          value=""
                          disabled
                          hidden
                        >
                          Select Time
                        </option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={style.main}>
                    <input
                      type="text"
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>

                  <div className={style.sub}>
                    <button className={style.button} type="submit">
                      <span className={style.button1}>Book Appointment</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div
              style={{ background: "#2563eb" }}
              className="flex md:flex-1 h-[100%] text-justify flex-col font-yesevaone items-center justify-start p-11 md:px-10 sm:px-5 rounded-[5px] w-[49%] md:w-full"
            >
              <Text
                className="mt-0.5 text-5xl sm:text-[30px] md:text-[44px]"
                size="txtYesevaOneRegular48"
                style={{ color: "white" }}
              >
                Schedule hours
                <Text
                  className="text-center mt-0.5 text-2xl  text-blue-100"
                  size="txtYesevaOneRegular48"
                  style={{ color: "white" }}
                >
                  Emergency 24*7
                </Text>
                <Text
                  className="text-center mt-0.5 text-2xl  text-blue-100"
                  size="txtYesevaOneRegular48"
                  style={{ color: "white" }}
                >
                  OPD Timings
                </Text>
              </Text>

              <div className="flex flex-col font-worksans gap-7 items-start justify-start mt-[54px] w-[97%] md:w-full">
                <div className="flex sm:flex-row flex-row sm:gap-5 items-start justify-between sm:justify-between w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                    style={{ color: "white" }}
                  >
                    Monday
                  </Text>
                  <div className="bg-blue-100 h-0.5 sm:ml-[0] ml-[77px]  my-[9px] w-[5%]"></div>
                  <Text
                    className="sm:ml-[0] ml-[51px] text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                    style={{ color: "white" }}
                  >
                    10:00 AM - 02:30 PM <br />
                    04:00 PM - 08:00 PM
                  </Text>
                </div>
                <div className="flex sm:flex-row flex-row sm:gap-5 items-start justify-between sm:justify-between w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                    style={{ color: "white" }}
                  >
                    Tuesday
                  </Text>
                  <div className="bg-blue-100 h-0.5 sm:ml-[0] ml-[74px] my-[9px] w-[5%]"></div>
                  <Text
                    className="sm:ml-[0] ml-[51px] text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                    style={{ color: "white" }}
                  >
                    10:00 AM - 02:30 PM <br />
                    04:00 PM - 08:00 PM
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                    style={{ color: "white" }}
                  >
                    Wednesday
                  </Text>
                  <div className="bg-blue-100 h-0.5 ml-[-5px] my-[9px] w-[5%]"></div>
                  <Text
                    className="text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                    style={{ color: "white" }}
                  >
                    10:00 AM - 02:30 PM <br />
                    04:00 PM - 08:00 PM
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                    style={{ color: "white" }}
                  >
                    Thursday
                  </Text>
                  <div className="bg-blue-100 h-0.5 ml-[14px] my-[9px] w-[5%]"></div>
                  <Text
                    className="text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                    style={{ color: "white" }}
                  >
                    10:00 AM - 02:30 PM <br />
                    04:00 PM - 08:00 PM
                  </Text>
                </div>
                <div className="flex sm:flex-row sm:justify-between flex-row sm:gap-5 items-start justify-between w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                    style={{ color: "white" }}
                  >
                    Friday
                  </Text>
                  <div className="bg-blue-100 h-0.5  sm:ml-[0] ml-[90px] my-[9px] w-[5%]"></div>
                  <Text
                    className="sm:ml-[0] ml-[51px] text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                    style={{ color: "white" }}
                  >
                    10:00 AM - 02:30 PM <br />
                    04:00 PM - 08:00 PM
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                    style={{ color: "white" }}
                  >
                    Saturday
                  </Text>
                  <div className="bg-blue-100 h-0.5 ml-[15px] my-[9px] w-[5%]"></div>
                  <Text
                    className="text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                    style={{ color: "white" }}
                  >
                    10:00 AM - 02:30 PM <br />
                    04:00 PM - 08:00 PM
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                    style={{ color: "white" }}
                  >
                    Sunday
                  </Text>
                  <div className="bg-blue-100 h-0.5 ml-[-10px] my-[9px] w-[5%]"></div>
                  <Text
                    className="text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                    style={{ color: "white" }}
                  >
                    24/7 Emergency
                  </Text>
                </div>
              </div>
              <Line className="bg-blue-100 h-0.5 mt-[31px] w-[85%]" />
              <div className="flex flex-row font-worksans gap-2 items-center justify-center mt-8 w-[73%] md:w-full">
                <PhoneIcon style={{ color: "white", fontSize: "3rem" }} />
                <div className="h-[59px] relative w-4/5">
                  <Text
                    className="mb-[-0.01px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 z-[1]"
                    size="txtWorkSansMedium26WhiteA700"
                    style={{ color: "white" }}
                  >
                    Emergency
                  </Text>
                  <Text
                    className="mt-auto mx-auto md:text-2xl sm:text-[22px] text-[26px] text-blue-100"
                    size="txtWorkSansMedium26"
                    style={{ color: "white" }}
                  >
                    (91) 9311339448
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <iframe
            className={style.map}
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5i2n-0QpJqHmEnZBemNZHUY6D3fUyJu8&q=78,+Old+Railway+Rd,+Rattan+Garden,+Shivpuri+Extension,+Sector+7,+Gurugram,+Haryana+122001"
          ></iframe>
        </div>
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
      </div>
    </>
  );
};

export default AppointmentPage;

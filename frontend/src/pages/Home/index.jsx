import React, { useRef, useState, useEffect } from "react";
import style from "../../styles/Cardio.module.css";
// import  Styles from "../../styles/home.module.css";

import { useNavigate } from "react-router-dom";

import { AiOutlineExperiment } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaUserNurse } from "react-icons/fa";
import { FaChild, FaStethoscope, FaHeart } from "react-icons/fa";
import { FaUserMd, FaClinicMedical, FaSyringe } from "react-icons/fa";
import { IoMdHeart, IoIosHeartEmpty, IoMdMedkit } from "react-icons/io";
import { FaBone, FaHandshake, FaHiking } from "react-icons/fa";
import { FaBrain, FaMicrochip } from "react-icons/fa";
import { FaXRay, FaRadiation, FaFlask } from "react-icons/fa";
import { FaHospital, FaFirstAid } from "react-icons/fa";
import img1 from "../../assets/images/ivf2.png";
import img2 from "../../data/images/caro1.jpg";
import img3 from "../../data/images/caro2.jpg";
import cac from "../../data/images/IMG21.jpg";
import o from "../../data/images/22.jpg";
import { FaAmbulance } from "react-icons/fa";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Button, Img, Input, List, Text, SelectBox } from "components";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import HomeColumnNine from "components/HomeColumnNine";
import HomeColumnrectangletwenty from "components/HomeColumnrectangletwenty";
import HomeNewssection from "components/HomeNewssection";
import doctor1 from "../../data/images/doc7.jpg";
import doctor2 from "../../data/images/doc2.jpg";
import doctor3 from "../../data/images/doc9.webp";
import doctor4 from "../../data/images/Header_img.jpg";
import { background } from "@chakra-ui/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const doctorOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomePage = () => {
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

  const doctorImages = [
    {
      image: doctor1,
      title: "A multispecialty hospital",
      title2: "in Gurgaon",
      description: "24*7 Emergency Services",
      description2: "Understanding Role of Emergency Department",
    },
    {
      image: doctor4,
      title: "Expert Care",
      title2: "for Every Patient",
      description: " Personalized and Compassionate",
      description2: "  Treatment",
    },
    {
      image: doctor3,
      title: "Innovative Healthcare",
      title2: "Solutions",
      description: "Advancing Medicine Through ",
      description2: "Research and Technology",
    },
  ];

  const carouselRef = useRef(null);

  const handlePrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

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
      {isVisible && (
        <form
          style={{ zIndex: "10000" }}
          onSubmit={handleSubmit}
          className={style.model}
        >
          <div className={style.form}>
            <div onClick={toggleHide} className={style.close}>
              X
            </div>

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
                  onChange={(e) => handleDateChange(new Date(e.target.value))}
                  placeholder="Select Date"
                />
              </div>

              <div className={style.right}>
                <label htmlFor="phone">Phone</label>

                <input
                  type="text"
                  placeholder="Phone"
                  value={formData.phoneNo}
                  onChange={(e) => handleChange("phoneNo", e.target.value)}
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
                  <option style={{ color: "gray" }} value="" disabled hidden>
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
      )}

      <div className="bg-white-A700 border border-black-900 border-solid flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        
        <Navbar
          className="bg-blue-100  z-1 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"
          activePage="home"
        />
        <div className="flex flex-col font-worksans  relative w-full sm:h-auto sm:px-0">
          <div className={style.sliderMain}>
            <div className={style.sliderCarouselWrapper}>
              <Carousel
                showThumbs={false}
                ref={carouselRef}
                autoPlay
                infiniteLoop
                interval={2000}
              >
                {doctorImages.map((doctor, index) => (
                  <div key={index} className={style.sliderCarouselItem}>
                    <img src={doctor.image} alt={doctor.title} />

                    <div className={style.sliderTextOverlay}>
                      <h2 className={style.title}>
                        <span>{doctor.title}</span> {doctor.title2}
                      </h2>
                      <p className={style.description}>
                        <span>{doctor.description}</span> {doctor.description2}
                      </p>
                      <div
                        style={{
                          marginTop: "1em",
                          display: "flex",
                          justifyContent: "left",
                          paddingLeft: "5%",
                        }}
                      >
                        <button
                          onClick={() => {
                            navigate("/news");
                          }}
                          className={style.button}
                        >
                          <span className={style.button1}>Read MORE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className={style.cart}>
            <div className={style.cart1}>
              <AiOutlineExperiment className={style.color} />

              <h6>EMERGENCY CARE</h6>
              <p>
                Emergency Care from Aryan Hospital - where lives are saved every
                day. Cutting-edge diagnostic tools like CT scan, Ultrasound,
                X-ray.
              </p>

              <button
                onClick={() => {
                  navigate("/news");
                }}
                className={style.button}
              >
                <span className={style.button1}>Read MORE</span>
              </button>
            </div>

            <div className={style.cart2}>
              <IoTimeOutline className={style.color} />

              <h6>OPD HOURS</h6>

              <p>
                The Aryan Hospital operates on a 24/7 schedule, providing
                continuous medical care and services to patients at all hours of
                the day.
              </p>

              <ul>
                <li>
                  <span>Mon-Sat</span>
                  <span>10:00 AM - 02:30PM</span>
                </li>
                <li>
                  <span>Mon-Sat</span>
                  <span>04:00 PM - 08:00 PM</span>
                </li>
                <li>
                  <span>Sunday</span>
                  <span>Emergency</span>
                </li>
              </ul>
            </div>

            <div className={style.cart3}>
              <FaCalendarAlt className={style.color} />
              <h6>APPOINTMENT</h6>
              <p>
                Book your appointment at Aryan Hospital effortlessly. Choose
                your specialist, select a time, and begin your journey to better
                health.
              </p>

              <button className={style.button} onClick={toggleVisibility}>
                <span className={style.button1}>APPOINTMENT</span>
              </button>
            </div>
          </div>

          <div className={style.CustumMv}>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-[-50px] mx-auto w-[73%] sm:w-full z-[1] sm:displayNone">
              <Input
                name="goals"
                placeholder="Book an Appointment"
                className="p-0 placeholder:text-white-A700 text-base text-left w-full"
                wrapClassName="flex w-auto md:w-full"
                suffix={
                  <Img
                    className="h-[50px] ml-[35px] my-auto"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                }
                shape="round"
                color="indigo_900"
                size="md"
                variant="fill"
              ></Input>

              <Input
                name="goals_One"
                placeholder="Book an Appointment"
                className="p-0 placeholder:text-indigo-900 text-base text-left w-full"
                wrapClassName="flex md:h-auto ml-5 md:ml-[0] w-auto md:w-full"
                suffix={
                  <Img
                    className="ml-[35px] my-auto"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                }
                shape="round"
                color="blue_100"
                size="lg"
                variant="fill"
              ></Input>
              <Input
                name="goals_Two"
                placeholder="Book an Appointment"
                className="p-0 placeholder:text-white-A700 text-base text-left w-full"
                wrapClassName="flex md:h-auto md:ml-[0] ml-[21px] w-auto md:w-full"
                suffix={
                  <Img
                    className="ml-[35px] my-auto"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                }
                shape="round"
                color="blue_500"
                size="xl"
                variant="fill"
              ></Input>
            </div>
          </div>
        </div>

        <div className={style.Services}>
          <h4>Specialities</h4>
          <div className={style.line}></div>

          <div className={style.servicescarts}>
            <div className={style.servicescart}>
              <div>
                <span>
                  <IoMdMedkit className={style.icons} />
                </span>
              </div>
              <h3>Dialysis</h3>

              <p>
                Our expert team of nephrologists, certified technicians, and
                caring nurses are here for you. Offering a range of dialysis
                options for both adults and children, including kidney dialsis,
                peritoneal dialysis. Count on our team of experts for your
                well-being.
              </p>
            </div>

            <div className={style.servicescart}>
              <div>
                <span>
                  <FaUserNurse className={style.icons} />
                </span>
              </div>
              <h3>Gynaecology</h3>
              <p>
                Our expert obstetrician gynecologist provides personalized care
                across all life stages, ensuring your well-being every step of
                the way. Count on us to be your dedicated partners in women's
                health, offering unwavering support and expert care
              </p>
            </div>

            <div className={style.servicescart}>
              <div>
                <span>
                  <FaXRay className={style.icons} />
                </span>
              </div>
              <h3>IVF</h3>
              <p>
                We offer a comprehensive range of services, from lUI and IVF to
                egg donation and surrogacy, all delivered by a team of
                world-class specialists. Your dream of parenthood is our
                mission, and we're here to make it a reality with expertise and
                compassion.
              </p>
            </div>

            <div className={style.servicescart}>
              <div>
                <span>
                  <FaStethoscope className={style.icons} />
                </span>
              </div>

              <h3>Pediatrics</h3>
              <p>
                Compassionate pediatric care is our commitment. Our expert peds
                team is dedicated to ensuring your child's health and happiness,
                providing comprehensive support from newborns to teenagers. With
                a focus on nurturing every step of their journey.
              </p>
            </div>

            <div className={style.servicescart}>
              <div>
                <span>
                  <FaBrain className={style.icons} />
                </span>
              </div>
              <h3>Neurology</h3>
              <p>
                Optimize your neurological well-being under supervision of one
                of the best super specialist Neurologist in Gurugram and our
                dedicated team. Our approach for patients with neurological
                disorders include diagnostic evaluation, treatment plan and
                management.
              </p>
            </div>

            <div className={style.servicescart}>
              <div>
                <span>
                  <FaClinicMedical className={style.icons} />
                </span>
              </div>
              <h3>Bariatric Surgery</h3>

              <p>
                Begin your journey to defeat obesity, a global epidemic. Excess
                BMI increases risks like hypertension, diabetes, and sleep
                apnea. Explore Bariatric Surgery for a Healthier Future. Place
                Your Trust in our skilled team for top-quality gastric bypass
                surgery
              </p>
            </div>
          </div>
        </div>

        <div className={style.Choose}>
          <h2>Why Choose Us</h2>
          <div className={style.line}></div>

          <div className={style.container}>
            <div className={style.carouselWrapper}>
              <Carousel
                showThumbs={false}
                autoPlay
                interval={2000}
                infiniteLoop
              >
                <div className={style.carouselItem}>
                  <img src={img1} alt="Slide 1" />
                </div>
                <div className={style.carouselItem}>
                  <img src={img2} alt="Slide 2" />
                </div>
                <div className={style.carouselItem}>
                  <img src={img3} alt="Slide 3" />
                </div>
              </Carousel>
              <div className={style.leftArrow}></div> {/* Add left arrow */}
              <div className={style.rightArrow}></div> {/* Add right arrow */}
            </div>

            <div className={style.right}>
              <div className={style.side}>
                <div className={style.choo}>
                  <div className={style.chooo}>
                    <FaClinicMedical className={style.ico} />
                  </div>
                </div>

                <div className={style.subs}>
                  <h5>Modern Infrastructure</h5>
                  <p>
                    Empowering care with robust infrastructure, where healing
                    finds its home. Where compassion meets efficiency, our
                    infrastructure supports every heartbeat.
                  </p>
                </div>
              </div>

              <div className={style.side}>
                <div className={style.choo}>
                  <div className={style.chooo}>
                    <FaStethoscope className={style.ico} />
                  </div>
                </div>

                <div className={style.subs}>
                  <h5>Qualified Doctors</h5>
                  <p>
                    Expertise meets empathy: Our dedicated doctors bring healing
                    with every diagnosis. Skilled hands, compassionate hearts:
                    Our team of qualified doctors is here for you.
                  </p>
                </div>
              </div>

              <div className={style.side}>
                <div className={style.choo}>
                  <div className={style.chooo}>
                    <FaAmbulance className={style.ico} />
                  </div>
                </div>

                <div className={style.subs}>
                  <h5>Emergency Support</h5>
                  <p>
                    Urgent care, unwavering support: Our emergency services are
                    just a call away. Rapid response, compassionate care: Count
                    on us in your time of need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomeColumnrectangletwenty className="flex flex-col font-worksans items-center justify-start max-w-[95%] mt-16 mx-auto md:px-5 w-full" />
        <HomeNewssection className="bg-gray-50 flex flex-col font-worksans items-center justify-end mt-16 p-16 md:px-10 sm:px-5 w-full" />
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomePage;

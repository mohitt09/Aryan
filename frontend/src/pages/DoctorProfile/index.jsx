import React, { useState, useEffect } from "react";
import Style from "../../styles/Doctor.module.css";
import styless from "../../styles/Map.module.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import CustomDatePicker from "../../components/CustomDatePicker/CustomDatePicker";
import {
  FaMapMarkerAlt,
  FaStar,
  FaUser,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Img } from "components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DoctorProfile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleHide = () => setIsVisible(false);

  const initialFormData2 = {
    name: "",
    number: "",
    optIn: false,
  };

  const [formData2, setFormData2] = useState(initialFormData2);

  const handleChange2 = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(type);
    console.log(value);
    console.log(name);
    console.log(checked);

    setFormData2({
      ...formData2,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    let errorMessage = "";

    if (!formData2.name) errorMessage += "Name is required.\n";
    if (!formData2.number) errorMessage += "Phone number is required.\n";
    if (formData2.number.length !== 10)
      errorMessage += "Phone number is not appropriate.\n";
    if (!formData2.optIn) errorMessage += "You must opt-in for updates.\n";

    if (errorMessage) {
      toast.error(errorMessage);
      setFormData2(initialFormData2);
      return;
    }

    const submissionData = {
      ...formData2,
      doctorName: doctor.name,
    };

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

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData2(initialFormData2);
        window.open(
          "https://chat.whatsapp.com/IHe5reiReuCFaZVsX2ZhyR", 
          "_blank" // Opens in a new tab
        );
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message.");
      setFormData2(initialFormData2);
    }
  };

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

  const navigate = useNavigate();
  const location = useLocation();
  const { doctorId } = location.state;
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      if (doctorId) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/api/doctors/${doctorId}`
          );
          const data = await response.json();
          setDoctor(data);
          setSelectedDoctor(data.name);
          setFormData((prevData) => ({
            ...prevData,
            doctorId: data.doctorId,
            department: data.department,
          }));
          setTimeSlots(generateTimeSlots(data.timeSlots));
          setWorkingDays(data.workingDays);
        } catch (error) {
          console.error("Error fetching doctor details:", error);
        }
      }
    };

    fetchDoctorDetails();
  }, [doctorId]);

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

  const generateTimeSlots = (doctorTimeSlots) => {
    const slots = [];
    doctorTimeSlots.forEach((slot) => {
      const start = new Date(`1970-01-01T${slot.startTime}Z`);
      const end = new Date(`1970-01-01T${slot.endTime}Z`);
      while (start < end) {
        const time = start.toISOString().slice(11, 16);
        slots.push({ value: time, label: time });
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

    const submissionData = {
      ...formData,
      date: startDate.toISOString().split("T")[0],
      department: doctors.department,
      doctorId: doctorId,
    };

    setFormData(submissionData);

    const requiredFields = [
      "name",
      "email",
      "gender",
      "date",
      "time",
      "phoneNo",
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      alert(`Please fill in the following fields: ${emptyFields.join(", ")}`);
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      toast.error("Name can only contain letters and spaces.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNo)) {
      toast.error("Phone number must be exactly 10 digits.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const selectedDay = startDate
      .toLocaleString("en-US", { weekday: "long" })
      .toLowerCase();
    if (!workingDays.includes(selectedDay)) {
      toast.error(
        "The selected date does not match the doctor's working days.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/doctors/${doctorId}`
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

  const highlightText = (text, highlights) => {
    const parts = text.split(new RegExp(`(${highlights.join("|")})`, "gi"));
    return parts.map((part, index) =>
      highlights.some(
        (highlight) => highlight.toLowerCase() === part.toLowerCase()
      ) ? (
        <span
          key={index}
          style={{
            color: "#3e3e3e",
            fontWeight: "bold",
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  if (!doctor) {
    return <div>Loading...</div>;
  }

  const highlights = [
    "Expertise and Specializations",
    "Areas of Expertise",
    "Services Offered by Dr. Gayatri Aryan",
    "Obstetrics and Gynecology:",
    "IVF and Fertility Treatments:",
    "Notable awards and achievements",
  ];

  return (
    <div className="bg-white-A700 border border-black-900 border-solid flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
      <Navbar
        className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"
        activePage="home"
      />

      <div className={Style.container}>
        <div className={Style.img}>
          <Img
            src={`${process.env.REACT_APP_BACKEND_URL}/${doctor.image.replace(
              /\\/g,
              "/"
            )}`}
            alt={doctor.name}
          />
          <h5> {doctor.name} </h5>
          <h6>({doctor.speciality})</h6>
        </div>

        <div className={Style.topright}>
          <div className={Style.box}>
            <div className={Style.app}>
              <h6>Connect With Us !</h6>
            </div>

            <form onSubmit={handleSubmit2}>
              <div
                style={{ marginTop: "3.5em" }}
                className={`${Style.inputfield}`}
              >
                <FaUser className={Style.inputicon} />
                <input
                  placeholder="Enter Name"
                  type="text"
                  name="name"
                  value={formData2.name}
                  onChange={handleChange2}
                />
              </div>
              <div className={`${Style.inputfield}`}>
                <FaPhoneAlt className={Style.inputicon} />
                <input
                  placeholder="+91 - Enter Phone Number"
                  type="number"
                  name="number"
                  value={formData2.number}
                  onChange={handleChange2}
                />
              </div>
              <div className={Style.check}>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="optIn"
                  className={Style.checkbox}
                  checked={formData2.optIn}
                  onChange={handleChange2}
                />
                <label htmlFor="myCheckbox" className={Style.checkboxLabel}>
                  <FaWhatsapp style={{ color: "green" }} /> opt-in for WhatsApp
                  updates
                </label>
              </div>
              <div className={Style.btn1}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={Style.container2}>
        <div className={Style.left}>
          <p>Qualifications</p>
          <ul style={{ marginLeft: "0%" }}>
            <li>
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {doctor.experience.split(",").map((part, index) => {
                  const subParts = part
                    .split("\n")
                    .filter((line) => line.trim() !== "");
                  return (
                    <React.Fragment key={index}>
                      {subParts.map((subPart, subIndex) => (
                        <li key={subIndex} style={{ marginBottom: "0.5em" }}>
                          {subPart.trim()}
                        </li>
                      ))}
                    </React.Fragment>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>

        <div className={Style.right}>
          <p>Expert skills</p>
          <ul>
            <li>
              <ul>
                {doctor.department.split(",").map((part, index) => {
                  const subParts = part
                    .split("\n")
                    .filter((line) => line.trim() !== "");
                  return (
                    <React.Fragment key={index}>
                      {subParts.map((subPart, subIndex) => (
                        <li key={subIndex}>{subPart.trim()}</li>
                      ))}
                    </React.Fragment>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className={Style.container3}>
        <div className={Style.left}>
          <h1>Doctor's info | Education | Cost & Fees</h1>{" "}
          <p>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              {doctor.about
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <li key={index} style={{ marginBottom: "0.5em" }}>
                    {highlightText(line, highlights)}
                  </li>
                ))}
            </ul>

            <br />
            
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                fontWeight: "600",
              }}
            >
              Fee: &#x20b9; {doctor.fees} 
            
            </div>
          </p>
        </div>

        <div className={Style.right}>
          <div>
            <CustomDatePicker />
          </div>
        </div>
      </div>

      <section>
        <div>
          <p>
            <FaMapMarkerAlt /> Gurugram (Sector-7)
          </p>
          <h5>Visit Now!</h5>
          <h6>
            78, Old Railway Rd, Rattan Garden, <br />
            Shivpuri Extension,
          </h6>
        </div>
        <div
          className={`flex flex-col items-center justify-start max-w-[992px] mx-auto w-full ${Style.left}`}
        >
          <iframe
            className={styless.map}
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5i2n-0QpJqHmEnZBemNZHUY6D3fUyJu8&q=78,+Old+Railway+Rd,+Rattan+Garden,+Shivpuri+Extension,+Sector+7,+Gurugram,+Haryana+122001"
          ></iframe>
        </div>
      </section>

      <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
    </div>
  );
};

export default DoctorProfile;

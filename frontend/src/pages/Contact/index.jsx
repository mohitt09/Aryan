import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../../styles/Map.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaLinkedin,
  FaGoogle,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import {
  Button,
  Img,
  Input,
  Line,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Navbar from "components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import AboutUsTestimonials from "components/AboutUsTestimonials";
import DoctorsDoctorscard from "components/DoctorsDoctorscard";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import HomeNewssection from "components/HomeNewssection";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
      valid = false;
    }

    if (!formData.subject) {
      newErrors.subject = "Subject is required";
      valid = false;
    } else if (formData.subject.length > 50) {
      newErrors.subject = "Subject must be 50 characters or less";
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.length > 100) {
      newErrors.message = "Message must be 100 characters or less";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const requiredFields = [
      "name",
      "email",
      "phoneNumber",
      "subject",
      "message",
    ];

    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      const emptyFieldNames = emptyFields.join(", ");
      toast.error(`Please fill in the following fields: ${emptyFieldNames}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Name validation: Letters and spaces only
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      toast.error("Name can only contain letters and spaces.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Email validation: Check for proper format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Phone Number validation: Exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      toast.error("Phone number must be exactly 10 digits.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Subject length validation: Max 50 characters
    if (formData.subject.length > 50) {
      toast.error("Subject must be 50 characters or less.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Message length validation: Max 100 characters
    if (formData.message.length > 100) {
      toast.error("Message must be 100 characters or less.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/contacts`,
        {
          name: formData.name,
          email: formData.email,
          number: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
        }
      );
      console.log("Contact form submitted successfully:", response.data);
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);

      if (error.response && error.response.data && error.response.data.errors) {
        const { errors } = error.response.data;
        errors.forEach((err) => {
          toast.error(err.msg, { position: toast.POSITION.TOP_RIGHT });
        });
      } else if (error.response && error.response.status === 500) {
        if (
          error.response.data.error &&
          error.response.data.error.includes("duplicate key error") &&
          error.response.data.error.includes("email")
        ) {
          toast.error(
            "Email address is already registered. Please use a different email.",
            { position: toast.POSITION.TOP_RIGHT }
          );
        } else if (
          error.response.data.error &&
          error.response.data.error.includes("duplicate key error") &&
          error.response.data.error.includes("phoneNumber")
        ) {
          toast.error(
            "Phone number is already registered. Please use a different phone number.",
            { position: toast.POSITION.TOP_RIGHT }
          );
        } else {
          toast.error(
            "Error submitting contact form. Please try again later.",
            { position: toast.POSITION.TOP_RIGHT }
          );
        }
      } else {
        toast.error("Error submitting contact form. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
       
        <Navbar
          className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"
          activePage="contact"
        />

       

        <div className="flex flex-col items-center justify-start max-w-[98%]  mx-auto  w-full">
          <iframe
            className={style.map}
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5i2n-0QpJqHmEnZBemNZHUY6D3fUyJu8&q=78,+Old+Railway+Rd,+Rattan+Garden,+Shivpuri+Extension,+Sector+7,+Gurugram,+Haryana+122001"
          ></iframe>
        </div>

        <div className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
            <div
              style={{ gap: "2.6em", alignItems: "center" }}
              className="flex md:flex-1 flex-col  items-start justify-start w-[486px] md:w-full"
            >
              <div className="flex flex-col gap-1.5 items-center justify-start">
                <Text
                  className="text-blue-500 text-lg  tracking-[2.88px] uppercase"
                  size="txtWorkSansBold18"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Get in touch
                </Text>
                <div className={style.line}></div>

                <p className={style.parah}>
                  Fill out all required fields to send a message. <br /> Please
                  don't spam,Thank you!
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-start rounded-[5px] w-full"
                autoComplete=""
              >
              
                <div className="flex flex-col flex-row items-center justify-evenly w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-indigo-900 border-0  font-worksans pb-[20px] pl-5 sm:pr-5 pr-[35px] pt-[15px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name}</span>
                  )}
                  <hr />

                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-indigo-900 border-0  font-worksans pb-[20px] pl-5 sm:pr-5 pr-[35px] pt-[15px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}
                  <hr />

                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="bg-indigo-900 border-0  font-worksans pb-[20px] pl-5 sm:pr-5 pr-[35px] pt-[15px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
                    placeholder="Phone Number"
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-500">{errors.phoneNumber}</span>
                  )}
                  <hr />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-indigo-900 border-0  font-worksans pb-[20px] pl-5 sm:pr-5 pr-[35px] pt-[15px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <span className="text-red-500">{errors.subject}</span>
                  )}
                  <hr />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-indigo-900 border-0  font-worksans pb-[32px] pl-5 sm:pr-5 pr-[32px] pt-[10px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
                  placeholder="What would you like to tell us (Max 100 characters)"
                  maxLength="100"
                />
                {errors.message && (
                  <span className="text-red-500">{errors.message}</span>
                )}

                <button type="submit" className={style.buttons}>
                  Submit
                </button>
                {/* </div> */}
              </form>
            </div>

            <div className="flex sm:flex-1 flex-col h-[686px] sm:h-auto items-center justify-start w-[486px] sm:w-full">
              <h3 className={style.info}>Contact Information</h3>
              <div className={style.line}></div>
              <div className="flex flex-col h-[486px] sm:h-auto items-center justify-start w-[486px] sm:w-full">
                <div className="sm:flex-col sm:w-[100%] sm:h-auto gap-5 grid sm:grid-cols-1 grid-cols-2 h-[486px] justify-center min-h-[auto] w-[486px]">
                  <div className="bg-blue-100 flex flex-col h-[233px] items-start justify-start p-[26px] sm:px-5 rounded-[5px] w-full sm:w-[80%] sm:m-auto">
                    <div className="flex flex-col gap-[15px] items-start justify-start my-[25px] w-[82%] md:w-full ">
                      <Img
                        className="h-[38px]"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start ml-1 md:ml-[0]">
                        <Text
                          className="text-indigo-900 text-lg uppercase"
                          size="txtWorkSansBold18Indigo900"
                        >
                          Emergency
                        </Text>

                        <Text
                          className="text-base text-indigo-900"
                          size="txtWorkSansRegular16Indigo900"
                        >
                          (91) 931-133-9448
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-900 flex flex-col h-[233px] items-start justify-start p-[30px] sm:px-5 rounded-[5px] w-full sm:w-[80%] sm:m-auto">
                    <div className="flex flex-col gap-4 items-start justify-start mb-5 mt-[23px] w-[89%] md:w-full">
                      <Img
                        className="h-9"
                        src="images/img_linkedin_blue_100_36x30.svg"
                        alt="linkedin"
                      />
                      <div className="flex flex-col gap-[3px] items-start justify-start w-full">
                        <Text
                          className="text-blue-100 text-lg uppercase"
                          size="txtWorkSansBold18Blue100"
                        >
                          Location
                        </Text>
                        <Text
                          className="text-xs text-blue-100 leading-4"
                          size="txtWorkSansRegular16Blue100"
                        >
                          Address: 78, Old Railway, Rattan Garden,
                        </Text>
                        <Text
                          className="text-xs text-blue-100 leading-4"
                          size="txtWorkSansRegular16Blue100"
                        >
                          Shivpuri Extension, Sector 7, Gurugram, Haryana 122001
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-100 flex flex-col h-[233px] items-center justify-center p-[22px] sm:px-5 rounded-[5px] w-full sm:w-[80%] sm:m-auto">
                    <div className="flex flex-col gap-[19px] items-start justify-start mb-8 mt-[35px] w-[96%] md:w-full">
                      <Img
                        className="h-[29px]"
                        src="images/img_lock_indigo_900.svg"
                        alt="lock"
                      />
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-indigo-900 text-lg uppercase"
                          size="txtWorkSansBold18Indigo900"
                        >
                          Email
                        </Text>
                        <Text
                          className="mt-[9px] text-base text-indigo-900 ml-[-5px]"
                          size="txtWorkSansRegular16Indigo900"
                        >
                          aryanhospital@yahoo.com
                        </Text>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-100 flex flex-col h-[233px] items-end justify-end p-[18px] rounded-[5px] w-full sm:w-[80%] sm:m-auto">
                    <div className="flex flex-col gap-[19px] items-start justify-start mb-8 mt-[38px] w-[94%] md:w-full">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_clock_indigo_900.svg"
                        alt="clock"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-indigo-900 text-lg uppercase"
                          size="txtWorkSansBold18Indigo900"
                        >
                          Working Hours
                        </Text>
                        <Text
                          className="text-base text-indigo-900"
                          size="txtWorkSansRegular16Indigo900"
                        >
                          24 Hours Open
                        </Text>
                        <Text
                          className="text-base text-indigo-900"
                          size="txtWorkSansRegular16Indigo900"
                        ></Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.links}>
                <a
                  href="https://www.linkedin.com/in/aryan-hospital-b37a1490/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className={style.one} />
                </a>
                <a
                  href="https://www.google.com/search?sca_esv=1aea21ce6623e3de&sca_upv=1&sxsrf=ADLYWIIkzrcyDIWMOmRQ2pJayv7LGk1J9g%3A1716793685145&q=Aryan%20Hospital&stick=H4sIAAAAAAAAAONgU1I1qDC2NEgxtEwxSk0xNjI3MzG0MqhItTBKSkyzMEtMNTW0MDFKXsTK51hUmZin4JFfXJBZkpgDADsvKkQ6AAAA&mat=CcBGfgpK5ZQd&ved=2ahUKEwj0v4Xuoq2GAxXpyDgGHVODADUQrMcEegQICRAD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogle className={style.two} />
                </a>
                <a
                  href="https://www.instagram.com/hospitalaryan0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className={style.three} />
                </a>
                <a
                  href="https://www.facebook.com/aryanhospitalggn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className={style.four} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <HomeNewssection
          className="bg-gray-50 flex flex-col font-worksans items-center justify-end mt-16 p-16 md:px-10 sm:px-5 w-full"
          favoriteicon="images/img_favorite_pink_500_14x16.svg"
          favorite="images/img_favorite_pink_500_14x16.svg"
          favorite1="images/img_favorite_pink_500_14x16.svg"
          favorite2="images/img_favorite_pink_500_14x16.svg"
        />
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;

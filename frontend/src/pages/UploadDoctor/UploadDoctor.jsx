// components/UploadDoctor.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "components/DashboardSidebar/DashboardSidebar";
import style from "../../styles/UploadDoctor.module.css";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
// import bg from '../../data/images/IMG.jpg';

const UploadDoctor = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [department, setDepartment] = useState("");
  const [about, setAbout] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [deleteDoctorId, setDeleteDoctorId] = useState("");
  const [toggleDoctorId, setToggleDoctorId] = useState("");
  const [isActive, setIsActive] = useState(true); // Default to true
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [fees, setFees] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [timeSlots, setTimeSlots] = useState([
    { startTime: "", endTime: "", isAvailable: true },
  ]);
  const [workingDays, setWorkingDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleDayChange = (day) => (event) => {
    setWorkingDays({ ...workingDays, [day]: event.target.checked });
  };

  const handleTimeSlotChange = (index, field, value) => {
    const newTimeSlots = [...timeSlots];
    newTimeSlots[index][field] = value;
    setTimeSlots(newTimeSlots);
  };

  const addTimeSlot = () => {
    setTimeSlots([
      ...timeSlots,
      { startTime: "", endTime: "", isAvailable: true },
    ]);
  };

  const removeTimeSlot = (index) => {
    const newTimeSlots = [...timeSlots];
    newTimeSlots.splice(index, 1);
    setTimeSlots(newTimeSlots);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImage(null);
      setImagePreview("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !education || !department || !about || !experience || !image) {
      toast.error("Please fill out all required fields", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("education", education);
    formData.append("department", department);
    formData.append("about", about);
    formData.append("experience", experience);
    formData.append("image", image);
    formData.append("youtubeLink", youtubeLink);
    formData.append("instagramLink", instagramLink);
    formData.append("facebookLink", facebookLink);
    formData.append("fees", fees);
    formData.append("speciality", speciality);
    formData.append("timeSlots", JSON.stringify(timeSlots));
    const workingDaysArray = Object.keys(workingDays).filter(
      (day) => workingDays[day]
    );
    // Append the array to formData
    formData.append("workingDays", JSON.stringify(workingDaysArray));

    try {
      console.log(formData);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/doctors`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      toast.success("New Doctor data has been successfully added", {
        position: toast.POSITION.TOP_RIGHT,
      });
      // Assuming the response contains the doctorId
      const doctorId = response.data.doctorId;

      if (isAdmin && username && password) {
        console.log(doctorId);
        const credentialsData = {
          profileId: doctorId, // Use the doctorId from the response
          username,
          password,
          type: 2, // Set type to 1 for admin
        };
        console.log(credentialsData);
        const credentialsResponse = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/credentials`,
          credentialsData
        );
        console.log(credentialsResponse.data);
        toast.success("Credentials have been successfully added", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(
          `Error: ${error.response.data.message || "An error occurred"}`,
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from the server", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("Error setting up the request", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };
  const handleDeleteDoctor = async (event) => {
    event.preventDefault();
    if (!deleteDoctorId) {
      toast.error("Please enter a Doctor ID to delete", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/doctors/${deleteDoctorId}`
      );
      console.log(response.data);
      toast.success("Doctor has been successfully deleted", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setDeleteDoctorId("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete doctor", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleToggleActiveStatus = async (event) => {
    event.preventDefault();
    if (!toggleDoctorId) {
      toast.error("Please enter a Doctor ID to toggle active status", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/doctors/${toggleDoctorId}/toggle-active`
      );
      console.log(response.data);
      toast.success("Doctor's active status has been successfully toggled", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setToggleDoctorId("");
      setIsActive(true); // Reset to default active status
    } catch (error) {
      console.error(error);
      toast.error("Failed to toggle doctor's active status", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className={style.main}>
      <DashboardHeader />
      <DashboardSidebar />
      <div className={style.main}>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.formGroup}>
            <label className={style.label} htmlFor="name">
              Name
            </label>
            <input
              className={style.input}
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <label className={style.label} htmlFor="education">
              Education
            </label>
            <input
              className={style.input}
              id="education"
              type="text"
              placeholder="Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <label className={style.label} htmlFor="department">
              Department
            </label>
            <input
              className={style.input}
              id="department"
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <label className={style.label} htmlFor="about">
              About
            </label>
            <textarea
              className={style.input}
              id="about"
              placeholder="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <label className={style.label} htmlFor="experience">
              Experience
            </label>
            <textarea
              className={style.input}
              id="experience"
              placeholder="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className={style.formGroup}>
            <label className={style.label} htmlFor="fees">
              Fees
            </label>
            <input
              className={style.input}
              id="fees"
              type="number"
              placeholder="Fees"
              value={fees} // You'll need to add a state for fees
              onChange={(e) => setFees(e.target.value)} // And a corresponding setter
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            <div className={style.formGroup}>
              <label
                style={{
                  border: "1px solid black",
                  padding: "12px",
                  borderRadius: "5px",
                }}
                className={style.label}
                htmlFor="image"
              >
                Upload Image
              </label>

              <input
                style={{ display: "none" }}
                className={style.input}
                id="image"
                type="file"
                onChange={handleImageChange}
              />
            </div>

            {imagePreview && (
              <div className={style.formGroup}>
                <img
                  style={{ width: "100px" }}
                  src={imagePreview}
                  alt="Selected"
                  className="w-full "
                />
              </div>
            )}
          </div>

          <div className={style.formGroup}>
            <label className={style.label} htmlFor="youtubeLink">
              YouTube Link
            </label>
            <input
              className={style.input}
              id="youtubeLink"
              type="text"
              placeholder="YouTube Link"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <label className={style.label} htmlFor="instagramLink">
              Instagram Link
            </label>
            <input
              className={style.input}
              id="instagramLink"
              type="text"
              placeholder="Instagram Link"
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <label className={style.label} htmlFor="facebookLink">
              Facebook Link
            </label>
            <input
              className={style.input}
              id="facebookLink"
              type="text"
              placeholder="Facebook Link"
              value={facebookLink}
              onChange={(e) => setFacebookLink(e.target.value)}
            />
          </div>
          <div className={style.formGroup}>
            <label className={style.label} htmlFor="speciality">
              Speciality
            </label>
            <input
              className={style.input}
              id="speciality"
              type="text"
              placeholder="Speciality"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
            />
          </div>

          <div className={style.formGroup}>
            <label className={style.label} htmlFor="isAdmin">
              Do You Want To Generate Doctor Id & Password ?
            </label>

            <input
              className="shadow appearance-none border rounded w-50% py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="isAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </div>

          {/* Conditionally render doctorId and password fields */}
          {isAdmin && (
            <>
              <div className={style.formGroup}>
                <label
                  className={style.label}
                  htmlFor="username" // Changed from doctorId to username
                >
                  Username
                </label>
                <input
                  className={style.input}
                  id="username"
                  type="text"
                  placeholder="Username" // Changed from Doctor ID to Username
                  value={username} // Changed from doctorId to username
                  onChange={(e) => setUsername(e.target.value)} // Changed from setDoctorId to setUsername
                />
              </div>
              <div className={style.formGroup}>
                <label className={style.label} htmlFor="password">
                  Password
                </label>
                <div style={{ position: "relative", cursor: "pointer" }}>
                  <AiOutlineLock
                    style={{
                      color: "#4444e1",
                      position: "absolute",
                      top: "14px",
                      left: "10px",
                      fontSize: "1.2em",
                    }}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    style={{ paddingLeft: "2.5em" }}
                    id="password"
                    className={style.input}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={togglePasswordVisibility}
                      style={{
                        color: "#4444e1",
                        position: "absolute",
                        top: "15px",
                        right: "7%",
                        fontSize: "1.2em",
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={togglePasswordVisibility}
                      style={{
                        color: "#4444e1",
                        position: "absolute",
                        top: "12px",
                        right: "6%",
                        fontSize: "1.2em",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </div>
              </div>
            </>
          )}

          <div className={style.timeSlotsContainer}>
            {timeSlots.map((slot, index) => (
              <div key={index} className={style.timeSlot}>
                <input
                  className={style.timeinput}
                  type="time"
                  value={slot.startTime}
                  onChange={(e) =>
                    handleTimeSlotChange(index, "startTime", e.target.value)
                  }
                />
                <input
                  className={style.timeinput}
                  type="time"
                  value={slot.endTime}
                  onChange={(e) =>
                    handleTimeSlotChange(index, "endTime", e.target.value)
                  }
                />
                <input
                  className={style.timeinput1}
                  type="checkbox"
                  checked={slot.isAvailable}
                  onChange={(e) =>
                    handleTimeSlotChange(index, "isAvailable", e.target.checked)
                  }
                />
                <button
                  className={`${style.button} ${style.blueButton}`}
                  type="button"
                  onClick={() => removeTimeSlot(index)}
                >
                  Remove Slot
                </button>
              </div>
            ))}
            <button
              className={`${style.button} ${style.blueButton}`}
              type="button"
              onClick={addTimeSlot}
            >
              Add Time Slot
            </button>
          </div>
          <div className={style.formGroup}>
            <label className={style.label}>Working Days:</label>
            <div className={style.workingDaysContainer}>
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <div key={day} className={style.dayCheckbox}>
                  <input
                    type="checkbox"
                    id={day}
                    checked={workingDays[day.toLowerCase()]}
                    onChange={handleDayChange(day.toLowerCase())}
                  />
                  <label htmlFor={day}>{day}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={style.formGroup}>
            <button
              className={`${style.button} ${style.blueButton}`}
              type="submit"
            >
              Upload Doctor
            </button>
          </div>
        </form>

        <div className={style.main2}>
          <form className={style.form2} onSubmit={handleToggleActiveStatus}>
            <div className={style.formGroup}>
              <label className={style.label} htmlFor="isAdmin">
                Do You Want To Delete This Doctor Temporarily ?
              </label>
              <input
                className={style.input}
                id="toggleDoctorId"
                type="text"
                placeholder="Doctor ID"
                value={toggleDoctorId}
                onChange={(e) => setToggleDoctorId(e.target.value)}
              />
            </div>

            <div
              className={`${style.formGroup}`}
              style={{
                width: "10px",
                display: "flex",
                whiteSpace: "nowrap",
                alignItems: "center",
                marginBottom: "0em",
              }}
            >
              <label className={style.label} htmlFor="isActive">
                Active Status
              </label>
              <input
                className={style.input}
                id="isActive"
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
            </div>

            <div className={style.flexcontainer}>
              <button className={style.button} type="submit">
                Toggle Active Status
              </button>
            </div>
          </form>
          <form onSubmit={handleDeleteDoctor} className={style.form2}>
            <div className="flex flex-col gap-4">
              <div className={style.formGroup}>
                <label className={style.label} htmlFor="deleteDoctorId">
                  Do You Want To Delete This Doctor Permanent ?
                </label>
                <input
                  className={style.input}
                  id="deleteDoctorId"
                  type="text"
                  placeholder="Doctor ID"
                  value={deleteDoctorId}
                  onChange={(e) => setDeleteDoctorId(e.target.value)}
                />
              </div>
              <div className={style.flexcontainer}>
                <button className={style.button1} type="submit">
                  Delete Doctor
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadDoctor;

// components/UploadDoctor.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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

    try {
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteDoctor = async (event) => {
    event.preventDefault();
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
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="education"
          >
            Education
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="education"
            type="text"
            placeholder="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="department"
          >
            Department
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="department"
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="about"
          >
            About
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="about"
            placeholder="About"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experience"
          >
            Experience
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="experience"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            onChange={handleImageChange}
          />
        </div>
        {imagePreview && (
          <div className="mb-4">
            <img src={imagePreview} alt="Selected" className="w-full h-auto" />
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="youtubeLink"
          >
            YouTube Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="youtubeLink"
            type="text"
            placeholder="YouTube Link"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="instagramLink"
          >
            Instagram Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="instagramLink"
            type="text"
            placeholder="Instagram Link"
            value={instagramLink}
            onChange={(e) => setInstagramLink(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="facebookLink"
          >
            Facebook Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="facebookLink"
            type="text"
            placeholder="Facebook Link"
            value={facebookLink}
            onChange={(e) => setFacebookLink(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload Doctor
          </button>
        </div>
      </form>
      <form
        onSubmit={handleToggleActiveStatus}
        className="max-w-lg mx-auto mt-10"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="toggleDoctorId"
          >
            Doctor ID to Toggle Active Status
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="toggleDoctorId"
            type="text"
            placeholder="Doctor ID"
            value={toggleDoctorId}
            onChange={(e) => setToggleDoctorId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="isActive"
          >
            Active Status
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="isActive"
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Toggle Active Status
          </button>
        </div>
      </form>
      <form onSubmit={handleDeleteDoctor} className="max-w-lg mx-auto mt-10">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="deleteDoctorId"
          >
            Doctor ID to Delete
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="deleteDoctorId"
            type="text"
            placeholder="Doctor ID"
            value={deleteDoctorId}
            onChange={(e) => setDeleteDoctorId(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Delete Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadDoctor;

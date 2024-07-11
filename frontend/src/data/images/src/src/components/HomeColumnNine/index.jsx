import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { Img, SelectBox, Text, TextArea } from "components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const doctorOptionsList = [
  { label: "Dr. P R Aryan", value: "Dr. P R Aryan" },
  { label: "Dr. Vikram Aryan", value: "Dr. Vikram Aryan" },
  { label: "Dr. Gayatri Aryan", value: "Dr. Gayatri Aryan" },
  { label: "Dr. Surabhi Aryan", value: "Dr. Surabhi Aryan" },
  { label: "Dr. Vishal Aryan", value: "Dr. Vishal Aryan" },
  { label: "Dr. Mohit Vashishta", value: "Dr. Mohit Vashishta" },
  { label: "Dr. Aparna", value: "Dr. Aparna" },
];

const HomeColumnNine = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    doctorName: "",
    date: "",
    time: "",
    phoneNo: "",
    department: "",
    message: "",
  });
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "email",
      "gender",
      "doctorName",
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

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit appointment");
      }

      console.log(response);
      const data = await response.json();
      console.log("Appointment submitted successfully:", data);

      setFormData({
        name: "",
        email: "",
        gender: "",
        doctorName: "",
        date: "",
        time: "",
        phoneNo: "",
        department: "",
        message: "",
      });

      setSelectedDoctor(null);
      setSelectedGender(null);
      setSelectedDepartment(null);

      toast.success("Your appointment has been scheduled successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error submitting appointment:", error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
            <div className="flex sm:flex-1 flex-col items-center justify-start w-1/2 sm:w-full">
              <input
                type="text"
                className="bg-indigo-900 h-[50px] justify-center pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] rounded-tl-[5px] text-base text-white-A700 w-[245px]"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <input
                type="text"
                className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] text-base text-white-A700 w-[245px]"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <input
                type="date"
                className="bg-indigo-900 h-[50px] justify-center pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] rounded-tl-[5px] text-base text-white-A700 w-[245px]"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />

              <SelectBox
                className="!text-white-A700 font-worksans text-base text-left w-full"
                placeholderClassName="!text-white-A700"
                indicator={
                  <Img
                    className="h-[9px] mr-[0] w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="groupFortySix"
                options={doctorOptionsList}
                isSearchable={false}
                placeholder="Doctor"
                shape="square"
                color="indigo_900"
                size="xs"
                variant="fill"
                value={selectedDoctor}
                onChange={(value) => {
                  handleChange("doctorName", value);
                  setSelectedDoctor(value);
                }}
              />
            </div>
            <div className="flex sm:flex-1 flex-col items-center justify-start w-1/2 sm:w-full">
              <SelectBox
                className="!text-white-A700 font-worksans text-base text-left w-full"
                placeholderClassName="!text-white-A700"
                indicator={
                  <Img
                    className="h-[9px] mr-[0] w-4"
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
                shape="square"
                color="indigo_900"
                size="xs"
                variant="fill"
                value={selectedGender}
                onChange={(value) => {
                  handleChange("gender", value);
                  setSelectedGender(value);
                }}
              />
              <input
                type="text"
                className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] text-base text-white-A700 w-[245px]"
                placeholder="Phone"
                value={formData.phoneNo}
                onChange={(e) => handleChange("phoneNo", e.target.value)}
              />
              <input
                type="time"
                className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] text-base text-white-A700 w-[245px]"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
              />
              <SelectBox
                className="!text-white-A700 font-worksans text-base text-left w-full"
                placeholderClassName="!text-white-A700"
                indicator={
                  <Img
                    className="h-[9px] mr-[0] w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="department"
                options={[
                  {
                    label: "Critical care",
                    value: "Critical care",
                  },
                  {
                    label: "Dialysis center",
                    value: "Dialysis center",
                  },
                  {
                    label: "Gynaecology and obstetrics",
                    value: "Gynaecology and obstetrics",
                  },
                  {
                    label: "IVF treatment",
                    value: "IVF treatment",
                  },
                  {
                    label: "Pediatrics",
                    value: "Pediatrics",
                  },
                  {
                    label: "Neurology",
                    value: "Neurology",
                  },
                  {
                    label: "Laparoscopic surgery",
                    value: "Laparoscopic surgery",
                  },
                  {
                    label: "Orthopedic",
                    value: "Orthopedic",
                  },
                  {
                    label: "Bariatric surgery",
                    value: "Bariatric surgery",
                  },
                ]}
                isSearchable={false}
                placeholder="Department"
                shape="square"
                color="indigo_900"
                size="xs"
                variant="fill"
                value={selectedDepartment}
                onChange={(value) => {
                  handleChange("department", value);
                  setSelectedDepartment(value);
                }}
              />
            </div>
          </div>
          <input
            type="text"
            className="bg-indigo-900 border-0 font-worksans pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-[18px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
            // name="message"
            placeholder="Message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />

          <div className="bg-blue-100 flex flex-col items-center justify-start p-[15px] rounded-bl-[5px] rounded-br-[5px] w-full">
            <button
              type="submit"
              className="text-base text-center text-indigo-900 uppercase"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomeColumnNine;

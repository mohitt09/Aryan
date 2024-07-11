import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import { FaLinkedin, FaGoogle, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import style from "./Column.module.css";

const HomeColumnrectangletwenty = (props) => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [sliderState, setSliderState] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/doctors`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const activeDoctors = data.filter((doctor) => doctor.isActive);
        setDoctors(activeDoctors);
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 525) {
        setItemsPerPage(1);
      } else if (width <= 768) {
        setItemsPerPage(2);
      } else if (width <= 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePagerIndicatorClick = (index) => {
    // Calculate the new index based on the current sliderState
    let newIndex = sliderState + index;
    if (newIndex >= doctors.length) {
      newIndex = 0; // Reset to the beginning
    }
    setSliderState(newIndex);
  };

  const handlePrevClick = () => {
    const newIndex = sliderState === 0 ? doctors.length - 1 : sliderState - 1;
    setSliderState(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (sliderState + 1) % doctors.length;
    setSliderState(newIndex);
  };

  const getVisibleDoctors = () => {
    const visibleDoctors = [];
    const startIndex = sliderState;
    let currentIndex = startIndex;
    let count = 0;

    while (count < itemsPerPage && count < doctors.length) {
      const currentDoctor = doctors[currentIndex % doctors.length];
      if (currentDoctor) {
        visibleDoctors.push(currentDoctor);
        count++;
      }
      currentIndex++;
    }

    return visibleDoctors;
  };

  return (
    <div className={props.className}>
      <div className="flex flex-col gap-1.5 items-center justify-start">
        <Text
          className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase"
          size="txtWorkSansBold18"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          Trusted Care
        </Text>
        <Text
          className="md:text-3xl sm:text-[28px] text-[32px] text-center"
          size="txtYesevaOneRegular32"
          style={{ fontFamily: "'Habibi', serif", color: "#3e3e3e" }}
        >
          Our Doctors
        </Text>
        <div className={style.line}></div>
      </div>

      <div className="flex items-center justify-between w-full mt-4 relative">
        <button
          onClick={handlePrevClick}
          className="text-lg font-bold absolute left-0 z-10"
          style={{ color: 'white', background: '#7878ffab', border: 'none', cursor: 'pointer', padding: '1em' }}
        >
          <IoIosArrowBack size={24} />
        </button>

        <div className="flex overflow-hidden w-full">

          {getVisibleDoctors().map((doctor, index) => (
            <List
              key={index}
              className={`sm:flex-col flex-row gap-5 grid sm:grid-cols-1 lg:grid-cols-${itemsPerPage === 3 ? '3' : '4'} justify-center mx-2.5`}
              orientation="horizontal"
            >
              <div className={style.column}>
                <Img
                  className=""
                  src={`${process.env.REACT_APP_BACKEND_URL}/${doctor.image.replace(/\\/g, "/")}`}
                  alt={doctor.name}
                />

                <Button
                  className={style.sliderbtn}
                  onClick={() =>
                    navigate("/doctorprofile", {
                      state: { doctorId: doctor.doctorId },
                    })
                  }
                >
                  View Profile
                </Button>
                <div className={style.hoverContent}>
                  <Text className={style.hovername}>{doctor.name}</Text>
                  <Text className={style.hoverspeciality}>
                    {doctor.speciality}
                  </Text>
                </div>

                <div className={style.links}>
                  <FaFacebook className={style.one} />
                  <FaInstagram className={style.two} />
                  <FaGoogle className={style.three} />
                  <FaLinkedin className={style.four} />
                </div>
              </div>
            </List>
          ))}

        </div>

        <button
          onClick={handleNextClick}
          className="text-lg font-bold absolute right-0 z-10"
          style={{ color: 'white', background: '#7878ffab', border: 'none', cursor: 'pointer', padding: '1em' }}
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: doctors.length }).map((_, index) => (
          <div
            key={index}
            className={`inline-block cursor-pointer rounded-full h-[18px] w-[18px] mx-1 ${sliderState === index ? 'bg-indigo-900' : 'bg-blue-100'}`}
            onClick={() => handlePagerIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomeColumnrectangletwenty;

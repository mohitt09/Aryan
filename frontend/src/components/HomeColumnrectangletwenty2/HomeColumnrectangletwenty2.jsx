import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, List, PagerIndicator, Slider, Text } from "components";
import {
  FaFemale,
  FaStethoscope,
  FaBaby,
  FaHeart,
  FaUserMd,
  FaBone,
  FaBrain,
  FaRadiation,
} from "react-icons/fa";

const HomeColumnrectangletwenty = (props) => {
  const navigate = useNavigate();
  const [sliderState, setSliderState] = useState(0);

  // Static data for doctors
  const doctors = [
    { name: "Gynaecology", speciality: "Speciality 1", icon: <FaFemale /> },
    {
      name: "General Medicine",
      speciality: "Speciality 2",
      icon: <FaStethoscope />,
    },
    { name: "Pediatrics", speciality: "Speciality 3", icon: <FaBaby /> },
    { name: "Cardiology", speciality: "Speciality 4", icon: <FaHeart /> },
    { name: "Surgery", speciality: "Speciality 5", icon: <FaUserMd /> },
    { name: "Orthopedic", speciality: "Speciality 6", icon: <FaBone /> },
    { name: "Neurology", speciality: "Speciality 7", icon: <FaBrain /> },
    { name: "Radiology", speciality: "Speciality 8", icon: <FaRadiation /> },
  ];

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1.5 items-center justify-start">
          <Text
            className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase"
            size="txtWorkSansBold18"
          >
            Trusted Care
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900"
            size="txtYesevaOneRegular32"
          >
            Our Doctors
          </Text>
        </div>
        <Slider
          autoPlay
          autoPlayInterval={2000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 2 },
            1050: { items: 4 },
          }}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          className="mt-16 w-full"
        >
          {doctors.map((doctor, index) => (
            <List
              key={index}
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-4 justify-center mx-2.5"
            >
              <div className="flex flex-col items-start justify-start sm:ml-[0] w-auto">
              <div className="h-[200px] flex items-center justify-center text-center text-5xl   sm:h-auto aspect-w-3 aspect-h-2 object-contain w-[317px] md:w-full">
                  {doctor.icon}
                </div>
                <div className="bg-blue-100 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
                  <div className="flex  flex-col items-center justify-start w-[51%] md:w-full">
                    <Text
                      className="text-center text-indigo-900 text-lg"
                      size="txtWorkSansRegular18Indigo900"
                      style={{ whiteSpace: "nowrap", width: "100%" }}
                    >
                      {doctor.name}
                    </Text>
                    <Text
                      className="mt-[9px] text-indigo-900 text-justify text-sm tracking-[1px] uppercase"
                      size="txtWorkSansBold18Indigo900"
                    >
                      {doctor.speciality}
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-worksans min-w-[100%] text-base text-center"
                  shape="round"
                  color="indigo_900"
                  size="sm"
                  variant="fill"
                  onClick={() =>
                    navigate("/doctorprofile", {
                      state: { doctorId: index + 1 },
                    })
                  }
                >
                  View
                </Button>
              </div>
            </List>
          ))}
        </Slider>
        <PagerIndicator
          className="flex h-[18px] justify-center mt-8 w-[74px]"
          count={doctors.length} // Number of doctors
          activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-indigo-900 w-[18px]"
          activeIndex={sliderState}
          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue-100 w-[18px]"
          selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
          unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
        />
      </div>
    </>
  );
};

export default HomeColumnrectangletwenty;

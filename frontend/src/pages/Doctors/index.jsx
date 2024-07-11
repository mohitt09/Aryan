import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeColumnrectangletwenty from "components/HomeColumnrectangletwenty";
import style from './Doc.module.css'
import { FaLinkedin, FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";


import {
  Button,
  Img,
  List,
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

const DoctorsPage = () => {
  const doctorsDoctorscardPropList = [
    {},
    { userimage: "images/img_rectangle20_350x317.png" },
    { userimage: "images/img_rectangle20_1.png" },
    {},
    { userimage: "images/img_rectangle20_350x317.png" },
    { userimage: "images/img_rectangle20_1.png" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  const navigate = useNavigate();

  
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  const [doctors, setDoctors] = useState([]);

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

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        
        <Navbar
          className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"
          activePage="doctors"
        />
        <AboutUsSubhead
          className="h-[250px] md:px-5 relative w-full"
          homeabouttext="Home / Doctors"
          aboutustext="Our Doctors"
        />


        <div>
          <div className="flex flex-col gap-1.5 items-center justify-start">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900"
              size="txtYesevaOneRegular32"
              style={{ fontFamily: "'Raleway', sans-serif", color: '#3e3e3e', marginTop: "1em" }}
            >
              Our Doctors
            </Text>
            <div className={style.line}></div>

          </div>


          <List className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-5 mx-2.5">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start"
              >
                <div className={style.column}>
                  <Img
                    className="h-[200px] aspect-w-3 aspect-h-2 object-contain w-[317px]"
                    src={`${process.env.REACT_APP_BACKEND_URL
                      }/${doctor.image.replace(/\\/g, "/")}`}
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
              </div>
            ))}
          </List>
        </div>
      
        <AboutUsTestimonials className="font-worksans h-[441px] md:h-[505px] mt-16 md:px-5 relative w-full" />
        <HomeNewssection className="bg-gray-50 flex flex-col font-worksans items-center justify-end p-16 md:px-10 sm:px-5 w-full" />
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
      </div>
    </>
  );
};

export default DoctorsPage;

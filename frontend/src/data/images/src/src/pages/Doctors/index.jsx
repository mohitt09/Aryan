import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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

  // const sliderRef = React.useRef(null);
  // const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full" activePage="doctors" />
        <AboutUsSubhead
          className="h-[250px] md:px-5 relative w-full"
          homeabouttext="Home / Doctors"
          aboutustext="Our Doctors"
        />
        <div className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {doctorsDoctorscardPropList.map((props, index) => (
                <React.Fragment key={`DoctorsDoctorscard${index}`}>
                  <DoctorsDoctorscard
                    className="flex flex-1 flex-col items-start justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
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

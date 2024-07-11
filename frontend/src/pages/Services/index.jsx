import React from "react";
import { Link } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Navbar from "components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import ServicesServicecard from "components/ServicesServicecard";
import ServicesServicecard1 from "components/ServicesServicecard1";
import { useNavigate } from "react-router-dom";


  

const ServicesPage = () => {
  const navigate = useNavigate();  

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"activePage="services" />
        
        <AboutUsSubhead
          className="h-[250px] md:px-5 relative w-full"
          userimage="images/img_rectangle3_250x1366.png"
          homeabouttext="Home / Services"
          aboutustext="Our Services"
        />
        <div className="flex flex-col font-worksans items-center justify-start max-w-[991px] mt-16 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <ServicesServicecard className="border border-indigo-900_63 border-solid flex flex-1 flex-col gap-[57px] items-center justify-start pb-8 rounded-[5px] w-full" />
              <ServicesServicecard1
                className="border border-indigo-900_63 border-solid flex flex-1 flex-col gap-[17px] items-center justify-start pb-8 rounded-[5px] w-full"
                linkbuttonOne="Learn More"
                arrowright="images/img_arrowright.svg"
              />
              <ServicesServicecard1
                className="border border-indigo-900_63 border-solid flex flex-1 flex-col gap-[17px] items-center justify-start pb-8 rounded-[5px] w-full"
                linkbuttonOne="Learn More"
                arrowright="images/img_arrowright.svg"
              />
            </div>
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <ServicesServicecard1 className="border border-indigo-900_63 border-solid flex flex-1 flex-col gap-[17px] items-center justify-start pb-8 rounded-[5px] w-full" />
              <ServicesServicecard1
                className="border border-indigo-900_63 border-solid flex flex-1 flex-col gap-[17px] items-center justify-start pb-8 rounded-[5px] w-full"
                linkbuttonOne="Learn More"
                arrowright="images/img_arrowright.svg"
              />
              <ServicesServicecard1
                className="border border-indigo-900_63 border-solid flex flex-1 flex-col gap-[17px] items-center justify-start pb-8 rounded-[5px] w-full"
                linkbuttonOne="Learn More"
                arrowright="images/img_arrowright.svg"
              />
            </div>
          </div>
        </div>
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-32 mx-auto md:px-5 w-full" />
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ServicesPage;

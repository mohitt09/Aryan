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

const ContactPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full" activePage="contact" />
        <AboutUsSubhead
          className="h-[250px] md:px-5 relative w-full"
          userimage="images/img_rectangle3_1.png"
          homeabouttext="Home / Contact"
          aboutustext="Our Contacts"
        />
        <div className="flex flex-col items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <Img
            className="h-[450px] md:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-full"
            src="images/img_map.png"
            alt="map"
          />
        </div>
        <div className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-[486px] md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start">
                <Text
                  className="text-blue-500 text-lg tracking-[2.88px] uppercase"
                  size="txtWorkSansBold18"
                >
                  Get in touch
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900"
                  size="txtYesevaOneRegular32"
                >
                  Contact
                </Text>
              </div>
              <div className="bg-blue-100 flex flex-col items-center justify-start rounded-[5px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                    <Text
                      className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] rounded-tl-[5px] text-base text-white-A700 w-[243px]"
                      size="txtWorkSansRegular16WhiteA700"
                    >
                      Name
                    </Text>
                    <Text
                      className="bg-indigo-900 h-[50px] justify-center pl-5 sm:pr-5 pr-[35px] py-[15px] rounded-tr-[5px] text-base text-white-A700 w-[242px]"
                      size="txtWorkSansRegular16WhiteA700"
                    >
                      Email
                    </Text>
                  </div>
                  <Text
                    className="bg-indigo-900 h-[50px] justify-center pb-[13px] pl-5 sm:pr-5 pr-[35px] pt-[17px] text-base text-white-A700 w-[486px]"
                    size="txtWorkSansRegular16WhiteA700"
                  >
                    Subject
                  </Text>
                  <div className="bg-indigo-900 flex flex-col items-start justify-start p-[17px] w-full">
                    <Text
                      className="mb-[180px] ml-0.5 md:ml-[0] text-base text-white-A700"
                      size="txtWorkSansRegular16WhiteA700"
                    >
                      Message
                    </Text>
                  </div>
                  <div className="bg-blue-100 flex flex-col items-center justify-start p-[15px] rounded-bl-[5px] rounded-br-[5px] w-full">
                    <Text
                      className="text-base text-center text-indigo-900 uppercase"
                      size="txtWorkSansMedium16"
                    >
                      Submit
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col h-[486px] sm:h-auto items-center justify-start w-[486px] sm:w-full">
              <div className="flex flex-col h-[486px] sm:h-auto items-center justify-start w-[486px] sm:w-full">
                <div className="gap-5 grid sm:grid-cols-1 grid-cols-2 h-[486px] justify-center min-h-[auto] w-[486px]">
                  <div className="bg-blue-100 flex flex-col h-[233px] items-start justify-start p-[26px] sm:px-5 rounded-[5px] w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start my-[25px] w-[82%] md:w-full">
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
                          (237) 681-812-255
                        </Text>
                        <Text
                          className="text-base text-indigo-900"
                          size="txtWorkSansRegular16Indigo900"
                        >
                          9311339448
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-900 flex flex-col h-[233px] items-start justify-start p-[30px] sm:px-5 rounded-[5px] w-full">
                    <div className="flex flex-col gap-4 items-start justify-start mb-5 mt-[23px] w-[89%] md:w-full">
                      <Img
                        className="h-9"
                        src="images/img_linkedin_blue_100_36x30.svg"
                        alt="linkedin"
                      />
                      <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                        <Text
                          className="text-blue-100 text-lg uppercase"
                          size="txtWorkSansBold18Blue100"
                        >
                          Location
                        </Text>
                        <Text
                          className="text-base text-blue-100"
                          size="txtWorkSansRegular16Blue100"
                        >
                          Address:78, Old Railway Rd, Rattan Garden, Shivpuri Extension, Sector 7, Gurugram, Haryana 122001
                        </Text>

                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-100 flex flex-col h-[233px] items-center justify-center p-[22px] sm:px-5 rounded-[5px] w-full">
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
                          className="mt-[9px] text-base text-indigo-900"
                          size="txtWorkSansRegular16Indigo900"
                        >
                          fildineeesoe@gmil.com
                        </Text>
                        <Text
                          className="mt-1.5 text-indigo-900 text-sm"
                          size="txtWorkSansRegular14"
                        >
                          myebstudios@gmail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-100 flex flex-col h-[233px] items-end justify-end p-[18px] rounded-[5px] w-full">
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
                          Mon-Sat 09:00-20:00
                        </Text>
                        <Text
                          className="text-base text-indigo-900"
                          size="txtWorkSansRegular16Indigo900"
                        >
                          Sunday Emergency only
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
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

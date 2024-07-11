import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import {
  Button,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
  TextArea,
} from "components";
import Navbar from "components/Navbar";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";
import Header from "components/Header";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnNine from "components/HomeColumnNine"; // Import HomeColumnNine component

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const doctorOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AppointmentPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <Navbar
          className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"
          activePage="appointment"
        />
        <AboutUsSubhead
          className="h-[250px] md:px-5 relative w-full"
          rectanglethree="images/img_rectangle3.png"
          homeabouttext="Home / Appointment"
          aboutustext="Book an Appointment"
        />
        <div className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[62px] items-center justify-start w-1/2 md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900"
                  size="txtYesevaOneRegular32"
                >
                  Book an Appointment
                </Text>
                <Text
                  className="leading-[140.00%] text-base text-gray-900 w-full"
                  size="txtWorkSansRegular16"
                >
                  Book your appointment at Aryan Hospital effortlessly. Choose
                  your specialist, select a time, and begin your journey to
                  better health. Experience expert care, modern facilities, and
                  a patient-first approach. Need help? Contact us. Your wellness
                  is our priority
                </Text>
              </div>
              <HomeColumnNine />
            </div>

            <div className="bg-indigo-900 flex md:flex-1 flex-col font-yesevaone items-center justify-end p-11 md:px-10 sm:px-5 rounded-[5px] w-[49%] md:w-full">
              <Text
                className="mt-0.5 text-5xl sm:text-[38px] md:text-[44px] text-blue-100"
                size="txtYesevaOneRegular48"
              >
                Shedule hours
              </Text>
              <div className="flex flex-col font-worksans gap-7 items-start justify-start mt-[54px] w-[97%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                  >
                    Monday
                  </Text>
                  <div className="bg-blue-100 h-0.5 sm:ml-[0] ml-[77px] sm:mt-0 my-[9px] w-[5%]"></div>
                  <Text
                    className="sm:ml-[0] ml-[51px] text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                  >
                    09:00 AM - 07:00 PM
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                  >
                    Tuesday
                  </Text>
                  <div className="bg-blue-100 h-0.5 sm:ml-[0] ml-[74px] sm:mt-0 my-[9px] w-[5%]"></div>
                  <Text
                    className="sm:ml-[0] ml-[51px] text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                  >
                    09:00 AM - 07:00 PM
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                  >
                    Wednesday
                  </Text>
                  <div className="bg-blue-100 h-0.5 my-[9px] w-[5%]"></div>
                  <Text
                    className="text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                  >
                    09:00 AM - 07:00 PM
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                  >
                    Thursday
                  </Text>
                  <div className="bg-blue-100 h-0.5 my-[9px] w-[5%]"></div>
                  <Text
                    className="text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                  >
                    09:00 AM - 07:00 PM
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                  >
                    Friday
                  </Text>
                  <div className="bg-blue-100 h-0.5 sm:ml-[0] ml-[92px] sm:mt-0 my-[9px] w-[5%]"></div>
                  <Text
                    className="sm:ml-[0] ml-[51px] text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                  >
                    09:00 AM - 07:00 PM
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                  >
                    Saturday
                  </Text>
                  <div className="bg-blue-100 h-0.5 my-[9px] w-[5%]"></div>
                  <Text
                    className="text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                  >
                    09:00 AM - 07:00 PM
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start w-[71%] md:w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtWorkSansRegular18"
                  >
                    Sunday
                  </Text>
                  <div className="bg-blue-100 h-0.5 ml-[81px] my-2.5 w-[8%]"></div>
                  <Text
                    className="ml-[51px] text-base text-white-A700"
                    size="txtWorkSansRegular16WhiteA700"
                  >
                    Closed
                  </Text>
                </div>
              </div>
              <Line className="bg-blue-100 h-0.5 mt-[31px] w-[85%]" />
              <div className="flex flex-row font-worksans gap-2 items-center justify-center mt-8 w-[73%] md:w-full">
                <Img
                  className="h-[47px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <div className="h-[59px] relative w-4/5">
                  <Text
                    className="mb-[-0.01px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 z-[1]"
                    size="txtWorkSansMedium26WhiteA700"
                  >
                    Emergency
                  </Text>
                  <Text
                    className="mt-auto mx-auto md:text-2xl sm:text-[22px] text-[26px] text-blue-100"
                    size="txtWorkSansMedium26"
                  >
                    (237) 681-812-255
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <Img
            className="h-[450px] md:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-full"
            src="images/img_map.png"
            alt="map"
          />
        </div>
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
      </div>
    </>
  );
};

export default AppointmentPage;

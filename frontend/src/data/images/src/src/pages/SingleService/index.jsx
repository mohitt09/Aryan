import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Navbar from "components/Navbar";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import AppointmentSubhead from "components/AppointmentSubhead";
import Footer from "components/Footer";
import Header from "components/Header";
import SingleServiceColumnrectangletwenty from "components/SingleServiceColumnrectangletwenty";

const SingleServicePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row font-yesevaone md:gap-5 items-center justify-center md:px-5 w-full" />
          <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"activePage="singleservices" />
          <AppointmentSubhead
            className="h-[250px] md:px-5 relative w-full"
            rectanglethree="images/img_rectangle3_2.png"
            homeabout="Home / Services"
            aboutusOne="Free Checkup"
          />
          <div className="flex md:flex-col flex-row font-worksans gap-[21px] items-start justify-center max-w-[992px] mt-[60px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700_6c border border-indigo-900_6c border-solid flex md:flex-1 flex-col gap-6 justify-start pb-6 rounded-[5px] w-1/4 md:w-full">
              <div className="bg-indigo-900 flex flex-col items-start justify-start p-6 sm:px-5 rounded-tl-[5px] rounded-tr-[5px] w-full">
                <div className="flex flex-row gap-2 items-center justify-start ml-2 md:ml-[0] w-[78%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_user_blue_100.svg"
                    alt="user"
                  />
                  <Text
                    className="text-base text-blue-100 text-center"
                    size="txtWorkSansRegular16Blue100"
                  >
                    Free Checkup
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start ml-8 md:ml-[0] w-[55%] md:w-full">
                <div className="flex flex-row gap-2 items-end justify-start w-full">
                  <Img
                    className="h-7"
                    src="images/img_favorite_blue_500.svg"
                    alt="favorite"
                  />
                  <Text
                    className="my-1 text-base text-gray-900"
                    size="txtWorkSansRegular16"
                  >
                    Cardiogram
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_facebook_blue_500.svg"
                    alt="facebook"
                  />
                  <Text
                    className="text-base text-gray-900"
                    size="txtWorkSansRegular16"
                  >
                    Dna Testing
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-[99%] md:w-full">
                  <Img
                    className="h-10"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <Text
                    className="text-base text-gray-900"
                    size="txtWorkSansRegular16"
                  >
                    Blood Bank
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-[95%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_facebook_blue_500.svg"
                    alt="facebook_One"
                  />
                  <Text
                    className="text-base text-gray-900"
                    size="txtWorkSansRegular16"
                  >
                    Dermalogy
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-[98%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_facebook_blue_500.svg"
                    alt="facebook_Two"
                  />
                  <Text
                    className="text-base text-gray-900"
                    size="txtWorkSansRegular16"
                  >
                    Orthopedic
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="md:flex-1 h-[454px] sm:h-auto object-cover w-[74%] md:w-full"
              src="images/img_rectangle13_454x731.png"
              alt="rectangleThirteen"
            />
          </div>
          <Text
            className="mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-indigo-900"
            size="txtYesevaOneRegular32"
          >
            A passion for putting patients first
          </Text>
          <List
            className="sm:flex-col flex-row font-worksans gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mt-[23px] md:px-5 w-[49%]"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                <div className="bg-blue-500 h-4 mb-[5px] rounded-[50%] w-4"></div>
                <Text
                  className="text-black-900 text-lg"
                  size="txtWorkSansRegular18Black900"
                >
                  A Passion for Healing
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start w-[61%] md:w-full">
                <div className="bg-blue-500 h-4 my-0.5 rounded-[50%] w-4"></div>
                <Text
                  className="text-black-900 text-lg"
                  size="txtWorkSansRegular18Black900"
                >
                  All our best
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <div className="flex flex-row gap-2.5 items-start justify-start w-[92%] md:w-full">
                <div className="bg-blue-500 h-4 mb-1 rounded-[50%] w-4"></div>
                <Text
                  className="text-black-900 text-lg"
                  size="txtWorkSansRegular18Black900"
                >
                  5-Star Care
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                <div className="bg-blue-500 h-4 my-0.5 rounded-[50%] w-4"></div>
                <Text
                  className="text-black-900 text-lg"
                  size="txtWorkSansRegular18Black900"
                >
                  Believe in Us
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[19px] items-start justify-start w-full">
              <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                <div className="bg-blue-500 h-4 mb-[5px] rounded-[50%] w-4"></div>
                <Text
                  className="text-black-900 text-lg"
                  size="txtWorkSansRegular18Black900"
                >
                  A Legacy of Excellence
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start w-[66%] md:w-full">
                <div className="bg-blue-500 h-4 mb-[5px] rounded-[50%] w-4"></div>
                <Text
                  className="text-black-900 text-lg"
                  size="txtWorkSansRegular18Black900"
                >
                  Always Caring
                </Text>
              </div>
            </div>
          </List>
          <Text
            className="leading-[140.00%] mt-[23px] text-base text-black-900 w-[54%] sm:w-full"
            size="txtWorkSansRegular16Black900"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
            Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </Text>
          <Text
            className="leading-[140.00%] mt-1.5 text-base text-black-900 w-[54%] sm:w-full"
            size="txtWorkSansRegular16Black900"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </Text>
          <SingleServiceColumnrectangletwenty className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-[127px] mx-auto md:px-5 w-full" />
          <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
          <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SingleServicePage;

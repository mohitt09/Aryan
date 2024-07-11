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
import AboutUsSubhead from "components/AboutUsSubhead";
import AboutUsTestimonials from "components/AboutUsTestimonials";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import HomeColumnrectangletwenty from "components/HomeColumnrectangletwenty";
import HomeNewssection from "components/HomeNewssection";

const AboutusPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full" activePage="aboutus" />
        <AboutUsSubhead className="h-[250px] md:h-[253px] md:px-5 relative w-full" />
        <div className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
            <Img
              className="h-[509px] md:h-auto object-cover"
              src="images/img_rectangle3_509x408.png"
              alt="rectangleThree_One"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col gap-1.5 items-start justify-start">
                <Text
                  className="text-blue-500 text-lg tracking-[2.88px] uppercase"
                  size="txtWorkSansBold18"
                >
                  Welcome to Aryan Hospital 
                </Text>
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-indigo-900"
                  size="txtYesevaOneRegular48"
                >
                  <>
                    Best Care for Your
                    <br />
                    Good Health
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-[25px] w-[86%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <List
                      className="flex flex-col gap-[17px] w-[82%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row items-start justify-between mr-3 my-0 w-[97%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[56%]">
                          <div className="bg-blue-500 h-4 mb-[5px] rounded-[50%] w-4"></div>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtWorkSansRegular18Black900"
                          >
                            A Passion for Healing
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[34%]">
                          <div className="bg-blue-500 h-4 mb-1 rounded-[50%] w-4"></div>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtWorkSansRegular18Black900"
                          >
                            5-Star Care
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between my-0 w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[33%]">
                          <div className="bg-blue-500 h-4 my-0.5 rounded-[50%] w-4"></div>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtWorkSansRegular18Black900"
                          >
                            All our best
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[36%]">
                          <div className="bg-blue-500 h-4 my-0.5 rounded-[50%] w-4"></div>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtWorkSansRegular18Black900"
                          >
                            Believe in Us
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row gap-2.5 items-start justify-start w-[31%] sm:w-full">
                        <div className="bg-blue-500 h-4 mb-[5px] rounded-[50%] w-4"></div>
                        <Text
                          className="text-black-900 text-lg"
                          size="txtWorkSansRegular18Black900"
                        >
                          Always Caring
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-row gap-2.5 items-start justify-start w-[48%] sm:w-full">
                        <div className="bg-blue-500 h-4 mb-[5px] rounded-[50%] w-4"></div>
                        <Text
                          className="text-black-900 text-lg"
                          size="txtWorkSansRegular18Black900"
                        >
                          A Legacy of Excellence
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="leading-[140.00%] mt-[31px] text-base text-black-900 w-full"
                size="txtWorkSansRegular16Black900"
              >
                Aryan Hospital has the world-class facilities to meet the health care needs of every segment of society.
                 With various medical facilities accessible under one roof at very nominal cost, we work towards giving you a very individualized treatment with the highest quality of care.
              </Text>
              <Text
                className="leading-[140.00%] mt-3.5 text-base text-black-900 w-full"
                size="txtWorkSansRegular16Black900"
              >
                The Aryan Hospital is located at Old Railway Road, Gurgaon, and is amongst the Oldest Multi Specialty hospital of Gurgaon founded in 1985.
              </Text>
            </div>
          </div>
        </div>
        <AboutUsTestimonials className="font-worksans h-[441px] md:h-[505px] mt-16 md:px-5 relative w-full" />
        <HomeColumnrectangletwenty
          className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full"
          vectoricon="images/img_vector_indigo_900_24x24.svg"
          facebookicon="images/img_facebook_indigo_900_24x24.svg"
          infoicon="images/img_info_indigo_900.svg"
          vectoricon1="images/img_vector_indigo_900_24x24.svg"
          facebookicon1="images/img_facebook_indigo_900_24x24.svg"
          infoicon1="images/img_info_indigo_900.svg"
          vectoricon2="images/img_vector_indigo_900_24x24.svg"
          facebookicon2="images/img_facebook_indigo_900_24x24.svg"
          infoicon2="images/img_info_indigo_900.svg"
        />
        <HomeNewssection
          className="bg-gray-50 flex flex-col font-worksans items-center justify-end mt-16 p-16 md:px-10 sm:px-5 w-full"
          favoriteicon="images/img_favorite_pink_500_14x16.svg"
          favorite="images/img_favorite_pink_500_14x16.svg"
          favorite1="images/img_favorite_pink_500_14x16.svg"
          favorite2="images/img_favorite_pink_500_14x16.svg"
        />
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutusPage;
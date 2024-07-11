import React from "react";
import { Link } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Navbar from "components/Navbar";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import AppointmentSubhead from "components/AppointmentSubhead";
import Footer from "components/Footer";
import Header from "components/Header";
import NewsColumnrecentposts from "components/NewsColumnrecentposts";
import NewsSidecategories from "components/NewsSidecategories";

const SingleNewsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"activePage="singlenews" />
          <AppointmentSubhead 
            className="h-[250px] sm:h-[366px] md:px-5 relative w-full"
            calendar="images/img_calendar.svg"
            duration="Monday 05, September 2021"
            lock="images/img_lock_blue_500.svg"
            byauthor="By Author"
            eye="images/img_eye.svg"
            sixtyeight="68"
            favorite="images/img_favorite.svg"
            eightysix="86"
          />
          <div className="flex md:flex-col flex-row font-worksans gap-5 items-start justify-center max-w-[992px] mt-16 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[67%] md:w-full">
              <Img
                className="h-[400px] md:h-auto object-cover w-full"
                src="images/img_rectangle13.png"
                alt="rectangleThirteen"
              />
              <Text
                className="leading-[140.00%] text-gray-900 text-lg w-full"
                size="txtWorkSansRegular18Gray900"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Quisque placerat
                scelerisque tortor ornare ornare Convallis felis vitae tortor
                augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Quisque placerat scelerisque tortor ornare
                ornare. Quisque placerat scelerisque tortor ornare ornare
                Convallis felis vitae tortor augue. Velit nascetur proin massa
                in. Consequat faucibus porttitor enim Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Quisque placerat scelerisque
                tortor ornare ornare. Quisque placerat scelerisque tortor ornare
                ornare Convallis felis vitae tortor augue. Velit nascetur proin
                massa in. Consequat faucibus porttitor enim Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Quisque placerat
                scelerisque tortor ornare ornare. Quisque placerat scelerisque
                tortor ornare ornare Convallis felis vitae tortor augue. Velit
                nascetur proin massa in. Consequat faucibus porttitor enim Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Quisque placerat
                scelerisque tortor ornare ornare Convallis felis vitae tortor
                augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Quisque placerat scelerisque tortor ornare
                ornare. Quisque placerat scelerisque tortor ornare ornare
                Convallis felis vitae tortor augue. Velit nascetur proin massa
                in. Consequat faucibus porttitor enim et.
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[32%] md:w-full">
              <Input
                name="newssearchinput"
                placeholder="Search"
                className="p-0 placeholder:text-white-A700_a2 text-base text-left w-full"
                wrapClassName="flex w-auto"
                suffix={
                  <Img
                    className="mt-px mb-auto h-5 ml-[35px]"
                    src="images/img_rewind_blue_100.svg"
                    alt="rewind"
                  />
                }
                shape="round"
                color="indigo_900"
                size="sm"
                variant="fill"
              ></Input>
              <NewsColumnrecentposts className="bg-white-A700_6c border border-indigo-900_6c border-solid flex flex-col font-yesevaone gap-6 items-start justify-start p-[19px] rounded-[5px] w-full" />
              <NewsSidecategories className="bg-white-A700_6c border border-indigo-900_6c border-solid flex flex-col font-yesevaone gap-[21px] items-start justify-start p-5 rounded-[5px] w-full" />
            </div>
          </div>
          <div className="flex flex-row font-worksans sm:gap-10 items-center justify-between md:ml-[0] ml-[187px] mt-[59px] md:px-5 w-[49%] md:w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[193px]"
              leftIcon={
                <div className="h-2.5 mr-2 w-2.5 outline-indigo-900 outline-[1px] outline my-1">
                  <Img
                    className="h-2.5"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                </div>
              }
              shape="round"
              color="blue_100"
              size="xs"
              variant="fill"
            >
              <div className="font-medium leading-[normal] text-base text-left">
                Previous Article
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[163px]"
              rightIcon={
                <div className="h-2.5 ml-2 w-2.5 outline-indigo-900 outline-[1px] outline my-1">
                  <Img
                    className="h-2.5"
                    src="images/img_arrowright.svg"
                    alt="arrow_right"
                  />
                </div>
              }
              shape="round"
              color="blue_100"
              size="xs"
              variant="fill"
            >
              <div className="font-medium leading-[normal] text-base text-left">
                Next Article
              </div>
            </Button>
          </div>
          <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
          <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SingleNewsPage;

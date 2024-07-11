import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Navbar from "components/Navbar";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import AboutUsSubhead from "components/AboutUsSubhead";
import Footer from "components/Footer";
import Header from "components/Header";
import NewsArticle from "components/NewsArticle";
import NewsColumnrecentposts from "components/NewsColumnrecentposts";
import NewsSidecategories from "components/NewsSidecategories";
 
const NewsPage = () => {
  const newsArticlePropList = [
    {},
    { imagesource: "images/img_rectangle13_400x658.png" },
    { imagesource: "images/img_rectangle13_1.png" },
    { imagesource: "images/img_rectangle13_2.png" },
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
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full" activePage="news" />
          <AboutUsSubhead
            className="h-[250px] md:px-5 relative w-full"
            rectanglethree="images/img_rectangle3_250x1366.png"
            homeabouttext="Home / News"
          aboutustext="Blog Posts"
          />
          <div className="flex md:flex-col flex-row font-worksans gap-5 items-start justify-center max-w-[992px] mt-16 mx-auto md:px-5 w-full">
            <List
              className="flex flex-col gap-8 w-[67%]"
              orientation="vertical"
            >
              {newsArticlePropList.map((props, index) => (
                <React.Fragment key={`NewsArticle${index}`}>
                  <NewsArticle
                    className="flex flex-col items-start justify-start my-0 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
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
          <div className="flex flex-row font-worksans sm:gap-10 items-center justify-between md:ml-[0] ml-[187px] mt-8 md:px-5 w-[49%] md:w-full">
            <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
              <Img
                className="h-2.5 w-2.5"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
              <Text
                className="text-base text-blue-500 w-auto"
                size="txtWorkSansRegular16Blue500"
              >
                Previous Page
              </Text>
            </div>
            <Text
              className="text-base text-indigo-900 text-right"
              size="txtWorkSansRegular16Indigo900"
            >
              <span className="text-indigo-900 font-worksans font-normal">
                1 -{" "}
              </span>
              <span className="text-blue-500 font-worksans font-normal">
                2{" "}
              </span>
              <span className="text-indigo-900 font-worksans font-normal">
                -
              </span>
              <span className="text-blue-500 font-worksans font-normal">
                {" "}
                3{" "}
              </span>
              <span className="text-indigo-900 font-worksans font-normal">
                -
              </span>
              <span className="text-blue-500 font-worksans font-normal">
                {" "}
                4{" "}
              </span>
              <span className="text-indigo-900 font-worksans font-normal">
                -
              </span>
              <span className="text-blue-500 font-worksans font-normal">
                {" "}
                5
              </span>
            </Text>
            <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
              <Text
                className="text-base text-blue-500 w-auto"
                size="txtWorkSansRegular16Blue500"
              >
                Next Page
              </Text>
              <Img
                className="h-2.5 w-2.5"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
          <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
          <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-[46px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default NewsPage;

// import React from "react";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full" activePage="news" />
          <AboutUsSubhead
            className="h-[250px] md:px-5 relative w-full"
            rectanglethree="images/img_rectangle3_250x1366.png"
            homeabouttext="Home / Blogs"
            aboutustext="Blog Posts"
          />
          <div className="flex md:flex-col flex-row font-worksans gap-5 items-start justify-center max-w-[992px] mt-16 mx-auto md:px-5 w-full">

            <List className="flex flex-col gap-8 w-[100%]" orientation="vertical">
              
              <NewsArticle className="flex flex-col items-start justify-start my-0 w-full" />
            </List>
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[32%] md:w-full">
              
              <NewsColumnrecentposts className="bg-white-A700_6c border border-indigo-900_6c border-solid flex flex-col font-yesevaone gap-6 items-start justify-start p-[19px] rounded-[5px] w-full" />
              
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

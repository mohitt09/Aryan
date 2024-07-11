import React from "react";

import { Img, Text } from "components";

const AboutUsSubhead = (props) => {
  return ( 
    <> 
     <div className={props.className}>
        <Img
          className="absolute h-[250px] inset-[0] justify-center m-auto object-cover w-full"
          alt="rectangleThree"
          src={props?.userimage}
        />
         
        <div className="absolute bg-white-A700_7f flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[250px] items-start justify-start p-[78px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group203.svg')" }}
          >
            <div className="flex flex-col items-start justify-start mb-[19px] md:ml-[0] ml-[107px]">
              <Text
                className="text-indigo-900 text-lg"
                size="txtWorkSansRegular18Indigo900"
              >
                {props?.homeabouttext}
              </Text>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-indigo-900"
                size="txtYesevaOneRegular48"
              >
                {props?.aboutustext}
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[59%] md:w-full">
              <div className="flex flex-row gap-2 items-start justify-start w-[49%] sm:w-full">
                {!!props?.calendar ? (
                  <Img
                    className="h-[17px] w-4"
                    alt="calendar"
                    src={props?.calendar}
                  />
                ) : null}
                {!!props?.duration ? (
                  <Text
                    className="text-base text-black-900"
                    size="txtWorkSansRegular16Black900"
                  >
                    {props?.duration}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-row gap-2 items-start justify-center ml-6 sm:ml-[0] w-1/5 sm:w-full">
                {!!props?.lock ? (
                  <Img className="h-[18px]" alt="lock" src={props?.lock} />
                ) : null}
                {!!props?.byauthor ? (
                  <Text
                    className="text-base text-black-900"
                    size="txtWorkSansRegular16Black900"
                  >
                    {props?.byauthor}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-row gap-2 items-start justify-center ml-6 sm:ml-[0] w-[9%] sm:w-full">
                {!!props?.eye ? (
                  <Img className="h-2.5 mt-1" alt="eye" src={props?.eye} />
                ) : null}
                {!!props?.sixtyeight ? (
                  <Text
                    className="text-base text-black-900"
                    size="txtWorkSansRegular16Black900"
                  >
                    {props?.sixtyeight}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-row gap-2 items-center justify-between ml-6 sm:ml-[0] w-[9%] sm:w-full">
                {!!props?.favorite ? (
                  <Img
                    className="h-3.5"
                    alt="favorite"
                    src={props?.favorite}
                  />
                ) : null}
                {!!props?.eightysix ? (
                  <Text
                    className="text-base text-black-900"
                    size="txtWorkSansRegular16Black900"
                  >
                    {props?.eightysix}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* <div className={props.className}>
        <Img
          className="absolute h-[250px] inset-[0] justify-center m-auto object-cover w-full"
          alt="rectangleThree"
          src={props?.userimage}
        />
        <div className="absolute bg-white-A700_7f flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[250px] items-start justify-start p-[78px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group203.svg')" }}
          >
            <div className="flex flex-col items-start justify-start mb-[19px] md:ml-[0] ml-[107px]">
              <Text
                className="text-indigo-900 text-lg"
                size="txtWorkSansRegular18Indigo900"
              >
                {props?.homeabouttext}
              </Text>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-indigo-900"
                size="txtYesevaOneRegular48"
              >
                {props?.aboutustext}
              </Text>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

AboutUsSubhead.defaultProps = {
  userimage: "images/img_rectangle3.png",
  homeabouttext: "Home / About",
  aboutustext: "About us",
  rectanglethree: "images/img_rectangle3_1.png",
  homeabout: "Home / News / Health Care",
  aboutusOne: "A passion for putting patients first.",
};

export default AboutUsSubhead;

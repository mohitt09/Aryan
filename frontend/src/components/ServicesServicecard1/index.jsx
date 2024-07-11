import React from "react";

import { Img, Text } from "components";

const ServicesServicecard1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col relative w-full">
          <Img
            className="h-[300px] mt-[-NaNpx] mx-auto object-cover rounded-tl-[5px] rounded-tr-[5px] w-full z-[1]"
            src="images/img_rectangle20_300x317.png"
            alt="rectangleTwenty_One"
          />
          <div className="bg-indigo-900 flex flex-col h-20 items-center justify-end ml-auto mr-5 mt-[-40px] p-[26px] sm:px-5 rounded-[50%] w-20 z-[1]">
            <Img
              className="h-[26px] w-[26px]"
              src="images/img_user.svg"
              alt="user_One"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
          <Text
            className="md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
            size="txtWorkSansMedium26Indigo900"
          >
            {props?.freecheckuptext}
          </Text>
          <Text
            className="leading-[140.00%] mt-[5px] text-base text-gray-900 w-full"
            size="txtWorkSansRegular16"
          >
            {props?.descriptiontext}
          </Text>
          <div className="flex flex-row gap-2.5 items-center justify-center mt-3.5 w-auto">
            {!!props?.linkbuttonOne ? (
              <Text
                className="text-base text-blue-500 w-auto"
                size="txtWorkSansRegular16Blue500"
              >
                {props?.linkbuttonOne}
              </Text>
            ) : null}
            {!!props?.arrowright ? (
              <Img
                className="h-2.5 w-2.5"
                alt="arrowright"
                src={props?.arrowright}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

ServicesServicecard1.defaultProps = {
  freecheckuptext: "Free Checkup",
  descriptiontext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
};

export default ServicesServicecard1;

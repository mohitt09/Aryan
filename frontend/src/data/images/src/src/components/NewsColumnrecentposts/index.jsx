import React from "react";

import { Img, List, Text } from "components";

const NewsColumnrecentposts = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900"
          size="txtYesevaOneRegular32"
        >
          {props?.title}
        </Text>
        <List
          className="flex flex-col gap-2 items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
            <Img
              className="h-[60px] md:h-auto object-cover rounded-[5px] w-[60px]"
              src="images/img_rectangle61.png"
              alt="rectangleSixtyOne"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-blue-500 text-xs"
                size="txtWorkSansRegular12"
              >
                {props?.date1}
              </Text>
              <Text
                className="mt-[3px] text-gray-900 text-sm w-full"
                size="txtWorkSansMedium14"
              >
                {props?.text1}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
            <Img
              className="h-[60px] md:h-auto object-cover rounded-[5px] w-[60px]"
              src="images/img_rectangle61_60x60.png"
              alt="rectangleSixtyOne"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-blue-500 text-xs"
                size="txtWorkSansRegular12"
              >
                {props?.date2}
              </Text>
              <Text
                className="mt-[3px] text-gray-900 text-sm w-full"
                size="txtWorkSansMedium14"
              >
                {props?.text2}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
            <Img
              className="h-[60px] md:h-auto object-cover rounded-[5px] w-[60px]"
              src="images/img_rectangle61_1.png"
              alt="rectangleSixtyOne"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-blue-500 text-xs"
                size="txtWorkSansRegular12"
              >
                {props?.date3}
              </Text>
              <Text
                className="mt-[3px] text-gray-900 text-sm w-full"
                size="txtWorkSansMedium14"
              >
                {props?.text3}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
            <Img
              className="h-[60px] md:h-auto object-cover rounded-[5px] w-[60px]"
              src="images/img_rectangle61_2.png"
              alt="rectangleSixtyOne"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-blue-500 text-xs"
                size="txtWorkSansRegular12"
              >
                {props?.date4}
              </Text>
              <Text
                className="mt-[3px] text-gray-900 text-sm w-full"
                size="txtWorkSansMedium14"
              >
                {props?.text4}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
            <Img
              className="h-[60px] md:h-auto object-cover rounded-[5px] w-[60px]"
              src="images/img_rectangle61_3.png"
              alt="rectangleSixtyOne"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-blue-500 text-xs"
                size="txtWorkSansRegular12"
              >
                {props?.date5}
              </Text>
              <Text
                className="mt-[3px] text-gray-900 text-sm w-full"
                size="txtWorkSansMedium14"
              >
                {props?.text5}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
            <Img
              className="h-[60px] md:h-auto object-cover rounded-[5px] w-[60px]"
              src="images/img_rectangle61_4.png"
              alt="rectangleSixtyOne"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-blue-500 text-xs"
                size="txtWorkSansRegular12"
              >
                {props?.date6}
              </Text>
              <Text
                className="mt-[3px] text-gray-900 text-sm w-full"
                size="txtWorkSansMedium14"
              >
                {props?.text6}
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

NewsColumnrecentposts.defaultProps = {
  title: "Recent Posts",
  date1: "Monday 05, September 2021",
  text1: (
    <>
      This Article’s Title goes Here, <br />
      but not too long.
    </>
  ),
  date2: "Monday 05, September 2021",
  text2: (
    <>
      This Article’s Title goes Here, <br />
      but not too long.
    </>
  ),
  date3: "Monday 05, September 2021",
  text3: (
    <>
      This Article’s Title goes Here, <br />
      but not too long.
    </>
  ),
  date4: "Monday 05, September 2021",
  text4: (
    <>
      This Article’s Title goes Here, <br />
      but not too long.
    </>
  ),
  date5: "Monday 05, September 2021",
  text5: (
    <>
      This Article’s Title goes Here, <br />
      but not too long.
    </>
  ),
  date6: "Monday 05, September 2021",
  text6: (
    <>
      This Article’s Title goes Here, <br />
      but not too long.
    </>
  ),
};

export default NewsColumnrecentposts;

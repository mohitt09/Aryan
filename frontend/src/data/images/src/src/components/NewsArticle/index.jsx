import React from "react";

import { Button, Img, Text } from "components";

const NewsArticle = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[400px] sm:h-auto object-cover w-full"
          alt="rectangleThirteen"
          src={props?.imagesource}
        />
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[25px] w-[77%] md:w-full">
          <div className="flex flex-row gap-2 items-start justify-start w-[49%] sm:w-full">
            <Img
              className="h-[17px] w-4"
              src="images/img_calendar.svg"
              alt="calendar"
            />
            <Text
              className="text-base text-black-900"
              size="txtWorkSansRegular16Black900"
            >
              {props?.durationtext}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-start justify-center sm:ml-[0] ml-[25px] w-1/5 sm:w-full">
            <Img
              className="h-[18px]"
              src="images/img_lock_blue_500.svg"
              alt="lock"
            />
            <Text
              className="text-base text-black-900"
              size="txtWorkSansRegular16Black900"
            >
              {props?.authortext}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-start justify-center ml-6 sm:ml-[0] w-[9%] sm:w-full">
            <Img className="h-2.5 mt-1" src="images/img_eye.svg" alt="eye" />
            <Text
              className="text-base text-black-900"
              size="txtWorkSansRegular16Black900"
            >
              {props?.counttext}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-between ml-6 sm:ml-[0] w-[9%] sm:w-full">
            <Img
              className="h-3.5"
              src="images/img_favorite.svg"
              alt="favorite"
            />
            <Text
              className="text-base text-black-900"
              size="txtWorkSansRegular16Black900"
            >
              {props?.counttext1}
            </Text>
          </div>
        </div>
        <Text
          className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-indigo-900"
          size="txtYesevaOneRegular32"
        >
          {props?.titletext}
        </Text>
        <Text
          className="leading-[140.00%] mt-[13px] text-base text-gray-900 w-full"
          size="txtWorkSansRegular16"
        >
          {props?.descriptiontext}
        </Text>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[154px] mt-[22px]"
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
          <div className="font-medium font-worksans leading-[normal] text-base text-left">
            {props?.onpress}
          </div>
        </Button>
      </div>
    </>
  );
};

NewsArticle.defaultProps = {
  imagesource: "images/img_rectangle13.png",
  durationtext: "Monday 05, September 2021",
  authortext: "By Author",
  counttext: "68",
  counttext1: "86",
  titletext: "A passion for putting patients first",
  descriptiontext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....",
  onpress: "Read More",
};

export default NewsArticle;

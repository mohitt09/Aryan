import React from "react";

import { Text } from "components";

const NewsSidecategories = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-indigo-900"
          size="txtYesevaOneRegular32"
        >
          {props?.categories}
        </Text>
        <div className="bg-white-A700_6c flex flex-row items-center justify-between p-3 rounded-[5px] w-full">
          <Text
            className="ml-[7px] text-gray-900 text-lg"
            size="txtWorkSansRegular18Gray900"
          >
            {props?.surgery}
          </Text>
          <Text
            className="bg-blue-500 flex h-6 items-center justify-center mr-2 rounded-[50%] text-base text-center text-white-A700 w-6"
            size="txtWorkSansRegular16WhiteA700"
          >
            {props?.frame167}
          </Text>
        </div>
        <div className="bg-white-A700_6c flex flex-row items-center justify-between p-3 rounded-[5px] w-full">
          <Text
            className="ml-[7px] text-gray-900 text-lg"
            size="txtWorkSansRegular18Gray900"
          >
            {props?.surgeryOne}
          </Text>
          <Text
            className="bg-blue-500 flex h-6 items-center justify-center mr-2 rounded-[50%] text-base text-center text-white-A700 w-6"
            size="txtWorkSansRegular16WhiteA700"
          >
            {props?.frame167one}
          </Text>
        </div>
        <div className="bg-white-A700_6c flex flex-row items-center justify-between p-3 rounded-[5px] w-full">
          <Text
            className="ml-[7px] text-gray-900 text-lg"
            size="txtWorkSansRegular18Gray900"
          >
            {props?.surgeryTwo}
          </Text>
          <Text
            className="bg-blue-500 flex h-6 items-center justify-center mr-2 rounded-[50%] text-base text-center text-white-A700 w-6"
            size="txtWorkSansRegular16WhiteA700"
          >
            {props?.frame167two}
          </Text>
        </div>
        <div className="bg-white-A700_6c flex flex-row items-center justify-between mb-0.5 p-3 rounded-[5px] w-full">
          <Text
            className="ml-[7px] text-gray-900 text-lg"
            size="txtWorkSansRegular18Gray900"
          >
            {props?.surgeryThree}
          </Text>
          <Text
            className="bg-blue-500 justify-center mr-2 px-[7px] py-0.5 rounded-[12px] text-base text-white-A700 w-auto"
            size="txtWorkSansRegular16WhiteA700"
          >
            {props?.frame167three}
          </Text>
        </div>
      </div>
    </>
  );
};

NewsSidecategories.defaultProps = {
  categories: "Categories",
  surgery: "Surgery",
  frame167: "3",
  surgeryOne: "Health Care",
  frame167one: "5",
  surgeryTwo: "Medical",
  frame167two: "8",
  surgeryThree: "Professional",
  frame167three: "10",
};

export default NewsSidecategories;

import React from "react";

import { Img, Input, Text } from "components";

const ServicesServicecard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[300px] relative w-full">
          <Img
            className="absolute h-[300px] inset-[0] justify-center m-auto object-cover rounded-tl-[5px] rounded-tr-[5px] w-full"
            src="images/img_rectangle20_300x317.png"
            alt="rectangleTwenty"
          />
          <div className="absolute bg-indigo-900_a2 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[125px] md:px-10 sm:px-5 rounded-tl-[5px] rounded-tr-[5px] w-full">
            <Img className="h-12 w-12" src="images/img_user.svg" alt="user" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
          <Text
            className="md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
            size="txtWorkSansMedium26Indigo900"
          >
            {props?.checkuptext}
          </Text>
          <Text
            className="leading-[140.00%] mt-[5px] text-base text-gray-900 w-full"
            size="txtWorkSansRegular16"
          >
            {props?.descriptiontext}
          </Text>
          <Input
            name="linkbutton"
            placeholder="Learn More"
            className="font-worksans p-0 placeholder:text-blue-500 text-base text-blue-500 text-left w-full"
            wrapClassName="flex mt-3.5 w-auto"
            suffix={
              <div className="h-2.5 ml-2.5 w-2.5 outline-indigo-900 outline-[1px] outline my-1">
                <Img
                  className="h-2.5 my-auto"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              </div>
            }
            size="xs"
          ></Input>
        </div>
      </div>
    </>
  );
};

ServicesServicecard.defaultProps = {
  checkuptext: "Free Checkup",
  descriptiontext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
};

export default ServicesServicecard;

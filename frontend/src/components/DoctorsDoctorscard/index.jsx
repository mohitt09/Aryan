import React from "react";

import { Button, Img, Text } from "components";

const DoctorsDoctorscard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[350px] sm:h-auto object-cover w-[317px] md:w-full"
          alt="rectangleTwenty"
          src={props?.userimage}
        />
        <div className="bg-blue-100 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
            <Text
              className="text-indigo-900 text-lg"
              size="txtWorkSansRegular18Indigo900"
            >
              {props?.doctorsname}
            </Text>
            <Text
              className="mt-[9px] text-indigo-900 text-lg tracking-[2.88px] uppercase"
              size="txtWorkSansBold18Indigo900"
            >
              {props?.specialization}
            </Text>
            <div className="flex flex-row gap-5 items-center justify-between mt-3.5 w-[83%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_vector_indigo_900_24x24.svg"
                alt="vector"
              />
              <Img
                className="h-6 w-6"
                src="images/img_facebook_indigo_900_24x24.svg"
                alt="facebook"
              />
              <Img
                className="h-6 w-6"
                src="images/img_info_indigo_900.svg"
                alt="info"
              />
            </div>
          </div>
        </div>
        <Button
          className="cursor-pointer font-worksans min-w-[317px] text-base text-center"
          shape="round"
          color="indigo_900"
          size="sm"
          variant="fill"
        >
          {props?.viewprofilebutton}
        </Button>
      </div>
    </>
  );
};

DoctorsDoctorscard.defaultProps = {
  userimage: "images/img_rectangle20.png",
  doctorsname: "Doctor’s Name",
  specialization: "Neurology",
  viewprofilebutton: "View Profile",
};

export default DoctorsDoctorscard;

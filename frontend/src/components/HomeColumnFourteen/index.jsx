import React from "react";

import { Img, Text } from "components";
import style from './Fou.module.css'

import homeColumnFourteenData from "../../data/homeColumnFourteenData.json";


const HomeColumnFourteen = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1.5 items-center justify-start">
          <Text
            className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase"
            size="txtWorkSansBold18"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {homeColumnFourteenData.getintouch}
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900"
            size="txtYesevaOneRegular32"
            style={{ fontFamily: "'Habibi', serif", color:'#333333'}}
          >
            {homeColumnFourteenData.contactOne}
          </Text>
          <div className={style.line}></div>
        </div>
        <div className="gap-5 grid sm:w-[100%] sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
          {/* Emergency */}
          <div className="bg-blue-100 flex flex-col h-[233px] items-start justify-center p-[26px] sm:px-5 rounded-[5px] w-[233px] sm:w-[100%]">
            <div style={{marginBottom:'3.2em'}} className="flex flex-col gap-[15px] items-start justify-start my-[2px] w-[82%] md:w-full">
              <div  className={style.boxs}>


                <Img className="h-[30px]" src="images/img_call.svg" alt="call" />

                <Text
                  className="text-indigo-900 text-lg uppercase"
                  size="txtWorkSansBold18Indigo900"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {homeColumnFourteenData.emergency.text}
                </Text>
              </div>

              <div className="flex flex-col gap-2 items-start justify-start ml-1 md:ml-[0]">

                {homeColumnFourteenData.emergency.numbers.map((number, index) => (
                  <Text
                    key={index}
                    className="text-base text-indigo-900"
                    size="txtWorkSansRegular16Indigo900"
                    style={{ fontFamily: "'Habibi', serif" }}
                  >
                    {number}
                  </Text>
                ))}
              </div>
            </div>
          </div>
          {/* Location */}
          <div className="bg-indigo-900 flex flex-col h-[233px] items-start justify-center p-[30px] sm:px-5 rounded-[5px] w-[233px] sm:w-[100%]">

            <div style={{marginTop:'2em'}} className={style.boxs}>

              <Img
                className="h-9"
                src="images/img_linkedin_blue_100.svg"
                alt="linkedin_One"
              />

              <Text
                className="text-blue-100  text-lg uppercase"
                size="txtWorkSansBold18Blue100"
                style={{ fontFamily: "'Raleway', sans-serif"}}
              >
                {homeColumnFourteenData.location.text}
              </Text>
            </div>

            <div className="flex flex-col gap-4 items-start justify-start mb-5 mt-[23px] w-[89%] md:w-full">

              <div className="flex flex-col gap-[9px] items-start justify-start w-full">

                {homeColumnFourteenData.location.addresses.map((address, index) => (
                  <Text
                    key={index}
                    className="text-base ml-[-0.7em] text-blue-100"
                    size="txtWorkSansRegular16Blue100"
                    style={{ fontFamily: "'Habibi', serif" }}
                  >
                    {address}
                  </Text>
                ))}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-blue-100 flex flex-col h-[233px] items-center justify-center p-[22px] sm:px-5 rounded-[5px] w-[233px] sm:w-[100%]">

            <div className={style.boxs}>

              <Img
                className="h-[29px]"
                src="images/img_lock_indigo_900.svg"
                alt="lock"
              />

              <Text
                className="text-indigo-900 text-lg uppercase"
                size="txtWorkSansBold18Indigo900"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {homeColumnFourteenData.email.text}
              </Text>

            </div>
            <div className="flex flex-col gap-[19px] items-start justify-start mb-8 mt-[35px] w-[96%] md:w-full">

              <div className="flex flex-col items-start justify-start w-full">

                {homeColumnFourteenData.email.addresses.map((email, index) => (
                  <Text
                    key={index}
                    className="mt-[9px] text-base ml-[-0.9em] text-indigo-900"
                    size="txtWorkSansRegular16Indigo900"
                    style={{ fontFamily: "'Habibi', serif" }}
                  >
                    {email}
                  </Text>
                ))}
              </div>
            </div>
          </div>
          {/* Working Hours */}
          <div className="bg-blue-100 flex flex-col h-[233px] items-end justify-center p-[18px] rounded-[5px] w-[233px] sm:w-[100%]">

            <div className={style.boxs}>

              <Img
                className="h-[30px] w-[30px]"
                src="images/img_clock_indigo_900.svg"
                alt="clock_One"
              />

              <Text
                className="text-indigo-900 text-lg uppercase"
                size="txtWorkSansBold18Indigo900"
                style={{ fontFamily: "'Raleway', sans-serif",}}
              >
                {homeColumnFourteenData.workinghours.text}
              </Text>
            </div>

            <div className="flex flex-col gap-[19px] items-start justify-start mb-8 mt-[38px] w-[94%] md:w-full">

              <div className="flex flex-col gap-2 items-start justify-start w-full">

                <Text
                  className="text-base text-indigo-900"
                  size="txtWorkSansRegular16Indigo900"
                  style={{ fontFamily: "'Habibi', serif" }}
                >
                  {homeColumnFourteenData.workinghours.hours}
                </Text>
                <Text
                  className="text-base text-indigo-900"
                  size="txtWorkSansRegular16Indigo900"
                >
                  {homeColumnFourteenData.workinghours.emergencyHours}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default HomeColumnFourteen;
import React, { useState, useEffect } from "react";
import { Img, Line, PagerIndicator, Text } from "components";

const AboutUsTestimonials = (props) => {
 // Define the descriptions array
 const descriptions = [
    " Dr Vikram Aryan and team were excellent and we hope the result will come also positive all nursing staff were good and caring thankyou.",
    " I visited the Aryan hospital for Knee surgery, the doctor was very kind and the hospital staff really friendly!",
    "  Thanks to Dr. Surabhi Aryan & team at Aryan Hospital for taking care & proper diagnosis for the speedy recovery of my new born baby. We are really impressed with your professional expertise of diagnosis & having personal bond & care for the baby. You are best Pediatric in Gurgaon."
 ];

 // Initialize state to hold the current description
 const [currentDescription, setCurrentDescription] = useState(descriptions[0]);

 // Use useEffect to set up an interval that updates the current description
 useEffect(() => {
    const interval = setInterval(() => {
      // Find the index of the current description
      const currentIndex = descriptions.indexOf(currentDescription);
      // Calculate the next index, looping back to 0 if at the end of the array
      const nextIndex = (currentIndex + 1) % descriptions.length;
      // Update the current description
      setCurrentDescription(descriptions[nextIndex]);
    }, 4000); // Change description every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
 }, [currentDescription, descriptions]);

 return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[441px] inset-[0] justify-center m-auto object-cover w-full"
          src="images/img_rectangle53.png"
          alt="rectangleFiftyThree"
        />
        <div className="absolute bg-indigo-900_90 flex flex-col h-full inset-[0] items-center justify-center m-auto p-16 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[54%] md:w-full">
            <Img
              className="h-[30px]"
              src="images/img_vector_blue_100.svg"
              alt="vector"
            />
            <Text
              className="leading-[140.00%] mt-10 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtWorkSansRegular22"
            >
              {currentDescription}
            </Text>
            <Line className="bg-blue-100 h-px mt-5 w-[34%]" />
            <Text
              className="mt-[21px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
              size="txtWorkSansRegular22"
            >
              {props?.username}
            </Text>
            <PagerIndicator
              className="flex h-[18px] justify-center mt-8 w-[74px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue-100 w-[18px]"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-white-A700 w-[18px]"
              selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
            />
          </div>
        </div>
      </div>
    </>
 );
};

export default AboutUsTestimonials;
import React from "react";

import { Button, Img, List, PagerIndicator, Slider, Text } from "components";

const SingleServiceColumnrectangletwenty = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1.5 items-center justify-start">
          <Text
            className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase"
            size="txtWorkSansBold18"
          >
            {props?.trustedcare}
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900"
            size="txtYesevaOneRegular32"
          >
            {props?.ourdoctors}
          </Text>
        </div>
        <Slider
          autoPlay
          autoPlayInterval={2000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 1 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          ref={sliderRef}
          className="mt-16 w-full"
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-2.5"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start sm:ml-[0] w-auto">
                  <Img
                    className="h-[350px] sm:h-auto object-cover w-[317px] md:w-full"
                    src="images/img_rectangle20.png"
                    alt="rectangleTwenty"
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
                        {props?.neurology}
                      </Text>
                      <div className="flex flex-row gap-5 items-center justify-between mt-3.5 w-[83%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_vector_indigo_900.svg"
                          alt="vector"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_facebook_indigo_900.svg"
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
                    className="!text-blue-100 cursor-pointer font-worksans min-w-[317px] rounded-bl-[5px] rounded-br-[5px] text-base text-center"
                    color="indigo_900"
                    size="xs"
                    variant="fill"
                  >
                    {props?.groupfiftysix}
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start sm:ml-[0] w-auto">
                  <Img
                    className="h-[350px] sm:h-auto object-cover w-[317px] md:w-full"
                    src="images/img_rectangle20_350x317.png"
                    alt="rectangleTwenty"
                  />
                  <div className="bg-blue-100 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
                    <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtWorkSansRegular18Indigo900"
                      >
                        {props?.doctorsname1}
                      </Text>
                      <Text
                        className="mt-[9px] text-indigo-900 text-lg tracking-[2.88px] uppercase"
                        size="txtWorkSansBold18Indigo900"
                      >
                        {props?.neurology1}
                      </Text>
                      <div className="flex flex-row gap-5 items-center justify-between mt-3.5 w-[83%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_vector_indigo_900.svg"
                          alt="vector"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_facebook_indigo_900.svg"
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
                    className="!text-blue-100 cursor-pointer font-worksans min-w-[317px] rounded-bl-[5px] rounded-br-[5px] text-base text-center"
                    color="indigo_900"
                    size="xs"
                    variant="fill"
                  >
                    {props?.groupfiftysix1}
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start sm:ml-[0] w-auto">
                  <Img
                    className="h-[350px] sm:h-auto object-cover w-[317px] md:w-full"
                    src="images/img_rectangle20_1.png"
                    alt="rectangleTwenty"
                  />
                  <div className="bg-blue-100 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
                    <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                      <Text
                        className="text-indigo-900 text-lg"
                        size="txtWorkSansRegular18Indigo900"
                      >
                        {props?.doctorsname2}
                      </Text>
                      <Text
                        className="mt-[9px] text-indigo-900 text-lg tracking-[2.88px] uppercase"
                        size="txtWorkSansBold18Indigo900"
                      >
                        {props?.neurology2}
                      </Text>
                      <div className="flex flex-row gap-5 items-center justify-between mt-3.5 w-[83%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_vector_indigo_900.svg"
                          alt="vector"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_facebook_indigo_900.svg"
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
                    className="!text-blue-100 cursor-pointer font-worksans min-w-[317px] rounded-bl-[5px] rounded-br-[5px] text-base text-center"
                    color="indigo_900"
                    size="xs"
                    variant="fill"
                  >
                    {props?.groupfiftysix2}
                  </Button>
                </div>
              </List>
            </React.Fragment>
          ))}
        />
        <PagerIndicator
          className="flex h-[18px] justify-center mt-8 w-[74px]"
          count={3}
          activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-indigo-900 w-[18px]"
          activeIndex={sliderState1}
          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue-100 w-[18px]"
          sliderRef={sliderRef1}
          selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
          unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
        />
      </div>
    </>
  );
};

SingleServiceColumnrectangletwenty.defaultProps = {
  trustedcare: "Meet The",
  ourdoctors: "Team Members",
  doctorsname: "Doctor’s Name",
  neurology: "Neurology",
  groupfiftysix: "View Profile",
  doctorsname1: "Doctor’s Name",
  neurology1: "Neurology",
  groupfiftysix1: "View Profile",
  doctorsname2: "Doctor’s Name",
  neurology2: "Neurology",
  groupfiftysix2: "View Profile",
};

export default SingleServiceColumnrectangletwenty;

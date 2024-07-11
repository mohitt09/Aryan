import React from "react";
import { Link } from "react-router-dom";

import { Img, PagerIndicator, Slider, Text } from "components";

const HomeNewssection = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
     
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[81%] md:w-full">
          <div className="flex flex-col gap-[5px] items-center justify-start">
            <Text
              className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase"
              size="txtWorkSansBold18"
            >
              {props?.betterinformatiOne}
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900"
              size="txtYesevaOneRegular32"
            >
              {props?.newsOne}
            </Text>
          </div>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 2 },
              1050: { items: 4 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="mt-16 w-full"
            items={[...Array(12)].map(() => (
              <React.Fragment key={Math.random()}>
                <Link to="/singlenews"> {/* Wrap card with Link */}
                <div className="bg-white-A700 flex sm:flex-col flex-row gap-5 items-center justify-start mx-2.5 sm:pr-5 pr-8 rounded-[5px] shadow-bs">
                  <Img
                    className="h-[154px] md:h-auto object-cover rounded-bl-[5px] rounded-tl-[5px] w-[36%] sm:w-full"
                    src="images/img_rectangle34.png"
                    alt="rectangleThirtyFour"
                  />
                  <div className="flex flex-col items-start justify-start w-[61%] sm:w-full">
                    <Text
                      className="text-blue-500 text-sm"
                      size="txtWorkSansRegular14Blue500"
                    >
                      {props?.datetext}
                    </Text>
                    <Text
                      className="leading-[140.00%] mt-1.5 text-gray-900 text-lg w-[96%] sm:w-full"
                      size="txtWorkSansRegular18Gray900"
                    >
                      {props?.titletext}
                    </Text>
                    <div className="flex flex-row gap-2.5 items-center justify-start mt-[23px] w-[33%] md:w-full">
                      <div className="flex flex-row items-center justify-evenly w-[45%]">
                        <Img
                          className="h-2.5"
                          src="images/img_eye.svg"
                          alt="eye"
                        />
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtWorkSansRegular14Gray900"
                        >
                          {props?.eyecount}
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-evenly w-[45%]">
                        <Img
                          className="h-3.5"
                          alt="favorite"
                          src={props?.favoriteicon}
                        />
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtWorkSansRegular14Gray900"
                        >
                          {props?.favoritecount}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
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
      </div>
      
    </>
  );
};

HomeNewssection.defaultProps = {
  betterinformatiOne: "Better information, Better health",
  newsOne: "News",
  datetext: "Monday 05, September 2021 | By Author",
  titletext: (
    <>
      This Article’s Title goes Here, <br />
      but not too long.
    </>
  ),
  eyecount: "68",
  favoriteicon: "images/img_favorite_pink_500.svg",
  favoritecount: "86",
  monday05septembone: "Monday 05, September 2021 | By Author",
  thisarticlestitOne: (
    <>
      This Article’s Title goes Here, <br />
      but not too long.
    </>
  ),
  sixtyeight: "68",
  favorite: "images/img_favorite_pink_500.svg",
  eightysix: "86",
  monday05septembone1: "Monday 05, September 2021 | By Author",
  thisarticlestitone1: (
    <>
      This Article’s Title goes Here, <br />
      but not too long.
    </>
  ),
  sixtyeight1: "68",
  favorite1: "images/img_favorite_pink_500.svg",
  eightysix1: "86",
  monday05septembone2: "Monday 05, September 2021 | By Author",
  thisarticlestitone2: (
    <>
      This Article’s Title goes Here, <br />
      but not too long.
    </>
  ),
  sixtyeight2: "68",
  favorite2: "images/img_favorite_pink_500.svg",
  eightysix2: "86",
};

export default HomeNewssection;
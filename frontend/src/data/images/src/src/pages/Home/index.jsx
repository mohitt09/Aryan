import React from "react";
import { Link } from "react-router-dom";
import style from '../../styles/Cardio.module.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
  TextArea,
} from "components";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import HomeColumnNine from "components/HomeColumnNine";
import HomeColumnrectangletwenty from "components/HomeColumnrectangletwenty";
import HomeNewssection from "components/HomeNewssection";


const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const doctorOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];


const HomePage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 border border-black-900 border-solid flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full" activePage="home" />
        <div className="flex flex-col font-worksans md:px-5 relative w-full">
          <div className="h-[550px] mx-auto w-full">
            {/* <Img
              className="h-[550px] m-auto object-cover w-full"
              src="images/img_physiciantrend.png"
              alt="physiciantrend"
            /> */}
            <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[600px] items-center justify-start w-full"
                style={{ backgroundImage: "url('images/img_group8.svg')" }}
              >
                <div className="h-[550px] relative w-full">
                  <Img
                    className="h-[550px] m-auto object-cover w-full"
                    src="images/img_physiciantrend_550x1366.png"
                    alt="physiciantrend_One"
                  />
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[14%] my-auto w-[38%]">
                    <Text
                      className="text-blue-500 text-lg tracking-[2.88px] uppercase"
                      size="txtWorkSansBold18"
                    >
                      Caring for Life
                    </Text>
                    <Text
                      className="mt-1.5 text-5xl sm:text-[38px] md:text-[44px] text-indigo-900"
                      size="txtYesevaOneRegular48"
                    >
                      <>
                        Leading the Way
                        <br />
                        in Medical Excellence
                      </>
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium font-worksans leading-[normal] min-w-[170px] mt-[31px] rounded-[22px] text-base text-center"
                      onClick={() => navigate("/services")}
                      color="blue_100"
                      size="sm"
                      variant="fill"
                    >
                      Our Services
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-[-50px] mx-auto w-[73%] sm:w-full z-[1]">
            <Input
              name="goals"
              placeholder="Book an Appointment"
              className="p-0 placeholder:text-white-A700 text-base text-left w-full"
              wrapClassName="flex w-auto md:w-full"
              suffix={
                <Img
                  className="h-[50px] ml-[35px] my-auto"
                  src="images/img_grid.svg"
                  alt="grid"
                />
              }
              shape="round"
              color="indigo_900"
              size="md"
              variant="fill"
            ></Input>
            <Input
              name="goals_One"
              placeholder="Book an Appointment"
              className="p-0 placeholder:text-indigo-900 text-base text-left w-full"
              wrapClassName="flex md:h-auto ml-5 md:ml-[0] w-auto md:w-full"
              suffix={
                <Img
                  className="ml-[35px] my-auto"
                  src="images/img_lock.svg"
                  alt="lock"
                />
              }
              shape="round"
              color="blue_100"
              size="lg"
              variant="fill"
            ></Input>
            <Input
              name="goals_Two"
              placeholder="Book an Appointment"
              className="p-0 placeholder:text-white-A700 text-base text-left w-full"
              wrapClassName="flex md:h-auto md:ml-[0] ml-[21px] w-auto md:w-full"
              suffix={
                <Img
                  className="ml-[35px] my-auto"
                  src="images/img_camera.svg"
                  alt="camera"
                />
              }
              shape="round"
              color="blue_500"
              size="xl"
              variant="fill"
            ></Input>
          </div>
        </div>
        <div className="flex flex-col font-worksans items-center justify-start mt-16 md:px-5 w-[49%] md:w-full">
          <div className="flex flex-col gap-1.5 items-center justify-start">
            <Text
              className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase"
              size="txtWorkSansBold18"
            >
              Welcome to AryaN Hospital
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900"
              size="txtYesevaOneRegular32"
            >
              A Great Place to Receive Care
            </Text>
          </div>
          <Text
            className="leading-[140.00%] mt-[15px] text-base text-center text-gray-900 w-full"
            size="txtWorkSansRegular16"
          >
            we offer a comprehensive range of medical services designed to meet
            your health needs at every stage of life. From primary care to
            advanced specialty services,our team of dedicated professionals uses
            the latest in medical technology to ensure you receive the best care
            possible
          </Text>
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[109px] mt-2"
            onClick={() => navigate("/aboutus")}
            rightIcon={
              <div className="h-2.5 ml-2.5 w-2.5 outline-indigo-900 outline-[1px] outline my-1">
                <Img
                  className="h-2.5"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              </div>
            }
            size="xs"
          >
            <div className="text-base text-blue-500 text-left">Learn More</div>
          </Button>
        </div>
        <div className="h-[250px] md:h-[311px] max-w-[992px] mt-[61px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[250px] m-auto object-cover w-full"
            src="images/img_blackdoctors1.png"
            alt="blackdoctorsOne"
          />
          <Img
            className="absolute h-[250px] inset-[0] justify-center m-auto"
            src="images/img_group203.svg"
            alt="group203"
          />
        </div>
        <div className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-1.5 items-center justify-start">
            <Text
              className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase"
              size="txtWorkSansBold18"
            >
              Care you can believe in
            </Text>
            <Text className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900" size="txtYesevaOneRegular32">
              Our Services
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="bg-white-A700_6c border border-indigo-900_6c border-solid flex md:flex-1 flex-col gap-[25px] items-center justify-end pt-6 rounded-[5px] w-[16%] md:w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-[69%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_medical1.svg"
                    alt="medicalOne"
                  />
                  <Text
                    className="text-base text-center text-gray-900"
                    size="txtWorkSansRegular16"
                  >
                    Free Checkup
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-indigo-900 flex flex-col items-center justify-start p-6 sm:px-5 w-full">
                    <div className="flex flex-col gap-2.5 items-center justify-start w-[83%] md:w-full">
                      <Img
                        className="h-7"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                      <Text
                        className="text-base text-blue-100 text-center"
                        size="txtWorkSansRegular16Blue100"
                      >
                        Cardiogram
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start mt-6 w-[58%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                    <Text
                      className="text-base text-center text-gray-900"
                      size="txtWorkSansRegular16"
                    >
                      Dna Testing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start mt-12 w-[57%] md:w-full">
                    <Img
                      className="h-10"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                    <Text
                      className="text-base text-center text-gray-900"
                      size="txtWorkSansRegular16"
                    >
                      Blood Bank
                    </Text>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[157px] mt-[26px] text-center text-sm"
                    onClick={() => navigate("/aboutus")}
                    shape="round"
                    color="indigo_900"
                    size="sm"
                    variant="fill"
                  >
                    View All
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-7 w-[48%] md:w-full">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                  size="txtWorkSansMedium26"
                >
                  A passion for putting patients first.
                </Text>
                <div className="flex flex-col items-center justify-start mt-[23px] w-[89%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <List
                      className="flex flex-col gap-5 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-1 sm:flex-col flex-row gap-[54px] items-start justify-start mr-[21px] my-0 w-[95%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[54%] sm:w-full">
                          <div className="bg-blue-500 h-4 mb-[5px] rounded-[50%] w-4"></div>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtWorkSansRegular18Black900"
                          >
                            A Passion for Healing
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[33%] sm:w-full">
                          <div className="bg-blue-500 h-4 mb-1 rounded-[50%] w-4"></div>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtWorkSansRegular18Black900"
                          >
                            5-Star Care
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row items-center justify-between mr-[9px] my-0 w-[98%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[32%]">
                          <div className="bg-blue-500 h-4 my-0.5 rounded-[50%] w-4"></div>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtWorkSansRegular18Black900"
                          >
                            All our best
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[35%]">
                          <div className="bg-blue-500 h-4 my-0.5 rounded-[50%] w-4"></div>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtWorkSansRegular18Black900"
                          >
                            Believe in Us
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row gap-[38px] items-center justify-between my-0 w-full">
                        <div className="flex sm:flex-1 flex-row gap-2.5 items-start justify-start w-[55%] sm:w-full">
                          <div className="bg-blue-500 h-4 mb-[5px] rounded-[50%] w-4"></div>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtWorkSansRegular18Black900"
                          >
                            A Legacy of Excellence
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-2.5 items-start justify-start w-[36%] sm:w-full">
                          <div className="bg-blue-500 h-4 mb-[5px] rounded-[50%] w-4"></div>
                          <Text
                            className="text-black-900 text-lg"
                            size="txtWorkSansRegular18Black900"
                          >
                            Always Caring
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start mt-[31px] w-full">
                  <Text
                    className="leading-[140.00%] text-base text-gray-900 w-full"
                    size="txtWorkSansRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque placerat scelerisque tortor ornare ornare. Quisque
                    placerat scelerisque tortor ornare ornare Convallis felis
                    vitae tortor augue. Velit nascetur proin massa in. Consequat
                    faucibus porttitor enim et.
                  </Text>
                  <Text
                    className="leading-[140.00%] text-base text-gray-900 w-full"
                    size="txtWorkSansRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque placerat scelerisque. Convallis felis vitae tortor
                    augue. Velit nascetur proin massa in.
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start w-[33%] md:w-full">
                <div className="h-[231px] relative w-full">
                  <Img
                    className="absolute h-[231px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle13.png"
                    alt="rectangleThirteen"
                  />
                  <Img
                    className="absolute bottom-[0] h-2 inset-x-[0] mx-auto"
                    src="images/img_group184.svg"
                    alt="group184"
                  />
                </div>
                <div className="h-[231px] relative w-full">
                  <Img
                    className="h-[231px] m-auto object-cover w-full"
                    src="images/img_rectangle14.png"
                    alt="rectangleFourteen"
                  />
                  <Img
                    className="absolute bottom-[0] h-2 inset-x-[0] mx-auto"
                    src="images/img_group184.svg"
                    alt="group184_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col font-worksans md:gap-10 gap-[61px] items-center justify-start max-w-[992px] mt-32 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[9px] items-center justify-start">
            <Text className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase" size="txtWorkSansBold18">
              Always Caring
            </Text>

            <Text className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900" size="txtYesevaOneRegular32">
              Our Specialties
            </Text>
          </div>




          <div className={style.MainCardio}>

            <div style={{ display: 'flex', flexDirection: 'column',gap:'10px'}}>

              <div className={style.Border} style={{  display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'2px'}}>
                <Img  className="h-11 " src="images/img_close.svg" alt="close" />
                <Text>
                  Gynaecologist
                </Text>
              </div>


              <div className={style.Border} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'2px'}}>
                <Img className="h-11"  src="images/img_favorite_blue_500.svg" alt="favorite_One" />
                <Text>
                  Neurologists
                </Text>
              </div>

              <div className={style.Border} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'2px'}}>
                <Img
                  className="h-11"
                  src="images/img_favorite_blue_500.svg"
                  alt="favorite_One"
                />
                <Text>
                  paediatricians
                </Text>
              </div>

            </div>
            <div style={{ display: 'flex', flexDirection: 'column',gap:'10px'}}>

              <div className={style.Border} style={{  display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'2px'}}>
                <Img  className="h-11 " src="images/img_close.svg" alt="close" />
                <Text>
                  General Medicine
                </Text>
              </div>


              <div className={style.Border} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'2px'}}>
                <Img className="h-11"  src="images/img_favorite_blue_500.svg" alt="favorite_One" />
                <Text>
                  Surgeon
                </Text>
              </div>

              <div className={style.Border} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'2px'}}>
                <Img
                  className="h-11"
                  src="images/img_favorite_blue_500.svg"
                  alt="favorite_One"
                />
                <Text>
                  Radiologists
                </Text>
              </div>

            </div>

            <div style={{ display: 'flex', flexDirection: 'column',gap:'10px'}}>

              <div className={style.Border} style={{  display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'2px'}}>
                <Img  className="h-11 " src="images/img_close.svg" alt="close" />
                <Text>
                  Pulmonologists
                </Text>
              </div>


              <div className={style.Border} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'2px'}}>
                <Img className="h-11"  src="images/img_favorite_blue_500.svg" alt="favorite_One" />
                <Text>
                  General Physician
                </Text>
              </div>

              <div className={style.Border} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'2px'}}>
                <Img
                  className="h-11"
                  src="images/img_favorite_blue_500.svg"
                  alt="favorite_One"
                />
                <Text>
                  Internal Medicine
                </Text>
              </div>

            </div>

           
          </div>
        </div>

        <div className="font-worksans h-[573px] sm:h-[637px] md:h-[858px] mt-16 md:px-5 relative w-full">
          <Img
            className="h-[573px] m-auto object-cover w-full"
            src="images/img_rectangle33.png"
            alt="rectangleThirtyThree"
          />
          <div className="absolute bg-white-A700_a2 flex md:flex-col flex-row md:gap-10 gap-[94px] h-full inset-[0] items-start justify-center m-auto p-16 md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[123px] md:mt-0 mt-[143px]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue-500"
                size="txtYesevaOneRegular32Blue500"
              >
                Book an Appointment
              </Text>
              <Text
                className="leading-[140.00%] text-base text-gray-900 w-full"
                size="txtWorkSansRegular16"
              >
                Book your appointment at Aryan Hospital effortlessly. Choose
                your specialist, select a time, and begin your journey to better
                health. Experience expert care, modern facilities, and a
                patient-first approach. Need help? Contact us. Your wellness is
                our priority
              </Text>
            </div>
            <HomeColumnNine className="bg-blue-100 flex md:flex-1 flex-col items-center justify-start rounded-[5px] w-2/5 md:w-full" />
          </div>
        </div>
        <HomeColumnrectangletwenty className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        <HomeNewssection  className="bg-gray-50 flex flex-col font-worksans items-center justify-end mt-16 p-16 md:px-10 sm:px-5 w-full" />
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomePage;

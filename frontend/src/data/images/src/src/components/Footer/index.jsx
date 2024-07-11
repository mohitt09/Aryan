import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, Text } from "components";
import footerData from '../../data/footerData.json'; // Import your footer data
const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <footer className={props.className}>
      <div className="flex flex-col items-center justify-center mb-[73px] mt-[69px] mx-auto w-[73%]">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start">
              <Text
                className="common-pointer text-4xl sm:text-[32px] md:text-[34px] text-blue-100 uppercase"
                size="txtYesevaOneRegular36Blue100"
                onClick={() => navigate("/")}
              >
                <span className="text-blue-100 font-yesevaone text-left font-normal">ARYAN HOSPITAL</span>
                
              </Text>
              <Text className="leading-[140.00%] text-lg text-white-A700" size="txtWorkSansRegular18">
                Leading the Way in Medical <br />
                Execellence, Trusted Care.
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[39px] items-start justify-start md:mt-0 mt-0.5 w-[15%] md:w-full">
              <Text className="text-lg text-white-A700" size="txtWorkSansSemiBold18WhiteA700">
                Important Links
              </Text>
              <ul className="flex flex-col gap-2 items-start justify-start w-[103px] md:w-full common-column-list">
                {footerData.links.map((link, index) => (
                  <li key={index}>
                    <Text
                      className="common-pointer text-base text-white-A700"
                      size="txtWorkSansRegular16WhiteA700"
                      onClick={() => navigate(link.url)}
                    >
                      {link.label}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex md:flex-1 flex-col gap-[39px] items-start justify-start w-[24%] md:w-full">
              <Text className="text-lg text-white-A700" size="txtWorkSansSemiBold18WhiteA700">
                Contact Us
              </Text>
              <ul className="flex flex-col gap-2.5 items-start justify-start w-full common-column-list">
                <li>
                  <Text className="text-base text-white-A700" size="txtWorkSansRegular16WhiteA700">
                    Call: 9311339448
                  </Text>
                </li>
                <li>
                  <Text className="text-base text-white-A700" size="txtWorkSansRegular16WhiteA700">
                    Email: aryanhospital@yahoo.com
                  </Text>
                </li>
                <li>
                  <Text className="text-base text-white-A700" size="txtWorkSansRegular16WhiteA700">
                    Address: Address:78, Old Railway Rd, Rattan Garden, Shivpuri Extension, Sector 7, Gurugram, Haryana 122001
                  </Text>
                </li>
                <li>
                  <Text className="text-base text-white-A700" size="txtWorkSansRegular16WhiteA700">
                    {footerData.contact.addressLine2}
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-1 flex-col gap-[38px] items-start justify-start w-[28%] md:w-full">
              <Text className="text-lg text-white-A700" size="txtWorkSansSemiBold18WhiteA700">
                Newsletter
              </Text>
              <Input
                name="groupEightyNine"
                placeholder="Enter your email address"
                className="font-worksans p-0 placeholder:text-indigo-900 text-base text-left w-full"
                wrapClassName="flex w-full"
                suffix={
                  <div className="h-[29px] ml-6 w-[29px] bg-indigo-900">
                    <Img
                      className="h-[29px] my-auto"
                      src="images/img_save.svg"
                      alt="save"
                    />
                  </div>
                }
                shape="round"
                color="blue_100"
                size="sm"
                variant="fill"
              />
            </div>
          </div>
          <Line className="bg-blue-100 h-px mt-[47px] w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[43px] w-full">
            <Text
              className="md:mt-0 mt-[3px] text-base text-white-A700"
              size="txtWorkSansRegular16WhiteA700"
            >
              © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
            </Text>
            <Img
              className="h-6 md:ml-[0] ml-[422px] w-6"
              src="images/img_link.svg"
              alt="link"
            />
            <Img
              className="h-6 ml-5 md:ml-[0] w-6"
              src="images/img_facebook_blue_100.svg"
              alt="facebook"
            />
            <Img
              className="h-6 ml-5 md:ml-[0] w-6"
              src="images/img_info_blue_100.svg"
              alt="info"
            />
          </div>
        </div>
      </div>
    </footer>
      {/* <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[73px] mt-[69px] mx-auto w-[73%]">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start">
                <Text
                  className="common-pointer text-4xl sm:text-[32px] md:text-[34px] text-blue-100 uppercase"
                  size="txtYesevaOneRegular36Blue100"
                  onClick={() => navigate("/")}
                >
                  <span className="text-blue-100 font-yesevaone text-left font-normal">
                    Med
                  </span>
                  <span className="text-blue-100 font-yesevaone text-left font-normal">
                    dical
                  </span>
                </Text>
                <Text
                  className="leading-[140.00%] text-lg text-white-A700"
                  size="txtWorkSansRegular18"
                >
                  <>
                    Leading the Way in Medical
                    <br />
                    Execellence, Trusted Care.
                  </>
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-[39px] items-start justify-start md:mt-0 mt-0.5 w-[15%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtWorkSansSemiBold18WhiteA700"
                >
                  Important Links
                </Text>
                <ul className="flex flex-col gap-2 items-start justify-start w-[103px] md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-white-A700"
                      size="txtWorkSansRegular16WhiteA700"
                    >
                      Appointment
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="common-pointer text-base text-white-A700"
                      size="txtWorkSansRegular16WhiteA700"
                      onClick={() => navigate("/doctors")}
                    >
                      Doctors
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="common-pointer text-base text-white-A700"
                      size="txtWorkSansRegular16WhiteA700"
                      onClick={() => navigate("/services")}
                    >
                      Services
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700"
                      size="txtWorkSansRegular16WhiteA700"
                    >
                      About Us
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex md:flex-1 flex-col gap-[39px] items-start justify-start w-[24%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtWorkSansSemiBold18WhiteA700"
                >
                  Contact Us
                </Text>
                <ul className="flex flex-col gap-2.5 items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-white-A700"
                      size="txtWorkSansRegular16WhiteA700"
                    >
                      Call: (237) 681-812-255
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700"
                      size="txtWorkSansRegular16WhiteA700"
                    >
                      Email: fildineesoe@gmail.com
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700"
                      size="txtWorkSansRegular16WhiteA700"
                    >
                      Address: 0123 Some place
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-white-A700"
                      size="txtWorkSansRegular16WhiteA700"
                    >
                      Some country
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex md:flex-1 flex-col gap-[38px] items-start justify-start w-[28%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtWorkSansSemiBold18WhiteA700"
                >
                  Newsletter
                </Text>
                <Input
                  name="groupEightyNine"
                  placeholder="Enter your email address"
                  className="font-worksans p-0 placeholder:text-indigo-900 text-base text-left w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <div className="h-[29px] ml-6 w-[29px] bg-indigo-900">
                      <Img
                        className="h-[29px] my-auto"
                        src="images/img_save.svg"
                        alt="save"
                      />
                    </div>
                  }
                  shape="round"
                  color="blue_100"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <Line className="bg-blue-100 h-px mt-[47px] w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[43px] w-full">
              <Text
                className="md:mt-0 mt-[3px] text-base text-white-A700"
                size="txtWorkSansRegular16WhiteA700"
              >
                © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
              </Text>
              <Img
                className="h-6 md:ml-[0] ml-[422px] w-6"
                src="images/img_link.svg"
                alt="link"
              />
              <Img
                className="h-6 ml-5 md:ml-[0] w-6"
                src="images/img_facebook_blue_100.svg"
                alt="facebook"
              />
              <Img
                className="h-6 ml-5 md:ml-[0] w-6"
                src="images/img_info_blue_100.svg"
                alt="info"
              />
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

Footer.defaultProps = {};

export default Footer;

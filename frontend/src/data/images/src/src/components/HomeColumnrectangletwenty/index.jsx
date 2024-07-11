import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, PagerIndicator, Slider, Text } from "components";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa"; // Import the icons

const HomeColumnrectangletwenty = (props) => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [sliderState, setSliderState] = useState(0);
  const [sliderState1, setSliderState1] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
       try {
         const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/doctors`); // Adjust the URL based on your backend API
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }
         const data = await response.json();
         // Filter doctors to only include those with isActive set to true
         const activeDoctors = data.filter(doctor => doctor.isActive);
         console.log(activeDoctors[0].image.replace(/\\/g, "/"));
         setDoctors(activeDoctors); // Set the state with the filtered doctors
       } catch (error) {
         console.error("Error fetching doctors data:", error);
       }
    };
   
    fetchData();
   }, []);

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1.5 items-center justify-start">
          <Text
            className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase"
            size="txtWorkSansBold18"
          >
            Trusted Care
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900"
            size="txtYesevaOneRegular32"
          >
            Our Doctors
          </Text>
        </div>
        <Slider
          autoPlay
          autoPlayInterval={2000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 2 },
            1050: { items: 3 },
          }}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          className="mt-16 w-full"
        >
          {doctors.map((doctor, index) => (
            <List
              key={index}
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center mx-2.5"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start sm:ml-[0] w-auto">
                <Img
                  className="h-[350px] sm:h-auto object-cover w-[317px] md:w-full"
                  src={`${process.env.REACT_APP_BACKEND_URL}/${doctor.image.replace(
                    /\\/g,
                    "/"
                  )}`} // Adjust the URL based on your backend setup
                  alt={doctor.name}
                />
                <div className="bg-blue-100 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
                  <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                    <Text
                      className="text-indigo-900 text-lg"
                      size="txtWorkSansRegular18Indigo900"
                      style={{ whiteSpace: "nowrap", width: "100%" }}
                    >
                      {doctor.name}
                    </Text>
                    <Text
                      className="mt-[9px] text-indigo-900 text-lg tracking-[2.88px] uppercase"
                      size="txtWorkSansBold18Indigo900"
                    >
                      {doctor.specialty}
                    </Text>
                    <div className="flex flex-row gap-5 items-center justify-between mt-3.5 w-[83%] md:w-full">
                      <a
                        href={doctor.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaYoutube className="h-6 w-6" />
                      </a>
                      <a
                        href={doctor.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF className="h-6 w-6" />
                      </a>
                      <a
                        href={doctor.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-worksans min-w-[317px] text-base text-center"
                  shape="round"
                  color="indigo_900"
                  size="sm"
                  variant="fill"
                  onClick={() =>
                    navigate("/doctorprofile", { state: { doctorId: doctor._id }  })
                  }
                >
                  View Profile
                </Button>
              </div>
            </List>
          ))}
        </Slider>
        <PagerIndicator
          className="flex h-[18px] justify-center mt-8 w-[74px]"
          count={3} // Adjust this count based on the number of slides
          activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-indigo-900 w-[18px]"
          activeIndex={sliderState1}
          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue-100 w-[18px]"
          selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
          unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
        />
      </div>
    </>
  );
};

export default HomeColumnrectangletwenty;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";

import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

import style from './Neuro.module.css'

import n1 from '../../assets/images/n1.png'
import n2 from '../../assets/images/n2.png'
import p3 from '../../assets/images/p3.webp'

const Neurology = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />



      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Neurology"
      />


      <section className={style.kd}>

        <div className={style.right}>

          <img src={n1} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            EXPERT NEUROLOGICAL CARE
          </h4>
          <p>
            We understand the intricacies of neurological health, and our Neurology Department stands as a beacon of expertise and compassion for individuals facing neurological challenges. Our unwavering commitment to patient well-being is the cornerstone of our mission, and we have assembled a team of highly specialized professionals equipped with the latest technology to ensure unparalleled care for those navigating neurological conditions. In your most challenging times, trust us to deliver exceptional expertise and support for a path towards recovery and improved neurological health.
          </p>
        </div>

      </section>

      <section className={style.kd2}>

        <div className={style.left}>
          <h4>
            UNRIVALLED PROFESSIONALISM AND COMPASSION
          </h4>
          <p>
            We understand the intricacies of neurological health, and our Neurology Department stands as a beacon of expertise and compassion for individuals facing neurological challenges. Our unwavering commitment to patient well-being is the cornerstone of our mission, and we have assembled a team of highly specialized professionals equipped with the latest technology to ensure unparalleled care for those navigating neurological conditions. In your most challenging times, trust us to deliver exceptional expertise and support for a path towards recovery and improved neurological health.
          </p>
        </div>

        <div className={style.right}>

          <img src={n2} alt="" />

        </div>

      </section>

      <section className={style.kd3}>

        <div className={style.right}>

          <img src={p3} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            YOUR JOURNEY TO NEUROLOGICAL WELLNESS
          </h4>
          <p>
            Your comfort, both physically and emotionally, is our top priority. Throughout your neurological care, transparent communication with you and your family is maintained, ensuring everyone is informed at every stage. Beyond your time with us, our commitment extends to crafting comprehensive post-neurology care plans tailored to your unique needs. Trust us to provide the critical care essential for your journey towards renewed neurological health, marked by unwavering dedication and expertise.
            As we strive to continuously enhance our services, we actively seek feedback from patients and their families, ensuring an even more exceptional care experience. Your trust in us is our greatest motivation, and we are honored to be part of your path to neurological wellness.
          </p>
        </div>

      </section>


      <div className="flex flex-col w-[80%] m-auto gap-5 mt-[20px]">
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
      </div>
      <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />

    </div>
  );
};

export default Neurology;
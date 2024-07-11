import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

import ivf1 from '../../assets/images/o1.png'
import ivf2 from '../../assets/images/o2.jpeg'
import gy2 from '../../assets/images/o3.jpeg'
import style from './Ortho.module.css'

const Ortho = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Orthopedics"
      />

      <section className={style.kd}>

        <div className={style.right}>

          <img src={gy2} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            REDEFINING THE WORLD WITH THE BEST ORTHOPEDIC HOSPITAL IN GURGAON
          </h4>
          <p>
            Our dedicated team of highly skilled orthopedic surgeons commits to restoring your mobility and enabling you to live life to the fullest. As we enjoy longer lives, our joints and spine face increased demands, leading to a rise in Osteoarthritis and Osteoporosis cases. Our multi-specialty hospital provides comprehensive care for patients, even those with concurrent medical conditions. Our internationally trained orthopedic surgeons, who specialize in joint replacements, spinal operations, and arthroscopy surgeries, bring a wealth of expertise to Gurgaon. We dedicate ourselves to continually improving patient care by collaborating with renowned surgeons.
          </p>
        </div>

      </section>

      <section className={style.kd2}>

        <div className={style.left}>
          <h4>
            PIONEERING CARE FOR SPINAL HEALTH
          </h4>
          <p>
            Our dedicated team of highly skilled orthopedic surgeons commits to restoring your mobility and enabling you to live life to the fullest. As we enjoy longer lives, our joints and spine face increased demands, leading to a rise in Osteoarthritis and Osteoporosis cases. Our multi-specialty hospital provides comprehensive care for patients, even those with concurrent medical conditions. Our internationally trained orthopedic surgeons, who specialize in joint replacements, spinal operations, and arthroscopy surgeries, bring a wealth of expertise to Gurgaon. We dedicate ourselves to continually improving patient care by collaborating with renowned surgeons.
          </p>
        </div>

        <div className={style.right}>

          <img src={ivf2} alt="" />

        </div>

      </section>

      <section className={style.kd3}>

        <div className={style.right}>

          <img src={ivf1} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            PATIENT CENTERED CARE
          </h4>
          <p>
            At our hospital, patient comfort and well-being are our top priorities. Our experienced team of laparoscopic surgeons ensures you receive personalized care at every step. From pre-operative consultations to post-operative follow-ups, we are committed to providing comprehensive support. We understand that each patient is unique, and we tailor our treatment plans to your specific needs, ensuring a smooth and reassuring experience throughout your laparoscopic surgery journey. Our goal is to empower you with knowledge and compassionate care, making your health our primary concern.
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

export default Ortho;
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

import style from './S.module.css'
import gyn from '../../assets/images/so1.png'
import gyn2 from '../../assets/images/so2.png'
import gy2 from '../../assets/images/b1.jpg'

const SOnco = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Surgical Oncology"
      />


      <section className={style.kd}>

        <div className={style.right}>

          <img src={gyn} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            SURGICAL ONCOLOGY DEPARTMENT
          </h4>
          <p>
            Our surgical oncology team, comprising highly skilled and experienced surgeons, offers a diverse range of procedures tailored to individual patient needs. Our commitment to comprehensive care ensures precise treatment for even the most complex cases.
            Prioritizing patient well-being, we take a proactive approach to handle potential side effects, both during and after surgery. Our top notch surgeons not only remove cancerous growths but also focus on preserving and restoring normal bodily functions, ensuring a holistic approach to surgical oncology care. With cutting-edge technology and a patient-centered approach, we are dedicated to providing the highest quality surgical oncology care, giving our patients the best possible chance for a healthy future.
          </p>
        </div>

      </section>

      <section className={style.kd2}>

        <div className={style.left}>
          <h4>
            FACTORS AND THERAPIES
          </h4>
          <p>
            Determining whether a patient is a suitable candidate for chemotherapy depends on a multitude of factors, including the tumor’s location, grade, type, size, and stage, as well as the individual’s age, physical fitness, and overall health. In many cases, surgical procedures are combined with other cancer treatments, such as hormone therapy, chemotherapy, and radiation therapy. These therapies may be administered either before or after surgery to effectively halt the progression or spread of cancer. Our multidisciplinary team of specialists works closely with each patient to create personalized treatment plans, ensuring that the most appropriate combination of therapies.
          </p>
        </div>

        <div className={style.right}>

          <img src={gyn2} alt="" />

        </div>

      </section>


      <section className={style.kd3}>

        <div className={style.right}>

          <img src={gy2} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            OUR OFFERINGS
          </h4>
          <p>
            Our Department of Surgical Oncology offers specialized services in the surgical management of solid tumors. We focus on:
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: '4%' }}>
            <li>Breast Cancer</li>
            <li>Thyroid Cancer</li>
            <li>Head and Neck Cancer</li>
            <li>Gynecological Cancer</li>
          </ul>
          <p>
            Our dedicated team of surgical oncologists, medical oncologists, anesthesiologists, and other specialists collaborates to provide comprehensive care, mainly for lung cancer, breast cancer, and head & neck cancer patients in the Delhi-NCR region
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

export default SOnco;
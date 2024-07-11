import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import style from './IFV.module.css'

import ivf1 from '../../assets/images/ivf1.png'
import ivf2 from '../../assets/images/ivf2.png'
import gy2 from '../../assets/images/Gy2.jpg'

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

const IVF = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="IVF Treatment"
      />

      <section className={style.kd}>

        <div className={style.right}>

          <img src={ivf1} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            WELCOME TO ARYAN FERTILITY CENTER
          </h4>
          <p>
            Welcome to our renowned fertility destination, where we specialize in providing cutting-edge solutions to couples seeking to fulfill their dreams of parenthood. Nestled in our state-of-the-art facility, we offer a wide spectrum of services, ranging from Intrauterine Insemination (IUI) and In Vitro Fertilization (IVF) to Intra-Cytoplasmic Sperm Injection (ICSI), Egg Donation, Assisted Hatching, Laparoscopy, and Surrogacy. Our unwavering mission is to support infertile patients on their journey to parenthood, offering world-class medical care and harnessing the power of the latest technology. At our center, we turn dreams into reality, one family at a time.
          </p>
        </div>

      </section>

      <section className={style.kd2}>

        <div className={style.left}>
          <h4>
            BEST IN IVF AND REPRODUCTIVE MEDICINE
          </h4>
          <p>
            Our distinction lies in our extraordinary team of IVF specialists and embryologists who excel in Assisted Reproductive Technology (ART). With an impressive track record of success in test tube baby treatments, our devoted staff offers unparalleled support and personalized care, setting us apart from other fertility centers. Our state-of-the-art ART embryology laboratory adheres to rigorous international and European standards, enabling us to address even the most challenging cases of male and female infertility with the utmost precision. This commitment to excellence ensures that every patient receives the highest level of care and the best possible chance of achieving their dream of parenthood.
          </p>
        </div>

        <div className={style.right}>

          <img src={ivf2} alt="" />

        </div>

      </section>

      <section className={style.kd3}>

        <div className={style.right}>

          <img src={gy2} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            YOUR BEACON OF HOPE
          </h4>
          <p>
            When it comes to infertility treatment, trust the expertise of Dr. Gayatri  Aryan, who brings decades of experience in male and female infertility treatments. Our compassionate and skilled medical staff, under her guidance, will guide you through every step of your treatment and counseling. Aryan Fertility Center is not only a beacon of hope for local couples but also a destination for those coming from abroad to turn their dreams of parenthood into reality. We are here to make your journey to parenthood a reality, offering a comprehensive range of fertility services, including private counseling, Cryopreservation, Blastocyst Culture, Egg Donor Program, Surgical Sperm Retrieval (TESA / PESA), and Surrogacy.
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

export default IVF;
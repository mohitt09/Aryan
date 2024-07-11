import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import style from './pd.module.css'
import p1 from '../../assets/images/p1.png'
import p2 from '../../assets/images/p2.png'
import pd from '../../assets/images/pd.jpeg'


import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

const Pediatrics = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Pediatrics"
      />


      <section className={style.kd}>

        <div className={style.right}>

          <img src={p1} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            PEDIATRIC CARE CENTER
          </h4>
          <p>
            Welcome to our Pediatric Care Center, a haven where your child’s
            health and well-being take center stage. Our team of seasoned
            pediatric professionals comprehends the distinct healthcare needs of
            children, from the fragile newborns to the ever-growing adolescents.
            We are unwavering in our commitment to delivering exceptional,
            child-focused care. We’ve crafted an environment that nurtures growth
            and development, ensuring that every aspect of your child’s life
            receives the attention it deserves. In this safe and caring space,
            your child’s health and happiness are our top priorities, and we’re
            here to guide and support them at every stage of their journey.
          </p>
        </div>

      </section>

      <section className={style.kd2}>

        <div className={style.left}>
          <h4>
            COMPREHENSIVE CARE
          </h4>
          <p>
            Our Pediatric Care Center is your trusted partner for comprehensive
            pediatric care, prioritizing your child’s health and development. Our
            team of dedicated professionals specializes in a wide range of
            services, from newborn care and vaccinations to expertly managing
            chronic conditions and addressing developmental needs. We believe in
            the power of early intervention and preventive care, working closely
            with parents and caregivers to empower you with the knowledge and
            support needed for your child’s well-being. With a steadfast
            commitment to providing the highest quality care, we are here to
            nurture your child’s health and happiness.
          </p>
        </div>

        <div className={style.right}>

          <img src={p2} alt="" />

        </div>

      </section>

      <section className={style.kd3}>

        <div className={style.right}>

          <img src={pd} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            OUR SERVICES
          </h4>
          <p>
            We offer a wide range of services meticulously designed to cater to
            your child’s unique needs. Our experienced pediatricians are dedicated
            to maintaining your child’s health and well-being, conducting routine
            check-ups, administering vaccinations, and managing sick visits to
            ensure your child’s optimal health. Additionally, we provide
            specialized services such as:
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: '4%' }}>
            <li>Chronic Condition Managemen</li>
            <li>Behavioral Health Services</li>
            <li>Developmental Concerns</li>
          </ul>
          <p>
            Our modern, child-centric facility is designed to foster a comforting
            atmosphere, ensuring that every visit is a positive, reassuring
            experience for your little ones. We’re committed to delivering the
            highest quality care for your child
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

export default Pediatrics;
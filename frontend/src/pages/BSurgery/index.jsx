import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";


import style from './B.module.css'
import gyn from '../../assets/images/Ba1.avif'
import gyn2 from '../../assets/images/ba2.webp'
import gy2 from '../../assets/images/ba3.webp'

const BSurgery = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Bariatric Surgery"
      />

      <section className={style.kd}>

        <div className={style.right}>

          <img src={gyn} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            LIFE CHANGING SURGERY SOLUTION
          </h4>
          <p>
            Excess weight and obesity are not just local concerns; they’re global challenges. Research has shown a clear link between a higher body mass index (BMI) and the risk of accompanying health issues, including hypertension, sleep apnea, diabetes, high cholesterol, and coronary artery disease. When individuals who are morbidly obese also battle these conditions, their quality of life is severely impacted. At our hospital in Gurgaon, we’re committed to transforming lives through our specialized bariatric surgery services.
            Our dedicated team is here to support you on your journey towards better health and improved well-being. Explore the possibilities of a life-changing surgery by contacting us today.
          </p>
        </div>

      </section>

      <section className={style.kd2}>

        <div className={style.left}>
          <h4>
            OUR APPROACH
          </h4>
          <p>
            We employ a comprehensive approach to bariatric surgery. We begin with a detailed assessment, which may include physical exams and diagnostic tests. Our expert team, covering various medical specialties, customizes a weight reduction plan tailored to your specific health needs. Our leading surgeons in Gurgaon perform these procedures using advanced minimally invasive techniques, ensuring swift recovery. We offer a range of bariatric surgery options, including Gastric Bypass, gastric banding, and sleeve gastrectomy.
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
            OUR SERVICES
          </h4>
          <p>
            Before undergoing weight loss surgery, a series of tests will be conducted to assess your health and determine the most appropriate course of action.
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: '4%' }}>
            <li>Fasting glucose and hemoglobin A1C levels</li>
            <li>Lipid profile tests</li>
            <li>Complete blood count</li>
            <li>Liver function tests</li>
            <li>Screening for nutrient deficiencies</li>
            <li>Sleep study</li>
            <li>Thyroid function tests</li>
            <li>Obstetric assessments (for female patients)</li>
          </ul>
          <p>
            These tests are essential in evaluating your readiness for weight loss surgery. For more information and guidance on your bariatric surgery journey, please contact us.
          </p>
        </div>

      </section>

      <div className="flex flex-col w-[80%] m-auto gap-5 mt-[20px]">
        <img className="w-[100%]" src="images/bs1.png" alt="" />

        

        

     
       
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
      </div>
      <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />

    </div>
  );
};

export default BSurgery;
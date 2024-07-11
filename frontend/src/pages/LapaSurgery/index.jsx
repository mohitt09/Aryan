
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";

import ivf1 from '../../assets/images/ls1.png'
import ivf2 from '../../assets/images/ls2.png'
import gy2 from '../../assets/images/ls3.jpeg'
import style from './Lap.module.css'

const LapaSurgery = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Home / Services"
        aboutustext="Laparoscopic Surgery"
      />


      <section className={style.kd}>

        <div className={style.right}>

          <img src={ivf1} alt="" />

        </div>

        <div className={style.left}>
          <h4>
            MINIMAL ACCESS SURGERY IN GURGAON
          </h4>
          <p>
            Laparoscopy has established itself as the go-to method for addressing a variety of abdominal problems. Our medical facility is dedicated to delivering the highest standard of care by regularly performing both basic and advanced laparoscopic procedures on our patients. This method offers significant advantages, including reduced blood loss, shorter hospital stays, improved cosmetic results, quicker patient recovery, decreased post-operative discomfort, and a speedier return to work. This modern surgical approach not only enhances patient outcomes but also streamlines our hospital’s overall treatment process, ensuring that our patients receive the best possible care..
          </p>
        </div>

      </section>

      <section className={style.kd2}>

        <div className={style.left}>
          <h4>
            PATIENT CENTERED CARE
          </h4>
          <p>
            At our hospital, patient comfort and well-being are our top priorities. Our experienced team of laparoscopic surgeons ensures you receive personalized care at every step. From pre-operative consultations to post-operative follow-ups, we are committed to providing comprehensive support. We understand that each patient is unique, and we tailor our treatment plans to your specific needs, ensuring a smooth and reassuring experience throughout your laparoscopic surgery journey. Our goal is to empower you with knowledge and compassionate care, making your health our primary concern.
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
            OUR TECHNIQUES
          </h4>
          <p>
            Advanced laparoscopic techniques are routinely performed at our hospital to treat a range of conditions, including:
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: '4%' }}>
            <li>Laparoscopy for Hiatus Hernia.</li>
            <li> Laparoscopy for Liver Cysts.</li>
            <li>Common Bile Duct Stones (both laparoscopic and endoscopic).</li>
            <li>Laparoscopy for Achalasia Cardia.</li>
            <li> Laparoscopy for Gastric Malignancy (cancer).</li>
            <li>Laparoscopy for Rectal Cancers.</li>
          </ul>
        </div>

      </section>


      <div className="flex flex-col w-[80%] m-auto gap-5 mt-[20px]">
        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
      </div>
      <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />

    </div>
  );
};

export default LapaSurgery;

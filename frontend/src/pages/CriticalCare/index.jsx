import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import style from './CriticalCare.module.css'

import kd from '../../data/images/CC1.jpg'
import kd2 from '../../data/images/CC2.jpg'
import kd3 from '../../data/images/CC3.jpg'

import { Button, Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";

import Footer from "components/Footer";

const CriticalCare = () => {
    return (
        <div>
            {/* <Header /> */}
            <Navbar />

            <AboutUsSubhead
                className="h-[250px] md:px-5 relative w-full"
                userimage="images/img_rectangle3_250x1366.png"
                homeabouttext="Home / Services"
                aboutustext="Critical Care"
            />


            <section className={style.kd}>

                <div className={style.right}>

                    <img src={kd} alt="" />

                </div>

                <div className={style.left}>
                    <h4>
                         CRITICAL CARE
                    </h4>
                    <p>
                        Our Critical Care Unit (CCU) serves as a beacon of hope and expertise, steadfastly prepared to provide the vital support you or your loved ones need during episodes requiring intensive medical attention. Our unwavering dedication to patient well-being is at the core of our mission. We’ve assembled a team of highly dedicated professionals, armed with state-of-the-art equipment, to guarantee the highest level of care for individuals confronting life-threatening conditions. In your most challenging times, you can rely on us to deliver the exceptional care and expertise required to navigate towards recovery and better health. Our commitment to excellence in critical care is unwavering, and we are here to support you every step of the way.
                    </p>
                </div>

            </section>

            <section className={style.kd2}>

                <div className={style.left}>
                    <h4>
                        UNPARALLELED EXPERTISE AND COMPASSION
                    </h4>
                    <p>
                        Comprising board-certified intensivists, seasoned nurses, and dedicated support staff, our Critical Care team operates around the clock, delivering advanced care. Our specialization lies in addressing intricate medical challenges, from post-operative recovery and cardiac emergencies to respiratory distress and beyond. By leveraging cutting-edge technology and maintaining vigilant monitoring, we adopt a patient-centered approach. This allows us to provide personalized, compassionate care with a singular focus: ensuring the best possible outcomes for every individual under our care. In addition, our team is continually expanding its knowledge and skills to stay at the forefront of medical advancements. We are committed to advancing our expertise in critical care to provide the highest level of service.
                    </p>
                </div>

                <div className={style.right}>

                    <img src={kd3} alt="" />

                </div>

            </section>

            <section className={style.kd3}>

                <div className={style.right}>

                    <img src={kd2} alt="" />

                </div>

                <div className={style.left}>
                    <h4>
                        YOUR PATH TO RECOVERY
                    </h4>
                    <p>
                        We place your comfort and overall well-being, both physical and emotional, at the forefront of our care. Throughout your stay, we maintain transparent communication with your family, ensuring they’re informed at every juncture. Our commitment transcends the hospital stay, as we craft thorough post-CCU care plans tailored to your unique needs. Rest assured that you can rely on us to deliver the critical care essential for you or your loved one’s journey towards renewed health and vitality, marked by unwavering dedication and expertise. We continuously strive to improve our services, seeking feedback from our patients and their families to ensure an even more exceptional care experience. Your trust in us is our greatest motivation, and we are honored to be part of your recovery journey.
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

export default CriticalCare;
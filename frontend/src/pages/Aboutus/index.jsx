import React, { useState, useEffect } from "react";

import Navbar from "components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import Footer from "components/Footer";
import HomeColumnFourteen from "components/HomeColumnFourteen";

import Aos from "aos";
import 'aos/dist/aos.css';

import style from './About.module.css';
import ar from '../../assets/images/PR_Aryan.jpeg';
import ar2 from '../../data/images/kamlesh.jpg';

const AboutusPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const options = ['Professionalism','Integrity', 'Promise', 'Value', 'Commitment'];

  const paragraphs = [
   
    "We will sustain public trust in the medical profession through our unwavering adherence to a strict code of conduct, high standards of service, and exceptional quality of medical care. Our commitment to ethical behavior, respect, and accountability ensures that our patients receive the best possible treatment. By consistently exceeding expectations, we foster trust and confidence in our profession. Maintaining these high standards is essential to upholding the integrity and respect of the medical field, and we are dedicated to exemplifying professionalism in all aspects of our work.",
    " We are dedicated to the highest ethical standards in our organization.",
    "We are dedicated to creating a healthcare environment rooted in collaboration, cooperation, mutual respect, and trust.At our healthcare facility, we prioritize teamwork and open communication to ensure the highest standard of patient care. Every member of our team is committed to treating colleagues and patients with dignity and respect, fostering a supportive and inclusive atmosphere. Our promise is to maintain a culture where trust and mutual respect are the foundation of all interactions",
    "Our institutional primary value: The needs of the patient come first.Our core values: Respect, integrity, compassion, healing, teamwork, innovation, excellence and stewardship.",
    "We are committed to providing exceptional healthcare through unwavering dedication to quality, compassion, and patient-centered care.At our healthcare facility, our foremost priority is the well-being of our patients. We pledge to deliver the highest standard of medical care with compassion and empathy. Our commitment extends to continuous improvement and innovation in our services, ensuring that we remain at the forefront of medical advancements. By fostering a culture of excellence, respect, and integrity, we aim to build lasting trust and relationships with our patients and their families. Every decision and action we take is guided by our dedication to enhancing the health and lives of those we serve."
  ];

  const [selectedOption, setSelectedOption] = useState('Promise');
  const [visiblePara, setVisiblePara] = useState(0);

  useEffect(() => {
    setVisiblePara(options.indexOf(selectedOption));
  }, [selectedOption, options]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxName) => {
    setActiveBox((prevActiveBox) => (prevActiveBox === boxName ? null : boxName));
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
        <Navbar className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full" activePage="aboutus" />
        <AboutUsSubhead className="h-[250px] md:h-[253px] md:px-5 relative w-full" />
        <div className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col gap-1.5 items-start justify-start">
              </div>
            </div>
          </div>
        </div>


        <section className={style.About2}>

          <div className={style.Aboutone}>
            <img src={ar} alt="" />
            <h2>Dr. P.R Aryan</h2>
            <h6>Chairman</h6>
          </div>

          <div className={style.Abouttwo}>
            <h2>About Aryan Hospital</h2>
            <p>We offer a wide range of high quality medical services.</p>
            <div style={{ borderColor: '#ef9a3d', borderTopWidth: '1px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', marginBottom: '20px', width: '100%', maxWidth: '170px' }}></div>
          </div>

          <div className={style.Aboutthree}>

            <img src={ar2} alt="" />
            <h2>Late Dr. Kamlesh Aryan</h2>
            <h6>Founder</h6>
          </div>

        </section>




        <section className={style.About}>
          <h2>About Aryan Hospital</h2>
          <p>We offer a wide range of high quality medical services.</p>
          <div style={{ borderColor: '#ef9a3d', borderTopWidth: '1px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', marginBottom: '20px', width: '100%', maxWidth: '170px' }}></div>
        </section>

        <section className={style.imgs}>
          <div className={style.sec2}>
            <p>Established in 1984 as a humble clinic, Aryan Hospital's journey to excellence is simply awe-inspiring. From a 10-bed nursing home in 1986 to a full-fledged multi-specialty hospital in 1995, its evolution is remarkable. Offering top-notch services in neurology, surgery, pediatrics, critical care, and more, Aryan Hospital has truly become a beacon of top-tier healthcare. The addition of vision diagnostic labs with CT Scan, Ultrasound, and X-ray in 2000 further solidifies its commitment to cutting-edge care. Aryan Hospital isn't just a hospital; it's a testament to passion and dedication in the medical field!</p>
            
          </div>
        </section>

        <div className={style.cart}>
          <div className={style.cart1}>
            <h6>OUR VISION</h6>
            <p>Aryan Hospital endeavours in providing excellent services for fulfilling the healthcare needs of the community for any given medical treatment. This hospital lays a lot of emphasis on good teamwork, which thus bring together every important discipline and proficiency from many resources of our organization to treat the patients in a more effective way. This attempt makes The Aryan hospital care a class of its own.</p>
          </div>
          
          <div className={style.line}></div>
          <div className={style.cart3}>
            <h6>OUR MISSION</h6>
            <p>Aryan Hospital is dedicated to providing the highest standards of complete medical care to every segment of society which includes even the deprived and underprivileged by making use of the best technology and proficiency in the profession in your service. Compassion, empathy, dedication, and smile are few of the elements along with the excellent medical care. We believe in establishing the best practice standards in our services.</p>
          </div>
        </div>

        <section className={style.Department}>
          <div className={style.left}>
            <h4>Our Departments</h4>
            <div className={style.line}></div>

            <div
              className={`${style.box} ${activeBox === 'Critical Care' ? style.active : ''}`}
              onClick={() => handleBoxClick('Critical Care')}
            >
              Critical Care <span className={style.plus}>{activeBox === 'Critical Care' ? '-' : '+'}</span>
            </div>
            {activeBox === 'Critical Care' && (
              <p className={style.paragraph}>
                Aryan Hospital offers comprehensive critical care services to address a wide range of serious conditions. Our team of experienced professionals is dedicated to providing high-quality care and personalized treatment plans for each patient. From diagnostic testing to advanced procedures, we strive to ensure the best possible outcomes for our patients. Trust Aryan Hospital for all your critical care needs.
              </p>
            )}

            <div
              className={`${style.box} ${activeBox === 'Cardiology' ? style.active : ''}`}
              onClick={() => handleBoxClick('Cardiology')}
            >
              Cardiology <span className={style.plus}>{activeBox === 'Cardiology' ? '-' : '+'}</span>
            </div>
            {activeBox === 'Cardiology' && (
              <p className={style.paragraph}>
                Aryan Hospital offers comprehensive cardiology services to address a wide range of heart-related conditions. Our team of experienced cardiologists and support staff are dedicated to providing high-quality care and personalized treatment plans for each patient. From diagnostic testing to advanced procedures, we strive to ensure the best possible outcomes for our patients. Trust Aryan Hospital for all your cardiology needs.
              </p>
            )}

            <div
              className={`${style.box} ${activeBox === 'Gynecology' ? style.active : ''}`}
              onClick={() => handleBoxClick('Gynecology')}
            >
              Gynecology <span className={style.plus}>{activeBox === 'Gynecology' ? '-' : '+'}</span>
            </div>
            {activeBox === 'Gynecology' && (
              <p className={style.paragraph}>
                Come experience top-notch gynecology services at Aryan Hospital! Our team of dedicated professionals is here to provide expert care and support for all your women's health needs. From routine check-ups to specialized treatments, we offer comprehensive services to ensure your well-being. Visit us today and let us take care of you with compassion and expertise. Your health is our priority at Aryan Hospital!
              </p>
            )}

            <div
              className={`${style.box} ${activeBox === 'Surgery' ? style.active : ''}`}
              onClick={() => handleBoxClick('Surgery')}
            >
              Surgery <span className={style.plus}>{activeBox === 'Surgery' ? '-' : '+'}</span>
            </div>
            {activeBox === 'Surgery' && (
              <p className={style.paragraph}>
                Come experience the top-notch surgery services at Aryan Hospital! Our skilled team of surgeons is dedicated to providing the highest quality care to all our patients. From minor procedures to complex surgeries, we have the expertise and technology to ensure successful outcomes. Trust Aryan Hospital for all your surgical needs and experience the difference in our exceptional care.
              </p>
            )}

            <div
              className={`${style.box} ${activeBox === 'Pediatrics' ? style.active : ''}`}
              onClick={() => handleBoxClick('Pediatrics')}
            >
              Pediatrics <span className={style.plus}>{activeBox === 'Pediatrics' ? '-' : '+'}</span>
            </div>
            {activeBox === 'Pediatrics' && (
              <p className={style.paragraph}>
                At Aryan Hospital, our pediatrics services are top-notch and tailored to meet the unique needs of children. Our team of experienced and compassionate pediatricians are dedicated to providing the best care for your little ones. From routine check-ups to specialized treatments, we are here to ensure that your child receives the highest quality medical care. Trust Aryan Hospital for all your pediatric healthcare needs – we are committed to keeping your child healthy and happy!
              </p>
            )}
          </div>

          <div className={style.right}>
            <h4>How we work</h4>
            <div className={style.line}></div>

            <div className={style.option}>
              {options.map((option) => (
                <div
                  key={option}
                  className={selectedOption === option ? style.selected : style.notselected}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>

            <div className={style.content}>
              {paragraphs.map((paragraph, index) => (
                <p key={index} style={{ display: visiblePara === index ? 'block' : 'none' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
        <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutusPage;

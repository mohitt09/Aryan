import React, { useState,useEffect} from 'react';
import Style from "../../styles/Doctor.module.css";
import Profile from '../../data/images/IMG.jpg'
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import { FaBriefcase } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import HomeColumnNine from "components/HomeColumnNine";
import { Img} from "components";


import { useLocation } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';


import Header from "components/Header";
import Navbar from "components/Navbar";
import Footer from "components/Footer";



const dateOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];
const doctorOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

const HomePage = () => {


    const location = useLocation();
    const { doctorId } = location.state; // Assuming you're passing the doctor's ID in the state
    const [doctor, setDoctor] = useState(null);


    useEffect(() => {
        const fetchDoctorDetails = async () => {
            if (doctorId) {
                try {
                    // Replace the URL with your actual API endpoint
                    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/doctors/${doctorId}`);
                    const data = await response.json();
                    setDoctor(data);
                } catch (error) {
                    console.error("Error fetching doctor details:", error);
                    // Handle the error appropriately, e.g., show a message to the user
                }
            }
        };

        fetchDoctorDetails();
    }, [doctorId]); // Depend on doctorId to refetch if it changes

    if (!doctor) {
        return <div>Loading...</div>; 
    }



    return (
        <>
            <div className="bg-white-A700 border border-black-900 border-solid flex flex-col font-yesevaone items-center justify-start mx-auto w-full">
                <Header className="head bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
                <Navbar
                    className="bg-indigo-900 flex md:flex-col flex-row font-worksans md:gap-10 gap-[276px] items-center justify-center max-w-[1366px] md:px-10 sm:px-5 px-[187px] py-[17px] w-full"
                    activePage="home"
                />

                <div className={Style.container}>
                    <div className={Style.profilecontainer}>
                        <h2>
                            <span>Doctor-</span>
                            <span>
                                {doctor.name}
                            </span>
                        </h2>
                        <div className={Style.content} >


                            <Img
                                src={`${process.env.REACT_APP_BACKEND_URL}/${doctor.image.replace(/\\/g, "/")}`} 
                                alt={doctor.name}
                                className={Style.profile} 
                            />

                            <img className={Style.profile} src={Profile} alt="Profile" />

                            <span className={Style.line} style={{ width: '300px'}}>

                                <p className={Style.name} >
                                    {doctor.name}
                                </p>
                                
                                <br />
                                <p style={{ fontSize: '1em' }}>
                                    Doctor’s ID:
                                    {doctor.doctorId}
                                </p>
                                <br />
                                <p style={{ fontSize: '1em' }}>
                                    Experience:
                                    {doctor.experience}
                                </p>
                                <br />
                                <p style={{ fontSize: '1em' }}>
                                    Department:
                                    {doctor.department}
                                </p>
                                <br />
                                <p style={{ fontSize: '1em' }}>
                                    Fees: 
                                    {doctor.fees}
                                </p>
                                <br />
                            </span>
                        </div>
                    </div>
                    <div>
                        <CustomDatePicker />
                    </div>
                </div>
                <div className={Style.about}>
                    <div>
                        <h1 style={{ fontSize: '2.25em', color: 'gray' }}>
                            About :
                            {doctor.name}
                        </h1>

                        <br />
                        <h1 style={{ fontSize: '1.125rem', color: 'black', display: 'flex', gap: '10px' }}>
                            <FaBriefcase />  Work Experience
                        </h1>
                        <br />
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5em', fontSize: '1rem' }}>
                            <li>
                                {doctor.about}
                            </li>

                        </ul>

                        <br />

                        <h1 style={{ fontSize: '1.125rem', color: 'black', display: 'flex', gap: '10px' }}>
                            <FaGraduationCap />  Education & Training
                        </h1>
                        <br />
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5em', fontSize: '1rem' }}>
                            <li>
                                {doctor.education}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <HomeColumnNine
                            style={{ position: "relative", top: "50px" }}
                            className="bg-blue-100 flex md:flex-1 flex-col items-center justify-start  w-2/5 md:w-full" />
                    </div>
                </div>

                <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
            </div>
        </>
    );
};

export default HomePage;

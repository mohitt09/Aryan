// src/Routes.jsx
import React from "react";
import "./Router.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const Contact = React.lazy(() => import("pages/Contact"));
const Doctors = React.lazy(() => import("pages/Doctors"));
const Services = React.lazy(() => import("pages/Services"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Home = React.lazy(() => import("pages/Home"));
const SingleService = React.lazy(() => import("pages/SingleService"));
const SingleNews = React.lazy(() => import("pages/SingleNews"));
const News = React.lazy(() => import("pages/News"));
const Appointment = React.lazy(() => import("pages/Appointment"));
const DoctorProfile = React.lazy(() => import("pages/DoctorProfile"));
const UploadDoctor = React.lazy(() => import("pages/UploadDoctor/UploadDoctor"));
const BlogUpload = React.lazy(() => import("pages/BlogsUpload/BlogUpload"));
const AppointmentsPage = React.lazy(() => import("pages/AppointmentsPage/AppointmentsPage"));
// const PaymentPage = React.lazy(() => import("pages/PaymentPage/PaymentPage")); // Import the PaymentPage component
const PaymentPage = React.lazy(() => import("pages/PaymentPage/PaymentPage"));

const ProjectRoutes = () => {
 return (
    <React.Suspense fallback={<>
      <svg className="pl Loader" width="240" height="240" viewBox="0 0 240 240">
        <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
        <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
        <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
        <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
    </svg>
    </>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/news" element={<News />} />
          <Route path="/singlenews" element={<SingleNews />} />
          <Route path="/singleservice" element={<SingleService />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route path="/upload-doctor" element={<UploadDoctor />} />
          <Route path="/upload-blog" element={<BlogUpload />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/payment" element={<PaymentPage />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
 );
};

export default ProjectRoutes;
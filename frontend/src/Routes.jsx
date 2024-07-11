// src/Routes.jsx
import React from "react";
import "./Router.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";
import DoctorProtectedRoute from "components/DoctorProtectedRoute/DoctorProtectedRoute";

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
const UploadDoctor = React.lazy(() =>
  import("pages/UploadDoctor/UploadDoctor")
);
const BlogUpload = React.lazy(() => import("pages/BlogsUpload/BlogUpload"));
const AppointmentsPage = React.lazy(() =>
  import("pages/AppointmentsPage/AppointmentsPage")
);
const PaymentPage = React.lazy(() => import("pages/PaymentPage/PaymentPage"));
const Login = React.lazy(() => import("pages/DoctorLogin/DoctoLogin"));
const Gynaecology = React.lazy(() => import("./pages/Gynaecology"));
const CriticalCare = React.lazy(() => import("./pages/CriticalCare"));
const IVF = React.lazy(() => import("./pages/IVF"));
const Pediatrics = React.lazy(() => import("./pages/Pediatrics"));
const Neurology = React.lazy(() => import("./pages/Neurology"));
const LapaSurgery = React.lazy(() => import("./pages/LapaSurgery"));
const Ortho = React.lazy(() => import("./pages/Ortho"));
const BSurgery = React.lazy(() => import("./pages/BSurgery"));
const SOnco = React.lazy(() => import("./pages/SOnco"));
const Kd = React.lazy(() => import("./pages/Kd"));
const Dashboard = React.lazy(() => import("pages/Dashboard/Dashboard"));
const DoctorAppointmentProfile = React.lazy(() =>
  import("pages/DoctorAppointmentProfile/DoctorAppointmentProfile")
); // Import the DoctorAppointmentProfile component
const Doctor = React.lazy(() => import("./pages/Doctor/Doctor"));
const UploadAdmin = React.lazy(() => import("./pages/UploadAdmin/UploadAdmin"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Sms = React.lazy(() => import("./pages/SmsPage/SmsPage"));
const AdminPayments = React.lazy(() =>
  import("./pages/AdminPayments/AdminPayments")
);
const UserQueries = React.lazy(() => import("./pages/UserQueries/UserQueries"));
const EditBlogPage = React.lazy(() =>
  import("./pages/EditBlogPage/EditBlogPage")
);

const ProjectRoutes = () => {
  return (
    <React.Suspense
      fallback={
        <>
          <svg
            className="pl Loader"
            width="240"
            height="240"
            viewBox="0 0 240 240"
          >
            <circle
              className="pl__ring pl__ring--a"
              cx="120"
              cy="120"
              r="105"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              strokeDasharray="0 660"
              strokeDashoffset="-330"
              strokeLinecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--b"
              cx="120"
              cy="120"
              r="35"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              strokeDasharray="0 220"
              strokeDashoffset="-110"
              strokeLinecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--c"
              cx="85"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              strokeDasharray="0 440"
              strokeLinecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--d"
              cx="155"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              strokeDasharray="0 440"
              strokeLinecap="round"
            ></circle>
          </svg>
        </>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/sms" element={<Sms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/news" element={<News />} />
          <Route path="/singlenews" element={<SingleNews />} />
          <Route path="/singleservice" element={<SingleService />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route
            path="/upload-doctor"
            element={
              <ProtectedRoute>
                <UploadDoctor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upload-blog"
            element={
              <ProtectedRoute>
                <BlogUpload />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminPayments"
            element={
              <ProtectedRoute>
                <AdminPayments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/User-Queries"
            element={
              <ProtectedRoute>
                <UserQueries />
              </ProtectedRoute>
            }
          />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Gynaecology" element={<Gynaecology />} />
          <Route path="/critical-care" element={<CriticalCare />} />
          <Route path="/IVF-Treatment" element={<IVF />} />
          <Route path="/pediatrics" element={<Pediatrics />} />
          <Route path="/Neurology" element={<Neurology />} />
          <Route path="/Laparoscopic-Surgery" element={<LapaSurgery />} />
          <Route path="/Orthopedics" element={<Ortho />} />
          <Route path="/Bariatric-Surgery" element={<BSurgery />} />
          <Route path="/Surgical-Oncology" element={<SOnco />} />
          <Route path="/Kidney-Dialysis" element={<Kd />} />
          <Route path="/edit-blog/:blogId" element={<EditBlogPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upload-admin"
            element={
              <ProtectedRoute>
                <UploadAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor-appointment-profile"
            element={
              <DoctorProtectedRoute>
                <DoctorAppointmentProfile />
              </DoctorProtectedRoute>
            }
          />{" "}
          {/* Added route for DoctorAppointmentProfile */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;

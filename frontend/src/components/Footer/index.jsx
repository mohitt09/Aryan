import React from "react";

import { useNavigate } from "react-router-dom";
import style from "./Footer.module.css";

import { FaHome } from "react-icons/fa";

import {
  FaLinkedin,
  FaGoogle,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import { FaCheck } from "react-icons/fa";
import { Img, Input, Line, Text } from "components";
import footerData from "../../data/footerData.json"; // Import your footer data
const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={style.Footer}>
        <div>
          <h2>ARYAN HOSPITAL</h2>
          <div className={style.line}></div>
          <p>Leading the way in medical execellence, trusted Care.</p>
        </div>

        <div>
          <h2>Our Services</h2>
          <div className={style.line}></div>
          <ul>
            <li>
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Ambulance
            </li>
            <li>
              <span>
                <FaCheck />
              </span>{" "}
              24*7 Emergency
            </li>
            <li>
              {" "}
              <span>
                <FaCheck />
              </span>
              Laboratory
            </li>
            <li>
              {" "}
              <span>
                <FaCheck />
              </span>
              Diagnostics
            </li>
            <li>
              <span>
                <FaCheck />
              </span>
              24*7 CT Scan
            </li>
          </ul>
        </div>

        <div className={style.Services}>
          <h2>Tags</h2>
          <div className={style.line}></div>

          <div className={style.Tag}>
            <h6
              onClick={() => {
                navigate("/Kidney-Dialysis");
              }}
            >
              {" "}
              Dialysis
            </h6>
            <h6
              onClick={() => {
                navigate("/IVF-Treatment");
              }}
            >
              IVF
            </h6>
            <h6
              onClick={() => {
                navigate("/gynaecology");
              }}
            >
              Gynaecology{" "}
            </h6>
            <h6
              onClick={() => {
                navigate("/pediatrics");
              }}
            >
              Pediatrics
            </h6>
            <h6
              onClick={() => {
                navigate("/Surgical-Oncology");
              }}
            >
              Oncology
            </h6>
            <h6
              onClick={() => {
                navigate("/Bariatric-Surgery");
              }}
            >
              Bariatric
            </h6>
            <h6
              onClick={() => {
                navigate("/Orthopedics");
              }}
            >
              Orthopedics
            </h6>
            <h6
              onClick={() => {
                navigate("/Laparoscopic-Surgery");
              }}
            >
              Laparoscopic
            </h6>
                      
          </div>
        </div>

        <div className={style.in}>
          <h2>Contact Info</h2>
          <div className={style.line}></div>

          <p style={{ alignItems: "start" }}>
            <FaHome style={{ color: "#2563eb", fontSize: "3em" }} />
            <p className={style.p}>
              {" "}
              78 , Old Railway Rd, Rattan Garden,Shivpuri Extension, Sector 7,
              Gurugram, Haryana 122001
            </p>
          </p>
          <p>
            <FaPhone className={style.phone} /> 9311339448
          </p>
          <br />
          <p>
            <FaEnvelope style={{ color: "#2563eb", fontSize: "1em" }} />{" "}
            marketing@aryanhospital.in
          </p>
        </div>
      </footer>
      <div className={style.bottom}>
        <h3>
          © Copyright 2024{" "}
          <span style={{ color: "#1e40af" }}>ARYAN HOSPITAL</span>
        </h3>
        <div className={style.links}>
          <a
            href="https://www.linkedin.com/in/aryan-hospital-b37a1490/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={style.one} />
          </a>
          <a
            href="https://www.google.com/search?sca_esv=1aea21ce6623e3de&sca_upv=1&sxsrf=ADLYWIIkzrcyDIWMOmRQ2pJayv7LGk1J9g%3A1716793685145&q=Aryan%20Hospital&stick=H4sIAAAAAAAAAONgU1I1qDC2NEgxtEwxSk0xNjI3MzG0MqhItTBKSkyzMEtMNTW0MDFKXsTK51hUmZin4JFfXJBZkpgDADsvKkQ6AAAA&mat=CcBGfgpK5ZQd&ved=2ahUKEwj0v4Xuoq2GAxXpyDgGHVODADUQrMcEegQICRAD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle className={style.two} />
          </a>
          <a
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className={style.three} />
          </a>
          <a
            href="https://www.facebook.com/aryanhospitalggn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={style.four} />
          </a>
          <a
            href="https://www.instagram.com/hospitalaryan0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={style.four} />
          </a>
        </div>
      </div>
      <div className={style.dev}>
        <span style={{ color: "#1e40af" }}>Powered by Growing Digital</span>
      </div>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;

import React from "react";

import { useNavigate } from "react-router-dom";
import  Styles from "../../styles/Header.module.css";

import { Img, Text } from "components";
import headerData from "../../data/headerData.json";
import hospitalImage from "../../data/images/hospitalimage.jpeg";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={Styles.Header}  style={{display:'flex', justifyContent:'space-around',width:'100vw',alignItems:'center'}}>
        <div>
          <Img
            style={{width:'10em'}}
            src={hospitalImage}
            alt="Hospital Logo"
          />
        </div>

        <div className={Styles.Header} style={{display:'flex',alignItems:'center',justifyContent:'space-around',gap: '2.2rem'}}>

          {headerData.sections.map((section, index) => (
            <div key={index} style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
              <div style={{display:'flex', flexDirection:'column',alignItems:'center',gap: '0.2rem'}}>

                <Img src={section.icon}alt={section.title}/>
                <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}> 

                <Text>{section.title}</Text>

                  {section.subtitle &&
                  (
                  <Text>{section.subtitle} {section.content}</Text>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

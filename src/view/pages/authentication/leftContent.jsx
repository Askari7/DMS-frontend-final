import React from "react";

import { useSelector } from "react-redux";

import { Row, Col } from "antd";

import bg from "../../../assets/images/pages/authentication/authentication-bg.svg";
import bgDark from "../../../assets/images/pages/authentication/authentication-bg-dark.svg";

import MenuLogo from "../../../layout/components/menu/logo";
import JobConnectLogo from "../../../assets/images/logo/logo2.jpeg";
import DMSLogo from "../../../assets/images/logo/logo_novacon.jpg";
import Logo from "../../../assets/images/logo/novacon.png";

// import ads from ""
export default function LeftContent() {
  // Redux
  const theme = useSelector((state) => state.customise.theme);

  return (
    <Col
      lg={12}
      span={24}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"whitesmoke"
      }}
      className=""
    >
      {/* JobConnect Sidebar */}
      <img
  src={Logo}
  alt="logo"
  height="50%"
  width="50%"
  style={{
    position: 'relative',
    animation: 'floatUpDown 2s ease-in-out infinite',
    
  }}
/>  <style>
        {`
          @keyframes floatUpDown {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px); /* Adjust the value based on your preference */
            }
          }
          
        `}
      </style>  </Col>

  );
  
}

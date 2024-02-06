import React from "react";

import { useSelector } from "react-redux";

import { Row, Col } from "antd";

import bg from "../../../assets/images/pages/authentication/authentication-bg.svg";
import bgDark from "../../../assets/images/pages/authentication/authentication-bg-dark.svg";

import MenuLogo from "../../../layout/components/menu/logo";
import JobConnectLogo from "../../../assets/images/logo/logo2.jpeg";
import DMSLogo from "../../../assets/images/logo/dms-logo.png";
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
      }}
      className=""
    >
      {/* JobConnect Sidebar */}
      <img src={DMSLogo} alt="logo" height="60%" width="80%" />
    </Col>
  );
}

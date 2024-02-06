// SplashScreen.js

import React from 'react';
import { Row, Col } from 'antd';
import novacon from "../../../../assets/images/logo/novacon.jpg";

const SplashScreen = () => {
  return (
    <Row
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Col>
        {/* Your logo and tagline */}
        <img src={novacon} alt="Logo" style={{ width: '200px', height: 'auto' }} />
        <h1 style={{ marginTop: '16px' }}>Project Prosperity, Simplified.</h1>
      </Col>
    </Row>
  );
};

export default SplashScreen;

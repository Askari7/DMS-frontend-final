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
        backgroundColor: 'white', // Background color
      }}
    >
      <Col>
        {/* Your logo and tagline */}
        <img 
          src={novacon} 
          alt="Logo" 
          style={{
            width: '180px',
            margin:"18px", 
            height: 'auto', 
            animation: 'scaleAnimation 1s infinite alternate', // Animation effect
            cursor: 'pointer' // Optional: Change cursor to indicate interactivity
          }} 
        />
        <h1 style={{ marginTop: '16px', color: '#333',fontSize:"64px" }}>Project Prosperity, Simplified.</h1>
      </Col>
      <style>
        {`
          @keyframes scaleAnimation {
            from {
              transform: scale(0.9);
            }
            to {
              transform: scale(1.25);
            }
          }
        `}
      </style>
    </Row>
  );
};

export default SplashScreen;

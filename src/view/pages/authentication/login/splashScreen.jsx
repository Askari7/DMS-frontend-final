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
            transition: 'transform 0.5s ease', // Transition effect on transform property
            cursor: 'pointer' // Optional: Change cursor to indicate interactivity
          }} 
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'} // Enlarge image on hover
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'} // Reset image size when mouse leaves
        />
        <h1 style={{ marginTop: '16px', color: '#333',fontSize:"64px" }}>Project Prosperity, Simplified.</h1>
      </Col>
    </Row>
  );
};

export default SplashScreen;
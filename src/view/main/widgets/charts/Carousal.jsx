import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '440px',
  color: '#000',
  lineHeight: '440px',
  textAlign: 'center',
  background: '#1CE7FF',
};
const Carousal = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Carousal;
import React from 'react';
import { Progress, Row } from 'antd';

const ProgressComp = ({ percentage }) => {
  console.log('Percentage:', percentage);
  
  return (
    <Row justify="center" align="middle" style={{ width: 180 }}>
      <Progress percent={percentage} size="small" />
    </Row>
  );
};

export default ProgressComp;

import React from 'react';
import { Progress, Row } from 'antd';

const ProgressComp = ({ percent }) => {
  let strokeColor = '#ff0000'; // Default color is red
  if (percent > 75) {
    strokeColor = '#1890ff'; // Blue for percent > 75
  } else if (percent > 50) {
    strokeColor = '#fadb14'; // Yellow for percent > 50
  }

  return (
    <Row justify="center" align="middle" style={{ width: 180 }}>
      <Progress percent={percent} steps={5} strokeColor={strokeColor} />
    </Row>
  );
};

export default ProgressComp;

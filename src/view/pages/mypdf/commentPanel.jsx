// CommentPanel.js

import React from 'react';
import { List } from 'antd';

const CommentPanel = ({ remarks }) => {
  return (
    <div style={{ marginLeft: '16px', flex: '0 0 300px' }}>
      <h3>Comments</h3>
      <List
        dataSource={remarks}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default CommentPanel;

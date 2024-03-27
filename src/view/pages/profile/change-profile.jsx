import React, { useState } from 'react';
import { Form, Upload, Button, Avatar, message ,Row, Col} from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const ChangeProfileImagePage = () => {
  const [avatar, setAvatar] = useState(null);

  const handleImageChange = (info) => {
    console.log('File info:', info);
    if (info.file.status === 'done') {
      setAvatar(info.file.originFileObj);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Row justify="center" style={{ marginTop: '50px' }}>
      <Col>
        <Avatar size={128} icon={<UserOutlined />} src={avatar} style={{ marginBottom: 20 }} />
        <Form
          name="changeProfileImage"
          onFinish={onFinish}
          style={{ width: '300px' }}
        >
          <Form.Item
            name="profileImage"
            label="Profile Image"
            rules={[{ required: true, message: 'Please select a profile image' }]}
          >
           <Upload
            name="avatar"
            listType="picture-card"
            action="/api/auth/change-profile" // Update the action attribute
            onChange={handleImageChange}
            >
            {avatar ? null : <Button icon={<UploadOutlined />}>Upload Image</Button>}
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ChangeProfileImagePage;

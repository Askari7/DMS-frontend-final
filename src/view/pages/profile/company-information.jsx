import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import {
  Row,
  Col,
  Divider,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Typography,List,
  Modal,
  message,
} from "antd";

import { RiCloseFill, RiCalendarLine, RiAddFill} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

export default function CompanyInfo() {
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const dispatch = useDispatch();

  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [detail, setDetail] = useState("");
  const [owner, setOwner] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [industry, setIndustry] = useState("");

  const [data, setData] = useState();

  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [preferanceModalVisible, setPreferanceModalVisible] = useState(false);

  const listTitle = "hp-p1-body";
  const listResult =
    "hp-mt-sm-4 hp-p1-body hp-text-color-black-100 hp-text-color-dark-0";
  const dividerClass = "hp-border-color-black-40 hp-border-color-dark-80";
  const [formItems, setFormItems] = useState([]);

  const handleAddFormItem = () => {
    setFormItems([...formItems, { id: formItems.length + 1 }]);
  };

  const contactModalShow = () => {
    setContactModalVisible(true);
  };

  const contactModalCancel = () => {
    setContactModalVisible(false);
  };

  const preferanceModalShow = () => {
    setPreferanceModalVisible(true);
  };

  const preferanceModalCancel = () => {
    setPreferanceModalVisible(false);
  };

  const fetchDetails = async()=>{
    try {
      const response = await axios.get(
        `https://novacon.live/api/clients/company?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      // console.log(response.data);
      const {name,details,companyEmail,owner,ownerEmail,address,contact,industry} = response.data
      setCompanyName(name)
      setCompanyEmail(companyEmail)
      setDetail(details)
      setOwner(owner)
      setOwnerEmail(ownerEmail)
      setAddress(address)
      setPhoneNumber(contact)
      setIndustry(industry)

      

      // console.log(name,details);
      setData(response.data)    
    } catch (error) {
      console.error(error)
    }
  }
  const handleSubmit= async()=>{
    try {
      const response = await axios.put(
        `https://novacon.live/api/clients/company?companyId=${user?.user?.companyId}`,
        {
          name:companyName,
          owner,
          ownerEmail,
          details:detail,
          industry,
          companyEmail,
          address,
          contact:phoneNumber,
        },
        {
          headers: {
            Authorization: user?.accessToken,
          },
        }
      );
      console.log(response.data);
      contactModalCancel()

    } catch (error) {
      console.error(error)
    }
  }
  const handleAddLinks= async()=>{
    try {
      const response = await axios.post(
        `https://novacon.live/api/clients/company?companyId=${user?.user?.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    fetchDetails()
  },[])
  return (
    <div>
      <Modal
        title="Update Company Information"
        width={416}
        centered
        visible={contactModalVisible}
        onCancel={contactModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form
          layout="vertical"
          name="basic"
          // initialValues={{
          //   remember: true,
          //   companyName,
          //   companyEmail,
          //   address,
          //   phoneNumber,
          // }}
        >
          <Form.Item label="Company Name" name="companyName">
            <Input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Company Owner" name="owner">
            <Input
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Owner Email" name="ownerEmail">
            <Input
              value={owner}
              onChange={(e) => setOwnerEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Industry" name="industry">
            <Input
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Company Email" name="companyEmail">
            <Input
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Contact" name="phoneNumber">
            <Input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Address" name="industry">
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Details" name="details">
            <Input
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </Form.Item>
          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={handleSubmit}
              >
                Edit
              </Button>
              
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={contactModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <Modal
      title="Add Social Links"
      width={316}
      centered
      visible={preferanceModalVisible}
      onCancel={preferanceModalCancel}
      footer={null}
      closeIcon={<RiCloseFill className="remix-icon text-color-black-100" size={24} />}
    >
      <Form layout="vertical" name="basic" initialValues={{ remember: true }}>

        {formItems.map((item) => (
          <Form.Item key={item.id} label={`Social Link ${item.id}`} name={`socialLink${item.id}`}>
            <Input />
          </Form.Item>
        ))}

        <Row gutter={12}>
          <Col span={24}>

            <Button
              block
              type="primary"
              onClick={handleAddFormItem}
              style={{ marginBottom: '12px' }}
            >
              <RiAddFill /> Add Social Link
            </Button>
          </Col>
          
          <Col span={12}>
            <Button block onClick={handleAddLinks}>
              Add
            </Button>
          </Col>
          <Col span={12}>
            <Button block onClick={preferanceModalCancel}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>

      <Divider className={dividerClass} />

      <Row align="middle" justify="space-between">
        <Col md={12} span={12}>
          <h3>
            <FormattedMessage id="Company Information" />
          </h3>
        </Col>

        <Col md={12} span={24} className="hp-profile-action-btn hp-text-right">
          <Button type="primary" ghost onClick={contactModalShow}>
            Edit
          </Button>

          <Button type="primary" ghost onClick={preferanceModalShow} style={{padding:"2px",margin:"8px"}}>
            Add Social Links
          </Button>


        </Col>

        <Col span={24} className="hp-profile-content-list hp-mt-8 hp-pb-sm-0 hp-pb-42">
      <List size="small" bordered  style={{backgroundColor:"white"}}>
      <List.Item style={{ textAlign: "center" }}>
  <Typography.Text type="primary">
    <FormattedMessage id="Name" />
  </Typography.Text>
  <Typography.Text type="secondary" style={{ color: "blue" }}>
    {companyName}
  </Typography.Text>
</List.Item>

<List.Item style={{ textAlign: "center" }}>
  <Typography.Text type="primary">
    <FormattedMessage id="Company Owner" />
  </Typography.Text>
  <Typography.Text type="secondary" style={{ color: "blue" }}>{owner}</Typography.Text>
</List.Item>

<List.Item style={{ textAlign: "center" }}>
  <Typography.Text type="primary">
    <FormattedMessage id="Owner Email" />
  </Typography.Text>
  <Typography.Text type="secondary" style={{ color: "blue" }}>{ownerEmail}</Typography.Text>
</List.Item>

<List.Item style={{ textAlign: "center" }}>
  <Typography.Text type="primary">
    <FormattedMessage id="Industry" />
  </Typography.Text>
  <Typography.Text type="secondary" style={{ color: "blue" }}>{industry}</Typography.Text>
</List.Item>

<List.Item style={{ textAlign: "center" }}>
  <Typography.Text type="primary">
    <FormattedMessage id="Company Email" />
  </Typography.Text>
  <Typography.Text type="secondary" style={{ color: "blue" }}>{companyEmail}</Typography.Text>
</List.Item>

<List.Item style={{ textAlign: "center" }}>
  <Typography.Text type="primary">
    <FormattedMessage id="Company Contact" />
  </Typography.Text>
  <Typography.Text type="secondary" style={{ color: "blue" }}>{phoneNumber}</Typography.Text>
</List.Item>

<List.Item style={{ textAlign: "center" }}>
  <Typography.Text type="primary">
    <FormattedMessage id="Company Address" />
  </Typography.Text>
  <Typography.Text type="secondary" style={{ color: "blue" }}>{address}</Typography.Text>
</List.Item>

<List.Item style={{ textAlign: "center" }}>
  <Typography.Text type="primary">
    <FormattedMessage id="More Info" />
  </Typography.Text>
  <Typography.Text type="secondary" style={{ color: "blue" }}>{detail}</Typography.Text>
</List.Item>
      </List>
    </Col>
      </Row>

      <Divider className={dividerClass} />
      <Row align="middle" justify="space-between">
      </Row>
    </div>
  );
}

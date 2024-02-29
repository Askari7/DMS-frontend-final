
import React, { useState } from 'react';
import { Select, Input, Divider, Button, Form,message } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from "axios";

const { Option } = Select;

const DocumentNumberingForm = () => {
  const [form] = Form.useForm();
  var docNumber='';
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));

  const [prefixes, setPrefixes] = useState([
    { prefix: '', length: '', type: '' },
    { prefix: '', length: '', type: '' },
    { prefix: '', length: '', type: '' },
    { prefix: '', length: '', type: '' },
  ]);

  const handlePrefixChange = (index, field, value) => {
    const newPrefixes = [...prefixes];
    newPrefixes[index][field] = value;
  
    setPrefixes(newPrefixes);
  };

  const generateDocumentNumber = () => {
    const generatedNumber = prefixes
      .filter(({ prefix, length }) => prefix && length)
      .map(({ prefix, length }) => {
        const firstCharacter = prefix.charAt(0).toUpperCase();
        return firstCharacter.repeat(parseInt(length, 6));
      })
      .join('-');
      docNumber= generatedNumber;
       console.log(docNumber);
    return generatedNumber;
  };
  const history = useHistory();
  const navigateToMdrTemplate = async() => {
   await handleSubmit();
    history.push('/pages/analytics'); // Replace '/path-to-mdr-template' with the actual route path to the MDR Template component
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8083/api/documents/format?companyId=${user?.user?.companyId}`,
        {
          documentNumberFormat: `${docNumber}`,
        },
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      // Handle the response as needed
      console.log(response);
      message.success(response?.data?.message);
    } catch (error) {
      // Handle errors

      message.error("Some Error Occured");
    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <h1>Company Environment Setup</h1>
      </div>
      <h2>Document Numbering Configuration</h2>

      <Form form={form} layout="vertical">
        {prefixes.map((prefix, index) => (
          <div key={index} style={{ marginBottom: 16 }}>
            <Form.Item label={`Select ${index + 1} Prefix:`}>
              <Select
                style={{ width: 200 }}
                value={prefix.prefix}
                onChange={(value) => handlePrefixChange(index, 'prefix', value)}
              >
                <Option value="Project Code">Project Code</Option>
                <Option value="Area Code">Area Code</Option>
                <Option value="Department Code">Department Code</Option>
                <Option value="MDR Code">MDR Code</Option>
                <Option value="Document Number">Document Number</Option>
              </Select>
            </Form.Item>

            {prefix.prefix && (
              <>
                <Form.Item label={`Length of ${index + 1} Prefix:`}>
                  <Input
                    type="number"
                    style={{ width: 200 }}
                    value={prefix.length}
                    onChange={(e) => handlePrefixChange(index, 'length', e.target.value)}
                  />
                </Form.Item>

                <Form.Item label={`Type of ${index + 1} Prefix:`}>
                  <Select
                    style={{ width: 200 }}
                    value={prefix.type}
                    onChange={(value) => handlePrefixChange(index, 'type', value)}
                  >
                    <Option value="Numeric">Numeric</Option>
                    <Option value="Alphanumeric">Alphanumeric</Option>
                  </Select>
                </Form.Item>
              </>
            )}

            {index < prefixes.length - 1 && <Divider />}
          </div>
        ))}

        {prefixes.length < 10 && (
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => setPrefixes([...prefixes, { prefix: '', length: '', type: '' }])}
            >
              Add Prefix
            </Button>
          </Form.Item>
        )}

        <div style={{ marginTop: 16 }}>
          <h3>Generated Document Number:</h3>
          <p>{generateDocumentNumber()}</p>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={navigateToMdrTemplate}>
            Proceed
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DocumentNumberingForm;

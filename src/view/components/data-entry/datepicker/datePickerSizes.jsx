import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { sizes } from "./code.js";

import { Card, Row, Col, DatePicker, Radio, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

const { RangePicker } = DatePicker;

export default function DatePickerSizes() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const [size, setSize] = useState("default");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Three Sizes</h4>
          <p className="hp-p1-body">
            The input box comes in three sizes. default will be used if size is
            omitted.
          </p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Radio.Group
            value={size}
            onChange={handleSizeChange}
            className="hp-mb-16"
          >
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>

          <br />

          <DatePicker className="hp-mb-16 hp-mr-16" size={size} />

          <DatePicker
            className="hp-mb-16 hp-mr-16"
            size={size}
            picker="month"
          />

          <RangePicker className="hp-mb-16 hp-mr-16" size={size} />

          <DatePicker className="hp-mb-16 hp-mr-16" size={size} picker="week" />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {sizes}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}

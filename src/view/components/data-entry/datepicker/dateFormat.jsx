import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dateformat } from "./code.js";

import { Card, Row, Col, DatePicker, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";
import moment from "moment";

const { RangePicker } = DatePicker;

export default function DateFormat() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const dateFormat = "YYYY/MM/DD";
  const monthFormat = "YYYY/MM";
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Date Format</h4>
          <p className="hp-p1-body">We can set the date format by format.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <DatePicker
            className="hp-mb-16 hp-mr-16"
            defaultValue={moment("2015/01/01", dateFormat)}
            format={dateFormat}
          />
          <DatePicker
            className="hp-mb-16 hp-mr-16"
            defaultValue={moment("01/01/2015", dateFormatList[0])}
            format={dateFormatList}
          />
          <DatePicker
            className="hp-mb-16 hp-mr-16"
            defaultValue={moment("2015/01", monthFormat)}
            format={monthFormat}
            picker="month"
          />
          <RangePicker
            className="hp-mb-16 hp-mr-16"
            defaultValue={[
              moment("2015/01/01", dateFormat),
              moment("2015/01/01", dateFormat),
            ]}
            format={dateFormat}
          />
          <DatePicker
            className="hp-mb-16 hp-mr-16"
            defaultValue={moment("2015/01/01", dateFormat)}
            format={customFormat}
          />
        </Col>
      </Row>
      
      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {dateformat}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}

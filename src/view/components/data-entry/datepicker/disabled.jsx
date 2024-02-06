import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { disabled } from "./code.js";

import { Card, Row, Col, DatePicker, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";
import moment from "moment";

const { RangePicker } = DatePicker;

export default function DatePickerDisabled() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const dateFormat = "YYYY-MM-DD";

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Disabled</h4>
          <p className="hp-p1-body">
            A disabled state of the DatePicker. You can also set as array to
            disable one of input.
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
          <DatePicker
            className="hp-mb-16 hp-mr-16"
            defaultValue={moment("2015-06-06", dateFormat)}
            disabled
          />
          <DatePicker
            className="hp-mb-16 hp-mr-16"
            picker="month"
            defaultValue={moment("2015-06", "YYYY-MM")}
            disabled
          />
          <RangePicker
            className="hp-mb-16 hp-mr-16"
            defaultValue={[
              moment("2015-06-06", dateFormat),
              moment("2015-06-06", dateFormat),
            ]}
            disabled
          />
          <RangePicker
            className="hp-mb-16 hp-mr-16"
            defaultValue={[
              moment("2019-09-03", dateFormat),
              moment("2019-11-22", dateFormat),
            ]}
            disabled={[false, true]}
          />
        </Col>
      </Row>
      
      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {disabled}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}

import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { async } from "./code.js";

import { Card, Row, Col, Button, Popconfirm } from "antd";
import { RiErrorWarningLine, RiCodeSSlashLine } from "react-icons/ri";

export default function AsyncPopconfirm() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Asynchronously close</h4>
              <p className="hp-p1-body">
                Asynchronously close a popconfirm when a the OK button is
                pressed. For example, you can use this pattern when you submit a
                form.
              </p>
            </Col>

            <Col lg={12} span={4} className="hp-text-right">
              <Button
                onClick={toggleChecked}
                type="text"
                icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Popconfirm
            title="Title"
            visible={visible}
            onConfirm={handleOk}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={handleCancel}
            icon={
              <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
            }
          >
            <Button type="primary" onClick={showPopconfirm}>
              Open Popconfirm with br async logic
            </Button>
          </Popconfirm>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {async}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}

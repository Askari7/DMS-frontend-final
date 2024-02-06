import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { icon } from "./code.js";

import { Card, Row, Col, Button, notification } from "antd";
import {
  RiCloseFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiCodeSSlashLine,
} from "react-icons/ri";

export default function IconNotification() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const openSuccessNotification = () => {
    notification.open({
      message: "Success",
      description: "Success message.",
      icon: <RiCheckboxCircleFill style={{ color: "#00F7BF" }} />,
      closeIcon: (
        <RiCloseFill className="remix-icon hp-text-color-black-80 hp-text-color-dark-30" size={24} />
      ),
    });
  };

  const openInfoNotification = () => {
    notification.open({
      message: "Info",
      description: "Info message.",
      icon: <RiErrorWarningFill style={{ color: "#1BE7FF" }} />,
      closeIcon: (
        <RiCloseFill className="remix-icon hp-text-color-black-80 hp-text-color-dark-30" size={24} />
      ),
    });
  };

  const openWarningNotification = () => {
    notification.open({
      message: "Warning",
      description: "Warning message.",
      icon: <RiErrorWarningFill style={{ color: "#FFC700" }} />,
      closeIcon: (
        <RiCloseFill className="remix-icon hp-text-color-black-80 hp-text-color-dark-30" size={24} />
      ),
    });
  };

  const openErrorNotification = () => {
    notification.open({
      message: "Error",
      description: "Error message.",
      icon: <RiErrorWarningFill style={{ color: "#FF0022" }} />,
      closeIcon: (
        <RiCloseFill className="remix-icon hp-text-color-black-80 hp-text-color-dark-30" size={24} />
      ),
    });
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Notification with Icon</h4>
              <p className="hp-p1-body">
                A notification box with a icon at the left side.
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
          <Button
            className="hp-mr-16 hp-mb-16"
            type="success"
            ghost
            onClick={openSuccessNotification}
          >
            Success
          </Button>

          <Button
            className="hp-mr-16 hp-mb-16"
            type="info"
            ghost
            onClick={openInfoNotification}
          >
            Info
          </Button>

          <Button
            className="hp-mr-16 hp-mb-16"
            type="warning"
            ghost
            onClick={openWarningNotification}
          >
            Warning
          </Button>

          <Button
            className="hp-mr-16 hp-mb-16"
            type="error"
            ghost
            onClick={openErrorNotification}
          >
            Error
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {icon}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}

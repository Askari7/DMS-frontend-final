import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { information } from "./code.js";

import { Card, Row, Col, Button, Modal } from "antd";
import {
  RiCheckboxCircleLine,
  RiAlertLine,
  RiInformationLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

export default function InfoModal() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function info() {
    Modal.info({
      icon: (
        <span className="remix-icon">
          <RiInformationLine />
        </span>
      ),
      title: (
        <h5 className="hp-mb-0 hp-font-weight-500">This is Info message</h5>
      ),
      content: (
        <div>
          <p className="hp-p1-body">Some contents.</p>
        </div>
      ),
      onOk() {},
    });
  }

  function success() {
    Modal.success({
      icon: (
        <span className="remix-icon">
          <RiCheckboxCircleLine />
        </span>
      ),
      title: (
        <h5 className="hp-mb-0 hp-font-weight-500">This is Success message</h5>
      ),
      content: (
        <div>
          <p className="hp-p1-body">Some contents.</p>
        </div>
      ),
    });
  }

  function error() {
    Modal.error({
      icon: (
        <span className="remix-icon">
          <RiAlertLine />
        </span>
      ),
      title: (
        <h5 className="hp-mb-0 hp-font-weight-500">This is Error message</h5>
      ),
      content: (
        <div>
          <p className="hp-p1-body">Some contents.</p>
        </div>
      ),
    });
  }

  function warning() {
    Modal.warning({
      icon: (
        <span className="remix-icon">
          <RiAlertLine />
        </span>
      ),
      title: (
        <h5 className="hp-mb-0 hp-font-weight-500">This is Warning message</h5>
      ),
      content: (
        <div>
          <p className="hp-p1-body">Some contents.</p>
        </div>
      ),
    });
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Information modal dialog</h4>
              <p className="hp-p1-body">
                In the various types of information modal dialog, only one
                button to close dialog is provided.
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
            className="hp-mb-16 hp-mr-16"
            type="primary"
            ghost
            onClick={info}
          >
            Info
          </Button>

          <Button
            className="hp-mb-16 hp-mr-16"
            type="primary"
            ghost
            onClick={success}
          >
            Success
          </Button>

          <Button
            className="hp-mb-16 hp-mr-16"
            type="primary"
            ghost
            onClick={error}
          >
            Error
          </Button>

          <Button
            className="hp-mb-16 hp-mr-16"
            type="primary"
            ghost
            onClick={warning}
          >
            Warning
          </Button>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {information}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}

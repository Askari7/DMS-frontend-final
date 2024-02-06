import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { custom } from "./code.js";

import { Card, Row, Col, Drawer, Button, Radio, Space } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function CustomDrawer() {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Custom Placement</h4>
              <p className="hp-p1-body">
                The Drawer can appear from any edge of the screen.
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
          <Space>
            <Radio.Group defaultValue={placement} onChange={onChange}>
              <Radio className="hp-mr-sm-16 hp-mb-lg-8" value="top">
                top
              </Radio>

              <Radio className="hp-mr-sm-16 hp-mb-lg-8" value="right">
                right
              </Radio>

              <Radio className="hp-mr-sm-16 hp-mb-lg-8" value="bottom">
                bottom
              </Radio>

              <Radio className="hp-mr-sm-16 hp-mb-lg-8" value="left">
                left
              </Radio>
            </Radio.Group>

            <Button className="hp-mb-lg-8" type="primary" onClick={showDrawer}>
              Open
            </Button>
          </Space>

          <Drawer
            title={<h5 className="hp-mb-0">Basic Drawer</h5>}
            placement={placement}
            closable={false}
            onClose={onClose}
            visible={visible}
            key={placement}
            className="hp-drawer-mobile"
          >
            <p className="hp-p1-body">Some contents...</p>
            <p className="hp-p1-body">Some contents...</p>
            <p className="hp-p1-body">Some contents...</p>
          </Drawer>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {custom}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}

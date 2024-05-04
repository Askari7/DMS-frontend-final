import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { basic } from "./code.js";

import { Card, Row, Col, Menu, Dropdown, Button } from "antd";
import { RiArrowDropDownLine, RiCodeSSlashLine } from "react-icons/ri";

export default function BasicDropdown() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          1st menu item
        </a>
      </Menu.Item>

      <Menu.Item>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          2nd menu item
        </a>
      </Menu.Item>

      <Menu.Item disabled>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          3rd menu item
        </a>
      </Menu.Item>

      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Basic</h4>
              <p className="hp-p1-body">The most basic dropdown menu.</p>
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
          <Dropdown overlay={menu}>
            <a
              href="#"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Hover me <RiArrowDropDownLine className="remix-icon" size={24} />
            </a>
          </Dropdown>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {basic}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}

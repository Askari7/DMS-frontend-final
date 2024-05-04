import React, { useState } from "react";

import { useSelector } from "react-redux";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { placement } from "./code.js";

import { Card, Row, Col, Button, Popconfirm, message } from "antd";
import { RiErrorWarningLine, RiCodeSSlashLine } from "react-icons/ri";

export default function PlacementPopconfirm() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);
  const text = "Are you sure to delete this task?";

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function confirm() {
    message.info({
      content: "Clicked on Yes.",
      icon: <RiErrorWarningLine className="remix-icon" />,
    });
  }

  // Rtl
  const direction = useSelector(state => state.customise.direction)

  return (
    <Card className="hp-border-color-black-40">
      <Row gutter={[32, 32]}>
        <Col className="hp-mb-16" span={24}>
          <Row>
            <Col lg={12} span={20}>
              <h4>Placement</h4>
              <p className="hp-p1-body">
                There are 12 placement options available.
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
          <div className="hp-placement">
            <div style={direction == "rtl" ? { marginRight: 90, whiteSpace: "nowrap" } : { marginLeft: 90, whiteSpace: "nowrap" }}>
              <Popconfirm
                placement="topLeft"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">TL</Button>
              </Popconfirm>

              <Popconfirm
                placement="top"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                className="hp-ml-8"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">Top</Button>
              </Popconfirm>

              <Popconfirm
                placement="topRight"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                className="hp-ml-8"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">TR</Button>
              </Popconfirm>
            </div>

            <div style={direction == "rtl" ? { width: 90, float: "right" } : { width: 90, float: "left" }}>
              <Popconfirm
                placement="leftTop"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">LT</Button>
              </Popconfirm>

              <Popconfirm
                placement="left"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                className="hp-mt-8"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">Left</Button>
              </Popconfirm>

              <Popconfirm
                placement="leftBottom"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                className="hp-mt-8"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">LB</Button>
              </Popconfirm>
            </div>

            <div style={direction == "rtl" ? { width: 90, marginRight: 358 } : { width: 90, marginLeft: 358 }}>
              <Popconfirm
                placement="rightTop"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">RT</Button>
              </Popconfirm>

              <Popconfirm
                placement="right"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                className="hp-mt-8"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">Right</Button>
              </Popconfirm>

              <Popconfirm
                placement="rightBottom"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                className="hp-mt-8"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">RB</Button>
              </Popconfirm>
            </div>

            <div style={direction == "rtl" ? { marginRight: 90, clear: "both", whiteSpace: "nowrap" } : { marginLeft: 90, clear: "both", whiteSpace: "nowrap" }}>
              <Popconfirm
                placement="bottomLeft"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">BL</Button>
              </Popconfirm>

              <Popconfirm
                placement="bottom"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                className="hp-ml-8"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">Bottom</Button>
              </Popconfirm>

              <Popconfirm
                placement="bottomRight"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
                className="hp-ml-8"
                icon={
                  <RiErrorWarningLine className="remix-icon hp-text-color-primary-1 hp-text-color-dark-primary-2" />
                }
              >
                <Button type="primary">BR</Button>
              </Popconfirm>
            </div>
          </div>
        </Col>
      </Row>

      {
        checkedCode && (
          <SyntaxHighlighter
            language="javascript"
            className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
            style={monoBlue}
          >
            {placement}
          </SyntaxHighlighter>
        )
      }
    </Card >
  );
}

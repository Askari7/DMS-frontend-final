import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { iconButton } from "./code.js";

import { Card, Row, Col, Button } from "antd";
import { RiSearchLine, RiCodeSSlashLine } from "react-icons/ri";

export default function IconButtons() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-pb-16" lg={18} span={20}>
          <h4>Icon Buttons</h4>
          <p className="hp-p1-body">
            Button components can contain an Icon. This is done by setting the
            icon property or placing an Icon component within the Button.
          </p>
        </Col>

        <Col lg={6} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Row align="middle" gutter={16, 16}>
              <Col>
                <Button
                  type="primary"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="primary"
                  ghost
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="dashed"
                  className="hp-text-color-primary-1 hp-border-color-primary-1 hp-hover-text-color-primary-2 hp-hover-border-color-primary-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={16, 16}>
              <Col>
                <Button
                  type="primary"
                  className="hp-bg-secondary-1 hp-border-color-secondary-1 hp-hover-bg-secondary-2 hp-hover-border-color-secondary-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="primary"
                  ghost
                  className="hp-text-color-secondary-1 hp-border-color-secondary-1 hp-hover-bg-secondary-1"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="dashed"
                  className="hp-text-color-secondary-1 hp-border-color-secondary-1 hp-hover-text-color-secondary-2 hp-hover-border-color-secondary-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={16, 16}>
              <Col>
                <Button
                  type="primary"
                  className="hp-bg-danger-1 hp-border-color-danger-1 hp-hover-bg-danger-2 hp-hover-border-color-danger-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="primary"
                  ghost
                  className="hp-text-color-danger-1 hp-border-color-danger-1 hp-hover-bg-danger-1"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="dashed"
                  className="hp-text-color-danger-1 hp-border-color-danger-1 hp-hover-text-color-danger-2 hp-hover-border-color-danger-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={16, 16}>
              <Col>
                <Button
                  type="primary"
                  className="hp-bg-info-1 hp-border-color-info-1 hp-hover-bg-info-2 hp-hover-border-color-info-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="primary"
                  ghost
                  className="hp-text-color-info-1 hp-border-color-info-1 hp-hover-bg-info-1"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="dashed"
                  className="hp-text-color-info-1 hp-border-color-info-1 hp-hover-text-color-info-2 hp-hover-border-color-info-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={16, 16}>
              <Col>
                <Button
                  type="primary"
                  className="hp-bg-success-1 hp-border-color-success-1 hp-hover-bg-success-2 hp-hover-border-color-success-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="primary"
                  ghost
                  className="hp-text-color-success-1 hp-border-color-success-1 hp-hover-bg-success-1"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="dashed"
                  className="hp-text-color-success-1 hp-border-color-success-1 hp-hover-text-color-success-2 hp-hover-border-color-success-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={16, 16}>
              <Col>
                <Button
                  type="primary"
                  className="hp-bg-warning-1 hp-border-color-warning-1 hp-hover-bg-warning-2 hp-hover-border-color-warning-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="primary"
                  ghost
                  className="hp-text-color-warning-1 hp-border-color-warning-1 hp-hover-bg-warning-1"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  type="dashed"
                  className="hp-text-color-warning-1 hp-border-color-warning-1 hp-hover-text-color-warning-2 hp-hover-border-color-warning-2"
                  icon={<RiSearchLine className="remix-icon" />}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
          style={monoBlue}
        >
          {iconButton}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
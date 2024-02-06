import React, { useState } from "react";

import { useSelector } from "react-redux";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { avatarGroup } from "./code.js";

import { Card, Row, Col, Avatar, Tooltip, Divider, Button } from "antd";
import { RiReactjsLine, RiCodeSSlashLine } from "react-icons/ri";
import { User } from "react-iconly";

export default function AvatarGroup() {
  // Redux
  const theme = useSelector(state => state.customise.theme)

  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Avatar Group</h4>
          <p className="hp-p1-body">Avatar group display. </p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button
            onClick={toggleChecked}
            type="text"
            icon={<RiCodeSSlashLine className="hp-text-color-black-80" />}
          />
        </Col>

        <Col span={24}>
          <Avatar.Group>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="ant-avatar-transparent" />

            <Avatar className="hp-text-color-danger-1 hp-bg-color-danger-4 hp-bg-color-dark-danger">
              K
            </Avatar>

            <Tooltip title="Ant User" placement="top">
              <Avatar
                className="hp-text-color-black-100 hp-bg-color-black-20 hp-bg-color-dark-80 hp-text-color-dark-0"
                icon={<User />}
              />
            </Tooltip>

            <Avatar
              className="hp-text-color-info-1 hp-bg-color-info-4 hp-bg-color-dark-info"
              icon={<RiReactjsLine />}
            />
          </Avatar.Group>

          <Divider />

          <Avatar.Group
            maxCount={2}
            maxStyle={{ color: "#FF0022", backgroundColor: theme == "light" ? "#FFE7EA" : "#2E1618" }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="ant-avatar-transparent" />

            <Avatar className="hp-text-color-warning-1 hp-bg-color-warning-4 hp-bg-color-dark-warning">
              K
            </Avatar>

            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<User />}
              />
            </Tooltip>

            <Avatar
              style={{ backgroundColor: "#1890ff" }}
              icon={<RiReactjsLine />}
            />
          </Avatar.Group>

          <Divider />

          <Avatar.Group
            maxCount={2}
            size="large"
            maxStyle={{ color: "#FF0022", backgroundColor: theme == "light" ? "#FFE7EA" : "#2E1618" }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="ant-avatar-transparent" />

            <Avatar className="hp-text-color-warning-1 hp-bg-color-warning-4 hp-bg-color-dark-warning">
              K
            </Avatar>

            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<User />}
              />
            </Tooltip>

            <Avatar
              style={{ backgroundColor: "#1890ff" }}
              icon={<RiReactjsLine />}
            />
          </Avatar.Group>
        </Col>
      </Row>

      {
        checkedCode && (
          <SyntaxHighlighter
            language="javascript"
            className={`show-code hp-mt-24 ${codeClass && "show-code-active"}`}
            style={monoBlue}
          >
            {avatarGroup}
          </SyntaxHighlighter>
        )
      }
    </Card >
  );
}

import React from "react";
import { Card, Row, Col, Timeline, Button } from "antd";

export default function NotificationCardOne({ data, thisOne, user }) {
  const filteredData = thisOne ? { [thisOne]: data[thisOne] } : {};

  const handleOpenButtonClick = (versionData,docName) => {
    const BACKEND_URL = "http://54.81.250.98:8083";
    const { version } = versionData;
    const { roleId, firstName } = user.user;
    const url = `${BACKEND_URL}/uploads/${docName}-${version}.pdf`;
    const allowed = true;

    window.location.href = `http://54.81.250.98:3001/react-pdf-highlighter/?docName=${docName}.pdf&url=${url}&allowed=${allowed}&user=${roleId} ${firstName}`;
  };

  return (
    <Card
      style={{
        justifyContent:"center",
        alignItems:'center',
        border: "5px solid #e8e8e8",
        borderRadius: "10px",
        padding: "32px",
        marginBottom: "20px",
      }}
    >
      <Row>
        <Col span={32}>
          <h5 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>Document History</h5>

          <Timeline style={{ marginTop: "20px" }}>
            {Object.entries(filteredData).map(([docName, versions]) => (
              <Timeline.Item key={docName}>
                <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>{docName}</h4>
                <Timeline>
                  {versions.map((versionData, index) => (
                    <Timeline.Item
                      key={`${docName}-${index}`}
                      style={{ borderLeft: "2px solid #1890ff", paddingLeft: "10px", marginBottom: "10px" }}
                    >
                      <p>Version: {versionData.version}</p>
                      {/* Display Created At with date in black and time in blue */}
                      <p>
                        <span style={{ color: "black" }}>{new Date(versionData.createdAt).toLocaleDateString()}</span>{" "}
                        <span style={{ color: "blue" }}>{new Date(versionData.createdAt).toLocaleTimeString()}</span>
                      </p>
                      {versionData.reviewerComment && (
                        <p style={{ marginBottom: "5px", color: "#666" }}>Reviewer Comments: {versionData.reviewerComment}</p>
                      )}
                      {versionData.approverComment && (
                        <p style={{ marginBottom: "5px", color: "#666" }}>Approver Comments: {versionData.approverComment}</p>
                      )}
                      <Button
                        type="primary"
                        style={{ marginTop: "10px" }}
                        onClick={() => handleOpenButtonClick(versionData,docName)}
                      >
                        Open
                      </Button>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
      </Row>
    </Card>
  );
}

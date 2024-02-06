import React from "react";

import { Card, Row, Col, Progress, Upload, message } from "antd";
import {
  RiMoreFill,
  RiFileWordLine,
  RiFileZipLine,
  RiFilePptLine,
  RiAddLine,
} from "react-icons/ri";

export default function UploadCard() {
  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Card className="hp-border-color-black-40 hp-card-6">
      <Row>
        <Col span={24}>
          <Row justify="space-between" className="hp-mb-32">
            <Col>
              <Row align="middle">
                <h5 className="hp-mb-0 hp-mr-8">Card Title</h5>
                <p className="hp-mb-0 hp-badge-text">Subtitle</p>
              </Row>
            </Col>

            <RiMoreFill size={24} className="hp-text-color-dark-0" />
          </Row>

          <Dragger {...props} className="hp-bg-color-black-0 hp-bg-color-dark-100 hp-h-auto">
            <RiAddLine size={24} className="hp-mt-8" />

            <p className="hp-mb-8 hp-placeholder-text hp-text-color-black-80 hp-text-color-dark-30">
              Drop files here <br /> or click to upload.
            </p>
          </Dragger>

          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row>
                <RiFileWordLine size={36} className="hp-mr-8 hp-text-color-dark-0" />

                <Col sm={19} xs={16}>
                  <h5 className="hp-mb-0 hp-placeholder">Progress Title</h5>
                  <Progress percent={100} strokeWidth={4} />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row>
                <RiFileZipLine size={36} className="hp-mr-8 hp-text-color-dark-0" />

                <Col sm={19} xs={16}>
                  <h5 className="hp-mb-0 hp-placeholder">Progress Title</h5>
                  <Progress percent={30} strokeWidth={4} />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Row>
                <RiFilePptLine size={36} className="hp-mr-8 hp-text-color-dark-0" />

                <Col sm={19} xs={16}>
                  <h5 className="hp-mb-0 hp-placeholder">Progress Title</h5>
                  <Progress percent={50} strokeWidth={4} status="exception" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

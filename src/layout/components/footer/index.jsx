import { Col, Layout, Row } from "antd";

export default function MenuFooter() {
  const { Footer } = Layout;

  return (
    <Footer className="hp-bg-color-black-20 hp-bg-color-dark-90">
      <Row align="middle" justify="space-between">
        <Col md={8} span={24}>
          <p className="hp-badge-text hp-font-weight-600 hp-mb-0 hp-text-color-dark-30">
            COPYRIGHT @{new Date().getFullYear()} All rights Reserved
          </p>
        </Col>
        <Col md={8} span={24}>
          <p className="hp-badge-text hp-font-weight-600 hp-mb-0 hp-text-color-dark-30">
            email: &nbsp;
            <a
              className="hp-badge-text hp-font-weight-600 hp-mb-0 hp-text-color-dark-30"
              href="mailto:info@jobconnect.ch"
            >
              info@monit.ch{" "}
            </a>
          </p>
        </Col>
        <Col md={8}>
          <p className="hp-badge-text hp-font-weight-600 hp-mb-0 hp-text-color-dark-30">
            Contact: &nbsp;{" "}
            <a
              className="hp-badge-text hp-font-weight-600 hp-mb-0 hp-text-color-dark-30"
              href="tel:+91123-456-7890"
            >
              +9123-456-7890{" "}
            </a>
          </p>
        </Col>
      </Row>
    </Footer>
  );
}

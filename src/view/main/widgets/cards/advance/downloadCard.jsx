import React from "react";
import { useSelector } from "react-redux";

import { Row, Col, Card, Button } from "antd";
import { Download } from "react-iconly";

import cardImg from "../../../../../assets/images/dasboard/analytics-download-bg.png";
import cardImgDark from "../../../../../assets/images/dasboard/analytics-download-bg-dark.png";
import cardVectorImg from "../../../../../assets/images/dasboard/analytics-download-vector.svg";

export default function DownloadCard() {
  // Redux
  const theme = useSelector(state => state.customise.theme)

  return (
    <Card
      className="hp-border-none hp-card-2 hp-px-12 hp-py-16 hp-upgradePlanCardOne"
      style={{
        backgroundImage: `url(${theme == "dark" ? cardImgDark : cardImg})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <Row>
        <Col span={15}>
          <h5 className="hp-mb-0 hp-text-color-black-0">
            Check the Best Prices of New Models & Boost Your Business
          </h5>

          <Button
            className="hp-mt-32 hp-border-color-primary-1 hp-bg-color-black-0 hp-bg-color-dark-primary-1 hp-text-color-primary-1 hp-text-color-dark-0"
            icon={<Download className="remix-icon" />}
          >
            Download
          </Button>
        </Col>

        <img
          src={cardVectorImg}
          className="hp-position-absolute-top-right hp-h-100 hp-rtl-scale-x-n1"
          alt="Check the Best Prices of New Models & Boost Your Business"
        />
      </Row>
    </Card>
  );
}

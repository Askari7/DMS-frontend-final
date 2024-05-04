import React from "react";

import { Card, Row, Col, Rate } from "antd";

import xboxGamepad from "../../../../../assets/images/product/xbox-1.png";

export default function EcommerceCardFour() {
  return (
    <Card className="hp-border-color-black-40 hp-mb-32 hp-card-3 hp-eCommerceCardOne">
      <Row gutter={32}>
        <Col className="hp-text-center" span={24}>
          <h5 className="hp-mb-4 hp-eCommerceCardOne-text-overlay">Xbox Wireless Game Console</h5>

          <p className="hp-caption hp-mb-0 hp-text-color-black-60 hp-text-color-dark-50">
            By <span className="hp-text-color-black-80 hp-text-color-dark-30"> Microsoft</span>
          </p>

          <div>
            <img
              src={xboxGamepad}
              alt="Xbox Wireless Game Console"
              style={{
                maxHeight: 120
              }}
            />
          </div>

          <Rate defaultValue={4.5} size={16} allowHalf></Rate>

          <span className="h3 hp-mt-8 hp-text-color-primary-1 hp-font-weight-500">
            $39.00
          </span>
        </Col>
      </Row>
    </Card>
  );
}

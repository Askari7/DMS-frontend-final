import React, { useState } from "react";

import { Card, Row, Col, Tag } from "antd";
import { RiHeartFill } from "react-icons/ri";

import xboxGamepad from "../../../../../assets/images/product/xbox-1.png";

export default function EcommerceCardFive() {
  const [wishCheck, setWishCheck] = useState(true)

  return (
    <Card className="hp-border-color-black-40 hp-card-3 hp-eCommerceCardOne hp-eCommerceCardOne-text-overlay">
      <Row gutter={32}>
        <Col className="hp-text-center" span={24}>
          <Row justify="space-between" align="top">
            <Tag className="hp-border-none" color="red">
              %25 Discount
            </Tag>

            {
              wishCheck ? (
                <div
                  className='hp-wish-button hp-cursor-pointer hp-border-radius-round remix-icon hp-p-8 hp-rate hp-text-color-danger-1 hp-bg-color-danger-4 hp-bg-color-dark-danger'
                  onClick={() => setWishCheck(false)}
                >
                  <RiHeartFill />
                </div>
              ) : (
                <div
                  className='hp-wish-button hp-cursor-pointer hp-border-radius-round remix-icon hp-p-8 hp-rate hp-text-color-black-40 hp-text-color-dark-70 hp-bg-color-black-10 hp-bg-color-dark-90'
                  onClick={() => setWishCheck(true)}
                >
                  <RiHeartFill />
                </div>
              )
            }
          </Row>

          <img
            className="hp-my-8"
            src={xboxGamepad}
            alt="Xbox Wireless Game Console"
            style={{
              maxHeight: 120
            }}
          />

          <h3 className="hp-mb-0 hp-mb-8  hp-text-color-primary-1 hp-font-weight-500">
            $39.00
          </h3>

          <h5 className="hp-mb-4 hp-eCommerceCardOne-text-overlay">Xbox Wireless Game Console</h5>
        </Col>
      </Row>
    </Card>
  );
}

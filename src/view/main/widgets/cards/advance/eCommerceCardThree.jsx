import React, { useState } from "react";

import { Card, Row, Col, Button, Tag, Rate } from "antd";
import { RiHeartFill, RiShoppingBagLine } from "react-icons/ri";

import xboxGamepad from "../../../../../assets/images/product/xbox-1.png";

export default function EcommerceCardThree() {
  const [wishCheck, setWishCheck] = useState(true)

  return (
    <Card className="hp-border-color-black-40 hp-mb-32 hp-card-3 hp-eCommerceCardOne">
      <Row gutter={32}>
        <Col sm={10} xs={24} className="hp-mb-xs-24">
          <Row justify="space-between" align="top">
            <Tag className="hp-border-none" color="blue">
              Featured
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

          <Col className="hp-text-center">
            <img src={xboxGamepad} alt="Xbox Wireless Game Console" />
          </Col>
        </Col>

        <Col sm={14} xs={24}>
          <Rate defaultValue={4.5} size={16} allowHalf></Rate>

          <div className="hp-my-8">
            <h4 className="hp-mb-4">Xbox Wireless Game Console</h4>

            <p className="hp-caption hp-mb-0 hp-text-color-black-60 hp-text-color-dark-50">
              By <span className="hp-text-color-black-80 hp-text-color-dark-30"> Microsoft</span>
            </p>
          </div>

          <p className="hp-mb-0 hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
            amet urna eu nunc faucibus scelerisque quis sed est.
          </p>

          <Row align="middle" className="hp-my-8">
            <span className="h5 hp-mb-0 hp-mr-8 hp-text-color-primary-1 hp-font-weight-500">
              $39.00
            </span>

            <span className="hp-mb-0 hp-mr-4 hp-text-color-black-60 hp-text-color-dark-50 hp-text-line-through hp-input-description">
              $59.00
            </span>
          </Row>

          <Row gutter={8}>
            <Col sm={12} xs={24} className="hp-mb-xs-8">
              <Button type="ghost" className="hp-mr-8" block>
                Check Detail
              </Button>
            </Col>

            <Col sm={12} xs={24}>
              <Button
                icon={<RiShoppingBagLine className="remix-icon " />}
                type="primary"
                block
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

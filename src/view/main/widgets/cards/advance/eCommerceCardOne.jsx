import React, { useState } from "react";

import { Card, Row, Col, Button, Tag, Rate } from "antd";
import { RiHeartFill, RiShoppingBagLine } from "react-icons/ri";

import polaroid from "../../../../../assets/images/product/white-cam-card.png";

export default function EcommerceCardOne() {
  const [wishCheck, setWishCheck] = useState(true)

  return (
    <Card className="hp-border-color-black-40 hp-mb-32 hp-card-5 hp-eCommerceCardOne">
      <Row>
        <Col span={24}>
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
        </Col>

        <Col span={24}>
          <Col className="hp-text-center">
            <img
              src={polaroid}
              alt="Digital Camera White Adition"
              style={{
                maxHeight: 191
              }}
            />
          </Col>

          <Row justify="space-between">
            <Col>
              <Rate defaultValue={4.5} size={16} allowHalf></Rate>
            </Col>

            <Col className="hp-mb-16">
              <Row align="middle">
                <p className="hp-mb-0 hp-mr-4 hp-text-color-black-60 hp-text-color-dark-50 hp-text-line-through hp-input-description">
                  $59.00
                </p>
                <p className="hp-mb-0 hp-text-color-primary-1 hp-font-weight-500">
                  $39.00
                </p>
              </Row>
            </Col>
          </Row>

          <Col className="hp-mb-24">
            <p className="hp-mb-0 hp-mr-4 hp-text-color-dark-0 hp-p1-body hp-font-weight-500">
              Digital Camera White Adition
            </p>
            <p className="hp-mb-0 hp-text-color-dark-0 hp-caption hp-font-weight-400">
              Touch LCD Screen Zero Ink Camera
            </p>
          </Col>

          <Row gutter={16}>
            <Col sm={12} xs={24} className="hp-mb-xs-16">
              <Button type="ghost" block>
                Check Detail
              </Button>
            </Col>

            <Col sm={12} xs={24}>
              <Button
                block
                icon={<RiShoppingBagLine className="remix-icon" />}
                type="primary"
                className="hp-px-12"
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

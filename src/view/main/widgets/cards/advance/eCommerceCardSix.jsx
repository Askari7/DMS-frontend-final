import React, { useState } from "react";

import { Card, Row, Col, Button, Tag, Rate } from "antd";
import {
  RiHeartFill,
  RiShoppingBagLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

import xboxGamepad from "../../../../../assets/images/product/white-cam-card.png";

export default function EcommerceCardSix() {
  const [wishCheck, setWishCheck] = useState(true)

  return (
    <Card className="hp-border-color-black-40 hp-card-3 hp-eCommerceCardOne">
      <Row gutter={32}>
        <Col sm={8} xs={24} className="hp-mb-xs-24">
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
            <img src={xboxGamepad} alt="Digital Camera White Adition" />
          </Col>
        </Col>

        <Col sm={8} xs={24}>
          <Rate defaultValue={4.5} size={16} allowHalf></Rate>

          <div className="hp-my-8">
            <h4 className="hp-mb-4">Digital Camera White Adition</h4>

            <p className="hp-caption hp-mb-0 hp-text-color-black-60 hp-text-color-dark-50">
              By <span className="hp-text-color-black-80 hp-text-color-dark-30"> Polaroid</span>
            </p>
          </div>

          <p className="hp-mb-0 hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
            amet urna eu nunc faucibus scelerisque quis sed est.
          </p>
        </Col>

        <Col
          sm={8}
          xs={24}
          className="hp-text-right hp-text-xs-left hp-mt-xs-24"
        >
          <span className="h3 hp-mb-8 hp-text-color-primary-1 hp-font-weight-500">
            $39.00
          </span>

          <div>
            <Row
              align="middle"
              justify="end"
              className="hp-mb-4"
            >
              <RiCheckboxCircleFill
                className="hp-text-color-success-1 hp-mr-4"
                size={16}
              />
              <p className="hp-mb-0 hp-text-color-dark-0">Flexible credit available</p>
            </Row>

            <Row
              align="middle"
              justify="end"
              className="hp-mb-32 hp-text-xs-left"
            >
              <RiCheckboxCircleFill
                className="hp-text-color-success-1 hp-mr-4"
                size={16}
              />
              <p className="hp-mb-0 hp-text-color-dark-0">Free Shipping Worldwide</p>
            </Row>
          </div>

          <Button type="ghost" className="hp-mb-8" block>
            Check Detail
          </Button>

          <Button
            icon={<RiShoppingBagLine className="remix-icon" />}
            type="primary"
            block
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

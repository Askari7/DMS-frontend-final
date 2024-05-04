import React from "react";

import { Col, Row } from "antd";

export default function ListCard(props) {
  return (
    <>
      {props.title && (
        <span className="h3 hp-d-block hp-font-weight-600 hp-text-color-black-bg hp-text-color-dark-0">
          {props.title}
        </span>
      )}

      {props.date && (
        <span className="hp-p1-body hp-d-block hp-mt-4">{props.date}</span>
      )}

      {props.list && (
        <Row gutter={[24, 16]} className="hp-mt-24">
          {props.list.map((item, index) => (
            <Col
              span={24}
              key={index}
              className="hp-cursor-pointer hp-transition hp-hover-bg-dark-100 hp-hover-bg-black-10 hp-border-radius hp-py-8"
            >
              <Row align="bottom" justify="space-between">
                <Col>
                  <Row align="middle">
                    <Col>
                      {item.img && (
                        <div
                          className="hp-mr-16 hp-border-1 hp-border-color-black-10 hp-bg-black-0 hp-border-radius-lg hp-d-flex-full-center"
                          style={{ minWidth: 48, height: 48 }}
                        >
                          <img src={item.img} alt={item.title} />
                        </div>
                      )}
                    </Col>
                    <Col>
                      {item.icon && (
                        <div
                          className="hp-mr-16 hp-border-1 hp-border-color-black-10 hp-bg-black-0 hp-border-radius-lg hp-d-flex-full-center"
                          style={{ minWidth: 48, height: 48 }}
                        >
                          {item.icon}
                        </div>
                      )}
                    </Col>

                    <Col>
                      {item.title && (
                        <span className="hp-d-block hp-p1-body hp-font-weight-500 hp-text-color-black-bg hp-text-color-dark-0">
                          {item.title}
                        </span>
                      )}

                      {item.date && (
                        <span className="hp-d-block hp-caption hp-font-weight-400 hp-text-color-black-60">
                          {item.date}
                        </span>
                      )}
                    </Col>
                  </Row>
                </Col>

                <Col>
                  {item.price && (
                    <span className="h5 hp-text-color-black-bg hp-text-color-dark-0">
                      {item.price}
                    </span>
                  )}
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

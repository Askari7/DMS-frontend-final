import React from "react";

import { Row, Col, Divider, Card, Avatar } from "antd";

export default function SelectBoxItem(props) {
  return (
    <div className="hp-select-box-item">
      <input type="radio" hidden id={props.id} name={props.name} />

      <label htmlFor={props.id} className="hp-d-block hp-cursor-pointer">
        <Card className="hp-border-color-black-40">
          {
            props.type === "boxed" ? (
              <>
                <Row className="hp-text-center hp-mb-8">
                  {props.image && (
                    <Col span={24} className="hp-my-12">
                      {props.imageType === "circle" ? (
                        <Avatar src={props.image} size={props.imageHeight && props.imageHeight} className="hp-m-auto" />
                      ) : (
                        <img src={props.image} alt={props.title} height={props.imageHeight && props.imageHeight} />
                      )}
                    </Col>
                  )}

                  {props.icon && (
                    <Col span={24} className="hp-my-12">
                      {props.icon}
                    </Col>
                  )}

                  {props.title && (
                    <Col span={24}>
                      <span className="h4 hp-d-block">
                        {props.title}
                      </span>
                    </Col>
                  )}

                  {props.subTitle && (
                    <Col span={24}>
                      <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-30 hp-d-block">
                        {props.subTitle}
                      </span>
                    </Col>
                  )}

                  {props.badge && (
                    <Col span={24}>
                      <span className="hp-p1-body hp-text-color-danger-2 hp-mt-8 hp-d-block">
                        {props.badge}
                      </span>
                    </Col>
                  )}
                </Row>
              </>
            ) : (
              <>
                <Row justify="space-between" className="hp-py-8">
                  <Col md={12} span={24}>
                    <Row>
                      {
                        props.image && (
                          <Col className="hp-mr-16 hp-flex-sm-100 hp-mr-sm-0 hp-mb-sm-8">
                            {props.imageType === "circle" ? (
                              <Avatar src={props.image} size={props.imageHeight && props.imageHeight} className="hp-m-auto" />
                            ) : (
                              <img src={props.image} alt={props.title} height={props.imageHeight && props.imageHeight} />
                            )}
                          </Col>
                        )
                      }

                      {props.icon && (
                        <Col className="hp-mr-16 hp-flex-sm-100 hp-mr-sm-0 hp-mb-sm-8">
                          {props.icon}
                        </Col>
                      )}

                      <Col flex="1 0 0">
                        <span className="h4 hp-d-block">
                          {props.title && (
                            props.title
                          )}
                        </span>

                        <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30 hp-d-block">
                          {props.subTitle && (
                            props.subTitle
                          )}
                        </span>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={12} span={24}>
                    {props.info && (
                      <span className="h5 hp-d-block hp-text-right hp-text-sm-left hp-mt-sm-8">
                        {props.info}
                      </span>
                    )}
                  </Col>
                </Row>

                {
                  props.description && (
                    <div className="hp-select-box-item-description">
                      <Divider className="hp-mt-16 hp-bg-black-40" />

                      <ul className="hp-caption hp-text-color-black-80 hp-text-color-dark-30 hp-pl-16">
                        {props.description.map((item, index) => (
                          <li key={index} className="hp-mb-6">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )
                }
              </>
            )
          }
        </Card>
      </label>
    </div>
  );
}

import React from "react";

import { Button, Col, Row } from "antd";

export default function LandingFooter() {
  return (
    <footer className="hp-position-relative hp-bg-black-20 hp-bg-dark-100 hp-pt-sm-64 hp-pt-120 hp-pb-24 hp-overflow-hidden">
      <div className="hp-landing-footer-circle hp-bg-color-black-60 hp-bg-color-dark-40"></div>

      <div className="hp-landing-container">
        <Row justify="space-between" className="hp-mb-sm-64 hp-mb-120">
          <Col lg={8} md={16} span={24}>
            <p className="h5 hp-font-weight-500 hp-text-color-black-80 hp-text-color-dark-30 hp-mb-32">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <Button className="hp-bg-black-100 hp-text-color-black-0">
              Ask Question
            </Button>
          </Col>

          <Col lg={14} span={24} className="hp-mt-md-64">
            <Row>
              <Col flex="1 0 0">
                <span className="hp-p1-body hp-font-weight-500 hp-mb-16">
                  COMMUNITY
                </span>

                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  For Talents
                </a>
                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  For Companies
                </a>
                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  Facebook Group
                </a>
                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  FAQ
                </a>
              </Col>

              <Col flex="1 0 0">
                <span className="hp-p1-body hp-font-weight-500 hp-mb-16">
                  ABOUT US
                </span>

                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  Meet the Team
                </a>
                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  Our Story
                </a>
                <a
                  href="#"
                  className="hp-d-block h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-mt-16"
                >
                  Career
                </a>
              </Col>

              <Col flex="0 0 260px" className="hp-mt-sm-32">
                <span className="hp-p1-body hp-font-weight-500 hp-mb-16">
                  CONTACTS
                </span>

                <p className="h5 hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30 hp-my-16">
                  Feel free to get in touch with us <br />
                  via phone or send us a message.
                </p>

                {/* <a href="mailto:info@jobconnect.studio">info@jobconnect.studio</a> */}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          align="middle"
          justify="space-between"
          className="hp-landing-footer-copyright hp-border-top-1 hp-border-color-dark-80 hp-pt-24 hp-mt-24"
        >
          <Col>
            <p className="hp-p1-body hp-mb-sm-16 hp-mb-0">
              © zentrum 🥊 {new Date().getFullYear}, All Rights Reserved.
            </p>
          </Col>

          <Col>
            <Row align="middle">
              <Col>
                <svg
                  className="hp-fill-primary-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="16px"
                  height="16px"
                >
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                </svg>
              </Col>

              <Col className="hp-ml-18">
                <svg
                  className="hp-fill-primary-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                >
                  <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                </svg>
              </Col>

              <Col className="hp-ml-18">
                <svg
                  className="hp-fill-primary-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                >
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

import React from "react";

import { Card, Row, Col } from "antd";

export default function HtmlTags() {
  return (
    <>
      <div className="hp-mb-32">
        <h2 className="hp-mb-16">Typography</h2>

        <p className="hp-p1-body">
          These examples for typography, including global settings, headings,
          body text, lists, and more. When more control is needed, check out the
          textual utility classes.
        </p>
      </div>

      <Card className="hp-border-color-black-40 hp-overflow-hidden">
        <Row className="hp-mb-96 hp-mt-32 hp-overflow-x-auto" wrap={false}>
          <Col>
            <div className="hp-mb-24">
              <svg className="hp-fill-dark-0 hp-stroke-dark-80" width="214" height="214" viewBox="0 0 214 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="213" height="213" rx="15.5" stroke="#B2BEC3" />
                <path d="M21 157.68H38.856L45.912 135.216H86.808L93.936 157.68H111.792L79.104 54H53.688L21 157.68ZM51.024 119.016L66.216 70.776L81.624 119.016H51.024Z" fill="black" />
                <path d="M150.873 159.84C157.065 159.84 162.321 158.832 166.641 156.816C171.009 154.752 174.849 151.56 178.161 147.24V157.68H193.353V109.944C193.353 106.584 193.209 103.488 192.921 100.656C192.633 97.776 191.793 94.968 190.401 92.232C187.857 87.096 183.945 83.4 178.665 81.144C173.433 78.888 167.361 77.76 160.449 77.76C151.329 77.76 144.057 79.752 138.633 83.736C133.209 87.72 129.537 93 127.617 99.576L143.457 104.544C144.753 100.56 147.033 97.752 150.297 96.12C153.561 94.488 156.945 93.672 160.449 93.672C165.729 93.672 169.617 94.752 172.113 96.912C174.609 99.024 176.025 102.312 176.361 106.776C169.545 107.784 163.209 108.768 157.353 109.728C151.545 110.64 146.601 111.768 142.521 113.112C136.377 115.224 131.889 118.224 129.057 122.112C126.225 125.952 124.809 130.704 124.809 136.368C124.809 140.64 125.793 144.552 127.761 148.104C129.777 151.656 132.729 154.512 136.617 156.672C140.505 158.784 145.257 159.84 150.873 159.84ZM154.329 146.016C150.249 146.016 147.129 145.08 144.969 143.208C142.857 141.336 141.801 138.984 141.801 136.152C141.801 133.608 142.617 131.544 144.249 129.96C145.929 128.376 148.257 127.032 151.233 125.928C153.969 125.016 157.257 124.224 161.097 123.552C164.937 122.832 169.953 121.992 176.145 121.032C176.097 122.856 175.977 124.896 175.785 127.152C175.593 129.36 175.137 131.352 174.417 133.128C173.841 134.904 172.713 136.8 171.033 138.816C169.401 140.832 167.193 142.536 164.409 143.928C161.625 145.32 158.265 146.016 154.329 146.016Z" fill="black" />
              </svg>
            </div>

            <span className="hp-d-block hp-p1-body">FONT FAMILY</span>
            <span className="hp-d-block h4 hp-font-weight-700">Manrope - Bold</span>
          </Col>

          <Col className="hp-ml-64">
            <div className="hp-mb-24">
              <svg className="hp-fill-dark-0 hp-stroke-dark-80" width="214" height="214" viewBox="0 0 214 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 157.68H37.624L45.184 134.28H87.736L95.44 157.68H111.064L77.368 54H55.696L22 157.68ZM49.792 120.168L66.352 69.048L83.128 120.168H49.792Z" fill="black" />
                <path d="M150.261 159.84C162.645 159.84 171.981 155.352 178.269 146.376V157.68H191.589V109.8C191.589 106.536 191.445 103.488 191.157 100.656C190.869 97.824 190.101 95.136 188.853 92.592C186.453 87.456 182.661 83.712 177.477 81.36C172.341 78.96 166.293 77.76 159.333 77.76C150.357 77.76 143.157 79.728 137.733 83.664C132.309 87.6 128.661 92.904 126.789 99.576L140.829 103.896C142.173 99.576 144.549 96.456 147.957 94.536C151.365 92.616 155.109 91.656 159.189 91.656C165.237 91.656 169.605 92.952 172.293 95.544C175.029 98.088 176.517 102.048 176.757 107.424C170.421 108.288 164.229 109.2 158.181 110.16C152.133 111.072 146.853 112.176 142.341 113.472C136.341 115.392 131.781 118.248 128.661 122.04C125.541 125.832 123.981 130.656 123.981 136.512C123.981 140.736 124.965 144.624 126.933 148.176C128.949 151.68 131.901 154.512 135.789 156.672C139.725 158.784 144.549 159.84 150.261 159.84ZM152.925 147.528C148.125 147.528 144.573 146.424 142.269 144.216C140.013 142.008 138.885 139.392 138.885 136.368C138.885 133.296 139.893 130.872 141.909 129.096C143.973 127.32 146.541 125.904 149.613 124.848C152.877 123.888 156.717 123.048 161.133 122.328C165.597 121.608 170.757 120.816 176.613 119.952C176.565 121.776 176.445 123.816 176.253 126.072C176.061 128.328 175.653 130.344 175.029 132.12C174.453 134.664 173.229 137.112 171.357 139.464C169.533 141.816 167.061 143.76 163.941 145.296C160.869 146.784 157.197 147.528 152.925 147.528Z" fill="black" />
                <rect x="0.5" y="0.5" width="213" height="213" rx="15.5" stroke="#B2BEC3" />
              </svg>
            </div>

            <span className="hp-d-block hp-p1-body">FONT FAMILY</span>
            <span className="hp-d-block h4 hp-font-weight-600">Manrope - SemiBold</span>
          </Col>
        </Row>

        <Row className="hp-mb-8 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-caption hp-text-color-black-60">STYLE TITLE</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-caption hp-text-color-black-60">FONT SIZE</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-caption hp-text-color-black-60">LINE HEIGHT</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-caption hp-text-color-black-60">WEIGHT</p>
          </Col>

          <Col flex="0 0 700px">
            <p className="hp-caption hp-text-color-black-60">SAMPLE</p>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-top-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Header 1 / h1</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">42 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">48 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Medium</p>
          </Col>

          <Col flex="0 0 700px">
            <h1 className="hp-mb-0">Almost before we knew it, <br /> we had left the ground.</h1>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Header 2 / h2</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">28 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">42 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Medium</p>
          </Col>

          <Col flex="0 0 700px">
            <h2 className="hp-mb-0">Almost before we knew it, <br /> we had left the ground.</h2>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Header 3 / h3</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">24 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">28 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Medium</p>
          </Col>

          <Col flex="0 0 700px">
            <h3 className="hp-mb-0">Almost before we knew it, <br /> we had left the ground.</h3>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Header 4 / h4</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">20 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">24 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Medium</p>
          </Col>

          <Col flex="0 0 700px">
            <h4 className="hp-mb-0">Almost before we knew it, <br /> we had left the ground.</h4>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Header 5 / h5</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">16 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">24 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Medium</p>
          </Col>

          <Col flex="0 0 700px">
            <h5 className="hp-mb-0">Almost before we knew it, <br /> we had left the ground.</h5>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Caption</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">12 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">18 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Medium</p>
          </Col>

          <Col flex="0 0 700px">
            <span className="hp-d-block hp-caption hp-text-color-dark-0">Almost before we knew it, <br /> we had left the ground.</span>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">P1 / Body</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">14 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">21 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Regular</p>
          </Col>

          <Col flex="0 0 700px">
            <span className="hp-d-block hp-p1-body">Almost before we knew it, <br /> we had left the ground.</span>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">P2 / Body</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">14 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">21 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">ExtraLight</p>
          </Col>

          <Col flex="0 0 700px">
            <span className="hp-d-block hp-p2-body">Almost before we knew it, <br /> we had left the ground.</span>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Button</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">14 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">16 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Medium</p>
          </Col>

          <Col flex="0 0 700px">
            <span className="hp-d-block hp-button">Almost before we knew it, <br /> we had left the ground.</span>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Placeholder Text</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">14 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">16 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Light</p>
          </Col>

          <Col flex="0 0 700px">
            <span className="hp-d-block hp-placeholder">Almost before we knew it, <br /> we had left the ground.</span>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Input Description</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">10 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">12 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Medium</p>
          </Col>

          <Col flex="0 0 700px">
            <span className="hp-d-block hp-input-description">Almost before we knew it, <br /> we had left the ground.</span>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-border-bottom-1 hp-border-color-dark-80 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Input Label</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">14 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">16 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Medium</p>
          </Col>

          <Col flex="0 0 700px">
            <span className="hp-d-block hp-input-label">Almost before we knew it, <br /> we had left the ground.</span>
          </Col>
        </Row>

        <Row style={{ minHeight: 80 }} className="hp-py-18 hp-overflow-x-auto" align="middle" wrap={false}>
          <Col flex="0 0 200px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Badge Text</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">12 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">12 pt</p>
          </Col>

          <Col flex="0 0 150px">
            <p className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-font-weight-500 hp-mb-0">Medium</p>
          </Col>

          <Col flex="0 0 700px">
            <span className="hp-d-block hp-badge-text">Almost before we knew it, <br /> we had left the ground.</span>
          </Col>
        </Row>
      </Card>
    </>
  );
}
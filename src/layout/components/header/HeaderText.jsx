import { Col } from "antd";

import image from "../../../assets/images/memoji/newspaper.svg";

export default function HeaderText() {
  return (
    <Col
      xl={16}
      lg={14}
      className="hp-header-left-text hp-d-flex-center"
    >
      <div className="hp-border-radius-xl hp-overflow-hidden hp-bg-black-0 hp-bg-dark-100 hp-d-flex" style={{ minWidth: 45, width: 45, height: 45 }}>
        <img src={image} alt="Newspaper" height="80%" style={{ marginTop: 'auto', marginLeft: 'auto' }} />
      </div>

      <p className="hp-header-left-text-item hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-ml-12 hp-mb-0">
        Do you know the latest update of 2022? &nbsp;
        <a
          href="https://trello.com/b/8ZRmDN5y/yoda-roadmap"
          target="_blank"
        >
          Our roadmap is alive for future updates.
        </a>
      </p>
    </Col>
  );
};
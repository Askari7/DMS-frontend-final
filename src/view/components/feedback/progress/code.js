export const progressBar = `
import { Progress } from "antd";

return (
  <div>
    <p className="hp-mb-0 hp-p1-body">Progress Title</p>
    <Progress percent={30} />
  </div>

  <div className="hp-mt-8">
    <p className="hp-mb-0 hp-p1-body">Progress Title</p>
    <Progress percent={50} status="active" />
  </div>

  <div className="hp-mt-8">
    <p className="hp-mb-0 hp-p1-body">Progress Title</p>
    <Progress percent={70} status="exception" />
  </div>

  <div className="hp-mt-8">
    <p className="hp-mb-0 hp-p1-body">Progress Title</p>
    <Progress percent={100} />
  </div>
);
`;

export const circleProgressBar = `
import { Row, Col, Progress } from "antd";

return (
  <Row gutter={[8, 8]}>
    <Col>
      <Progress
        type="circle"
        width={160}
        percent={75}
        strokeWidth={2}
      />
    </Col>

    <Col className="hp-text-center">
      <Progress
        type="circle"
        percent={70}
        width={160}
        strokeWidth={2}
        status="exception"
      />
      <p className="hp-badge-text hp-font-weight-400 hp-mb-0 hp-mt-8">
        Information
      </p>
    </Col>

    <Col className="hp-text-center">
      <Progress
        type="circle"
        percent={100}
        width={160}
        strokeWidth={2}
      />
      <p className="hp-badge-text hp-font-weight-400 hp-mb-0 hp-mt-8">
        Information
      </p>
    </Col>
  </Row>
);
`;

export const miniProgressBar = `
import { Progress } from "antd";

return (
  <div>
    <p className="hp-mb-0 hp-p1-body">Progress Title</p>
    <Progress percent={30} />
  </div>

  <div className="hp-mt-8">
    <p className="hp-mb-0 hp-p1-body">Progress Title</p>
    <Progress percent={50} status="active" />
  </div>

  <div className="hp-mt-8">
    <p className="hp-mb-0 hp-p1-body">Progress Title</p>
    <Progress percent={70} status="exception" />
  </div>

  <div className="hp-mt-8">
    <p className="hp-mb-0 hp-p1-body">Progress Title</p>
    <Progress percent={100} />
  </div>
);
`;

export const miniCircleProgressBar = `
import { Row, Col, Progress } from "antd";

return (
  <Row gutter={[8, 8]}>
    <Col>
      <Progress
        type="circle"
        width={160}
        percent={75}
        width={100}
        strokeWidth={2}
      />
    </Col>

    <Col className="hp-text-center">
      <Progress
        type="circle"
        percent={70}
        width={100}
        strokeWidth={2}
        status="exception"
      />
      <p className="hp-badge-text hp-font-weight-400 hp-mb-0 hp-mt-8">
        Information
      </p>
    </Col>

    <Col className="hp-text-center">
      <Progress
        type="circle"
        percent={100}
        width={100}
        strokeWidth={2}
      />
      <p className="hp-badge-text hp-font-weight-400 hp-mb-0 hp-mt-8">
        Information
      </p>
    </Col>
  </Row>
);
`;
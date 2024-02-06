import React from "react";

import { Row, Col } from "antd";
import { RiVisaLine } from "react-icons/ri";

export default function CreditCardNew() {
  return (
    <div className="hp-overflow-hidden hp-position-relative hp-border-radius-xxl hp-bg-black-bg hp-pt-24 hp-px-24 hp-pb-18">
      <div className="hp-position-absolute-bottom-right" style={{ height: '90%', right: -30 }}>
        <svg
          className="hp-w-100 hp-h-100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M384.797 85.179 194.619 10.257l46.816 86.462L113.23 44.63l129.884 138.803L69.597 116.68l60.469 87.899L2.651 171.657"
            stroke="url(#CreditCardNew)"
            strokeWidth={20}
            strokeLinejoin="bevel"
          />
          <defs>
            <linearGradient
              id="CreditCardNew"
              x1={166.04}
              y1={17.382}
              x2={209.529}
              y2={191.807}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset={0.737} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Row justify="space-between" style={{ minHeight: 158, flexDirection: 'column' }}>
        <Col span={24}>
          <svg
            width={54}
            height={61}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.032 12 31.54 1.646c-2.856-1.69-6.39-1.69-9.276 0L4.801 12.001C1.945 13.69.178 16.83.178 20.242v20.65c0 3.382 1.767 6.522 4.623 8.243L22.294 59.49c2.856 1.69 6.39 1.69 9.276 0l17.492-10.355c2.856-1.691 4.623-4.83 4.623-8.242V20.243c-.03-3.412-1.796-6.522-4.653-8.242Z"
              fill="#fff"
            />
            <path
              d="M46.48 23.291c-1.671-.474-2.4-.545-2.4-.545-.283-.048-1.39-.237-2.895-.285-1.2-.19-2.448-.522-3.272-1.21-.894-.759-2.4-2.064-2.988-2.372-.024-.024-.047-.024-.071-.024a13.54 13.54 0 0 0-7.978-2.585 13.72 13.72 0 0 0-8.872 3.226 42.295 42.295 0 0 0-2.07 1.732c-.824.711-2.072 1.02-3.272 1.21-1.506.047-2.612.26-2.894.284 0 0-.66.071-2.213.498-.682.19-.753 1.139-.117 1.447 0 0 .023 0 .023.024 1.012.498 1.977 1.305 3.177 3.226 1.436 2.277 1.695 3.724 2.613 5.907 1.482 6.263 7.012 10.912 13.602 10.912 6.354 0 11.72-4.317 13.437-10.224 1.177-2.586 1.342-4.08 2.918-6.595 1.2-1.921 2.165-2.728 3.177-3.226.07-.024.142-.071.212-.095.588-.26.518-1.139-.118-1.305Zm-24.993 10.96c-1.882-.522-3.06-2.277-3.06-2.277s2.025-1.495 3.907-.973c1.883.522 2.918 2.847 2.918 2.847s-1.882.925-3.765.403Zm11.202 0c-1.883.522-3.765-.427-3.765-.427s1.012-2.325 2.918-2.847c1.882-.522 3.906.973 3.906.973s-1.176 1.803-3.059 2.301Z"
              fill="#111314"
            />
          </svg>
        </Col>

        <Col span={24} style={{ marginBottom: -16 }}>
          <Row align="middle" justify="end">
            <RiVisaLine size={64} className="hp-text-color-black-0" />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

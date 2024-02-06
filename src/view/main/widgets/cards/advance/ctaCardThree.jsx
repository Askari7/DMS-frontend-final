import React from "react";

import { useSelector } from "react-redux";

import { Card } from "antd";

export default function CtaCardThree() {
  const theme = useSelector(state => state.customise.theme)

  return (
    <Card className="hp-border-color-black-40 hp-card-6 hp-border-radius-xxl hp-overflow-hidden">
      <div className="hp-position-absolute-bottom-left" style={{ left: 20, bottom: -6 }}>
        <svg
          width={302}
          height={90}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M296 96.824 172.381 9l18.207 70.449-83.051-60.34L176.214 142 63.136 63.021l27.79 73.924L5 90.505"
            stroke={theme === 'dark' ? '#ffffff' : '#000000'}
            strokeWidth={20}
            strokeLinejoin="bevel"
          />
        </svg>
      </div>

      <h1 className="hp-mb-16 hp-text-color-black-bg hp-text-color-dark-0">
        Upgrade <br /> Account
      </h1>

      <p className="h3 hp-font-weight-400 hp-text-color-black-100 hp-text-color-dark-10 hp-mb-0">
        5 integrations, 30 <br /> team members, <br /> advanced
        <span className="hp-mx-4 hp-text-color-primary-1 hp-text-color-dark-primary-2">
          features
        </span>
        <br />
        for teams.
      </p>
    </Card>
  );
}

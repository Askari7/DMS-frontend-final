import React from 'react'

import { Col } from 'antd'

import MenuLogo from '../../../layout/components/menu/logo'

export default function Header() {
  return (
    <Col span={24} className="hp-d-flex-full-center hp-border-bottom-1 hp-border-color-dark-60 hp-py-16">
      <MenuLogo />
    </Col>
  )
}

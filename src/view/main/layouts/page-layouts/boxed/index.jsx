import React from 'react'

import { Col, Row } from 'antd'
import Analytics from '../../../dashboard/analytics'

export default function PageLayoutsBoxed() {
    return (
        <Row justify="center">
            <Col xxl={20} xl={22} span={24}>
                <Analytics />
            </Col>
        </Row>
    )
}

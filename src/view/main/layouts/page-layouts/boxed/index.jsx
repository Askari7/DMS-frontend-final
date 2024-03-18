import React from 'react'

import { Col, Row } from 'antd'
import Analytics from '../../../dashboard/analytics'

export default function PageLayoutsBoxed() {
    return (
        <Row justify="center">
            <Col xxl={10} xl={12} span={12}>
                <Analytics />
            </Col>
        </Row>
    )
}

import React from 'react'
import './style.css';
import { Row, Col, Image, Typography } from 'antd'
const Index = () => {
    return (
        <Row width='100%'>
            <Col span={5}>
            <Image width={50} height={50} preview={false} style={{ borderRadius: '50%' }} src="https://picsum.photos/200/300" />
            </Col>
            <Col span={14}>
                <Typography.Title level={5}>Mirvari Mammadli</Typography.Title>
                <Typography.Text>Mirvari Mammadli</Typography.Text>
            </Col>
            <Col span={5}></Col>
        </Row>
    )
}

export default Index

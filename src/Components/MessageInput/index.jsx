import React from 'react'
import './style.css'
import { SmileOutlined, PaperClipOutlined, AudioOutlined } from '@ant-design/icons';
import { Row, Col, Input, Button } from 'antd'

const Index = ({smile}) => {
    return (
        <Input.Group>
            <Row align='middle'>
                <Col style={{width:40}}>
                    <Button onClick={smile} type="text" icon={<SmileOutlined style={{fontSize:20}}/>} />
                </Col>
                <Col style={{width:40}}>
                    <Button type="text" icon={<PaperClipOutlined style={{fontSize:20}}/>} />
                </Col>
                <Col style={{width:'calc(100% - 120px)'}}>
                    <Input size='large' placeholder='message...' />
                </Col>
                <Col style={{width:40}}>
                    <Button type="text" icon={<AudioOutlined style={{fontSize:20}}/>} />
                </Col>
            </Row>
        </Input.Group>
    )
}

export default Index

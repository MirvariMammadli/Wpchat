import React, { useState } from 'react';
import { Row, Col, Image, Typography, Button, Space } from 'antd';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import style from './style.module.scss';
import profile from './profile.png';

const { Title, Text } = Typography

const Index = (props) => {

    const [src, setSrc] = useState(props.photo)
    const onError = () => {
        setSrc(profile)
    }
    return (
        <Row className={style.UserInfoChat} style={{ width: '100%', display: "flex", height: '64px' }}>
            <Col>
                <Image width={50} height={50} preview={false} style={{ borderRadius: '50%'}} src={src} onError={onError} />
            </Col>
            <Col style={{ width:'calc(100% - 140px)'}}>
                <Row className='UserInfoChatText'>
                    <Text className={style.headerText}>{props.name}</Text>
                </Row >
                <Row className='UserInfoChatText'>
                    <Text className={style.statusText}>{props.status}</Text>
                </Row>
            </Col>
            <Col style={{ width: 80, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >  
              <Space direction='horizontal' size={0} />
                <Button type="text" shape="circle" icon={<MoreOutlined />} />
                <Button type="text" shape="circle" icon={<SearchOutlined />} />
            </Col>
        </Row>
    )
}

export default Index

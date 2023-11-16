import React, { useState } from 'react';
import { Row, Col, Image, Typography, Button, Space, Drawer, Layout } from 'antd';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import style from './style.module.scss';
import profile from './profile.png';

const { Title, Text } = Typography

const Index = (props) => {

    const [src, setSrc] = useState(props.photo)
    const onError = () => {
        setSrc(profile)
    }

    const[modal, setModal]=useState(false)
    const show=()=>setModal(true)
    const hidden=()=>setModal(false)

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
                <Button onClick={show} type="text" shape="circle" icon={<SearchOutlined />} />
                <Button type="text" shape="circle" icon={<MoreOutlined />} />
            </Col>

            <Drawer
                title="Basic Drawer"
                placement="right"
                mask={false}
                closable={true}
                open={modal}
                onClose={hidden}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </Row>

    )
}

export default Index

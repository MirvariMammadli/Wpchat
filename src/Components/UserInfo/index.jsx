import React, {useState} from 'react';
import { Row, Col, Image, Typography } from 'antd';
import style from './style.module.scss'
import profile from './profile.png';
const { Title, Text } = Typography

const Index = (props) => {

    const[src, setSrc]=useState(props.photo)
    const onError=()=>{
        setSrc(profile)
    }
    return (
        <Row className={style.UserInfoChat} width='100%' style={{ alignItems: 'center', display: "flex", height: '80px', backgroundColor:'white' }}>
            <Col span={5}>
                <Image width={50} height={50} preview={false} style={{ borderRadius: '50%' }} src={src} onError={onError}/>
            </Col>
            <Col span={14}>
                <Row className={style.UserInfoChatText}>
                    <Text className={style.headerText}>{props.name}</Text>
                </Row>
                <Row>
                    <Text className={style.messageText}>{props.message}</Text>
                </Row>
            </Col>
            <Col span={5}>
                <Text>{props.time}</Text>
            </Col>
        </Row>
    )
}

export default Index

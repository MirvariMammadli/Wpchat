import React, { useState, useContext, memo } from 'react';
import { ChatContext } from '../../Context';
import { Row, Col, Image, Typography } from 'antd';
import style from './style.module.scss'
import profile from './profile.png';
const { Title, Text } = Typography

const Index = (props) => {


    const [status, setStatus] = useState(false);
    const [src, setSrc] = useState(props.photo);
    const onError = () => {
        setSrc(profile)
    }

    const Show = () => setStatus(true);
    const Hidden = () => setStatus(false);

    const handleClick = () => {
        // Invoke the onClick callback passed as a prop
        if (props.onClick) {
            props.onClick();
        }
        // You can add more logic here if needed
    };


    return (
        <Row className={style.UserInfoChat} width='100%' style={{ alignItems: 'center', display: "flex", height: '80px', backgroundColor: status && "rgb(240,242,244)" }} onClick={handleClick} onMouseOver={Show} onMouseLeave={Hidden}>
            <Col span={5}>
                <Image width={50} height={50} preview={false} style={{ borderRadius: '50%' }} src={src} onError={onError} />
            </Col>
            <Col span={17}>
                <Row className={style.UserInfoChatText}>
                    <Text className={style.headerText}>{props.name}</Text>
                </Row>
                <Row>
                    <Text className={style.messageText}>{props.message}</Text>
                </Row>
            </Col>
            <Col span={2}>
                <Text>{props.time}</Text>
            </Col>
        </Row>
    )
}

export default memo(Index);

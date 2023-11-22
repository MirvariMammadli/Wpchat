import React, { useState } from 'react';
import { Row, Col, Image, Typography, Button, Space, Drawer, Modal, Input } from 'antd';
import { MoreOutlined, SearchOutlined, AudioOutlined } from '@ant-design/icons';
import style from './style.module.scss';
import profile from './profile.png';

const { Search } = Input;

const _menu = ["Contact info", "Select messages", "Close chat", "Mute notifications", "Disappearing messages", "Clear chat", "Delete chat", "Report", "Block"];

const { Text } = Typography;

const Index = (props) => {
    const [src, setSrc] = useState(props.photo);
    const onError = () => {
        setSrc(profile);
    };

    const [modal, setModal] = useState(false);
    const show = () => {
        setModal(true)
        props.settingsState(true)
    };
    const hidden = () => {
        setModal(false);
        props.settingsState(false)
    }

    const [popoverr, setsettingmodal] = useState(false);
    const triggersetting = () => setsettingmodal(true);
    const hidesetting = () => setsettingmodal(false);

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
    };

    return (
        <Row className={style.UserInfoChat} style={{ width: '100%', display: 'flex', height: '64px' }}>
            <Col>
                <Image width={50} height={50} preview={false} style={{ borderRadius: '50%' }} src={src} onError={onError} />
            </Col>
            <Col style={{ width: 'calc(100% - 140px)' }}>
                <Row className='UserInfoChatText'>
                    <Text className={style.headerText}>{props.name}</Text>
                </Row>
                <Row className='UserInfoChatText'>
                    <Text className={style.statusText}>{props.status}</Text>
                </Row>
            </Col>
            <Col style={{ width: 80, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                <Space direction='horizontal' size={0} />
                <Button onClick={show} type="text" shape="circle" icon={<SearchOutlined />} />
                <Button onClick={triggersetting} type="text" shape="circle" icon={<MoreOutlined />} />
                <Modal
                    style={{ left: "43%", top: "5.5%" }}
                    width={'250px'}
                    height={'100px'}
                    closeIcon={false}
                    mask={false}
                    open={popoverr}
                    onClose={hidesetting}
                    onCancel={hidesetting}
                    footer={false}
                >
                    {_menu.map((val, ind) => <Button className={style.Button} style={{ textAlign: 'left' }} block key={ind} type="text">{val}</Button>)}
                </Modal>
            </Col>
            <Drawer
                title="Search Messages"
                placement="right"
                mask={false}
                closable={true}
                open={modal}
                onClose={hidden}
                style={{ padding: "20px", width: '100%' }}
            >
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{
                        width: "100%",
                        padding: '10px'
                    }}

                />

                <p style={{ textAlign: 'center' }}>Search for messages with the person</p>
            </Drawer>
        </Row>
    );
};

export default Index;

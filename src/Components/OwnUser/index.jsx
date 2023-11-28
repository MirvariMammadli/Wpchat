import _users_ from '../../@json/users.json'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import './style.css'
import { SyncOutlined, MessageOutlined, MoreOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Row, Col, Layout, Image, Button, Drawer, Modal, Typography } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const _menuSider = ["New Group", "New Community", "Starred messages", "Select chats", "Settings", "Log out"];

const Index = ({photo, fullName, email}) => {
    const [modal, setModal] = useState(false)
    const [smile, setSmile] = useState(false)
    const [lengthController, setLengthController] = useState(false)

    const show = () => setModal(true)
    const hidden = () => setModal(false)

    const [popoverSider, setsettingmodal] = useState(false);
    const triggersetting = () => setsettingmodal(true);
    const hidesetting = () => setsettingmodal(false);

    const navigate = useNavigate();
    const changePage = () => {
        // Use navigate to navigate within the same window/tab
        navigate('/login');
    }

  return (
    <Header style={{ backgroundColor: 'rgb(233, 237, 239)', paddingInline: 0 }}>
                        <Row width='100%' align='middle' justify='space-between'>
                            <Col span={2}>
                                <Image width={50} height={50} preview={false} style={{ borderRadius: '50%' }} src={photo} />
                            </Col>
                            <Col className="user" span={13} style={{backgroundColor:'pink', height:60, flexDirection:'column', justifyContent:'center' ,paddingInline: 5, lineHeight: 1,}}>
                                <Typography.Title style={{ marginBottom: 0 }} level={5}>{fullName}</Typography.Title>
                                <Typography.Title style={{ fontSize: '15px', marginBottom: 0 }} >{email}</Typography.Title>
                            </Col>
                            <Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={6}>
                                <Button type="text" shape="circle" icon={<SyncOutlined />} />
                                <Button onClick={show} type="text" shape="circle" icon={<MessageOutlined />} />
                                <Button onClick={triggersetting} type="text" shape="circle" icon={<MoreOutlined />} />
                                <Modal
                                    style={{ right: "29%", top: "5.5%" }}
                                    width={'250px'}
                                    height={'100px'}
                                    closeIcon={false}
                                    mask={false}
                                    open={popoverSider}
                                    onClose={hidesetting}
                                    onCancel={hidesetting}
                                    footer={false}
                                >
                                    {_menuSider.map((val, ind) => <Button style={{ textAlign: 'left' }} block key={ind} type="text" onClick={val === 'Log out' ? () => changePage() : hidesetting}>{val}</Button>)}
                                </Modal>
                            </Col>
                        </Row>
                    </Header>
  )
}

export default Index

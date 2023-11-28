import _users_ from '../../@json/users.json'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import './style.css'
import EmojiPicker from 'emoji-picker-react';
import { UserInfo, Search, Archive, ChatUser, MessageInput, MessageText, OwnUser } from '../../Components';
import { SyncOutlined, MessageOutlined, MoreOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Row, Col, Layout, Image, Button, Drawer, Modal, Typography } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const _menuSider = ["New Group", "New Community", "Starred messages", "Select chats", "Settings", "Log out"];

const Index = () => {

    const [modal, setModal] = useState(false)
    const [smile, setSmile] = useState(false)
    const [lengthController, setLengthController] = useState(false)

    const show = () => setModal(true)
    const hidden = () => setModal(false)

    const smileShowHidden = () => setSmile(!smile)

    const settings = (value) => {
        if (value == true) setLengthController(true)
        else if (value == false) setLengthController(false)
    }


    return (

        <Row gutter={0} style={{ height: '100vh' }}>
            {/* Sider Layout */}
            <Col style={{ width: '20%' }}>
                <Layout theme="light" style={{ height: '100%' }}>

                    <OwnUser
                        photo='https://picsum.photos/200/300'
                        fullName="Ali"
                        email="ddd@gamil.com"
                    >
                    </OwnUser>
                    <Search />

                    <Content style={{ height: `calc(100% - 110px)`, overflowY: 'auto', backgroundColor: '#e9edef' }}>
                        <Archive count={100} />
                        {_users_.map((value, index) => (
                            <UserInfo key={index} photo={value.photo} name={value.name} message={value.message} time={value.time} />
                        ))}
                    </Content>
                </Layout>
            </Col>
            {/* Main Layout */}
            <Col style={{ width: lengthController ? 'calc(80% - 378px)' : '80%' }}>
                <Layout>
                    <Header style={{ paddingInline: 5, backgroundColor: 'rgb(233, 237, 239)', lineHeight: 4, borderLeft: '1px solid #dcdcdc' }} >
                        <ChatUser photo="https://picsum.photos/200" name="Sema Aliyeva" status="Online" settingsState={settings} />
                    </Header>

                    <Content style={{
                        height: '85vh',
                        overflow: smile ? 'hidden' : 'auto',
                        position: 'relative',
                    }}>
                        <MessageText message="salam necesen" time="14:00" status={1} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={2} user={false} />
                        <MessageText message="salam necesen" time="14:00" status={3} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={1} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={2} user={false} />
                        <MessageText message="salam necesen" time="14:00" status={3} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={1} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={2} user={false} />
                        <MessageText message="salam necesen" time="14:00" status={3} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={1} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={2} user={false} />
                        <MessageText message="salam necesen" time="14:00" status={3} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={1} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={2} user={false} />
                        <MessageText message="salam necesen" time="14:00" status={3} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={1} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={2} user={false} />
                        <MessageText message="salam necesen" time="14:00" status={3} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={1} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={2} user={false} />
                        <MessageText message="salam necesen" time="14:00" status={3} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={1} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={2} user={false} />
                        <MessageText message="salam necesen" time="14:00" status={3} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={1} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={2} user={false} />
                        <MessageText message="salam necesen" time="14:00" status={3} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={1} user={true} />
                        <MessageText message="salam necesen" time="14:00" status={2} user={false} />
                        <MessageText message="salam necesen" time="14:00" status={3} user={true} />

                        <Drawer
                            placement="bottom"
                            closable={false}
                            open={smile}
                            getContainer={false}
                            mask={false}
                        >
                            <EmojiPicker height='100%' width='100%' />
                        </Drawer>

                    </Content>

                    <Footer style={{ backgroundColor: 'rgb(233, 237, 239)', border: '1px solid #dcdcdc' }}>
                        <MessageInput smile={smileShowHidden} />
                    </Footer>
                </Layout>
            </Col>

            <Drawer
                placement="left"
                closable={true}
                mask={false}
                open={modal}
                closeIcon={<ArrowLeftOutlined />}
                onClose={hidden}
                style={{ padding: 20 }}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

        </Row>

    )
}

export default Index
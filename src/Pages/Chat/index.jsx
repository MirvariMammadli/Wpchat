// import _users_ from '../../@json/users.json'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios';
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

    const [photo, setPhoto] = useState('https://picsum.photos/200/300')
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()

    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        getOwner();
        getUsers();
    }, []);

    const getOwner = () => {
        const user = JSON.parse(localStorage.getItem('user')) || {}
        const { fullName, email, photo } = user;
        setFullName(fullName)
        setEmail(email)
        setPhoto(`http://localhost/wp/v2.0.0/img/${photo}`)
    }

    const getUsers=(pag= -1)=>{
        const url = "http://localhost/wp/v2.0.0/selectUser.php"
        axios.get(url, {params: {pag}}).then(res=>{
            const {data} = res.data;
            const [_count, _users] = data;
            setUsers(_users);
            setCount(_count);
        })
    }

    const selectUser = (id)=>{
        console.log("salam", id)
    }

    return (

        <Row gutter={0} style={{ height: '100vh' }}>
            {/* Sider Layout */}
            <Col style={{ width: '20%' }}>
                <Layout theme="light" style={{ height: '100%' }}>

                    <OwnUser
                        photo={photo}
                        fullName={fullName}
                        email={email}


                    >
                    </OwnUser>
                    <Search />

                    <Content style={{ height: `calc(100% - 110px)`, overflowY: 'auto', backgroundColor: '#e9edef' }}>
                        <Archive count={count} />
                        {users.map((value, index) => (
                            <UserInfo key={index} photo={"http://localhost/wp/v2.0.0/img/"+value.photo} name={value.fullName} message={value.email} time={value.id} onClick={()=>selectUser(value.id)} />
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
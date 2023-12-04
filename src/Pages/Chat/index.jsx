// import _users_ from '../../@json/users.json'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext, memo } from 'react'
import './style.css'
import axios from 'axios';
import { ChatContext } from '../../Context';
import EmojiPicker from 'emoji-picker-react';
import { Sider, Content, Header } from '../../Layout';
import { UserInfo, Search, Archive, ChatUser, MessageInput, MessageText, OwnUser } from '../../Components';
import { SyncOutlined, MessageOutlined, MoreOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Row, Col, Layout, Image, Button, Drawer, Modal, Typography } from 'antd';
const { Footer } = Layout;

const Index = () => {
    const [id, setId] = useState(null);

    const [modal, setModal] = useState(false)
    const [smile, setSmile] = useState(false)
    const [lengthController, setLengthController] = useState(false)


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

    const getUsers = (pag = -1) => {
        const url = "http://localhost/wp/v2.0.0/selectUser.php"
        axios.get(url, { params: { pag } }).then(res => {
            const { data } = res.data;
            const [_count, _users] = data;
            setUsers(_users);
            setCount(_count);
        })
    }




    return (
        <ChatContext.Provider value={{ chat: { id, setId } }}>
            <Row gutter={0} style={{ height: '100vh' }}>
                {/* Sider Layout */}
                <Sider />
                {/* Main Layout */}
                <Col style={{ width: lengthController ? 'calc(80% - 378px)' : '80%' }}>
                    <Layout>
                        <Header />
                        <Content />
                        <Footer style={{ backgroundColor: 'rgb(233, 237, 239)', border: '1px solid #dcdcdc' }}>
                            <MessageInput smile={smileShowHidden} />
                        </Footer>
                    </Layout>
                </Col>



            </Row>
        </ChatContext.Provider>
    )
}

export default memo(Index);
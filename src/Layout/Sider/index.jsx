// import _users_ from '../../@json/users.json'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext, memo } from 'react'
import './style.css'
import axios from 'axios';
import { ChatContext } from '../../Context';
import EmojiPicker from 'emoji-picker-react';
import { UserInfo, Search, Archive, ChatUser, MessageInput, MessageText, OwnUser } from '../../Components';
import { SyncOutlined, MessageOutlined, MoreOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Row, Col, Layout, Image, Button, Drawer, Modal, Typography } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const _menuSider = ["New Group", "New Community", "Starred messages", "Select chats", "Settings", "Log out"];


const Index = () => {

    const { chat } = useContext(ChatContext);
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

    const selectUser = (id) => {
        chat.setId(id);
    }
    return (
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
                        <UserInfo key={index} photo={"http://localhost/wp/v2.0.0/img/" + value.photo} name={value.fullName} message={value.email} time={value.id} onClick={() => selectUser(value.id)} />
                    ))}
                </Content>
            </Layout>
        </Col>
    )
}

export default memo(Index);

// import _users_ from '../../@json/users.json'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext, memo } from 'react'
import './style.css'
import axios from 'axios';
import { ChatContext } from '../../Context';
import EmojiPicker from 'emoji-picker-react';
import { Sider, Content } from '../../Layout';
import { UserInfo, Search, Archive, ChatUser, MessageInput, MessageText, OwnUser } from '../../Components';
import { SyncOutlined, MessageOutlined, MoreOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Row, Col, Layout, Image, Button, Drawer, Modal, Typography } from 'antd';
const { Header, Footer } = Layout;

const Index = (props) => {
    const settings = (value) => {
        if (value == true) {
            props.setting(true)
        }
        else if (value == false) {
            props.setting(false)
        }
    };
    
    
    return (
        <Header style={{ paddingInline: 5, backgroundColor: 'rgb(233, 237, 239)', lineHeight: 4, borderLeft: '1px solid #dcdcdc' }} >
            <ChatUser photo="https://picsum.photos/200" name="name" status="smt" settingsState={settings} />
        </Header>
    )
}

export default memo(Index)

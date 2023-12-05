import React, { useEffect, useContext, memo } from 'react'
import './style.css'
import axios from 'axios';
import { ChatContext } from '../../Context';
import { MessageText } from '../../Components';
import { Layout } from 'antd';
const { Content } = Layout;

const Index = () => {
    const { chat, Messages } = useContext(ChatContext);
    const [messages, setMessages] = Messages

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        const url = "http://localhost/wp/v2.0.0/select.php?"
        const params = {
            _sendId: user?.id,
            _acceptId: chat?.id,
            pag: -1
        }
        if (user?.id && chat?.id) {

            axios.get(url, { params }).then(res => {
                const { data } = res.data;
                const [count, message] = data;
                setMessages(message)
            })
        }
    }, [chat.id, messages]);

    return (
        <Content
            style={{
                height: '85vh',
                overflow: 'auto',
                position: 'relative',
            }}
        >
            {
                messages.map((val, ind) => (
                    <MessageText
                        key={ind}
                        message={val.message}
                        time={val.begDate}
                        status={val._status}
                        user={val._sendId === user.id}
                    />
                ))
            }
        </Content>
    )
}

export default memo(Index)

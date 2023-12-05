import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import io from 'socket.io-client';
import FormItem from 'antd/es/form/FormItem';

import { Row, Col, Input, Button, Form, notification } from 'antd'
import { SmileOutlined, PaperClipOutlined, RightOutlined } from '@ant-design/icons';
import { ChatContext } from '../../Context';

import './style.css'

const socket = io('https://friendly-aeolian-golf.glitch.me');

const Index = ({ smile }) => {
    const { chat, Messages } = useContext(ChatContext);
    const [messages, setMessages] = Messages

    const [useForm] = Form.useForm()
    const [api, contextHolder] = notification.useNotification();

    const sendMessage = (values) => {
        values._sendId = user.id
        values._acceptId = chat.id
        values._type = 1

        const url = "http://localhost/wp/v2.0.0/insert.php"

        axios.post(url, values).then(res => {
            if (Number.isInteger(res?.data?.data)) {
                useForm.resetFields()
                socket.emit('sendMessage', values)
            } else {
                api.error({
                    message: `Xəta baş verdi`,
                    description: res?.data?.data,
                    placement: 'topRight',
                });
            }
        })

    }

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        socket.on('receiveMessage', msg => {
            console.log('Received message:', msg);
            if ((msg._sendId === user.id && msg._acceptId === chat.id) || (msg._sendId === chat.id && msg._acceptId === chat.id)) {
                setMessages(message => [...message, msg])
            }
        });
    }, [])

    return (

        <Form onFinish={sendMessage} form={useForm}>
            {contextHolder}

            <Row align='middle'>
                <Col style={{ width: '40px', height: '55px' }}>
                    <Button onClick={smile} type="text" icon={<SmileOutlined style={{ fontSize: 20 }} />} />
                </Col>
                <Col style={{ width: '40px', height: '55px' }}>
                    <Button type="text" icon={<PaperClipOutlined style={{ fontSize: 20 }} />} />
                </Col>
                <Col flex="auto">
                    <FormItem name="message"><Input size='large' placeholder='message...' /></FormItem>
                </Col>
                <Col style={{ width: '40px', height: '55px' }}>
                    <Button htmlType="submit" icon={<RightOutlined style={{ fontSize: 20 }} />} />
                </Col>
            </Row>
        </Form>
    )
}

export default Index

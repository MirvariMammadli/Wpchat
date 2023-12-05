import React, { useState, useEffect, useRef, memo } from 'react'
import './style.css'
import axios from 'axios';
import { ChatContext } from '../../Context';
import EmojiPicker from 'emoji-picker-react';
import { Sider, Content, Header } from '../../Layout';
import { MessageInput, NoChatPage } from '../../Components';
import { Row, Col, Layout, Drawer } from 'antd';
const { Footer } = Layout;

const Index = () => {
    const [id, setId] = useState(null);

    const [smile, setSmile] = useState(false)
    const [lengthController, setLengthController] = useState(false)
    const [messages, setMessages] = useState([])


    const smileShowHidden = () => setSmile(!smile)


    const [photo, setPhoto] = useState('https://picsum.photos/200/300')
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()

    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        // getOwner();
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
    const settings = (value) => {
        if (value == true) setLengthController(true)
        else if (value == false) setLengthController(false)
    }

    const footerHeight = document.querySelector('.ant-layout-footer')?.offsetHeight || 0;

    const emojiPickerRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click is outside the EmojiPicker Drawer
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                // Close the EmojiPicker Drawer
                setSmile(false);
            }
        };

        // Attach the event listener to the document
        document.addEventListener('mousedown', handleOutsideClick);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setSmile]);

    return (
        <ChatContext.Provider value={{ chat: { id, setId }, Messages: [messages, setMessages] }}>
            <Row gutter={0} style={{ height: '100vh' }}>
                {/* Sider Layout */}
                <Sider />
                {/* Main Layout */}
                <Col style={{ width: lengthController ? 'calc(80% - 378px)' : '80%' }}>
                    {!id ?
                        <NoChatPage />
                        :
                        <Layout>
                            <Header setting={settings} />
                            <Content />
                            <Footer style={{ backgroundColor: 'rgb(233, 237, 239)', border: '1px solid #dcdcdc' }}>
                                <MessageInput smile={smileShowHidden} />
                                <Drawer
                                    placement="bottom"
                                    closable={false}
                                    open={smile}
                                    getContainer={false}
                                    mask={false}
                                    style={{ bottom: footerHeight }}
                                    onClose={() => setSmile(false)}
                                >
                                    <div ref={emojiPickerRef}>
                                        <EmojiPicker height='100%' width='100%' />
                                    </div>

                                </Drawer>

                            </Footer>
                        </Layout>
                    }
                </Col>
            </Row>
        </ChatContext.Provider>
    )
}

export default memo(Index);
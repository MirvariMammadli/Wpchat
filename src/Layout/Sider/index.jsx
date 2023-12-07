import React, { useState, useEffect, useContext, memo } from 'react'
import './style.css'
import axios from 'axios';
import { ChatContext } from '../../Context';
import { UserInfo, Search, Archive, OwnUser } from '../../Components';
import { Row, Col, Layout} from 'antd';
const { Content } = Layout;


const Index = () => {

    const { chat } = useContext(ChatContext);
    const [photo, setPhoto] = useState('https://picsum.photos/200/300')
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()

    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0)
    const [ number, setNumber] = useState(1)

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
        <Col style={{ width: '20%', height: '100%' }}>
            <Layout theme="light" style={{ height: '100%' }}>

                <OwnUser
                    photo={photo}
                    fullName={fullName}
                    email={email}


                >
                </OwnUser>
                <Search />

                <Content style={{ height: `calc(100% - 110px)`, overflowY: 'auto', backgroundColor: '#e9edef'}}>
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

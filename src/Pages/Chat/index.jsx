import _users_ from '../../@json/users.json'
import React from 'react'
import './style.css'
import { UserInfo, Search, Archive } from '../../Components';
import { SyncOutlined, MessageOutlined, MoreOutlined} from '@ant-design/icons';
import { Row, Col, Layout, Image, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const Index = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider theme="light" width={350}>
                <Header style={{ backgroundColor: 'gray', paddingInline: 0 }} >
                    <Row width='100%' align='middle' justify='space-between'>
                        <Col span={8}>
                            <Image width={50} height={50} preview={false} style={{ borderRadius: '50%' }} src="https://picsum.photos/200/300" />
                        </Col>
                        <Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={16}>
                            <Button type="text" shape="circle" icon={<SyncOutlined />} />
                            <Button type="text" shape="circle" icon={<MessageOutlined />} />
                            <Button type="text" shape="circle" icon={<MoreOutlined />} />
                        </Col>
                    </Row>
                </Header>

                <Search/>

                <Content style={{ height: `calc(100% - 110px)`, overflowY: 'auto', backgroundColor: 'yellow' }}>
                <Archive count={100}/>
                    {
                        _users_.map((value, index) => (
                            <UserInfo key={index} photo={value.photo} name={value.name} message={value.message} time={value.time} />
                        ))
                    }

                </Content>
            </Sider>
            <Layout>
                <Header style={{ backgroundColor: 'gray' }} >

                </Header>
                <Content>

                </Content>
                <Footer style={{ backgroundColor: 'gray' }}>

                </Footer>
            </Layout>
        </Layout>
    )
}

export default Index
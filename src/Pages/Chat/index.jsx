import React from 'react'
import './style.css'
import { SyncOutlined, MessageOutlined, MoreOutlined, AudioOutlined } from '@ant-design/icons';
import { Row, Col, Layout, Image, Button, Input, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);


const Index = () => {

    const onSearch = (value, _e, info) => {

        console.log(info?.source, value);
    }

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
                    <Row>
                        <Col span={24}>
                            <Search
                                placeholder="input search text"
                                onSearch={onSearch}
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Col>
                        <Col span={24}>archive</Col>
                    </Row>
                </Header>
                <Content>

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
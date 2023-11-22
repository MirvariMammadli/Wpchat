import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Layout, Card } from 'antd';
import axios from 'axios';


const Index = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
        const url = 'https://aticiliqkursu.az/v2.0.0//signup.php'
        const data = {
            ...values, photo: "profile.png"
        }
        axios.post(url, data).then(res => {
            if(res.data.data.id){
                alert("uğurlu")
            } else{
                alert("uğursuz")
            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const navigate = useNavigate();
    const changePage = () => {
        // Use navigate to navigate within the same window/tab
        navigate('/login');
    }
    return (
        <Layout className='containerReg'>
            <Card className='form-cardReg'>
                <Form
                    name="basic"
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 16, }}
                    style={{ maxWidth: 600, }}
                    initialValues={{ remember: true, }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email address"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your emailaddress!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="_password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item
                        label="Password"
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please repeat your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16, }}
                    >
                        <Button type="primary" htmlType="submit">
                            Upload a Photo
                        </Button>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16, textAlign: 'center' }}
                    >
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16, textAlign: 'center !important' }}
                    >
                        Already have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={changePage}>Login</span>
                    </Form.Item>
                </Form>
            </Card>
        </Layout>
    )
}

export default Index

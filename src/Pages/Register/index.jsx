import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Layout, Card, message } from 'antd';
import axios from 'axios';


const Index = () => {

    const navigate = useNavigate();
    const changePage = () => {
        // Use navigate to navigate within the same window/tab
        navigate(process.env.REACT_APP_LOGIN);
    }

    const [messageApi, contextHolder] = message.useMessage();
    const [formDOM] = Form.useForm()

    const onFinish = (values) => {

        const url = 'http://localhost/wp/v2.0.0/signup.php'
        const data = {
            ...values, photo: "profile.png"
        }
        axios.post(url, data).then(res => {
            if (res.status===200 && res.data.data?.id) {
                messageApi.open({ type: 'success', content: 'İstifadəçi uğurla qeydiyyatdan keçdi', });
                formDOM.resetFields();
                setTimeout(()=>changePage(),1000)
                
            } else {
                messageApi.open({ type: 'error', content: res.data.data, });
            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    
    return (
        <Layout className='containerReg'>
            {contextHolder}
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
                    form={formDOM}
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

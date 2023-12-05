import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Layout, Card, message } from 'antd';
import axios from 'axios';



const Index = () => {

  const navigate = useNavigate();
  const changePage = () => {
    // Use navigate to navigate within the same window/tab
    navigate(process.env.REACT_APP_REGISTER);
  }

  const [messageApi, contextHolder] = message.useMessage();
  const [formDOM] = Form.useForm()

  const onFinish = (values) => {
    // console.log('Success:', values);
    const url = "http://localhost/wp/v2.0.0/signin.php"
    
    axios.post(url, values).then(({data, status}) => {
      if (status === 200 && data.data.id) {
        localStorage.setItem("user", JSON.stringify(data.data))
        messageApi.open({ type: 'success', content: 'Əməliyat uğurla başa çatdı' });
        formDOM.resetFields();
        setTimeout(() => navigate(process.env.REACT_APP_CHAT), 1000);
      } else {
        messageApi.open({ type: 'error', content: data.data });
      }
    })
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };


  return (
    <Layout className='container'>
      {contextHolder}
      <Card className='form-card'>
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
            label="Email address"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
              {
                type: "email",
                message: 'Zəhmət olmasa doğru informasiya daxil edin'
              }
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
              {
                min: 7,
                message: 'Parol 7 simvoldan az olmamalıdır'
              }
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
              Log in
            </Button>
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 8, span: 16, textAlign: 'center !important' }}
          >
            Not registered? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={changePage}>Create an Account</span>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  )
}

export default Index

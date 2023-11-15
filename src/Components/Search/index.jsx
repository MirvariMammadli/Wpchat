import React from 'react'
import './style.css'
import { AudioOutlined } from '@ant-design/icons';
import { BsFilter } from 'react-icons/bs';
import { Row, Col, Button, Input } from 'antd';



const { Search} = Input;
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
        <Row width='100%' align='middle' style={{ height: 45, backgroundColor: 'pink' }}>
            <Col span={20}>
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{
                        width: "100%",
                    }}
                />
            </Col>
            <Col span={4} style={{ textAlign: 'center' }}>
                <Button type='text' icon={<BsFilter size={30} />} />
            </Col>
        </Row>
    )
}

export default Index

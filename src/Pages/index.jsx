import React from 'react'
import './style.css'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Button, Result } from 'antd';

import Chat from "./Chat"
import Login from "./Login"
import Register from "./Register"

const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/chat" element={<Outlet />}>
                    <Route index element={<Chat />} />
                    <Route path='*' element={<Navigate to={process.env.REACT_APP_404} />}/>
                </Route>
                <Route path="/login" element={<Outlet />}>
                    <Route index element={<Login />} />
                    <Route path='*' element={<Navigate to={process.env.REACT_APP_404} />}/>
                </Route>
                <Route path="/register" element={<Outlet />}>
                    <Route index element={<Register />} />
                    <Route path='*' element={<Navigate to={process.env.REACT_APP_404} />}/>
                </Route>
                <Route path='*' element={<Navigate to={process.env.REACT_APP_404} />}/>
                <Route path="404" element={
                    <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Button type="primary" href={process.env.REACT_APP_CHAT}>Back Home</Button>}
                    />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Index

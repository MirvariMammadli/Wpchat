import React, { useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

const Index = ({ children }) => {

    const navigate = useNavigate();
    useEffect(() => {
        // if (!localStorage.getItem('user')) return navigate(process.env.REACT_APP_LOGIN)
    }, [])
    if (!localStorage.getItem('user')) return (<Navigate to={process.env.REACT_APP_LOGIN} />)
    return (children)

}

export default Index

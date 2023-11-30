import React from 'react'
import { Navigate } from 'react-router-dom'

const Index = ({ children }) => {

    if (localStorage.getItem('user')) return (<Navigate to={process.env.REACT_APP_CHAT} />)
    else return (children)

}

export default Index

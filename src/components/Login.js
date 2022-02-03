import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../containers/LoginContext'

export default function Login() {

    const [login, setLogin] = useContext(LoginContext)

    const loginData = {
        username: 'admin',
        password: 'admin'
    }

    useEffect(()=>{
        axios.post('http://localhost/projectz/wp-json/jwt-auth/v1/token', loginData)
        .then(response=>console.log(response.data))
    })

    return (
        <div>
            Login
        </div>
    )
}

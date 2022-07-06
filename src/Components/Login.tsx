import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

const Login = () => { 
    const { onUsername, onShowProfile } = useContext(LoginContext);

    return (
        <>
            <input 
                type="text" 
                placeholder='Username...'
                onChange={(e) => {
                    onUsername(e.target.value)
                }}
            />
            <input type="text" placeholder='Password...'/>
            <button onClick={() => { onShowProfile(true) }}>
                Login
            </button>
        </>
    )
}

export default Login
import React from 'react'
import { Link } from 'react-router-dom'
import { login } from './action'

const LoginPage = ({ history }) => (
    <div>
        <h1>Login Page</h1>
        <p>
            For this example application, we cannot visit <Link to="/app">/app</Link> until we are logged in.
            Clicking the "Login" button will simulate a login by setting Redux state.
        </p>
        <button onClick={() => {
            login().then(() => {
                history.push('/app')
            })
        }}>Login</button>
    </div>
)

export default LoginPage;

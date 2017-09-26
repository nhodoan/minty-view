import React from 'react'
import { logout } from '../LoginPage/action'

const AppHomePage = ({ history }) => (
  <div>
    <button onClick={() => {
      logout().then(() => {
        history.push('/')
      })
    }}>Logout</button>
  </div>
)

export default AppHomePage

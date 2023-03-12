import { React, useState } from 'react'
import './User.css'
import Login from './Login'
import Sign from './Sign'
function User(props) {
  const { setUserInfo } = props
  const [newUser, setNewUser] = useState(false)
  return (
    <div className="user__container">
      {newUser === true ? (
        <Login setUserInfo={setUserInfo} />
      ) : (
        <Sign setUserInfo={setUserInfo} />
      )}
      <div className="user__type">
        <button className="user__btn" onClick={() => setNewUser(false)}>
          New User
        </button>
        <button className="user__btn" onClick={() => setNewUser(true)}>
          Already Have an Account
        </button>
      </div>
    </div>
  )
}

export default User

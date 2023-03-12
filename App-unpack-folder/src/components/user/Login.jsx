import { React, useState } from 'react'
import axios from 'axios'
function Login(props) {
  const { setUserInfo } = props
  const [loginDetails, setDetails] = useState({
    email: '',
    password: '',
  })
  const handleChange = (event) => {
    setDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    })
  }
  const screenSize = window.innerWidth
  const submitForm = (event) => {
    event.preventDefault()
    let loginData = {
      logged: true,
      alreadyUser: true,
      email: loginDetails['email'],
      password: loginDetails['password'],
      adverts: [],
    }
    axios
      .post('http://localhost:4000/api/user', {
        data: { ...loginData },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        let { data } = response
        let pastAdverts = localStorage.getItem('userInfo').adverts
        if (data.login.status === 'success') {
          setUserInfo({
            logged: true,
            alreadyUser: true,
            email: data.login.email,
            name: data.login.name,
            password: data.login.password,
            adverts: pastAdverts && pastAdverts.length ? [...pastAdverts] : [],
          })
        } else if ((data.login.status = 'failed')) {
          let loginInfo = document.querySelector('.login__result')
          loginInfo.innerHTML = `<span class="material-icons-outlined">
          error
          </span>
          <p>Login failed. <br> Reason: ${data.login.reason}</p>`
          loginInfo.classList.remove('scale-down-bottom')
          loginInfo.classList.add('scale-up-bottom')
          loginInfo.style.display = 'flex'
          setTimeout(async () => {
            loginInfo.classList.remove('scale-up-bottom')
            loginInfo.classList.add('scale-down-bottom')
          }, 3000)
        }
      })
      .catch((error) => console.log(error))
  }
  return (
    <div className="user__container">
      <form className="user__login-form" onSubmit={submitForm}>
        <h1>Please enter your login details</h1>
        <label htmlFor="email">
          {screenSize > 500 && <p>Email</p>}
          <input
            onChange={handleChange}
            value={loginDetails.email}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={screenSize <= 500 ? 'Enter you Email' : ''}
          />
        </label>
        <label htmlFor="password">
          {screenSize > 500 && <p>Password</p>}
          <input
            onChange={handleChange}
            value={loginDetails.password}
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder={screenSize <= 500 ? 'Enter you password' : ''}
          />
        </label>
        <div className="login__result"></div>
        <button type="submit">
          <p>Login</p>
        </button>
      </form>
    </div>
  )
}

export default Login

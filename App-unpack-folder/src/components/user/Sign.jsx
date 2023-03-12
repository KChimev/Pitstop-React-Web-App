import { React, useState } from 'react'
import axios from 'axios'
function Sign(props) {
  const { setUserInfo } = props
  const [signDetails, setDetails] = useState({
    alreadyUser: false,
    name: '',
    email: '',
    password: '',
    repeat_password: '',
    adverts: [],
  })
  const handleChange = (event) => {
    setDetails({
      ...signDetails,
      [event.target.name]: event.target.value,
    })
  }
  const screenSize = window.innerWidth
  const submitForm = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:4000/api/user', {
        data: {
          alreadyUser: false,
          name: signDetails['name'],
          email: signDetails['email'],
          password: signDetails['password'],
          adverts: [],
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        let { data } = response
        if (data.login.status === 'success') {
          setUserInfo({
            logged: true,
            email: data.login.email,
            name: data.login.name,
            password: data.login.password,
            adverts: [],
          })
        } else if ((data.login.status = 'failed')) {
          let loginInfo = document.querySelector('.login__result')
          loginInfo.innerHTML = `<span class="material-icons-outlined">
          error
          </span>
        <p>Login failed. <br> Reason:${data.login.reason}</p>`
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
        <h1>Please enter your details</h1>
        <label htmlFor="name">
          {screenSize > 500 && <p>Name</p>}
          <input
            value={signDetails.name}
            name="name"
            type="text"
            required
            onChange={handleChange}
            placeholder={screenSize <= 500 ? 'Enter you Name' : ''}
          />
        </label>
        <label htmlFor="email">
          {screenSize > 500 && <p>Email</p>}
          <input
            value={signDetails.email}
            name="email"
            type="email"
            required
            onChange={handleChange}
            placeholder={screenSize <= 500 ? 'Enter you Email' : ''}
          />
        </label>
        <label htmlFor="password">
          {screenSize > 500 && <p>Password</p>}
          <input
            value={signDetails['password']}
            name="password"
            type="password"
            required
            onChange={handleChange}
            placeholder={screenSize <= 500 ? 'Password' : ''}
          />
        </label>
        <label htmlFor="repeat_password">
          {screenSize > 500 && <p>Repeat Password</p>}
          <input
            value={signDetails['repeat_password']}
            name="repeat_password"
            type="password"
            required
            onChange={handleChange}
            placeholder={screenSize <= 500 ? 'Repeat password' : ''}
          />
        </label>
        <div className="login__result"></div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Sign

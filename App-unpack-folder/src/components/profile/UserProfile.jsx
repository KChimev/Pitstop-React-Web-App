import { React } from 'react'
import './UserProfile.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
function UserProfile(props) {
  const { userInfo, setUserInfo } = props
  const handleInteraction = (event) => {
    let name = event.target.name
    switch (name) {
      case 'change-name':
        updateUserDetails('name', 'text')
        break
      case 'change-email':
        updateUserDetails('email', 'email')
        break
      case 'user-offers':
        break
      case 'logout':
        setUserInfo({
          logged: false,
          alreadyUser: false,
          email: '',
          name: '',
          password: '',
          adverts: [],
        })
        break
    }
  }
  const updateUserDetails = (updatedDetail, detailType) => {
    const removedInputs = document.querySelectorAll('.user-change__input')
    const removedButton = document.querySelector('.user-change__button')

    removedButton !== null ? removedButton.remove() : void 0
    removedInputs !== null
      ? removedInputs.forEach((input) => {
          return input.remove()
        })
      : void 0
    const newDetail = document.createElement('input')
    const passwordCheck = document.createElement('input')
    const confirmChange = document.createElement('button')
    newDetail.type = detailType
    newDetail.placeholder = `New ${updatedDetail}`
    newDetail.setAttribute('class', 'user-change__input')
    passwordCheck.setAttribute('class', 'user-change__input')
    confirmChange.setAttribute('class', 'user-change__button')
    passwordCheck.type = 'password'
    passwordCheck.placeholder = `Enter Password`
    confirmChange.type = 'button'
    confirmChange.innerText = `Confirm Change`
    let selectedForChange = document.getElementsByName(
      `change-${updatedDetail}`
    )[0]
    selectedForChange.insertAdjacentElement('afterend', newDetail)
    newDetail.insertAdjacentElement('afterend', passwordCheck)
    passwordCheck.insertAdjacentElement('afterend', confirmChange)
    confirmChange.addEventListener('click', () =>
      sendUserData(newDetail.value, updatedDetail, passwordCheck.value)
    )
  }
  const sendUserData = (details, typeOfDetail, password) => {
    axios
      .post('http://localhost:4000/api/user-update', {
        data: {
          email: userInfo.email,
          name: userInfo.name,
          change: details,
          type: typeOfDetail,
          password: password,
          adverts: userInfo['adverts'],
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        let newInfo = response.data
        setUserInfo(newInfo)
      })
  }
  return (
    <div className="user-profile__container">
      <div className="user__info">
        <p>{userInfo.name}</p>
        <button
          type="button"
          onClick={handleInteraction}
          name="change-name"
          className="user__button"
        >
          Change Name
        </button>
        <p>{userInfo.email}</p>
        <button
          type="button"
          onClick={handleInteraction}
          name="change-email"
          className="user__button"
        >
          Change Email
        </button>
        <button
          type="button"
          onClick={handleInteraction}
          name="user-offers"
          className="user__button"
        >
          My Offers
        </button>
        <Link to="/">
          <button
            type="button"
            onClick={handleInteraction}
            name="logout"
            className="user__button"
          >
            Log Out
          </button>
        </Link>
      </div>
    </div>
  )
}

export default UserProfile

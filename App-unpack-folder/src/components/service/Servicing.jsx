import { React, useRef } from 'react'
import './Servicing.css'
import axios from 'axios'
function Servicing() {
  const formData = useRef({
    servicing: true,
    make: '',
    model: '',
    year: '',
    fname: '',
    lname: '',
    email: '',
    phone: 0,
    info: '',
  })
  const handleChange = (event) => {
    event.preventDefault()
    let name = event.target.name
    let value = event.target.value
    formData.current = { ...formData.current, [name]: value }
  }
  const submitForm = (event) => {
    event.preventDefault()
    let DATA = JSON.stringify(formData.current)
    axios
      .post('http://localhost:4000/api/data', DATA)
      .then((response) => {
        if (response['data']['request'] === 'success') {
          let requestInfo = document.querySelector('.request__result')
          requestInfo.innerHTML = `<span class="material-icons-outlined">check_circle_outline</span>
          <p>Succesfully placed a request. <br> Request ID:${response['data']['id']}</p>`
          requestInfo.classList.remove('scale-down-bottom')
          requestInfo.classList.add('scale-up-bottom')
          requestInfo.style.display = 'flex'
          setTimeout(async () => {
            requestInfo.classList.remove('scale-up-bottom')
            requestInfo.classList.add('scale-down-bottom')
          }, 3000)
        }
      })
      .catch((error) => console.log(error))
  }
  return (
    <div className="service__container">
      <div className="service__enquiry-container">
        <div className="enquiry__info">
          <h1>SERVICE & PARTS ENQUIRY</h1>
          <p>
            <br /> We would love to hear from you here at Pitstop Automotive.
            <br /> Please simply fill out the form attached and a member of the
            team will be in touch with you shortly.
            <br />
            Please note that when sending an enquiry,your booking date will be
            in at least 2 days.
          </p>
        </div>
        <form className="service__enquiry" onSubmit={submitForm}>
          <h1>Service Enquiry</h1>
          <label htmlFor="make">
            <p>Vehicle Make</p>
            <input
              type="text"
              className="service__form-input"
              name="make"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="model">
            <p>Vehicle Model</p>
            <input
              type="text"
              className="service__form-input"
              name="model"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="year">
            <p>Year of Manufacturing</p>
            <input
              type="number"
              className="service__form-input"
              name="year"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="fname">
            <p>Owner`s` First Name</p>
            <input
              type="text"
              className="service__form-input"
              name="fname"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="lname">
            <p>Owner`s Last Name</p>
            <input
              type="text"
              className="service__form-input"
              name="lname"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email">
            <p>Contact Email</p>
            <input
              type="email"
              className="service__form-input"
              name="email"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone">
            <p>Contact Phone</p>
            <input
              type="phone"
              className="service__form-input"
              name="phone"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="info">
            <p>Additional Information</p>
            <input
              type="textarea"
              className="service__form-input"
              name="info"
              onChange={handleChange}
            />
          </label>
          <button className="submit__enquiry" type="submit">
            Send Enquiry
          </button>
        </form>
      </div>
      <div className="request__result"></div>
    </div>
  )
}

export default Servicing

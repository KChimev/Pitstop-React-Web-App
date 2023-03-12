import { React, useState, useRef, useEffect } from 'react'
import './SellYourCar.css'
import { nanoid } from 'nanoid'
import axios from 'axios'
function SellYourCar(props) {
  const { userInfo, setUserInfo } = props
  const [carDetails, setCarDetails] = useState({
    id: nanoid(),
    make: '',
    model: '',
    year: '',
    body: '',
    price: '',
    mileage: '',
    engine: '',
    transmission: '',
    color: '',
    condition: '',
    info: '',
  })
  const [carImages, setCarImages] = useState([])
  const images = useRef([])
  images.current = [...carImages]

  const handleChange = (event) => {
    if (event.target.name === 'images') {
      let files = event.target.files
      let imagesArray = []
      for (const file of files) {
        let reader = new FileReader()
        reader.addEventListener('load', () => {
          if (reader.result.length > 8) {
            let dataUrl = reader.result
            imagesArray.push({
              src: dataUrl,
              key: nanoid(),
            })
            if (imagesArray.length === files.length) {
              let addedImages = imagesArray.map((item) => {
                return typeof item === 'object' ? item : ''
              })
              if (JSON.parse(localStorage.getItem(carDetails.id)) == null) {
                localStorage.setItem(carDetails.id, JSON.stringify(addedImages))
              } else {
                let carImages = JSON.parse(localStorage.getItem(carDetails.id))
                carImages = carImages.concat(addedImages)
                localStorage.setItem(carDetails.id, JSON.stringify(carImages))
              }
              setCarImages((prev) => [...prev, ...addedImages])
            }
          }
        })
        reader.readAsDataURL(file)
      }
    }
    setCarDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }
  const deleteImage = (event) => {
    let deleted = event.target.parentNode
    let imgID = deleted.id
    images.current = images.current.map((img) => {
      if (img !== undefined && img !== null) {
        if (img['key'] !== imgID) {
          return img
        }
      }
    })
    let localImages = JSON.parse(
      localStorage.getItem(carDetails.id, JSON.stringify())
    )
    localImages = localImages.filter((localImage) => {
      if (localImage !== undefined && localImage !== null) {
        if (localImage['key'] !== imgID) {
          return localImage
        }
      }
    })
    localStorage.setItem(carDetails.id, JSON.stringify(localImages))
    console.log(JSON.parse(localStorage.getItem(carDetails.id)))
    setCarImages([...images.current])
  }
  const postAdvert = (event) => {
    event.preventDefault()
    let localImages = JSON.parse(
      localStorage.getItem(carDetails.id, JSON.stringify())
    )
    if (localImages == undefined || localImages.length < 3) {
      let advertInfo = document.querySelector('.advert__result')
      advertInfo.innerHTML = `<span class="material-icons-outlined">error</span>
      <p>Please add at least 3 images to your advert.`
      advertInfo.classList.remove('scale-down-bottom')
      advertInfo.classList.add('scale-up-bottom')
      advertInfo.style.display = 'flex'
      setTimeout(async () => {
        advertInfo.classList.remove('scale-up-bottom')
        advertInfo.classList.add('scale-down-bottom')
      }, 3000)
    } else {
      let advertDetails = {
        ...carDetails,
      }
      axios
        .post('http://localhost:4000/api/new-adverts', {
          data: {
            ...advertDetails,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          let newAdvertsArray = userInfo.adverts
          newAdvertsArray.push(response.data)
          setUserInfo((prev) => ({
            ...prev,
            ['adverts']: newAdvertsArray,
          }))
          let advertInfo = document.querySelector('.advert__result')
          advertInfo.innerHTML = `<span class="material-icons-outlined">check_circle_outline</span>
          <p>Succesfully uploaded your advert, you can see it in the ${userInfo.condition} cars section.`
          advertInfo.classList.remove('scale-down-bottom')
          advertInfo.classList.add('scale-up-bottom')
          advertInfo.style.display = 'flex'
          advertInfo.style.backgroundColor = 'rgb(29, 143, 50)'
          setTimeout(async () => {
            advertInfo.classList.remove('scale-up-bottom')
            advertInfo.classList.add('scale-down-bottom')
          }, 3000)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
  return (
    <div className="syc__container">
      <form className="syc__form" onSubmit={postAdvert}>
        <select
          name="make"
          className="syc__select"
          value={carDetails.make}
          onChange={handleChange}
          required
        >
          <option>Make</option>
          <option value="aston_martin">Aston Martin</option>
          <option value="bentley">Bentley</option>
          <option value="jaguar">Jaguar</option>
          <option value="mclaren">McLaren</option>
          <option value="rolls_royce">Rolls Royce</option>
          <option value="lamborghini">Lamborghini</option>
        </select>
        <input
          name="model"
          type="text"
          placeholder="Model"
          value={carDetails.model}
          onChange={handleChange}
          className="syc__input"
          required
        />
        <input
          name="year"
          type="number"
          placeholder="Year"
          value={carDetails.year}
          onChange={handleChange}
          className="syc__input"
          required
        />
        <input
          name="mileage"
          type="number"
          placeholder="Mileage"
          value={carDetails.mileage}
          onChange={handleChange}
          className="syc__input"
          required
        />
        <select
          name="body"
          className="syc__select"
          value={carDetails.body}
          onChange={handleChange}
          required
        >
          <option>Body Type</option>
          <option value="coupe">Coupe</option>
          <option value="suv">SUV</option>
          <option value="roadster">Roadster</option>
          <option value="limousine">Limousine</option>
        </select>
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={carDetails.price}
          onChange={handleChange}
          className="syc__input"
          required
        />
        <select
          name="transmission"
          className="syc__select"
          value={carDetails.transmission}
          onChange={handleChange}
          required
        >
          <option>Transmission</option>
          <option value="automatic">Automatic</option>
          <option value="semi-automatic">Semi-Automatic</option>
          <option value="manual">Manual</option>
        </select>
        <select
          name="engine"
          className="syc__select"
          value={carDetails.engine}
          onChange={handleChange}
          required
        >
          <option>Engine</option>
          <option value="petrol">Petrol</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <input
          name="color"
          type="text"
          placeholder="Color of Vehicle"
          value={carDetails.color}
          onChange={handleChange}
          className="syc__input"
          required
        />
        <select
          name="condition"
          className="syc__select"
          value={carDetails.condition}
          onChange={handleChange}
          required
        >
          <option>Vehicle Condition</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        <textarea
          name="info"
          onChange={handleChange}
          value={carDetails.info}
          placeholder="Additional Information"
          rows="5"
          className="syc__input"
        ></textarea>
        <label
          htmlFor="images"
          className="syc__select-images"
          onClick={() => {
            document.querySelector('.syc__images').click()
          }}
        >
          Select Images
        </label>
        <input
          type="file"
          name="images"
          onChange={handleChange}
          className="syc__images"
          placeholder="Add Images"
          multiple
          accept="image/*"
        />
        <div className="syc__image-gallery">
          {carImages.map((imgLink) => {
            return typeof imgLink === 'object' ? (
              <div
                style={{
                  backgroundImage: `url(${imgLink.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="syc__image"
                id={imgLink.key}
                key={imgLink.key}
              >
                <span
                  style={{ cursor: 'pointer' }}
                  className="material-icons-outlined"
                  onClick={deleteImage}
                >
                  delete
                </span>
              </div>
            ) : (
              ''
            )
          })}
        </div>
        <button type="submit" className="syc__create">
          Create Advert
        </button>
      </form>
      <div className="advert__result"></div>
    </div>
  )
}

export default SellYourCar

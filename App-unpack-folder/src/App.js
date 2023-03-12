import './App.css'
import {
  Navbar,
  Home,
  Search,
  Cars,
  Footer,
  ScrollUp,
  Servicing,
  AboutUs,
  User,
  Dealerships,
  UserProfile,
  SellYourCar,
} from './components/components'
import { Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import { carsData } from './DATA'
const DATA = carsData
function App() {
  const [searchResults, setData] = useState({
    start: false,
    condition: 'used',
    make: 'All',
    body: 'All',
    model: 'All',
    selectedVehicle: false,
  })
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('userInfo')) || {
      logged: false,
      alreadyUser: false,
      email: '',
      name: '',
      password: '',
      adverts: [],
    }
  )
  localStorage.setItem('userInfo', JSON.stringify(userInfo))
  userInfo['adverts'].forEach((advert) => {
    let advertImages = JSON.parse(localStorage.getItem(advert.id))
    if (advertImages !== null) {
      let sideImages = advertImages.slice(1, advertImages.length)
      let sideImagesLinks = sideImages.map((img) => {
        return img.src
      })
      for (const key in DATA.make) {
        if (key === advert.make) {
          let advertExists = false
          DATA.make[key].forEach((existingAdvert) => {
            if (existingAdvert.ref === advert.id) {
              advertExists = true
            }
          })
          return advertExists === false
            ? DATA.make[key].push({
                model: advert.model,
                year: advert.year,
                body: advert.body,
                price: advert.price,
                info: advert.info,
                condition: advert.condition,
                mileage: advert.mileage,
                ref: advert.id,
                src: JSON.parse(localStorage.getItem(advert.id))[0].src,
                transmission: advert.transmission,
                engine: advert.engine,
                color: advert.color,
                sideImages: [...sideImagesLinks],
              })
            : ''
        }
      }
    }
  })
  const setSearch = (data) => {
    setData(data)
  }
  return (
    <div>
      <Navbar
        userLogged={userInfo.logged}
        setUserInfo={setUserInfo}
        onClick={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicing" element={<Servicing />} />
        <Route path="/about-us" element={<AboutUs />} />
        {searchResults.start !== false && (
          <Route
            path="/offers"
            element={
              <Cars
                DATA={DATA}
                data={searchResults}
                selectedVehicle={searchResults['selectedVehicle']}
                onClick={setSearch}
              />
            }
          />
        )}
        <Route
          path="/sell-your-car"
          element={
            userInfo.logged ? (
              <SellYourCar userInfo={userInfo} setUserInfo={setUserInfo} />
            ) : (
              <User setUserInfo={setUserInfo} />
            )
          }
        />
        <Route path="/dealerships" element={<Dealerships />} />
        {userInfo.logged && (
          <Route
            path="/profile"
            element={
              <UserProfile setUserInfo={setUserInfo} userInfo={userInfo} />
            }
          />
        )}
      </Routes>
      <ScrollUp />
      <Search DATA={DATA} onClick={setSearch} />
      <Footer />
    </div>
  )
}

export default App

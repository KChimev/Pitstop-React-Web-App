import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css'
function Navbar(props) {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { userLogged, onClick } = props
  return (
    <div className="navbar__container">
      <div className="navbar__header">
        <div className="navbar__logo">
          <h1>
            <Link to="/">Pitstop</Link>
          </h1>
          <p>EST. 1977</p>
        </div>
        <div className="navbar__menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar__menu-links slide-in-top">
              <p
                onClick={() => {
                  onClick({
                    start: true,
                    condition: 'new',
                    make: 'All',
                    body: 'All',
                    model: 'All',
                    selectedVehicle: false,
                  })
                }}
              >
                <Link to="/offers">New Cars</Link>
              </p>
              <p
                onClick={() => {
                  onClick({
                    start: true,
                    condition: 'used',
                    make: 'All',
                    body: 'All',
                    model: 'All',
                    selectedVehicle: false,
                  })
                }}
              >
                <Link to="/offers">Used Cars</Link>
              </p>
              <p>
                <Link to="/servicing">Servicing</Link>
              </p>
              <p>
                <Link to="/sell-your-car">Sell My Car</Link>
              </p>
              <p>
                {' '}
                <Link to="/dealerships"> Dealerships</Link>
              </p>
              <p>
                <Link to="/about-us">About Us</Link>
              </p>
              {userLogged === true && (
                <p>
                  <Link to="/profile">Profile</Link>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="navbar__links">
        <p
          onClick={() => {
            onClick({
              start: true,
              condition: 'new',
              make: 'All',
              body: 'All',
              model: 'All',
              selectedVehicle: false,
            })
          }}
        >
          <Link to="/offers">New Cars</Link>
        </p>
        <p
          onClick={() => {
            onClick({
              start: true,
              condition: 'used',
              make: 'All',
              body: 'All',
              model: 'All',
              selectedVehicle: false,
            })
          }}
        >
          <Link to="/offers">Used Cars</Link>
        </p>
        <p>
          <Link to="/servicing">Servicing</Link>
        </p>
        <p>
          <Link to="/dealerships"> Dealerships</Link>
        </p>
        <p>
          <Link to="/sell-your-car">Sell My Car</Link>
        </p>
        <p>
          <Link to="/about-us">About Us</Link>
        </p>
        {userLogged === true && (
          <p>
            <Link to="/profile">Profile</Link>
          </p>
        )}
      </div>
    </div>
  )
}

export default Navbar

import './Home.css'
import React from 'react'
import aston from '../assets/logo-aston-martin.png'
import bentley from '../assets/logo-bentley.png'
import jaguar from '../assets/logo-jaguar.png'
import lamborghini from '../assets/logo-lamborghini.png'
import mclaren from '../assets/logo-mclaren.png'
import rolls from '../assets/logo-rolls-royce.png'
function Home() {
  return (
    <div className="header__container">
      <div className="header__container-heading">
        <h1>New Cars For Sale</h1>
      </div>
      <div className="header__container-brands">
        <p>Official Luxury Car Dealer For Prestigious Brands</p>
        <div className="header__container-brands_logos">
          <a href="https://www.astonmartin.com/en/">
            <img src={aston} alt="Brand Logo"></img>
          </a>
          <a href="https://www.bentleymotors.com/en.html?cid=UK-M-22-CCM-ALWAYS-GOOG&utm_audience=Other&utm_author=phd&utm_campaign=evergreen&utm_content=alwaysonsearch2022&utm_date=010122&utm_funnel=act&utm_medium=cpc&utm_mediumtype=pd&utm_product=other&utm_persona=all&utm_source=other&utm_value=na&gclid=Cj0KCQiAi8KfBhCuARIsADp-A57OhWjtmP5QcJKHpKfwdmvXqfEIEMnD2czaOZbJ2HFx4I-vzJNWQwIaAqUhEALw_wcB&gclsrc=aw.ds">
            {' '}
            <img src={bentley} alt="Brand Logo"></img>
          </a>
          <a href="https://www.jaguar.co.uk/jaguar-range/f-type/index.html?utm_medium=cpc&utm_source=Google&utm_campaign=GB_EN_JG_X152_SPC_02_CON_GS_DB_MC_F-TYPE_NG_ALON_XPL_RSA_EXA_NORM_2301_NA_LMO-0806&utm_term=f-type%20models&utm_content=Jaguar_F-TYPE_-_Models_AWTEXT_BRD&gclid=Cj0KCQiAi8KfBhCuARIsADp-A56edLmPY4_Nz1Fd6Yjk0v7uMYZv2LyTmadTxZVoy23fZtFjo3Bcx0EaAuqxEALw_wcB&gclsrc=aw.ds">
            {' '}
            <img src={jaguar} alt="Brand Logo"></img>
          </a>
          <a href="https://www.lamborghini.com/en-en">
            {' '}
            <img src={lamborghini} alt="Brand Logo"></img>
          </a>
          <a href="https://www.mclaren.com/">
            {' '}
            <img src={mclaren} alt="Brand Logo"></img>
          </a>
          <a href="https://www.rolls-roycemotorcars.com/en_GB/home.html">
            {' '}
            <img src={rolls} alt="Brand Logo"></img>
          </a>
        </div>
        <p className="header__container-us">
          Welcome to our luxury car dealership, where elegance and performance
          meet. <br></br>Our dealership specializes in providing the finest
          automobiles for those who demand the very best. <br></br>Our showroom
          features an extensive collection of luxury vehicles from the world's
          most renowned manufacturers, each selected for their exceptional
          craftsmanship, cutting-edge technology, and stunning design.
        </p>
      </div>
    </div>
  )
}

export default Home

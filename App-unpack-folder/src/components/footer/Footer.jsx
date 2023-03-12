import React from 'react'
import './Footer.css'
import facebook from '../footer-icons/facebook.svg'
import gmail from '../footer-icons/gmail.png'
import instagram from '../footer-icons/instagram.svg'
import phone from '../footer-icons/phone.png'
import whatsapp from '../footer-icons/whatsapp.svg'
function Footer() {
  return (
    <div className="footer__info-container">
      <div className="footer__info-container-icons">
        <a href="#">
          <img src={facebook} />
        </a>
        <a href="#">
          <img src={instagram} />
        </a>
        <a href="#">
          <img src={whatsapp} />
        </a>
        <a href="#">
          <img src={phone} />
        </a>
        <a href="#">
          <img src={gmail} />
        </a>
      </div>
      <p>
        Thank you for visiting our website! <br></br> We hope you found the
        information you were looking for. <br></br>Our team is committed to
        providing you with high-quality content and excellent customer service.
        If you have any questions or feedback, please don't hesitate to reach
        out to us using the contact information provided. <br></br>We appreciate
        your support and look forward to serving you again in the future.
      </p>
    </div>
  )
}

export default Footer

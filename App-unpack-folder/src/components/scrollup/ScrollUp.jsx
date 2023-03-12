import React from 'react'
import './ScrollUp.css'
function ScrollUp() {
  function scrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div>
      <button className="scrollup__btn" type="button" onClick={scrollUp}>
        <span className="material-icons-outlined">
          keyboard_double_arrow_up
        </span>
      </button>
    </div>
  )
}

export default ScrollUp

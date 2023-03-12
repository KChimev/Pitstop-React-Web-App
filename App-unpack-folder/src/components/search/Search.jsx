import React, { useState, useRef } from 'react'
import './Search.css'
import checkModelResults from './checkModels'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
function Search(props) {
  const { DATA, onClick } = props
  const [search, setSearch] = useState({
    condition: 'used',
    make: 'All',
    body: 'All',
    model: { chosen: 'All', ref: '' },
  })
  const [hideSearch, toggleHideSearch] = useState(false)
  const lastScrollTop = useRef(0)
  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollTop.current) {
      toggleHideSearch(true)
    } else if (window.scrollY <= lastScrollTop.current) {
      toggleHideSearch(false)
    }
  })

  lastScrollTop.current = window.scrollY
  const models = useRef([{ found: 'All', ref: '' }])
  const results = useRef(0)
  const deviceSize = window.innerWidth
  const searchQuery = {
    make: search.make,
    body: search.body,
    condition: search.condition,
    model: models.current[0].found,
  }
  let selectedModel = useRef(searchQuery.model)
  function handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    if (name === 'model') {
      searchQuery.model = value
      selectedModel.current = value
    }
    setSearch((prev) => ({ ...prev, [name]: value }))
  }
  function renderModels(arr) {
    return arr.map((option) => (
      <option value={option.found} key={option.ref}>
        {option.found}
      </option>
    ))
  }
  checkModelResults(results, models, searchQuery, DATA)
  return (
    <>
      <div
        onClick={() => {
          document.querySelector('.footer__container').style.display = 'flex'
          document.querySelector('.menu_close').style.display = 'flex'
          document.querySelector('.menu_pop').style.display = 'none'
        }}
        className="menu_pop"
      >
        <span className="material-icons-outlined">manage_search</span>
      </div>
      <div
        className={`footer__container ${
          deviceSize <= 760
            ? 'scale-up-ver-bottom'
            : hideSearch === true
            ? 'hide'
            : ''
        }
        }`}
      >
        <div
          onClick={() => {
            document.querySelector('.footer__container').style.display = 'none'
            document.querySelector('.menu_close').style.display = 'none'
            document.querySelector('.menu_pop').style.display = 'flex'
          }}
          className="menu_close"
        >
          <span className="material-icons-outlined">close</span>
        </div>
        <div className="footer__container-condition">
          <div
            className={
              search.condition === 'used'
                ? 'footer__container-condition_selected'
                : 'footer__container-condition_non-selected'
            }
            onClick={() => {
              setSearch((prev) => ({ ...prev, condition: 'used' }))
            }}
          >
            Used
          </div>
          <p>OR</p>
          <div
            className={
              search.condition === 'new'
                ? 'footer__container-condition_selected'
                : 'footer__container-condition_non-selected'
            }
            onClick={() => {
              setSearch((prev) => ({ ...prev, condition: 'new' }))
            }}
          >
            New
          </div>
        </div>
        <select
          value={search.make}
          name="make"
          className="footer__container-make"
          onChange={handleChange}
        >
          <option key={nanoid()} value="All">
            All makes
          </option>
          <option key={nanoid()} value="aston_martin">
            Aston Martin
          </option>
          <option key={nanoid()} value="bentley">
            Bentley
          </option>
          <option key={nanoid()} value="jaguar">
            Jaguar
          </option>
          <option key={nanoid()} value="lamborghini">
            Lamborghini
          </option>
          <option key={nanoid()} value="mclaren">
            McLaren
          </option>
          <option key={nanoid()} value="rolls_royce">
            Rolls Royce
          </option>
        </select>
        <select
          value={search.body}
          name="body"
          className="footer__container-body"
          onChange={handleChange}
        >
          <option key={nanoid()} value="All">
            All body types
          </option>
          <option key={nanoid()} value="coupe">
            Coupe
          </option>
          <option key={nanoid()} value="suv">
            SUV
          </option>
          <option key={nanoid()} value="roadster">
            Roadster
          </option>
          <option key={nanoid()} value="limousine">
            Limousine
          </option>
        </select>
        <select
          name="model"
          value={search.model.chosen}
          className="footer__container-model"
          onChange={handleChange}
        >
          {renderModels(models.current)}
        </select>
        <Link to="/offers">
          <button
            className="footer__container-search"
            type="button"
            onClick={() =>
              onClick({
                search: true,
                condition: search.condition,
                make: search.make,
                body: search.body,
                model: selectedModel.current,
                selectedVehicle: false,
              })
            }
          >
            Search ({results.current})
          </button>
        </Link>
      </div>
    </>
  )
}

export default Search

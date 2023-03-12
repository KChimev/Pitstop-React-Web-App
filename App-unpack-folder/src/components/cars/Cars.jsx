import React, { useState, useRef } from 'react'
import './Cars.css'
import findResults from './findResults'

import { nanoid } from 'nanoid'
function Cars(props) {
  const { DATA, data, onClick, selectedVehicle } = props
  const results = useRef([])
  const selectedModel = useRef([])
  const filters = useRef({
    'min-price': 0,
    'max-price': 1111110,
    mileage: 1111110,
    applied: false,
  })
  const [render, reRender] = useState(0)
  findResults(DATA, data, results)
  if (results.current.length > 0) {
    results.current.forEach((result) => {
      switch (result.brand) {
        case 'aston_martin':
          result.brand = 'Aston Martin'
          break
        case 'jaguar':
          result.brand = 'Jaguar'
          break
        case 'lamborghini':
          result.brand = 'Lamborghini'
          break
        case 'bentley':
          result.brand = 'Bentley'
          break
        case 'mclaren':
          result.brand = 'McLaren'
          break
        case 'rolls_royce':
          result.brand = 'Rolls Royce'
          break
      }
    })
  }
  const viewVehicle = (event) => {
    selectedModel.current.unshift(event.currentTarget.id)
    onClick((prev) => ({ ...prev, ['selectedVehicle']: true }))
  }
  const addFilters = (event) => {
    let name = event.target.name
    let value = event.target.value
    if (name === 'mileage') {
      document.querySelector('.cars__results-filter_mileage-value').innerHTML =
        value
    }
    filters.current[name] = value
  }
  const viewImage = (event) => {
    document.querySelector('.cars__results-result-main_image').src =
      event.target.src
  }
  const applyFilters = () => {
    filters.current['applied'] = true
    reRender((prev) => prev + 1)
  }
  return (
    <>
      {selectedVehicle === false ? (
        <div className="cars__results">
          <div className="cars__results-filters">
            <h2>Filters</h2>
            <div className="cars__results-filters_price">
              <p>Price</p>
              <input
                className="cars__results-filter_min-price"
                type="number"
                name="min-price"
                placeholder="Min"
                min="0"
                onChange={addFilters}
              />
              <input
                className="cars__results-filter_max-price"
                type="number"
                name="max-price"
                placeholder="Max"
                min="0"
                onChange={addFilters}
              />
            </div>
            <label className="cars__results-filter_mileage-label">
              Max Mileage
              <input
                type="range"
                className="cars__results-filter_mileage"
                min="0"
                max="200000"
                name="mileage"
                onChange={addFilters}
              ></input>
              <p className="cars__results-filter_mileage-value">0</p>
            </label>
            <button
              onClick={applyFilters}
              type="button"
              className="cars__results-filter_apply"
            >
              Apply
            </button>
          </div>
          <div className="cars__results-container">
            {results.current.map((result) => {
              if (filters.current['applied'] === true) {
                let filtered = false
                if (
                  filters.current['min-price'] < result.model.price &&
                  filters.current['max-price'] > result.model.price &&
                  filters.current['mileage'] > result.model.mileage
                ) {
                  filtered = true
                }
                if (filtered) {
                  return (
                    <div
                      className="cars__results-result"
                      id={result.model.ref}
                      key={result.model.ref}
                      onClick={viewVehicle}
                    >
                      <div className="cars__results-result-img">
                        <img src={result.model.src}></img>
                      </div>
                      <div className="cars__results-result-info">
                        <h2>{result.model.price}$</h2>
                        <h2>{result.brand}</h2>
                        <h2 className="cars__results-result-info_model">
                          {result.model.model}
                        </h2>
                        <p>{result.model.info}</p>
                      </div>
                      <div className="cars__results-result-sidepanel">
                        <span>
                          <span className="material-icons-outlined">
                            calendar_today
                          </span>
                          {result.model.year}
                        </span>
                        <span>
                          <span className="material-icons-outlined">speed</span>
                          {result.model.mileage}
                        </span>
                        <span>
                          <span className="material-icons-outlined">
                            invert_colors
                          </span>
                          {result.model.color}
                        </span>
                        <span>
                          <span className="material-icons-outlined">
                            handyman
                          </span>
                          {result.model.transmission}
                        </span>
                        <span>
                          <span className="material-icons-outlined">
                            gas_meter
                          </span>
                          {result.model.engine}
                        </span>
                        <span>
                          <span className="material-icons-outlined">
                            directions_car
                          </span>
                          {result.model.body}
                        </span>
                      </div>
                    </div>
                  )
                }
              } else {
                return (
                  <div
                    className="cars__results-result"
                    id={result.model.ref}
                    key={result.model.ref}
                    onClick={viewVehicle}
                  >
                    <div className="cars__results-result-img">
                      <img src={result.model.src}></img>
                    </div>
                    <div className="cars__results-result-info">
                      <h2>{result.model.price}$</h2>
                      <h2>{result.brand}</h2>
                      <h2 className="cars__results-result-info_model">
                        {result.model.model}
                      </h2>
                      <p>{result.model.info}</p>
                    </div>
                    <div className="cars__results-result-sidepanel">
                      <span>
                        <span className="material-icons-outlined">
                          calendar_today
                        </span>
                        {result.model.year}
                      </span>
                      <span>
                        <span className="material-icons-outlined">speed</span>
                        {result.model.mileage}
                      </span>
                      <span>
                        <span className="material-icons-outlined">
                          invert_colors
                        </span>
                        {result.model.color}
                      </span>
                      <span>
                        <span className="material-icons-outlined">
                          handyman
                        </span>
                        {result.model.transmission}
                      </span>
                      <span>
                        <span className="material-icons-outlined">
                          gas_meter
                        </span>
                        {result.model.engine}
                      </span>
                      <span>
                        <span className="material-icons-outlined">
                          directions_car
                        </span>
                        {result.model.body}
                      </span>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      ) : (
        <div>
          {results.current.map((result) => {
            if (result.model.ref === selectedModel.current[0]) {
              return (
                <div
                  className="cars__results-result-selected"
                  id={result.model.ref}
                  key={result.model.ref}
                >
                  <div className="cars__results-result-img-selected">
                    <div className="cars__results-result-main_image-selected">
                      <img
                        className="cars__results-result-main_image"
                        src={result.model.src}
                      ></img>
                    </div>
                    {result.model.sideImages !== undefined && (
                      <div className="cars__results-result-side_images-selected">
                        {result.model.sideImages.map((img) => {
                          return (
                            <img key={nanoid()} src={img} onClick={viewImage} />
                          )
                        })}
                      </div>
                    )}
                  </div>
                  <div className="cars__results-result-info-selected_container">
                    <div className="cars__results-result-info-selected">
                      <h2>{result.model.price}$</h2>
                      <h2>{result.brand}</h2>
                      <h2 className="cars__results-result-info_model-selected">
                        {result.model.model}
                      </h2>
                      <p>{result.model.info}</p>
                    </div>
                    <div className="cars__results-result-sidepanel-selected">
                      <span>
                        <span className="material-icons-outlined">
                          calendar_today
                        </span>
                        {result.model.year}
                      </span>
                      <span>
                        <span className="material-icons-outlined">speed</span>
                        {result.model.mileage}
                      </span>
                      <span>
                        <span className="material-icons-outlined">
                          invert_colors
                        </span>
                        {result.model.color}
                      </span>
                      <span>
                        <span className="material-icons-outlined">
                          handyman
                        </span>
                        {result.model.transmission}
                      </span>
                      <span>
                        <span className="material-icons-outlined">
                          gas_meter
                        </span>
                        {result.model.engine}
                      </span>
                      <span>
                        <span className="material-icons-outlined">
                          directions_car
                        </span>
                        {result.model.body}
                      </span>
                    </div>
                    <button type="button" className="more-info">
                      Get in Touch With Us
                    </button>
                  </div>
                </div>
              )
            }
          })}
        </div>
      )}
    </>
  )
}

export default Cars

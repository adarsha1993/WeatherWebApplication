import React from 'react';
import './WeatherDetails.scss';

import TempMax from '../icon_img/high-temperature.png';
import TempMin from '../icon_img/temperature.png';
import Visibility from '../icon_img/visible.png';

import Humidity from '../icon_img/humidity.png';
import Wind from '../icon_img/turbine.png';
import Pressure from '../icon_img/pressure-gauge.png';

const WeatherDetails = ({ data, term }) => {
  if (!data.list) {
    return;
  }
  const id = Math.random().toString(36).substring(0, 7);

  return (
    <div key={id} className="weatherdetails">
      <div className="weatherdetails__items">
        <img src={TempMax} alt="" className="weatherdetails__items--logo" />

        <div className="weatherdetails__items--detail">
          <p className="weather-text">Temp_Max</p>
          <p className="weather-value">{data.list[1].main.temp_max} &#176;C</p>
        </div>
      </div>

      <div className="weatherdetails__items">
        <img src={TempMin} alt="" className="weatherdetails__items--logo" />
        <div className="weatherdetails__items--detail">
          <p className="weather-text">Temp_Min</p>
          <p className="weather-value">{data.list[1].main.temp_min} &#176;C</p>
        </div>
      </div>

      <div className="weatherdetails__items">
        <img src={Visibility} className="weatherdetails__items--logo" alt="" />
        <div className="weatherdetails__items--detail">
          <p className="weather-text">Visibility</p>
          <p className="weather-value">{data.list[1].visibility} km</p>
        </div>
      </div>
      <div className="weatherdetails__items">
        <img src={Humidity} alt="" className="weatherdetails__items--logo" />
        <div className="weatherdetails__items--detail">
          <p className="weather-text">Humidity</p>
          <p className="weather-value">{data.list[1].main.humidity}%</p>
        </div>
      </div>
      <div className="weatherdetails__items">
        <img src={Wind} alt="" className="weatherdetails__items--logo" />
        <div className="weatherdetails__items--detail">
          <p className="weather-text">Wind</p>
          <p className="weather-value">{data.list[1].wind.speed} m/sec </p>
        </div>
      </div>
      <div className="weatherdetails__items">
        <img src={Pressure} alt="" className="weatherdetails__items--logo" />
        <div className="weatherdetails__items--detail">
          <p className="weather-text">Pressure</p>
          <p className="weather-value">{data.list[1].main.pressure} km/hr</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

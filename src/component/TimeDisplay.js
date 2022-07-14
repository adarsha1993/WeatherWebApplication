import React from 'react';
import './TimeDisplay.scss';

import Rain from '../icon_img/rain.png';
import Clouds from '../icon_img/cloud.png';
import Thunderstorm from '../icon_img/thunderstorm.png';
import Clear from '../icon_img/clear-sky.png';
import Dust from '../icon_img/sandstorm.png';
import Sunrise from '../icon_img/sunrise.png';
import Sunset from '../icon_img/sunset.png';

const TimeDisplay = ({ data, term }) => {
  if (!data.city || data.main) {
    return;
  }
  const date = new Date();
  const localTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const city = utc + 1000 * data.city.timezone;

  const newDate = new Date(city);

  const timeDisplay = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timestyle: 'full',
    hourCycle: 'h12',
  }).format(newDate);

  const sunriseTime = new Date(data.city.sunrise * 1000).toLocaleTimeString(
    'en-US'
  );
  const sunsetTime = new Date(data.city.sunset * 1000).toLocaleTimeString(
    'en-US'
  );

  const weather = {
    Rain: Rain,
    Clouds: Clouds,
    Thunderstorm: Thunderstorm,
    Clear: Clear,
    Dust: Dust,
  };

  console.log(term);

  return (
    <div>
      <div className="timedisplay">
        <div>
          <p className="timedisplay__text">{`${term} ${data.city.country}`}</p>
        </div>

        <div>
          <p className="timedisplay__time">{timeDisplay} </p>
        </div>

        <div>
          <p className="timedisplay__temp">
            {`${Math.round(data.list[1].main.temp)}`} &#176; C
          </p>
        </div>
        <div>
          <p className="timedisplay__description">{`${data.list[1].weather[0].description}  `}</p>
        </div>

        <div className="imageicon">
          <img
            src={weather[`${data.list[1].weather[0].main}`]}
            alt="asd"
            className="weather_icon"
          />
        </div>

        <div className="riseset">
          <div>
            <p className="riseset__sunrise--time">{`05:13 AM`}</p>
            <img src={Sunrise} alt="" className="riseset__sunrise--logo" />
            <p className="riseset__sunrise--text">Sunrise</p>
          </div>
          <div>
            <p className="riseset__sunset--time">{`06:35 PM`}</p>
            <img src={Sunset} alt="" className="riseset__sunset--logo" />
            <p className="riseset__sunrise--text">Sunset</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeDisplay;

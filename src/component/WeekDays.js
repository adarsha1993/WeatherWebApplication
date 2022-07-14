import React, { useId } from 'react';

import './WeekDays.scss';

import Rain from '../icon_img/rain.png';
import Clouds from '../icon_img/cloud.png';
import Thunderstorm from '../icon_img/thunderstorm.png';
import Clear from '../icon_img/clear-sky.png';
import Dust from '../icon_img/sandstorm.png';

const WeekDays = ({ data }) => {
  const id = useId();
  if (!data.list) {
    return;
  }

  const renderedItems = data.list.map((item) => {
    const weather = {
      Rain: Rain,
      Clouds: Clouds,
      Thunderstorm: Thunderstorm,
      Clear: Clear,
      Dust: Dust,
    };

    const date = new Date(item.dt_txt);
    let time = new Intl.DateTimeFormat('en-US', {
      hourCycle: 'h12',
      hour: 'numeric',
    }).format(date);

    const weekday = new Intl.DateTimeFormat('en-US', {
      hourCycle: 'h12',
      weekday: 'short',
    }).format(date);

    time = time.replace(' ', '');

    return (
      <div key={item.dt}>
        <div className="weekday">
          <p className="weekday__time">{time}</p>

          <p className="weekday__day">{weekday}</p>
          <img
            src={weather[`${item.weather[0].main}`]}
            alt="asd"
            className="icon_weather"
          />
          <p className="weekday__temp">{Math.round(item.main.temp)}</p>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="forecast">
        <h1>5-DAY FORECAST</h1>
      </div>
      <div className="weekweather">{renderedItems}</div>
    </React.Fragment>
  );
};

export default WeekDays;

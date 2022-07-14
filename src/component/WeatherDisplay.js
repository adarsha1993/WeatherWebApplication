import React, { useEffect, useState } from 'react';

import WeekDays from './WeekDays';
import TimeDisplay from './TimeDisplay';
import './WeatherDisplay.scss';
import WeatherDetails from './WeatherDetails';

const WeatherDisplay = ({ data, term }) => {
  return (
    <div>
      <TimeDisplay data={data} term={term} />
      <WeekDays data={data} term={term} />
      <WeatherDetails data={data} term={term} />
    </div>
  );
};

export default WeatherDisplay;

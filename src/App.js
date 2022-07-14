import React, { useState, useId, useEffect } from 'react';

import Weather from './apis/Weather';
import SearchBar from './component/SearchBar';
import WeatherDisplay from './component/WeatherDisplay';

import './App.scss';

const App = () => {
  const id = Math.random().toString(36).substring(0, 7);
  const [response, setResponse] = useState({});
  const [image, setImage] = useState('header');
  const [term, setTerm] = useState('');

  const onSearchTermSubmit = async (term) => {
    const units = 'metric';

    const { data } = await Weather.get('/weather', {
      params: {
        q: term,
        units: units,
      },
    });

    const lat = data.coord.lat;
    const lon = data.coord.lon;

    if (lat && lon) {
      const { data } = await Weather.get('/forecast', {
        params: {
          lat: lat,
          lon: lon,
          units: units,
        },
      });

      console.log(data);
      setResponse(data);
      setImage(data.list[1].weather[0].main);
      setTerm(term);
    }
  };

  // useEffect(() => {
  //   onSearchTermSubmit('Kathmandu');
  // }, []);

  return (
    <div key={id} className={image}>
      <SearchBar onSearchTermSubmit={onSearchTermSubmit} />
      <WeatherDisplay data={response} term={term} />
    </div>
  );
};

export default App;

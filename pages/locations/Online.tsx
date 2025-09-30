import React from 'react';
import CityPage from './CityPage';

const Online: React.FC = () => (
  <CityPage
    cityKey="locations.index.city.online.title"
    titleKey="locations.online.title"
    descriptionKey="locations.online.description"
    canonical="/locations/online"
  />
);

export default Online;

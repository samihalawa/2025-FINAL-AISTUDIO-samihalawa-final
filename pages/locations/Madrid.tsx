import React from 'react';
import CityPage from './CityPage';

const Madrid: React.FC = () => (
  <CityPage
    cityKey="city.madrid"
    titleKey="locations.madrid.title"
    descriptionKey="locations.madrid.description"
    canonical="/locations/madrid"
  />
);

export default Madrid;

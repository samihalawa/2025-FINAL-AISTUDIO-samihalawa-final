import React from 'react';
import CityPage from './CityPage';

const Barcelona: React.FC = () => (
  <CityPage
    cityKey="city.barcelona"
    titleKey="locations.barcelona.title"
    descriptionKey="locations.barcelona.description"
    canonical="/locations/barcelona"
  />
);

export default Barcelona;

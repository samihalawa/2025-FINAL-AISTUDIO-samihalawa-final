import React from 'react';
import CityPage from './CityPage';
import { useTranslation } from '../../i18n/LanguageContext';

const Madrid: React.FC = () => {
  const { t } = useTranslation();
  return (
    <CityPage
      city="Madrid"
      title={t('locations.madrid.title')}
      description={t('locations.madrid.description')}
      canonical="/locations/madrid"
    />
  );
};

export default Madrid;

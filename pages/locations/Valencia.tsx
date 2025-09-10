import React from 'react';
import CityPage from './CityPage';
import { useTranslation } from '../../i18n/LanguageContext';

const Valencia: React.FC = () => {
  const { t } = useTranslation();
  return (
    <CityPage
      city="Valencia"
      title={t('locations.valencia.title')}
      description={t('locations.valencia.description')}
      canonical="/locations/valencia"
    />
  );
};

export default Valencia;

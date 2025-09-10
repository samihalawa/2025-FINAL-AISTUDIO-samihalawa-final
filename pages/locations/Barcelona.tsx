import React from 'react';
import CityPage from './CityPage';
import { useTranslation } from '../../i18n/LanguageContext';

const Barcelona: React.FC = () => {
  const { t } = useTranslation();
  return (
    <CityPage
      city="Barcelona"
      title={t('locations.barcelona.title')}
      description={t('locations.barcelona.description')}
      canonical="/locations/barcelona"
    />
  );
};

export default Barcelona;

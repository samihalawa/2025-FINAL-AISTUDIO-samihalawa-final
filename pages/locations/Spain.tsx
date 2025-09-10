import React from 'react';
import CityPage from './CityPage';
import { useTranslation } from '../../i18n/LanguageContext';

const Spain: React.FC = () => {
  const { t } = useTranslation();
  return (
    <CityPage
      city="Spain"
      title={t('locations.spain.title')}
      description={t('locations.spain.description')}
      canonical="/locations/spain"
    />
  );
};

export default Spain;

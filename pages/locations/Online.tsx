import React from 'react';
import CityPage from './CityPage';
import { useTranslation } from '../../i18n/LanguageContext';

const Online: React.FC = () => {
  const { t } = useTranslation();
  return (
    <CityPage
      city="Online"
      title={t('locations.online.title')}
      description={t('locations.online.description')}
      canonical="/locations/online"
    />
  );
};

export default Online;

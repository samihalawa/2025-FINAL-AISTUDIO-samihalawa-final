import React from 'react';
import CityServicePage from '../../locations/CityServicePage';

const MadridAIReadiness: React.FC = () => (
  <CityServicePage serviceKey="aiReadinessAudit" cityKey="madrid" path="/locations/madrid/ai-readiness-audit" />
);

export default MadridAIReadiness;


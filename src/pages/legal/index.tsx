import React from 'react';
import { useSearchParams, useParams, Navigate } from 'react-router-dom';

export { PrivacyPolicyPage } from './PrivacyPolicy';
export { TermsOfServicePage } from './TermsOfService';
export { RegulatoryDisclosuresPage } from './RegulatoryDisclosures';
export { InformationSecurityPage } from './InformationSecurity';
export { AmlKycPolicyPage } from './AmlKycPolicy';
export { AcceptableUsePolicyPage } from './AcceptableUsePolicy';
export { LegalLayout, LEGAL_DOCS } from './LegalLayout';

/**
 * LegalRedirect handles backward compatibility for routes like:
 * - /legal?tab=privacy
 * - /legal?tab=terms
 * - /legal/:tab
 * Redirecting immediately to the dedicated standalone page route.
 */
export const LegalRedirect: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { tab: pathTab } = useParams<{ tab?: string }>();

  const tab = (pathTab || searchParams.get('tab') || '').toLowerCase();

  switch (tab) {
    case 'terms':
    case 'terms-of-service':
    case 'terms-and-conditions':
    case 'conditions':
      return <Navigate to="/terms-of-service" replace />;

    case 'regulatory':
    case 'regulatory-disclosures':
    case 'regulatory-information':
    case 'licences':
    case 'licenses':
    case 'corporate-governance':
      return <Navigate to="/regulatory-disclosures" replace />;

    case 'security':
    case 'security-policy':
    case 'information-security':
    case 'information-security-policy':
      return <Navigate to="/information-security-policy" replace />;

    case 'aml':
    case 'kyc':
    case 'aml-kyc':
    case 'aml-kyc-policy':
      return <Navigate to="/aml-kyc-policy" replace />;

    case 'acceptable-use':
    case 'acceptable-use-policy':
    case 'aup':
      return <Navigate to="/acceptable-use-policy" replace />;

    case 'privacy':
    case 'privacy-policy':
    default:
      return <Navigate to="/privacy-policy" replace />;
  }
};

export default LegalRedirect;

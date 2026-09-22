import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/main-layout';
import Home from './pages/home';
// import {
//   PrivacyPolicyPage,
//   TermsOfServicePage,
//   RegulatoryDisclosuresPage,
//   InformationSecurityPage,
//   AmlKycPolicyPage,
//   AcceptableUsePolicyPage,
//   LegalRedirect
// } from './pages/legal';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        {/* Dedicated Standalone Legal Pages */}
        {/* <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="privacy" element={<Navigate to="/privacy-policy" replace />} />

        <Route path="terms-of-service" element={<TermsOfServicePage />} />
        <Route path="terms" element={<Navigate to="/terms-of-service" replace />} />
        <Route path="terms-and-conditions" element={<Navigate to="/terms-of-service" replace />} />
        <Route path="dispute-resolution" element={<Navigate to="/terms-of-service" replace />} />

        <Route path="regulatory-disclosures" element={<RegulatoryDisclosuresPage />} />
        <Route path="regulatory" element={<Navigate to="/regulatory-disclosures" replace />} />
        <Route path="regulatory-information" element={<Navigate to="/regulatory-disclosures" replace />} />
        <Route path="licences" element={<Navigate to="/regulatory-disclosures" replace />} />
        <Route path="corporate-governance" element={<Navigate to="/regulatory-disclosures" replace />} />

        <Route path="information-security-policy" element={<InformationSecurityPage />} />
        <Route path="security-policy" element={<Navigate to="/information-security-policy" replace />} />
        <Route path="security" element={<Navigate to="/information-security-policy" replace />} />

        <Route path="aml-kyc-policy" element={<AmlKycPolicyPage />} />
        <Route path="aml" element={<Navigate to="/aml-kyc-policy" replace />} />
        <Route path="aml-kyc" element={<Navigate to="/aml-kyc-policy" replace />} />

        <Route path="acceptable-use-policy" element={<AcceptableUsePolicyPage />} />
        <Route path="acceptable-use" element={<Navigate to="/acceptable-use-policy" replace />} />

   
        <Route path="legal" element={<LegalRedirect />} />
        <Route path="legal/:tab" element={<LegalRedirect />} /> */}
      </Route>
    </Routes>
  );
}

import React from 'react';
import { LegalLayout, DocumentSection, HighlightBox } from './LegalLayout';

export const AcceptableUsePolicyPage: React.FC = () => {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      badge="Platform Standards"
      shortDesc="Permissible commercial use cases, high-risk merchant restrictions, and prohibited sectors."
      lastUpdated="August 15, 2026"
    >
      <HighlightBox>
        <strong>Platform Integrity:</strong> Luma Pay’s payment rails and multi-currency accounts are designed for legitimate commercial enterprise payments. We maintain zero tolerance for fraudulent, unlawful, or abusive transactions.
      </HighlightBox>

      <DocumentSection number="1.0" title="Prohibited Business Categories">
        <p>
          You may not use Luma Pay services for transactions related to or involving any of the following prohibited sectors:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Unlicensed money transmission, unlicensed currency exchange, or non-compliant digital asset exchanges.</li>
          <li>Weapons, firearms, military equipment, munitions, or defense technologies.</li>
          <li>Illegal narcotics, controlled substances, synthetic chemicals, or unapproved pharmaceuticals.</li>
          <li>Unlicensed gambling, sports betting, casinos, binary options, or pyramid schemes.</li>
          <li>Counterfeit goods, intellectual property infringement, or pirated software.</li>
          <li>Adult entertainment, non-consensual content, or escort services.</li>
          <li>Sanctioned countries, entities, or designated individuals under OFAC, UN, EU, or UK regimes.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="2.0" title="Restricted Activities Requiring Prior Approval">
        <p>
          The following sectors require prior written approval and Enhanced Due Diligence (EDD) approval before accounts can be activated:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Regulated financial institutions, investment funds, and lending entities.</li>
          <li>Regulated digital asset platforms, custodial services, and web3 treasury management.</li>
          <li>Marketplaces facilitating high-volume third-party vendor settlements.</li>
          <li>Precious metals, bullion dealers, and luxury gem trading.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="3.0" title="Violations & Enforcement">
        <p>
          Failure to comply with this Acceptable Use Policy constitutes a material breach of your Agreement. Luma Pay reserves the right, in its sole discretion and without liability, to immediately suspend or terminate account access, hold funds pending compliance audit, reject payments, and report violations to competent law enforcement agencies.
        </p>
      </DocumentSection>
    </LegalLayout>
  );
};

export default AcceptableUsePolicyPage;

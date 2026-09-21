import React from 'react';
import { LegalLayout, DocumentSection, HighlightBox } from './LegalLayout';

export const AmlKycPolicyPage: React.FC = () => {
  return (
    <LegalLayout
      title="AML & KYC Compliance Policy"
      badge="FATF & FinCEN Aligned"
      shortDesc="Anti-money laundering controls, beneficial ownership verification, and sanctions screening."
      lastUpdated="August 20, 2026"
    >
      <HighlightBox>
        <strong>Compliance Commitment:</strong> Luma Pay enforces a rigorous Anti-Money Laundering (AML), Counter-Terrorist Financing (CTF), and Sanctions Compliance Program designed in strict accordance with Financial Action Task Force (FATF) standards, the US Bank Secrecy Act, and European AML Directives.
      </HighlightBox>

      <DocumentSection number="1.0" title="Customer Due Diligence (CDD) & KYB">
        <p>
          Luma Pay operates a risk-based compliance framework. Before accessing payment corridors, all commercial applicants undergo thorough Customer Due Diligence:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Verification of legal name, jurisdiction, date of registration, and business registration numbers against official government registries.</li>
          <li>Identification and biometric liveness verification of directors, authorized account administrators, and beneficial owners holding 25% or greater equity.</li>
          <li>Assessment of business model, expected transaction volume, commercial counterparties, and source of operational funds.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="2.0" title="Sanctions Screening & Politically Exposed Persons (PEPs)">
        <p>
          Every user, corporate director, UBO, counterparty, and incoming/outgoing transaction is automatically screened in real-time against:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>US Office of Foreign Assets Control (OFAC) Specially Designated Nationals (SDN) list.</li>
          <li>United Nations Security Council Sanctions lists.</li>
          <li>European Union Financial Sanctions and UK HM Treasury consolidated lists.</li>
          <li>Global Politically Exposed Persons (PEP) registers and adverse media databases.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="3.0" title="Transaction Monitoring & SAR Reporting">
        <p>
          Our automated compliance monitoring engine analyzes payments in real-time for anomalous transaction velocity, structured payments below reporting thresholds, high-risk corridor exposure, and unusual counterparty behaviors.
        </p>
        <p>
          Where suspicious activity is detected, Luma Pay promptly files Suspicious Activity Reports (SARs / STRs) with relevant financial intelligence units (FinCEN, FINTRAC, NCA) in full adherence to statutory non-tipping obligations.
        </p>
      </DocumentSection>
    </LegalLayout>
  );
};

export default AmlKycPolicyPage;

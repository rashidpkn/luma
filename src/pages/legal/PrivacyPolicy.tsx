import React from 'react';
import { LegalLayout, DocumentSection, HighlightBox } from './LegalLayout';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalLayout
      title="Privacy Policy"
      badge="GDPR & CCPA Compliant"
      shortDesc="How Luma Pay collects, protects, processes, and safeguards corporate and personal information."
      lastUpdated="September 15, 2026"
    >
      <HighlightBox>
        <strong>Overview:</strong> Luma Pay Inc. and its affiliated global operating entities (&ldquo;Luma Pay&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respect your privacy and are committed to safeguarding corporate and personal data in full compliance with the EU General Data Protection Regulation (GDPR), UK Data Protection Act 2018, California Consumer Privacy Act (CCPA), and global financial secrecy standards.
      </HighlightBox>

      <DocumentSection number="1.0" title="Data Controller & Scope of this Policy">
        <p>
          This Privacy Policy applies to all users of the Luma Pay platform, our APIs, client portal, mobile applications, multi-currency accounts, and payment rails. Depending on your jurisdiction of incorporation and residency, the primary data controller responsible for your information is:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>North America (US):</strong> Luma Pay Inc., a Delaware corporation registered with FinCEN.</li>
          <li><strong>Canada:</strong> Luma Pay Canada Corp., registered as a Money Services Business (MSB) with FINTRAC.</li>
          <li><strong>United Kingdom:</strong> Luma Pay UK Ltd., registered in England &amp; Wales.</li>
          <li><strong>European Economic Area:</strong> Luma Pay Europe UAB, authorized payment agent and corporate entity in Lithuania.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="2.0" title="Categories of Information We Collect">
        <p>
          To comply with international banking mandates and Know-Your-Customer (KYC) / Know-Your-Business (KYB) obligations, we collect the following categories of information:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Corporate &amp; Beneficial Ownership Data:</strong> Certificate of incorporation, articles of association, register of directors, and verification of Ultimate Beneficial Owners (UBOs) holding 25% or more equity.</li>
          <li><strong>Authorized Signatory &amp; User Identifiers:</strong> Government-issued passport/ID copies, full legal name, date of birth, residential address, tax identification numbers (SSN, EIN, VAT), and biometric facial verification data provided during liveness checks.</li>
          <li><strong>Financial &amp; Transactional Data:</strong> Bank account numbers, routing/IBAN numbers, SWIFT/BIC codes, transaction histories, counterparty names, source of funds declarations, and payment memos.</li>
          <li><strong>Technical &amp; Telemetry Data:</strong> IP addresses, browser fingerprinting, device identifiers, geolocation, login session timestamps, and MFA authentication logs used strictly for fraud prevention.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="3.0" title="Lawful Basis & Purposes for Processing">
        <p>
          We process your data under distinct lawful bases recognized under international privacy frameworks:
        </p>
        <ol style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Compliance with Legal Obligations:</strong> Processing required under Anti-Money Laundering (AML), Counter-Terrorism Financing (CTF), sanctions screening, and statutory tax reporting.</li>
          <li><strong>Performance of a Contract:</strong> Executing your payment orders, issuing virtual IBANs, maintaining ledger balances, locking FX conversion rates, and administering your account.</li>
          <li><strong>Legitimate Interests:</strong> Protecting the security of our infrastructure, preventing payment fraud, auditing systems, and defending against legal claims.</li>
        </ol>
      </DocumentSection>

      <DocumentSection number="4.0" title="Data Sharing & Sub-Processors">
        <p>
          Luma Pay does not sell, rent, or trade your personal or business data. We only share information with authorized third parties strictly necessary to deliver cross-border payment operations:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Licensed Banking Partners:</strong> Regulated Tier-1 partner banks and clearing networks (e.g., Federal Reserve Fedwire/ACH, SEPA, Faster Payments, Interac) that settle customer funds.</li>
          <li><strong>KYC / Sanctions Verification Providers:</strong> Automated identity verification, document verification, and sanctions watchlist screening partners (e.g., ComplyAdvantage, SumSub).</li>
          <li><strong>Security &amp; Cloud Infrastructure:</strong> ISO 27001 and SOC 2 Type II certified cloud providers (AWS, Cloudflare) with end-to-end data encryption.</li>
          <li><strong>Regulators &amp; Law Enforcement:</strong> Disclosures made when strictly required under enforceable court orders, subpoenas, or statutory reporting mandates (e.g., Suspicious Activity Reports).</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="5.0" title="Data Retention & Deletion">
        <p>
          Under global financial regulations (including the Bank Secrecy Act and European AML Directives), Luma Pay is statutorily required to maintain customer identification records, KYC documents, and transaction logs for a minimum of <strong>five (5) to seven (7) years</strong> following the termination of the business relationship.
        </p>
        <p>
          Upon expiration of statutory retention windows, customer data is securely deleted or cryptographically anonymized in accordance with our data disposal policies.
        </p>
      </DocumentSection>

      <DocumentSection number="6.0" title="Your Data Protection Rights">
        <p>
          Depending on your jurisdiction (including the EEA, UK, and California), you possess specific rights regarding your personal information:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Right of Access:</strong> Request a copy of the personal data we hold concerning your account.</li>
          <li><strong>Right to Rectification:</strong> Require the correction of inaccurate or incomplete corporate or personal details.</li>
          <li><strong>Right to Restrict or Object:</strong> Object to processing carried out under legitimate interest grounds.</li>
          <li><strong>Right to Data Portability:</strong> Obtain your transaction records in a structured, machine-readable format.</li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          To exercise any of these rights, contact our Data Protection Office at{' '}
          <a href="mailto:privacy@luma-pay.io" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 500 }}>
            privacy@luma-pay.io
          </a>.
        </p>
      </DocumentSection>
    </LegalLayout>
  );
};

export default PrivacyPolicyPage;

import React from 'react';
import { LegalLayout, DocumentSection, HighlightBox } from './LegalLayout';

export const InformationSecurityPage: React.FC = () => {
  return (
    <LegalLayout
      title="Information Security Policy"
      badge="SOC 2 Type II & ISO 27001"
      shortDesc="Encryption standards, access controls, network defence, and infrastructure resilience."
      lastUpdated="August 28, 2026"
    >
      <HighlightBox>
        <strong>Defense in Depth:</strong> Luma Pay implements institutional-grade information security controls architected to safeguard multi-currency settlement pipelines, customer treasury assets, and confidential financial communications.
      </HighlightBox>

      <DocumentSection number="1.0" title="Security Governance & Compliance Standards">
        <p>
          Our security program adheres to recognized international security and risk management standards:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>SOC 2 Type II:</strong> Annual independent third-party audits validating operational effectiveness across the Trust Services Criteria: Security, Confidentiality, and Availability.</li>
          <li><strong>ISO/IEC 27001 Alignment:</strong> Comprehensive Information Security Management System (ISMS) governing corporate, technical, and human risk vectors.</li>
          <li><strong>PCI-DSS Standards:</strong> Strict adherence to Payment Card Industry Data Security Standards for all card-related settlement and processing pipelines.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="2.0" title="Cryptographic Controls & Data Protection">
        <p>
          We enforce end-to-end cryptographic safeguards across all layers of our technological stack:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Data at Rest:</strong> Encrypted using Advanced Encryption Standard (AES) with 256-bit keys managed through hardware security modules (HSMs).</li>
          <li><strong>Data in Transit:</strong> All web, API, and internal microservice communications require Transport Layer Security (TLS 1.3) with HSTS and Perfect Forward Secrecy (PFS).</li>
          <li><strong>Key Management:</strong> Strict automated rotation of API keys, database encryption certificates, and credential stores.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="3.0" title="Access Management & Authentication">
        <p>
          Luma Pay enforces zero-trust architecture and strict role-based access control (RBAC):
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Mandatory MFA:</strong> Multi-factor authentication (WebAuthn, FIDO2 hardware keys, or time-based OTP) is required for all customer portal and administrative accounts.</li>
          <li><strong>Least Privilege Principle:</strong> Production database and infrastructure access is segregated and strictly restricted to authorized engineers on a just-in-time, audited basis.</li>
          <li><strong>Single Sign-On (SSO) &amp; Audit Logs:</strong> Enterprise SSO integration with SAML 2.0 and automated immutable access logging.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="4.0" title="Vulnerability Management & Testing">
        <p>
          We employ continuous vulnerability scanning and proactive testing regimens:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Annual independent white-box penetration testing conducted by accredited external cybersecurity firms.</li>
          <li>Continuous Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) integrated into our automated CI/CD deployment pipelines.</li>
          <li>
            Coordinated Vulnerability Disclosure (CVD) program allowing security researchers to responsibly report findings to{' '}
            <a href="mailto:security@luma-pay.io" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 500 }}>
              security@luma-pay.io
            </a>.
          </li>
        </ul>
      </DocumentSection>
    </LegalLayout>
  );
};

export default InformationSecurityPage;

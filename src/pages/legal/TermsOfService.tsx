import React from 'react';
import { LegalLayout, DocumentSection, HighlightBox } from './LegalLayout';

export const TermsOfServicePage: React.FC = () => {
  return (
    <LegalLayout
      title="Terms of Service"
      badge="Institutional Agreement"
      shortDesc="Terms governing multi-currency virtual accounts, domestic payment rails, and FX transactions."
      lastUpdated="September 10, 2026"
    >
      <HighlightBox>
        <strong>Important Notice:</strong> These Terms of Service (&ldquo;Agreement&rdquo;) govern access to the Luma Pay platform, client portal, APIs, and multi-currency payment services. By registering an account or executing a transaction through Luma Pay, you agree to be bound by these Terms.
      </HighlightBox>

      <DocumentSection number="1.0" title="Eligibility & Corporate Onboarding">
        <p>
          Luma Pay provides business-to-business (B2B) payment infrastructure. To be eligible for an account, you must:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Be a duly incorporated and registered business entity in good standing under the laws of an approved jurisdiction.</li>
          <li>Complete all mandatory KYB, beneficial ownership, and AML screening procedures to our sole satisfaction.</li>
          <li>Provide verifiable documentation establishing authorized signers and operational purpose.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="2.0" title="Multi-Currency Accounts & Safeguarding">
        <p>
          Luma Pay provides clients with virtual multi-currency account numbers (vIBANs, US Routing/Account Numbers, Canadian Transit Numbers, UK Sort Codes) that interface with global domestic payment rails.
        </p>
        <p>
          <strong>Safeguarding of Client Funds:</strong> Luma Pay is a financial technology provider and registered Money Services Business, not a chartered depository bank. Fiat balances held in connection with your account are segregated in dedicated safeguarding accounts maintained at regulated Tier-1 partner banks in full compliance with safeguarding regulations.
        </p>
      </DocumentSection>

      <DocumentSection number="3.0" title="Foreign Exchange & Quote Locks">
        <p>
          When executing cross-currency conversions through the Luma Pay client portal or API:
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Exchange rates are quoted in real-time based on interbank institutional liquidity.</li>
          <li>Guaranteed quote locks are held for a designated window (typically 15 to 60 seconds) as displayed in the execution interface.</li>
          <li>Once an FX conversion is confirmed by an authorized user, it is irrevocable and binding. Luma Pay reserves the right to cancel quotes in the event of manifest market pricing errors or liquidity disruptions.</li>
        </ul>
      </DocumentSection>

      <DocumentSection number="4.0" title="Digital Asset & Settlement Rails">
        <p>
          Where Luma Pay offers digital asset conversion or stablecoin settlement capabilities, clients acknowledge that digital assets are subject to market volatility and technical counterparty risks. Luma Pay executes digital asset operations strictly through regulated custodial partners and licensed liquidity pools. Digital assets are not covered by government deposit insurance schemes (such as FDIC or FSCS).
        </p>
      </DocumentSection>

      <DocumentSection number="5.0" title="Fees & Payment Settlement">
        <p>
          Transaction fees, FX markup spreads, wire clearing costs, and monthly account maintenance fees are charged in accordance with the customized Fee Schedule agreed during corporate onboarding. Luma Pay reserves the right to deduct applicable transaction fees directly from payout balances.
        </p>
      </DocumentSection>

      <DocumentSection number="6.0" title="Limitation of Liability & Indemnification">
        <p>
          To the maximum extent permitted by applicable law, Luma Pay and its banking partners shall not be liable for indirect, punitive, incidental, or consequential damages, including loss of business profit or operational downtime. Our aggregate liability arising under this Agreement shall not exceed the total fees paid by you to Luma Pay in the three (3) months preceding the incident.
        </p>
      </DocumentSection>
    </LegalLayout>
  );
};

export default TermsOfServicePage;

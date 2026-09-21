import React from 'react';
import { LegalLayout, DocumentSection, HighlightBox } from './LegalLayout';

export const RegulatoryDisclosuresPage: React.FC = () => {
  return (
    <LegalLayout
      title="Regulatory Disclosures"
      badge="MSB & Banking Partnerships"
      shortDesc="Multi-jurisdictional licensing, partner banking disclosures, and non-depository safeguards."
      lastUpdated="September 01, 2026"
    >
      <HighlightBox>
        <strong>Regulatory Transparency:</strong> Luma Pay maintains high regulatory and compliance standards across every global market in which we operate. We partner with licensed depository institutions and clearing providers to deliver safe, transparent payment settlement.
      </HighlightBox>

      <DocumentSection number="1.0" title="Global Legal Entities & Registrations">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '12px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#38bdf8', fontSize: '15px', fontWeight: 600 }}>United States</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
              <strong style={{ color: '#f1f5f9' }}>Luma Pay Inc.</strong><br />
              Registered Money Services Business (MSB) with the Financial Crimes Enforcement Network (FinCEN).<br />
              MSB Registration No: Available upon corporate verification.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#38bdf8', fontSize: '15px', fontWeight: 600 }}>Canada</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
              <strong style={{ color: '#f1f5f9' }}>Luma Pay Canada Corp.</strong><br />
              Registered Money Services Business (MSB) with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC).
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#38bdf8', fontSize: '15px', fontWeight: 600 }}>United Kingdom &amp; Europe</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
              <strong style={{ color: '#f1f5f9' }}>Luma Pay UK Ltd &amp; Luma Pay Europe UAB</strong><br />
              Operates in partnership with FCA-regulated electronic money institutions (EMIs) and licensed European payment service providers.
            </p>
          </div>
        </div>
      </DocumentSection>

      <DocumentSection number="2.0" title="Non-Depository Institution Status">
        <p>
          Luma Pay is a financial technology company and money transmitter, not a federally chartered bank or credit union. Luma Pay does not engage in fractional-reserve lending or proprietary trading of client funds.
        </p>
        <p>
          All deposit accounts, virtual routing numbers, IBANs, and clearing rails provided to users are issued directly by our regulated sponsor banks and licensed financial institutional partners.
        </p>
      </DocumentSection>

      <DocumentSection number="3.0" title="Safeguarding & Bankruptcy Remoteness">
        <p>
          Customer fiat funds are held in segregated accounts designated specifically for the benefit of customers at regulated Tier-1 banking partners. These funds are segregated from Luma Pay&rsquo;s own operating capital and corporate assets. In the highly unlikely event of Luma Pay&rsquo;s insolvency, safeguarded client assets are legally protected against claims by general corporate creditors.
        </p>
      </DocumentSection>

      <DocumentSection number="4.0" title="Jurisdictional Service Restrictions">
        <p>
          Services are subject to jurisdictional availability and statutory restrictions. Luma Pay does not provide services in sanction-designated jurisdictions (including Iran, North Korea, Syria, Cuba, and occupied regions of Ukraine) or to persons identified on OFAC, UN, EU, or UK HMT sanctions watchlists.
        </p>
      </DocumentSection>
    </LegalLayout>
  );
};

export default RegulatoryDisclosuresPage;

import React from 'react';

export const BenefitsSection: React.FC = () => {
  return (
    <section data-logo-color="black" className="block-benefits">
      <div className="bg-text-container">
        <div className="bg-text-wrapper">
          <h2 className="bg-text">Beyond traditional banking&nbsp;</h2>
          <span className="bg-text">Beyond traditional banking&nbsp;</span>
          <span className="bg-text">Beyond traditional banking&nbsp;</span>
        </div>
      </div>

      <div className="row">
        <div className="xxlarge-16 columns">
          <div className="cards-container">
            <div className="cards-wrapper">
              <div className="card">
                <h3 className="h-medium">Built for trust. Grounded in compliance.</h3>
                <div className="p-normal">
                  <p>
                    We recognize that security and compliance are paramount to global operations. That’s why safeguarding your capital and eliminating operational friction are our highest priorities.
                  </p>
                  <p>
                    Client balances are held in segregated accounts across established Tier-1 institutional banking partners. Always isolated, always secure, and held strictly in your business entity's name.
                  </p>
                  <p>
                    Operating under rigorous MSB regulatory frameworks and global AML/KYC standards, Luma Pay replaces tedious paperwork with responsive, enterprise-grade verification.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="h-medium">Dedicated Multi-Currency Virtual Accounts</h3>
                <div className="p-normal">
                  <p>
                    Conduct business globally as seamlessly as you do domestically. Luma Pay furnishes your business with dedicated virtual IBANs and account numbers in CAD, USD, EUR, GBP, and AUD.
                  </p>
                  <p>
                    Collect directly from overseas clients and marketplaces via domestic clearing networks like SEPA, Faster Payments, Fedwire/ACH, and EFT — bypassing predatory wire charges and hidden conversion markups.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="h-medium">Tailored for Global Trade & Scaling Enterprises</h3>
                <div className="p-normal">
                  <p>
                    Engineered to satisfy the demands of software studios, cross-border e-commerce sellers, freight and logistics operators, and international corporate service firms.
                  </p>
                  <p>
                    Enjoy complete transparency with live institutional exchange rates, tight wholesale FX spreads, and automated batch disbursement capabilities across all supported international corridors.
                  </p>
                  <p>
                    No rigid legacy bureaucracy or opaque fees. Just powerful, flexible treasury infrastructure tailored to your commercial workflow.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="h-medium">Institutional FX & Digital Asset Rails</h3>
                <div className="p-normal">
                  <p>
                    Direct access to deep liquidity across G10 and major currency pairs with real-time settlement and transparent foreign exchange execution.
                  </p>
                  <p>
                    Bridge traditional fiat clearing rails with compliant digital currency and stablecoin settlement options to maximize capital velocity across global markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media only screen and (max-width: 960px) {
          .block-benefits {
            padding: 60px 0 80px 0 !important;
            overflow: hidden !important;
            height: auto !important;
          }
          .block-benefits .cards-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .block-benefits .cards-container .cards-wrapper {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 24px !important;
            margin-top: 20px !important;
            margin-bottom: 0 !important;
            position: static !important;
            width: 100% !important;
          }
          .block-benefits .cards-container .cards-wrapper .card,
          .block-benefits .cards-container .cards-wrapper .card:first-child,
          .block-benefits .cards-container .cards-wrapper .card:nth-child(1),
          .block-benefits .cards-container .cards-wrapper .card:nth-child(2),
          .block-benefits .cards-container .cards-wrapper .card:nth-child(3),
          .block-benefits .cards-container .cards-wrapper .card:nth-child(4),
          .block-benefits .card {
            margin: 0 !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            transform: none !important;
            position: relative !important;
            top: auto !important;
            bottom: auto !important;
            left: auto !important;
            right: auto !important;
            padding: 32px 24px !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </section>
  );
};

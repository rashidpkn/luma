import React from 'react';

export const BenefitsSection: React.FC = () => {
  return (
    <section data-logo-color="black" className="block-benefits">
      <div className="bg-text-container">
        <div className="bg-text-wrapper">
          <h2 className="bg-text">Better than a bank&nbsp;</h2>
          <span className="bg-text">Better than a bank&nbsp;</span>
          <span className="bg-text">Better than a bank&nbsp;</span>
        </div>
      </div>

      <div className="row">
        <div className="xxlarge-16 columns">
          <div className="cards-container">
            <div className="cards-wrapper">
              <div className="card">
                <h3 className="h-medium">Built for trust. Powered by speed.</h3>
                <div className="p-normal">
                  <p>
                    We know how much your business matters — and that’s why protecting your money and saving your time are our top priorities.
                  </p>
                  <p>
                    Your funds are held securely in your own dedicated account, safeguarded through trusted global partners. Always separated. Always protected.
                  </p>
                  <p>
                    But trust alone isn’t enough — speed matters too. That’s why we’ve removed the unnecessary steps. Say goodbye to slow forms and outdated processes. You get what you need, when you need it — fast.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="h-medium">Strength you can trust. Simplicity you’ll love</h3>
                <div className="p-normal">
                  <p>
                    We believe the economy is better when everyone has access. When everyone has room to grow. No one should be left out because the technology is too complex.
                  </p>
                  <p>
                    This is why we built our product at easiest from scratch to finish. Our mission is to improve your financial life by making it simple enough. No challenge included here to just get paid.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="h-medium">Professional by design. Flexible by nature.</h3>
                <div className="p-normal">
                  <p>
                    Whether you need foreign exchange, a dedicated IBAN, or a prepaid card that works anywhere — we’ve got you covered. Our wallet is designed to adapt to your lifestyle and your financial needs.
                  </p>
                  <p>
                    No rigid rules. No one-size-fits-all. Just smart, personalized tools that put you in control.
                  </p>
                  <p>
                    Enjoy a lean, responsive experience with services that feel tailor-made. Because you're not just another customer — you're the reason we built this.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="h-medium">Dedicated Accounts and Payment Cards</h3>
                <div className="p-normal">
                  <p>
                    International IBANs and virtual and physical cards just dedicated to your business.
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

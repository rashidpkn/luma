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
    </section>
  );
};

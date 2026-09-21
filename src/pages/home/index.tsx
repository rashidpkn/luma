import { HeroHeader } from '../../components/HeroHeader';
import { CardAnimation } from '../../components/CardAnimation';
import { AnchorBlocks } from '../../components/AnchorBlocks';
import { SaveTimeSection } from '../../components/SaveTimeSection';
import { GetPaidSection } from '../../components/GetPaidSection';
import { ScrollHelper } from '../../components/ScrollHelper';
import { GlobalSection } from '../../components/GlobalSection';
import { DashboardSection } from '../../components/DashboardSection';
import { NoBordersSection } from '../../components/NoBordersSection';
import { SustainabilitySection } from '../../components/SustainabilitySection';
import { BenefitsSection } from '../../components/BenefitsSection';
import { SliderNames } from '../../components/SliderNames';
import { Footer } from '../../components/Footer';

export default function Home() {
  return (
    <>
      {/* 1. Header Section */}
      <HeroHeader />

      {/* 2. 3D Card Animation (Starts in Hero, pinned into SaveTime) */}
      <CardAnimation />

      {/* 3. Main Content Tree */}
      <main>
        {/* Anchor Blocks Wrapper: Pinned Anchor Timeline + SaveTime + GetPaid */}
        <div className="anchor-blocks-wrapper">
          <AnchorBlocks />
          <SaveTimeSection />
          <GetPaidSection />
          <ScrollHelper />
        </div>

        {/* Section 3: We are local, yet global. Globe Video & Audio */}
        <GlobalSection />

        {/* Section 4: Increase your visibility in spendings. Dark/Light Theme Switcher */}
        <DashboardSection />

        {/* Section 4.5: One App. No Borders. No Banks. — 3D Globe */}
        <NoBordersSection />

        {/* Section 5: Mother Earth Sustainability Section & Planted Tree Counter */}
        <SustainabilitySection />

        {/* Section 6: Better than a bank. Staggered Cards & Vertical Marquee */}
        <BenefitsSection />

        {/* Section 7: Free for... Vertical Names Loop & App Downloads */}
        <SliderNames />
      </main>

      {/* 4. Footer */}
      <Footer />
    </>
  );
}

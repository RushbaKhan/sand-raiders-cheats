import { HeroSection } from '../components/HeroSection';
import { SafetySection } from '../components/SafetySection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HowItWorks } from '../components/HowItWorks';
import { Integrations } from '../components/Integrations';
import { SupportBanner } from '../components/SupportBanner';
import { VideoShowcase } from '../components/VideoShowcase';
import { PricingSection } from '../components/PricingSection';
import { FaqSection } from '../components/FaqSection';
import { Testimonials } from '../components/Testimonials';
import { DiscordSupport } from '../components/DiscordSupport';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SafetySection />
      <FeaturesGrid />
      <HowItWorks />
      <Integrations />
      <SupportBanner />
      <VideoShowcase />
      <PricingSection />
      <FaqSection />
      <Testimonials />
      <DiscordSupport />
    </>
  );
}

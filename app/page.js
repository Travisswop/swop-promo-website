import AvailableForAllDevices from '@/components/home/AvailableForAllDevices';
import DashboardFlow from '@/components/home/DashboardFlow';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import LinkSection from '@/components/home/LinkSection';
import SwoppleSection from '@/components/home/SwoppleSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LinkSection />
      <DashboardFlow />
      <SwoppleSection />
      <FeaturesSection />
      <AvailableForAllDevices />
    </div>
  );
}

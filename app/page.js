import DevicesInteraction from '@/components/hardware/DevicesInteraction';
import AvailableForAllDevices from '@/components/home/AvailableForAllDevices';
import DashboardFlow from '@/components/home/DashboardFlow';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import InteractiveSection from '@/components/home/interactive/InteractiveSection';
import LinkSection from '@/components/home/LinkSection';
import Smartsite from '@/components/home/Smartsite';
import SwoppleSection from '@/components/home/SwoppleSection';

export default function Home() {
  return (
    <div >
      <HeroSection />
      <Smartsite />
      <InteractiveSection />
      <DevicesInteraction />
      {/* <LinkSection /> */}
      {/* <DashboardFlow /> */}
      {/* <SwoppleSection /> */}
      {/* <FeaturesSection /> */}
      {/* <AvailableForAllDevices /> */}
    </div>
  );
}

import AvailableForAllDevices from '@/components/home/AvailableForAllDevices';
import DashboardFlow from '@/components/home/DashboardFlow';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import LinkSection from '@/components/home/LinkSection';
import SwoppleSection from '@/components/home/SwoppleSection';

export default function Home() {
  return (
    <div className='relative'>
      {/* Background gradient */}
      <div className='absolute left-[-55%] md:left-[-35%] top-[-2%] md:top-[-5%] bottom-0 w-full gradient-circle-top h-[10%] md:h-[25%]' />
      <div className='absolute right-[-50%] top-[25%] md:top-[10%] bottom-0 w-full gradient-circle-left h-[20%] md:h-[85%]' />
      <div className='text-black overflow-x-hidden'>
        {/* Main Body Content */}
        <div className='relative z-20'>
          <HeroSection />
          <LinkSection />
          <DashboardFlow />
          <SwoppleSection />
          <FeaturesSection />
          <AvailableForAllDevices />
        </div>
      </div>
    </div>
  );
}

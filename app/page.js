import AvailableForAllDevices from '@/components/home/AvailableForAllDevices';
import DashboardSwoppleSection from '@/components/home/DashboardSwoppleSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import LinkSection from '@/components/home/LinkSection';

export default function Home() {
  return (
    <main className='w-full'>
      <div className=''>
        <HeroSection />
        <LinkSection />
        <DashboardSwoppleSection />
        <FeaturesSection />
        <AvailableForAllDevices />
      </div>
    </main>
  );
}

import FaqSection from '@/components/faq/FaqSection';

const page = () => {
  return (
    <div className='relative'>
      {/* Background gradient */}
      <div className='absolute left-[-55%] md:left-[-35%] top-[-2%] md:top-[-14%] bottom-0 w-full gradient-circle-top h-[10%] md:h-[60%]' />
      <div className='absolute right-[-70%] md:right-[-50%] top-[55%] md:top-[40%] bottom-0 w-full gradient-circle-left h-[20%] md:h-[70%]' />
      <div className='text-black overflow-x-hidden'>
        {/* Main Body Content */}
        <div className='relative z-20'>
          <FaqSection />
        </div>
      </div>
    </div>
  );
};

export default page;

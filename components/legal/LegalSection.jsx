'use client';
import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Tabs, Tab, Card, CardBody, CardHeader } from '@nextui-org/react';
import Returns from './Returns';
import TermsAndConditions from './TermsAndConditions';
import PrivacyAndPolicy from './PrivacyAndPolicy';

const LegalSection = () => {
  const [selected, setSelected] = React.useState('photos');

  return (
    <SectionLayout>
      <h2
        className={`text-stone-950 font-normal text-xl md:text-4xl text-center !leading-none`}
      >
        <strong>Legal</strong>
      </h2>

      <p className='text-lg text-stone-950 text-center mt-4 max-w-[620px] mx-auto'>
        Discover rewarding career paths, innovative work environments, and the
        chance to grow with us. Find your perfect job and start making an impact
        today.
      </p>
      <div className='md:mx-32 mt-16 mx-auto'>
        <div className='flex flex-wrap gap-4 justify-center'>
          <Tabs
            aria-label='Options'
            selectedKey={selected}
            onSelectionChange={setSelected}
            variant='underlined'
          >
            <Tab
              key='privacy-policy'
              title='Privacy Policy'
              className='text-md md:text-xl'
            >
              <Card className='border-none shadow-none'>
                <CardBody>
                  <PrivacyAndPolicy />
                </CardBody>
              </Card>
            </Tab>
            <Tab key='returns' title='Returns' className='text-md md:text-xl'>
              <Card className='border-none shadow-none'>
                <CardBody>
                  <Returns />
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key='terms_and_conditions'
              title='Terms & Conditions'
              className='text-md md:text-xl'
            >
              <Card className='border-none shadow-none'>
                <CardBody>
                  <TermsAndConditions />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
        <div></div>
      </div>
    </SectionLayout>
  );
};

export default LegalSection;

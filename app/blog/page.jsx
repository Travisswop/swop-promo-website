import React from 'react';
import GetAllPostData from '@/lib/GetAllPostData';

import Head from 'next/head';

const page = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <>
      <Head>
        <title>Trip Law Blog - Insights and Updates on Immigration Law</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content={`Stay informed on the latest immigration news, legal updates, and valuable resources with TripLaw's immigration blog`}
        />
      </Head>
    </>
  );
};

export default page;

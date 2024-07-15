import React from 'react';
import GetAllPostData from '@/lib/GetAllPostData';
import Head from 'next/head';

const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1, h2 {
  font-style: blog;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 25px;
}

p {
  font-size: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
}

ul {
  list-style-type: disc;
  margin-left: 30px;
}

`;

const page = async ({ params }) => {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.filter(
    (blogs) => blogs.slug === params.slug,
  );

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
        <title>{blogDetails[0]?.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={blogDetails[0]?.title} />
      </Head>
      <style>{css}</style>
    </>
  );
};

export default page;

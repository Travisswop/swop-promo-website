'use client';
import React from 'react';
import { Card, CardBody, Image } from '@nextui-org/react';
import Link from 'next/link';
import ScrollMotionEffect from '../motion/ScrollMotionEffect';

const ProductCards = ({ productList }) => {
  return (
    <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {productList?.map((el, index) => (
        <ScrollMotionEffect effect='fade-up' duration='2000' key={index}>
          <Link href={`hardware/${el?.slug}`}>
            <Card shadow='sm' isPressable className='bg-[#F5F5F5]'>
              <CardBody className='overflow-visible p-4'>
                <div className='bg-[#E5E5E5] w-[16%] flex justify-center mx-auto  mt-4 rounded-full'>
                  <p className='text-md text-stone-950 text-centermax-w-[600px] mx-auto p-1'>
                    {el.size}
                  </p>
                </div>
                <h2 className='mt-3 text-xl md:text-3xl text-stone-950 text-center font-bold'>
                  {el.title}
                </h2>
                <Image
                  // shadow='sm'
                  radius='lg'
                  width='100%'
                  alt={el.title}
                  className='w-full object-cover h-auto lg:h-[420px] py-5'
                  src={el.img}
                />
                <p className='text-md md:text-lg text-stone-950 text-center mt-1'>
                  {el.decs}
                </p>
              </CardBody>
            </Card>
          </Link>
        </ScrollMotionEffect>
      ))}
    </div>
  );
};

export default ProductCards;

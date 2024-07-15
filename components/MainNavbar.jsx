'use client';
import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { LuUser2 } from 'react-icons/lu';
import { IoCall } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };



  const menuItems = [
    { title: 'Software', slug: '/software' },
    { title: 'Hardware', slug: '/hardware' },
    { title: 'Company', slug: '/company' },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth='2xl' className='py-4'>
      <NavbarContent>
        <NavbarBrand>
          <Link href={'/'}>
            <Image
              src={'/assets/site-logo/swop-logo.png'}
              alt='Swop Logo'
              width={140}
              height={100}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex gap-4 bg-[#F6F6F6] rounded-full py-2 px-6'
        justify='center'
      >
        <NavbarItem>
          <Link href={'/'}>
            <Image
              src={'/assets/site-logo/navicon.png'}
              alt='Swop Logo'
              width={40}
              height={40}
            />
          </Link>
        </NavbarItem>
        {menuItems?.map((el, index) => (
          <>
            <NavbarItem>
              <Link
            
                href={el.slug}
                className={`text-md md:text-lg ${pathname === el.slug ? 'text-[#AF97D4]' : ''}`}
              >
                {el?.title}
              </Link>
            </NavbarItem>
          </>
        ))}
      </NavbarContent>
      <NavbarContent justify='end' className='flex items-center'>
        <NavbarItem className='hidden md:block'>
          <div className='flex items-center gap-x-2 bg-[#F6F6F6] p-2 rounded-full text-md md:text-lg font-semibold'>
            <p>Get Demo</p>
            <div className='bg-[#282828] p-2 rounded-full'>
              <IoCall className='w-5 h-5 text-white' />
            </div>
          </div>
        </NavbarItem>
        <NavbarItem className='hidden md:block'>
          <div className='bg-[#F6F6F6] p-3 rounded-full'>
            <LuUser2 className='w-7 h-7' />
          </div>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='md:hidden'
        />
      </NavbarContent>
      <NavbarMenu className='mt-10'>
        {menuItems?.map((el, index) => (
          <NavbarMenuItem
            key={index}
          
          >
            <Link
              className='w-full text-black text-center'
              href={el?.slug}
              size='lg'
            >
              {el?.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

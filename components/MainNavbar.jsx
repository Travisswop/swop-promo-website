'use client';
import React, { useState, useEffect, useCallback } from 'react';
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
import { usePathname } from 'next/navigation';

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  // Use useCallback to memoize the debounce function
  const handleScroll = useCallback(
    debounce(() => {
      if (window.scrollY >= 100) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    }, 100),
    [],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const menuItems = [
    { title: 'Software', slug: '/software' },
    { title: 'Hardware', slug: '/hardware' },
    { title: 'Company', slug: '/company' },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth='2xl'
      className={`py-0 md:py-2 fixed top-0 transition-colors duration-300 ${navbarColor ? '!bg-white shadow-small' : 'bg-transparent'}`}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href='/'>
            <Image
              src='/assets/site-logo/swop-logo.png'
              alt='Swop Logo'
              width={150}
              height={100}
              className='w-[90px] md:w-[150px] h-auto'
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex gap-4 bg-[#F6F6F6] rounded-full py-2 px-6'
        justify='center'
      >
        <NavbarItem>
          <Link href='/'>
            <Image
              src='/assets/site-logo/navicon.png'
              alt='Swop Logo'
              width={50}
              height={50}
            />
          </Link>
        </NavbarItem>
        {menuItems.map((el) => (
          <NavbarItem key={el.slug}>
            <Link
              href={el.slug}
              className={`text-md md:text-lg ${pathname === el.slug ? 'text-[#AF97D4]' : ''}`}
            >
              {el.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify='end' className='flex items-center'>
        <NavbarItem>
          <Link
            href='/get-demo'
            className='flex items-center gap-x-2 bg-[#F6F6F6] p-1.5 md:p-2 rounded-full text-sm md:text-lg font-semibold'
          >
            <p>Get Demo</p>
            <div className='bg-[#282828] p-1 md:p-2 rounded-full'>
              <IoCall className='w-3 h-3 md:w-5 md:h-5 text-white' />
            </div>
          </Link>
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

      <NavbarMenu className='overflow-hidden'>
        {menuItems.map((el) => (
          <NavbarMenuItem key={el.slug} className='flex flex-row '>
            <Link
              className='w-full text-black text-center !text-xl font-medium py-1'
              href={el.slug}
              onClick={() => setIsMenuOpen(false)}
            >
              {el.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default React.memo(MainNavbar);

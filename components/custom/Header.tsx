'use client'

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Bars } from '@/assets/svgs/uiSvg';


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className='header_section select-none flex justify-between items-center py-3 px-5 text-[#64FFDA] font-bold fixed w-full top-0 z-40 2xs:py-5 sm:px-10 md:py-7'
      >

        <Link href="/">
          <span className='text-3xl 2xs:text-4xl'>DJ</span>
        </Link>
        
        <div className='hover:cursor-pointer lg:hidden'>
          <div className='2xs:hidden'>
            <Bars height="1.875rem" width="1.875rem" fillColor="#64FFDA" strokeWidth="0" strokeColor="currentColor" />
          </div>
          <div className='hidden 2xs:flex'>
            <Bars height="2.25rem" width="2.25rem" fillColor="#64FFDA" strokeWidth="0" strokeColor="currentColor" />
          </div>
        </div>

        <div className='hidden lg:flex font-normal gap-10 text-sm items-center'>
            <div className='flex gap-2 hover:cursor-pointer'>
              <span className=''>01.</span>
              <span className='text-white hover:text-[#64FFDA]'>About</span>
            </div>
            <div className='flex gap-2 hover:cursor-pointer'>
              <span className=''>02.</span>
              <span className='text-white hover:text-[#64FFDA]'>Experience</span>
            </div>
            <div className='flex gap-2 hover:cursor-pointer'>
              <span className=''>03.</span>
              <span className='text-white hover:text-[#64FFDA]'>Projects</span>
            </div>
            <div className='flex gap-2 hover:cursor-pointer '>
              <span className=''>04.</span>
              <span className='text-white hover:text-[#64FFDA]'>Contact</span>
            </div>
            <button className=" border-[#64FFDA] border-[1px] rounded px-5 py-2">
              <span className="text-sm text-[#64FFDA]">Resume</span>
            </button>
        </div>

      </div>
    </>
  )
}
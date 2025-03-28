"use client";

import Link from 'next/link'
import React from 'react'
import { FaBurger } from 'react-icons/fa6'
import { CgProfile } from "react-icons/cg";
import { HiBars3BottomRight } from 'react-icons/hi2';

// rafce shotcut for starters

interface Props{
    openNav:()=> void;
}

const Nav = ({openNav}:Props) => {
    return (
        <div className='h-18 bg-linear-to-r/decreasing from-red-600 to-red-950'>
            <div className='sm:-w[90%] w-[100%] mx-auto flex h-[100%] items-center justify-between'>
                {/* Logo */}
                <div className='flex item-center space-x-2 color-orange-400'>
                    <FaBurger className='w-[2.4rem] h-[2.4rem] h-[1.4rem] text-white' />
                    <h1 className='text-[26px] sm:text-[28px] font-bold text-white'>Gerencie Hub</h1>
                </div>
                {/* MobileNav button */}
                <div className=' flex items-center space-x-8 p-3 text-[28px]'>
                    <HiBars3BottomRight onClick={openNav} className='md:hidden w-[2rem] text-white cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Nav

"use client"
import React from 'react'
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { IoBagCheckOutline, IoClipboardOutline, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';


interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {

    const navStyle = showNav ? "translate-x-0" : "translate-x-full";

    return (
        <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 bottom-0 h-full bg-[#000000e0] z-[1002]`}>
            <RxCross2
                onClick={closeNav}
                className='text-[4px] absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white' />
            {/* Nav div */}
            <div className={`bg-linear-to-b from-red-900 from-40% to-black ${navStyle} transition-all-500 delay-200 text-white flex flex-col items-center justify-center w-[70%] h-[100%]`}>
                {/* Nav Profile icon */}
                <div>
                    <button className='absolute top-14 right-2 px-24 py-2 sm:px-8 sm:py-3 bg-red-800 transition-all duration-200 hover:bg-red-700 flex items-center rounded-md text-white'>
                        {/* Profile Icon */}
                        <FiUser className='absolute left-3 w-[1.7rem] h-[1.7rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                        
                        {/* Profile Text */}
                        <span className='text-[18px] ml-2 text-lg sm:text-x1 font-medium'>Perfil</span>
                    </button>
                </div>

                {/* Nav links */}
                <ul className='space-y-6'>
                    <li className='text-[28px] font-medium hover:text-orange-500 transition-all duration-200 text-white'>
                        <IoHomeOutline className='absolute left-3 w-[1.5rem] h-[2.7rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                        <Link href="/">Início</Link>
                    </li>
                    <li className='text-[28px] font-medium hover:text-orange-500 transition-all duration-200 text-white'>
                        <IoBagCheckOutline className='absolute left-3 w-[1.5rem] h-[2.7rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                        <Link href="/">Produtos</Link>
                    </li>
                    <li className='text-[28px] font-medium hover:text-orange-500 transition-all duration-200 text-white'>
                    <IoClipboardOutline className='absolute left-3 w-[1.5rem] h-[2.7rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                        <Link href="/">Pedidos</Link>
                    </li>
                    <li className='text-[28px] font-medium  hover:text-orange-500 transition-all duration-200 text-white'>
                    <IoSettingsOutline className='absolute left-3 w-[1.5rem] h-[2.7rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                        <Link href="/">Configurações</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNav

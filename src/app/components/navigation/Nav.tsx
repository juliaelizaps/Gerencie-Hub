import Link from 'next/link'
import React from 'react'
import { FaBurger } from 'react-icons/fa6'
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiBars3BottomRight } from 'react-icons/hi2';

interface Props{
    openNav:()=> void;
}

const Nav = ({openNav}:Props) => {
    return (
        <div className='h-[12vh] bg-linear-to-r/decreasing from-red-600 to-red-950'>
            <div className='sm:-w[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between'>
                {/* Logo */}
                <div className='flex item-center space-x-2 color-orange-400'>
                    <FaBurger className='w-[2.4rem] h-[2.4rem] sm: w-[1.4rem] h-[1.4rem] text-white' />
                    <h1 className='text-[20px] sm:text-[28px] font-bold text-white'>Gerencie Hub</h1>
                </div>
                {/* Nav links */}
                <ul className='hidden lg:flex items-center space-x-10 text-orange-200 font-semibold'>

                    <li className='text-[20px] font-medium hover:text-orange-500 transition-all duration-200'>
                        <Link href="/">Hub</Link>
                    </li>
                    <li className='text-[20px] font-medium hover:text-orange-500 transition-all duration-200'>
                        <Link href="/">Produtos</Link>
                    </li>
                    <li className='text-[20px] font-medium hover:text-orange-500 transition-all duration-200'>
                        <Link href="/">Pedidos</Link>
                    </li>
                    <li className='text-[20px] font-medium  hover:text-orange-500 transition-all duration-200'>
                        <Link href="/">Lista de Pedidos</Link>
                    </li>
                </ul>
                {/* buttons */}
                <div className=' flex items-center space-x-4'>
                    <button className='sm:px-8 sm:py-3 px-4 py-2 bg-opacity-75 border-2 border-double transition-all duration-200 hover:bg-red-800 flex items-center rounded-md text-white '>
                        <span>
                            <MdOutlineShoppingCart className='w-[1.3rem] h-[1.3rem] sm:w-[1.3rem] sm:h-[1.3rem]' />
                        </span>
                    </button>
                    <HiBars3BottomRight onClick={openNav} className='lg:hidden w-[2rem] text-white' />
                    {/* Profile button */}
                    <button className='hidden lg:flex px-6 py-2 sm:px-4 sm:py-3 bg-opacity-75 border-2 border-double transition-all duration-200 hover:bg-red-800 flex items-center rounded-md space-x-2 text-white '>
                        <span>
                            <CgProfile className=' w-[1.3rem] h-[1.3rem] sm:w-[1.3rem] sm:h-[1.3rem]' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav

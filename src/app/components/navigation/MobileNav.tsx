import React from 'react'
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";

interface Props{
    showNav: boolean;
    closeNav:()=> void;
}

const MobileNav = ({closeNav,showNav }:Props) => {

    const navStyle= showNav ? "translate-x-0":"translate-x-[-100%]";

    return (
    <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
            <RxCross2 
            onClick={closeNav} 
            className='text-[4px] absolute top-[2rem]  right-[2rem] w-[2rem] h-[2rem] text-white' />
            {/* Nav div */}
            <div className={` bg-linear-to-r from-red-950 from-40% to-black ${navStyle} transition-all-500 delay-200 text-white flex flex-col items-center justify-center w-[70%] h-[100%]`}>
                {/* Nav links */}
                <ul className='space-y-10'>
                    <li className='text-[35px] font-medium hover:text-orange-500 transition-all duration-200 text-white'>
                        <Link href="/">Hub</Link>
                    </li>
                    <li className='text-[35px] font-medium hover:text-orange-500 transition-all duration-200 text-white'>
                        <Link href="/">Produtos</Link>
                    </li>
                    <li className='text-[35px] font-medium hover:text-orange-500 transition-all duration-200 text-white'>
                        <Link href="/">Pedidos</Link>
                    </li>
                    <li className='text-[35px] font-medium  hover:text-orange-500 transition-all duration-200 text-white'>
                        <Link href="/">Lista de Pedidos</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNav

"use client"
import React from 'react'
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { IoBagCheckOutline, IoClipboardOutline, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { PiShoppingCartLight } from "react-icons/pi";


interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {

    const navStyle = showNav ? "translate-x-0" : "translate-x-full";

    return <div className={`fixed ${navStyle} inset-0  transition-all duration-500`}>
        <div className={`absolute inset-0 transition-all duration-500 left-0 bottom-0 h-full z-10`} onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            closeNav()


        }}
        />

        <div className={`p-6 max-w-2xs bg-linear-to-b from-red-900 from-40% to-black inset-y-0 right-0 absolute z-20`}>

            <button className={`absolute top-1 left-2 size-10`}>
                <RxCross2
                    onClick={closeNav}
                    className='text-white w-6 h-8' />
            </button>
            <div className='m-[25px]'></div>
            <button className='p-3 -ml-2 w-[calc(100%+0.5rem)] p-2 gap-4 bg-red-800 flex items-center rounded-md text-white'>
                <FiUser className='w-6 h-6' />
                <span className='text-2xl font-medium'>Perfil</span>
            </button>

            <ul className='mt-6 text-3xl leading-none flex flex-col gap-6'>
                <li className='flex items-center gap-2 font-medium text-white'>
                    <IoHomeOutline className='w-6' />
                    <Link href="/">Início</Link>
                </li>
                <li className='flex items-center gap-2 font-medium text-white'>
                    <IoBagCheckOutline className='w-6' />
                    <Link href="/">Produtos</Link>
                </li>
                <li className='flex items-center gap-2 font-medium text-white'>
                    <PiShoppingCartLight className='w-6' />
                    <Link href="/">Pedidos</Link>
                </li>
                <li className='flex items-center gap-2 font-medium text-white'>
                    <IoClipboardOutline className='w-6' />
                    <Link href="/">Lista de pedidos</Link>
                </li>
                <li className='flex items-center gap-2 font-medium text-white'>
                    <IoSettingsOutline className='w-6' />
                    <Link href="/">Configurações</Link>
                </li>
            </ul>

        </div>
    </div>

}

export default MobileNav

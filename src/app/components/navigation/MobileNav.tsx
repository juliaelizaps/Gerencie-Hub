"use client"
import React from 'react'
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { IoBagCheckOutline, IoClipboardOutline, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { PiShoppingCartLight } from "react-icons/pi";
import { IconType } from 'react-icons';


interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {

    const sideBarItems: {
            title: string;
            href: string;
            Icon: IconType;
        }[] = [
                { title: "Início", href: "/", Icon: IoHomeOutline },
                { title: "Produtos", href: "/products", Icon: IoBagCheckOutline },
                { title: "Pedidos", href: "/orders", Icon: PiShoppingCartLight },
                { title: "Lista de pedidos", href: "/orders-list", Icon: IoClipboardOutline },
                { title: "Configurações", href: "/config", Icon: IoSettingsOutline },
                { title: "Perfil", href: "/profile", Icon: FiUser }
            ]

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
            <div className='mt-10 px-4'></div>
            <ul className='space-y-1'>
                    {sideBarItems.map(item =>
                    <li key={`sidebar-item-${item.href}`}>
                        <Link className='text-2xl flex items-center gap-6 rounded-md font-medium px-0 py-3 transition-colors hover:bg-red-800 text-white' 
                            href={item.href}>
                            <item.Icon className='w-6'/>
                            {item.title}
                        </Link>
                    </li>
                )}

                </ul>
        </div>
    </div>

}

export default MobileNav

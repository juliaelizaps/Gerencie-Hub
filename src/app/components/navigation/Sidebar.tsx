"use client";
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons';
import { FiUser } from "react-icons/fi";
import { IoBagCheckOutline, IoClipboardOutline, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { PiShoppingCartLight } from "react-icons/pi";

const SideBar = () => {

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

    return (
        <div className='flex inset-y-0 top-0 left-0 z-40 w-60 bg-red-700 hidden md:block h-[calc(100vh-72px)]'>

            <nav className='mt-5 px-4'>

                <ul className='space-y-2'>
                    {sideBarItems.map(item =>
                    <li key={`sidebar-item-${item.title}`}>
                        <Link className=' text-[18px] flex items-center gap-3 rounded-md px-3 py-3 transition-colors hover:bg-red-800/50 text-white focus:bg-red-800'
                            href={item.href}>
                            <item.Icon className='w-6' />
                            <span>{item.title}</span> 
                        </Link>
                    </li>
                )}

                </ul>
            </nav>

        </div>
    )
}

export default SideBar

"use client";
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import SideBar from './Sidebar';

type Props = {
  children: React.ReactNode
}

const ResponsiveNav = ({ children }: Props) => {
  const [showNav, setShowNav] = useState(false);
  const openNavhandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={openNavhandler}/>
      <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
      <div className="flex">
        <SideBar />
        {children}
      </div>

    </div>
  )
}

export default ResponsiveNav

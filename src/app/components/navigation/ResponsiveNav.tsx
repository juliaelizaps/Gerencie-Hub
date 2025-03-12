"use client";
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    // const [showNav, setShowNav]=useState(false);
    // const openNavhandler=()=>setShowNav(true);
    // const closeNavHandler=()=>setShowNav(false);
  return (
    <div>
      {/* <Nav openNav={openNavhandler}/>
      <MobileNav showNav={setShowNav} closeNav={closeNavHandler}/> */}
      <Nav />
      <MobileNav/>
    </div>
  )
}

export default ResponsiveNav

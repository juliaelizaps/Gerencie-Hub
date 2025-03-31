import React, { ComponentProps } from 'react'


const TabButton = ({children,...props}: ComponentProps<'button'>) => {
  return (
    <button {...props} className='flex inline-flex items-center justify-center p-1 text-[14px] bg-stone-200 text-stone-600 focus:bg-white focus:text-black rounded-sm'>
    {children}
  </button>
  )
}

export default TabButton

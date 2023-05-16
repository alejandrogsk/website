import React from 'react'
import LayoutX from './LayoutX'

const Footer = () => {
  return (
    <LayoutX>

    <footer className='flex flex-col gap-4 py-8 md:py-18 lg:py-20'>
        <span className='w-full h-[1px] bg-white mb-16'></span>
        <p className='text-center font-medium'>Copyright Alejandro Suarez - 2023</p>
    </footer>
    </LayoutX>
  )
}

export default Footer
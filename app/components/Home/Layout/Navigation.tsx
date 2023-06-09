import { Link, useLocation, useParams } from '@remix-run/react'
import React from 'react'


const Navigation = () => {
  let {pathname} = useLocation()

  return (
    <header className='absolute top-0 left-0 right-0'>
        <nav className='flex justify-between mt-4 mx-6'>
            <Link to="/" className='font-anton uppercase'>Alejandro Suarez</Link>

            <ul className='flex gap-2'>
                <li ><Link to="/" className={`p-2 py-[2px] uppercase border-white border-[1px] rounded-[20px] text-[10px] hover:bg-white hover:text-black
                ${pathname === "/" && "text-black bg-white"}
                `}>Home</Link></li>
                <li><Link to="/projects" className={`p-2 py-[2px] uppercase border-white border-[1px] rounded-[20px] text-[10px] hover:bg-white hover:text-black
                ${pathname.startsWith("/projects") && "text-black bg-white"}
                `}>Projects</Link></li>
                <li><Link to="/blog" className={`p-2 py-[2px] uppercase border-white border-[1px] rounded-[20px] text-[10px] hover:bg-white hover:text-black
                ${pathname.startsWith("/blog") && "text-black bg-white"}
                `}>Blog</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation
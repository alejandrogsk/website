import { useEffect } from 'react'

import {motion, useAnimation} from "framer-motion"
import profilePicture from "../../assets/suarez-min-1.webp"
import { useInView } from 'react-intersection-observer'
const Hero = () => {

  const title:string = "Web developer specialized in headless architecture";
 


  return (
    <div className="flex flex-col min-h-screen">
            <h1  className="mt-32 uppercase text-center text-[45px] md:text-[60px] lg:text-[80px] xl:text-[95px] big:text-[110px]">
              {title}
            </h1>
            <p className="my-12 mx-auto text-2xl text-cGrey-main	text-center w-full xs:w-[300px] lg:w-[740px]">
              I’m a specialist in development of headless web aplicaiton. I been working with sereval companies throw the years so I can help you with your project
            </p>
            <a href="#contact" className="grid grid-cols-[max-content_max-content] gap-2 mx-auto items-center cursor-pointer">
              <div className="relative">
                <img src={profilePicture} alt="Alejandro Suarez" width={70} height={70} 
                className="rounded-full z-10"
                />
              <span className="z-20 absolute bottom-1 right-1 block h-4 w-4 rounded-full border-white border-[1px] bg-green-500"></span>
              </div>
              <div className="flex flex-col">
                <div className="font-anton text-xl">You can contact me right now!</div>
                <span className="block h-2 w-full bg-cRed-main"></span>
              </div>
            </a>
            <span className='w-full h-[1px] bg-white my-40'></span>
        </div>
  )
}



export default Hero
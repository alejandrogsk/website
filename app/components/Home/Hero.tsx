import { useEffect } from 'react'

import {motion, useAnimation} from "framer-motion"
import profilePicture from "../../assets/suarez-min-1.webp"
import { useInView } from 'react-intersection-observer'
const Hero = () => {
    const title:string = "Web developer specialized in headless architecture";
    const titleControls = useAnimation();
    const paragraphControls = useAnimation();
    const profileControls = useAnimation();
    const [ titleRef, isTitleInView] = useInView();
    const [ subtitleRef, isSubtitleInView] = useInView();
    const [ profileRef, isProfileRefInView] = useInView();
    const banner = {
        initial: {
            opacity: 0,
            y: 200
        },
        animate: {
            y:0,
            opacity:1,
            transition: {
                duration: 1
            }
        },
    }
  
    
    //Title Effect
    useEffect(() => {
        if(titleControls){
            titleControls.start("animate")
        }
    }, [isTitleInView, titleControls] )


    //Title Effect
    useEffect(() => {
        if(profileControls){
            profileControls.start("animate")
        }
    }, [isProfileRefInView, profileControls] )




  return (
    <div className="flex flex-col min-h-screen">
            <motion.h1 
            ref={titleRef}
              className="font-anton mt-80 uppercase text-center text-[40px] md:text-[60px] lg:text-[80px] xl:text-[95px] big:text-[110px]"
           //  variants={banner} initial="initial" animate={titleControls}
           >
              {
                title
              }
            </motion.h1>
            <motion.p className="my-12 mx-auto text-2xl text-cGrey-main	text-center w-full xs:w-[300px] lg:w-[740px]"
                variants={banner} initial="initial" animate="animate"
            >
                I’m a specialist in development of headless web aplicaiton. I been working with sereval companies throw the years so I can help you with your project</motion.p>
            <motion.a 
            ref={profileRef}
            variants={banner} initial="initial" animate={profileControls}
            className="grid grid-cols-[max-content_max-content] gap-2 mx-auto items-center cursor-pointer">
              <div className="relative">
                <img src={profilePicture} alt="Alejandro Suarez" width={70} height={70} 
                className="rounded-full z-10"
                />
              <span className="z-20 absolute bottom-1 right-1 block h-4 w-4 rounded-full border-white border-[1px] bg-green-500"></span>
              </div>
              <a className="flex flex-col">
                <div className="font-anton text-xl">You can contact me right now!</div>
                <span className="block h-2 w-full bg-cRed-main"></span>
              </a>
            </motion.a>
            
            <span className='w-full h-[1px] bg-white my-40'></span>
        </div>
  )
}



export default Hero
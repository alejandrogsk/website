import React from 'react'
import image from "../../assets/ecommerce-phone.webp"
const data = [
    "Small business that are starting in the web world and want to stat with the right foot, quick and safe.",
    "Medium size business that already are selling online and want to improove their web perfomance throw new channels",
    "Marketing agencies, startups or any other kind of digital company that need some extra hands for their proyect.",
    "Big compaines that need a custom aproach for the ecommerce experience that want to bring to their customers."
]

const Companies = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center  min-h-screen py-20 md:py-32 lg:py-40  gap-20'>
        <div>
        <h2 className='font-anton text-[1.8rem] lg:text-[2.5rem] big:text-[3.125rem] big:leading-[3.75rem] uppercase big:text-[5rem]'>What kind of companies do I work with?</h2>
        <div className='grid grid-cols-1 gap-[1rem] big:gap-[5rem] my-[4rem]'>
            {
                data.map((paragraph, i)=>(
                    <div key={i} className='grid grid-cols-[max-content_1fr]  gap-4'>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.332 20.8334L18.332 25.8334L26.6654 15.8334" stroke="#ACACAC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.9987 36.6667C29.2034 36.6667 36.6654 29.2048 36.6654 20C36.6654 10.7953 29.2034 3.33337 19.9987 3.33337C10.794 3.33337 3.33203 10.7953 3.33203 20C3.33203 29.2048 10.794 36.6667 19.9987 36.6667Z" stroke="#ACACAC" strokeWidth="2"/>
                        </svg>
                        <p className='text-cGrey-main'>{paragraph}</p>
                    </div>
                ))
            }
        </div>
        </div>

        <div className='relative'>
            <img src={image} alt="Ecommerce headless development image" width={380} height={568} className='relative z-20'/>
            <span className='absolute bottom-[-20px] right-0 z-10 block bg-white h-[6rem] w-[20rem]'></span>
        </div>
    
    </div>
  )
}

export default Companies
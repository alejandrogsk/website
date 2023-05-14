import React from 'react'

type Service = {
    title?: string;
    image?:{
        url:string;
    };
    description: string
}
const ServiceGrid = ({services}:{services:Service[]}) => {
  return (
    <div className='py-40 grid grid-cols-1 lg:grid-cols-2  gap-20'>
        {
            services.map((service:Service, i:number) => (
                <div
                key={i}
                className='last:mt-20'
                >
                    {
                        service?.image && 
                        <img src={service.image.url} alt={`Image number ${i}`} width={320} height={80} className='h-[3.75rem] w-auto '/> 
                    }
                    {
                        service?.title && 
                        <h2 className='font-anton text-[3.125rem] leading-[3.75rem] uppercase big:text-[5rem]'>{service.title}</h2>
                    }
                    <p className='text-cGrey-main mt-6'>{service.description}</p>
                    <a className='inline-block mt-8 font-anton cursor-pointer underline hover:text-cGrey-main'>View More</a>
                </div>
            ))
        }
    </div>
  )
}

export default ServiceGrid
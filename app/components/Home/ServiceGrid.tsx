import React from 'react'

type Service = {
    title?: string;
    companiesImage?:{
        url:string;
        description?: string;
    };
    text: string
}
const ServiceGrid = ({services}:{services:Service[]}) => {
  return (
    <div className='py-20 md:py-32 lg:py-40  grid grid-cols-1 lg:grid-cols-2  gap-20'>
        {
            services.map((service:Service, i:number) => (
                <div
                key={i}
                className='last:mt-20'
                >
                    {
                        service?.companiesImage && 
                        <img src={service.companiesImage.url} alt={`${service.companiesImage.description ?? `Image number ${i}`}`} width={320} height={80} className='h-[3.75rem] w-auto '/> 
                    }
                    {
                        service?.title && 
                        <h2 className='font-anton text-[1.8rem] lg:text-[2.5rem] big:text-[3.125rem] big:leading-[3.75rem] uppercase '>{service.title}</h2>
                    }
                    <p className='text-cGrey-main mt-6'>{service.text}</p>
                    <a className='inline-block mt-8 font-anton cursor-pointer underline hover:text-cGrey-main'>View More</a>
                </div>
            ))
        }
    </div>
  )
}

export default ServiceGrid
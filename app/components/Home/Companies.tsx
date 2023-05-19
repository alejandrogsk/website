import { useLoaderData } from '@remix-run/react';
import { loader } from '~/routes/_index';


const Companies = () => {
    const { results } = useLoaderData<typeof loader>();

    const { companiesTitle, companiesList, companiesImage } = results.home

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center  min-h-screen py-20 md:py-32 lg:py-40  gap-20'>
        <div>
        <h2 className='font-anton text-[1.8rem] lg:text-[2.5rem] big:text-[3.125rem] big:leading-[3.75rem] uppercase big:text-[5rem]'>{companiesTitle}</h2>
        <ul className='grid grid-cols-1 gap-[1rem] big:gap-[5rem] my-[4rem] '>
            {
                companiesList.map((paragraph, i)=>(
                    <li key={i} className={`grid grid-cols-[max-content_1fr]  gap-4 `}>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.332 20.8334L18.332 25.8334L26.6654 15.8334" stroke="#ACACAC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.9987 36.6667C29.2034 36.6667 36.6654 29.2048 36.6654 20C36.6654 10.7953 29.2034 3.33337 19.9987 3.33337C10.794 3.33337 3.33203 10.7953 3.33203 20C3.33203 29.2048 10.794 36.6667 19.9987 36.6667Z" stroke="#ACACAC" strokeWidth="2"/>
                        </svg>
                        <p className='text-cGrey-main'>{paragraph}</p>
                    </li>
                ))
            }
        </ul>
        </div>

        <div className='relative'>
            <img src={companiesImage.url} alt={companiesImage.description} width={380} height={568} className='relative z-20'/>
            <span className='absolute bottom-[-20px] right-0 z-10 block bg-white h-[6rem] w-[20rem]'></span>
        </div>
    
    </div>
  )
}

export default Companies
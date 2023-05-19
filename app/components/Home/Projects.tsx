import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";

const Projects = () => {

    const { results } = useLoaderData<typeof loader>();
    const projects = results.projects.projectCollection.items
  return (
    <div className='min-h-screen py-20 md:py-32 lg:py-40 grid grid-cols-1 gap-28'>
        {
            projects.map((project:any, i:number) => (
                <div key={i} className='grid grid-cols-1  lg:grid-cols-2 gap-x-8 gap-y-2 overflow-hidden'>
            <div className=' flex flex-col'>
                <h2 className='font-anton text-[1.8rem] lg:text-[2.5rem] big:text-[3.125rem] big:leading-[3.75rem] uppercase big:text-[5rem]'>{project.title}</h2>

                <div className='mb-4 mt-3 flex gap-2 text-cGrey-main'>
                    {
                        project.tech.map((tool:string, idx:number) => <span key={idx} className='text-[10px] p-2 py-[2px] uppercase border-white border-[1px] rounded-[20px]'>{tool}</span>)
                    }
                </div>

                <p className='mt-4 lg:mt-auto text-cGrey-main'>{project.description}</p>

                <a className='mt-3  font-anton cursor-pointer underline hover:text-cGrey-main'>View More</a>
            </div>
            <div className='grid place-content-center col-start-1 lg:col-start-2 max-w-full  mb-8 lg:mb-0'>
                <img src={project.image.url} alt={`${project.image.description} image`} width={692} height={400} className="rounded-[5px]"/>
            </div>
        </div>
            ))
        }
    </div>
  )
}


export default Projects
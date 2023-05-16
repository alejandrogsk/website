import React, { useEffect } from 'react'
import image from "../../assets/project.png"
import {motion, useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'
const projects = [
    {
        title: "Forms Render podcast",
        desc: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit.",
        img: image,
        tools: ["Strapi CMS", "NextJs 13"]
    },
    {
        title: "Vicente Gutiérrez portfolio",
        desc: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit.",
        img: image,
        tools: ["Strapi CMS", "NextJs 13"]
    },
    {
        title: "Studio Ademas Website",
        desc: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit.",
        img: image,
        tools: ["Strapi CMS", "NextJs 13"]
    },
    {
        title: "The site that you are lookig right now",
        desc: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit.",
        img: image,
        tools: ["Contentful CMS", "Remix Js"]
    },
    {
        title: "JAM Stack landing page",
        desc: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit.",
        img: image,
        tools: ["Contentful CMS", "Remix Js"]
    },
    {
        title: "Plan Web Website",
        desc: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit.",
        img: image,
        tools: ["NextJs"]
    }
]
const Projects = () => {
  return (
    <div className='min-h-screen py-20 md:py-32 lg:py-40 grid grid-cols-1 gap-20'>
        {
            projects.map((project) => (
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2 overflow-hidden'>
                <h2 className='col-start-1 lg:col-end-3 font-anton text-[1.8rem] lg:text-[2.5rem] big:text-[3.125rem] big:leading-[3.75rem] uppercase big:text-[5rem]'>{project.title}</h2>
            <div className=' flex flex-col'>

                <div className='mb-4 flex gap-2 text-cGrey-main'>
                    {
                        project.tools.map((tool) => <span className='text-[10px] p-2 py-[2px] uppercase border-white border-[1px] rounded-[20px]'>{tool}</span>)
                    }
                </div>

                <p className='text-cGrey-main'>{project.desc}</p>

                <a className='mt-6 lg:mt-auto font-anton cursor-pointer underline hover:text-cGrey-main'>View More</a>
            </div>
            <div className='grid place-content-center max-w-full row-start-1 lg:col-start-2 lg:row-start-2 mb-8 lg:mb-0'>
                <img src={project.img} alt={`${project.title} image`} width={692} height={400}/>
            </div>
        </div>
            ))
        }
    </div>
  )
}


export default Projects
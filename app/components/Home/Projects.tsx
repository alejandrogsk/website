import React, { useEffect } from 'react'
import image from "../../assets/project.png"
import {motion, useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'
const projects = [
    {
        title: "Forms Render podcast",
        desc: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit.",
        img: image
    },
    {
        title: "Forms Render podcast",
        desc: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit.",
        img: image
    }
]
const Projects = () => {
    let project = projects[0];
  return (
    <div className='min-h-screen py-40'>
        <div className='grid grid-cols-1 lg:grid-cols-2 border-[1px] border-white rounded-[20px] overflow-hidden'>
            <div className='py-16 px-8 flex flex-col'>
                <h2 className='font-anton text-[2.5rem] leading-[3.75rem] uppercase big:text-[5rem]'>{project.title}</h2>
                <p className='text-cGrey-main'>{project.desc}</p>

                <a className='mt-auto font-anton cursor-pointer underline hover:text-cGrey-main'>View More</a>
            </div>
            <div className='grid bg-white py-16 px-8 max-w-full'>
                <img src={project.img} alt={`${project.title} image`} width={692} height={400}/>
            </div>
        </div>
    </div>
  )
}


export default Projects
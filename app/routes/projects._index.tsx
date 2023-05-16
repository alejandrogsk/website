import React from 'react'
import LayoutX from '~/components/Home/Layout/LayoutX'
import Projects from '~/components/Home/Projects'

const projects = () => {
  return (
    <LayoutX>
      <div className='py-20'>
        <h1 className='uppercase text-[45px] md:text-[60px] lg:text-[80px] xl:text-[95px] big:text-[110px]'>Those are some of the projects where I've worked</h1>
      <Projects />
      </div>
    </LayoutX>
  )
}

export default projects
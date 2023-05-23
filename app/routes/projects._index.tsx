import { useLoaderData } from '@remix-run/react';
import React from 'react'
import LayoutX from '~/components/Home/Layout/LayoutX'
import Projects from '~/components/Home/Projects'
import { gqlClient } from '~/graphql/client';
import { GET_PROJECTS } from '~/graphql/querys/Projects';
import { Project } from '~/types/Project';


export const loader = async (): Promise<{ ok: boolean; results: {projects: Project[]} }> => {
  const client = gqlClient();
  const reqProjects:{projectCollection: {items: Project[]}} = await client.request(GET_PROJECTS, {limit: 3})
  const projects = reqProjects.projectCollection.items

  return { ok: true, results: { projects } };
};


const projects = () => {
  const { results } = useLoaderData<typeof loader>();

  return (
    <LayoutX>
      <div className='py-20'>
        <h1 className='uppercase text-[45px] md:text-[60px] lg:text-[80px] xl:text-[95px] big:text-[110px]'>Those are some of the projects where I've worked</h1>
      <Projects projects={results.projects} />
      </div>
    </LayoutX>
  )
}

export default projects
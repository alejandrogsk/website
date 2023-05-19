import type { ActionArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gqlClient } from "~/graphql/client";
import Hero from "~/components/Home/Hero";
import Companies from "~/components/Home/Companies";
import Projects from "~/components/Home/Projects";
import ServiceGrid from "~/components/Home/ServiceGrid";
import Carousel from "~/components/Carousel";
import ContactSections from "~/components/Home/ContactSections";
import {
  validationError,
} from "remix-validated-form";
import LayoutX from "~/components/Home/Layout/LayoutX";
import { IHomePage } from "~/types/HomePage";
import {GET_HOME_PAGE, GET_HOME_PAGE_PROJECTS} from "~/graphql/querys/HomePage";
import validator from "~/utils/FormValidation";

export const loader = async (): Promise<{ ok: boolean; results: {home: IHomePage, projects: any} }> => {
  const client = gqlClient();
  const reqHome = await client.request<{ homePage: IHomePage }>(GET_HOME_PAGE, {
    id: "1qwQQiqgCH7aLvH4KdgrHa" //Home page ID
  });

  const reqProjects = await client.request(GET_HOME_PAGE_PROJECTS, {limit: 3})

  return { ok: true, results: {home: reqHome.homePage, projects: reqProjects} };
};

export const meta: V2_MetaFunction<typeof loader> = ({
  data,
}) => {
  return [{ title: data.results.home.seo.seoTitle }];
};

export async function action({request}:ActionArgs) {
  const data = await validator.validate( await request.formData() );
  if (data.error) return validationError(data.error);

  const { clientName } = data.data;

  return json({ message: `Thanks ${clientName}. I will contact you as soon as possible.`}, {status: 200})
}

export default function Index() {
    const { results } = useLoaderData<typeof loader>();
    const { servicesCollection, technologiesCollection } = results.home

    console.log(servicesCollection, technologiesCollection )
    return (
      <div>
        <LayoutX>
         <>
         <Hero />
          <Companies />
          <Projects />
          <ServiceGrid services={servicesCollection.items}/>
          </>
        </LayoutX>
      <Carousel />
        <LayoutX>
          <>
          <ServiceGrid services={technologiesCollection.items}/>
        <ContactSections />
        </>
        </LayoutX>
      </div>
    );
}



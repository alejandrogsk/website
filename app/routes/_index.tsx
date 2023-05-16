import type { ActionArgs, V2_MetaFunction } from "@remix-run/node";
import profilePicture from "../assets/suarez-min-1.webp"
export const meta: V2_MetaFunction = () => {
    return [{ title: "New Remix App" }];
};

import { json } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";
import { gqlClient } from "~/graphql/client";
import {motion} from "framer-motion"
import Hero from "~/components/Home/Hero";
import Companies from "~/components/Home/Companies";
import Projects from "~/components/Home/Projects";
import ServiceGrid from "~/components/Home/ServiceGrid";

import nextImage from "../assets/Nextjs.webp"
import remixImage from "../assets/Remix.webp"
import Carousel from "~/components/Carousel";
import { ReactElement } from "react";
import ContactSections from "~/components/Home/ContactSections";

import { withZod } from "@remix-validated-form/with-zod";
import {
  ValidatedForm,
  validationError,
} from "remix-validated-form";
import { z } from "zod";
//This works well
// const GET_HOME_PAGE = gql`
//   query getAllHomePage( $id: String = "28CPDaPE6St64rJJcezSSO"){
//     homePage( id: $id){
//       title
//       slug
//       description
//       overview
//       overviewItems
//       overviewImage {
//         title
//         url
//       }
//     }
    
//   }
// `;

const GET_HOME_PAGE = gql`
  query getHomePage($limit: Int = 1){
    homePage(limit:$limit){
      title
      slug
      description
      overview
      overviewItems
      overviewImage {
        title
        url
      }
    }
    
  }
`;


// export const loader = async () => {
//     const client = gqlClient();
//     const res = await client.request(GET_HOME_PAGE);
//     return json({ ok: true, homePage: res });
// };



export const validator = withZod(
  z.object({
    clientName: z
      .string({required_error: "Name is required"})
      .min(3, { message: "Use at least 3 characters" })
      .max(30, { message: "Use up to 30 characters"}),
    clientLastName: z
      .string({required_error: "Surename is required"})
      .min(3, { message: "Use at least 3 characters" })
      .max(30, { message: "Use up to 30 characters"}),
    clientEmail: z
      .string({required_error: "Email is required"})
      .min(1)
      .max(30)
      .email("Must be a valid email"),
      clientCompany: z
      .string({required_error: "Company is required"})
      .min(3, { message: "Use at least 3 characters" })
      .max(30, { message: "Use up to 30 characters"})
  })
);

export async function action({request}:ActionArgs) {
  const data = await validator.validate( await request.formData() );
  if (data.error) return validationError(data.error);

  const { clientName, clientLastName, clientEmail, clientCompany } = data.data;

  console.log(clientName, clientLastName, clientEmail, clientCompany)

  return json({ message: `Thanks ${clientName}. I will contact you as soon as possible.`}, {status: 200})
}

export default function Index() {
    // const { homePage } = useLoaderData<typeof loader>();
    // console.log("data: ", homePage);
    // const { title } = homePage.homePage;

    const services = [
      {
        title: "headless web development",
        description: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit."
      },
      {
        title: "headless e-commerce",
        description: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit."
      }
    ]

    const platforms = [
      {
        image: {url: nextImage},
        description: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit."
      },
      {
        image:{url: remixImage},
        description: "Ut repellendus totam est facilis accusantium vel ducimus dolore. Ad beatae repellat ut unde nobis hic culpa dolor rem eligendi dicta et eaque nesciunt id rerum excepturi. Vel facere eaque eum quae ullam sit optio officiis. Et consequuntur autem nam odio sint sed quos quasi qui sint fugit."
      }
    ]

    

    return (
      <div className="">
        <Layout><Hero /></Layout>
        <Layout><Companies /></Layout>
        <Layout><Projects /></Layout>
        <Layout><ServiceGrid services={services}/></Layout>
      <Carousel />
        <Layout><ServiceGrid services={platforms}/></Layout>
        <Layout><ContactSections /></Layout>
      
      
      
      
      
      </div>
    );
}


const Layout = ({children}:{children:ReactElement}) => {

  return(
    <div className="grid grid-cols-1 max-w-[95%] md:max-w-[80%] mx-auto">
{children}
    </div>
  )
}
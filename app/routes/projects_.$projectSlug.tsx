import {
    ActionArgs,
    LoaderArgs,
    json,
  } from "@remix-run/node"; // or cloudflare/deno
  import { useLoaderData, useParams } from "@remix-run/react";
  
  export const loader = async ({ params }: LoaderArgs) => {
    console.log(params.projectSlug);

    return json({result: params.projectSlug})
  };
  
  // export const action = async ({ params }: ActionArgs) => {
  //   console.log(params.projectSlug);
  // };
  
  export default function ProjectRoute() {
    const {result} = useLoaderData()

    return(
        <div>
            <h1 className="mt-80">This is a route for the project {result}</h1>
            <p>What else can i do?</p>
        </div>
    )
  }
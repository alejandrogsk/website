import { gql } from "graphql-request";

export const GET_PROJECTS = gql`
  query getHomePageProjects($limit: Int = 2) {
    projectCollection(limit: $limit){
    items {
      title
      description
      tech
      image {
        url
        description
      }
    }
  }
  }
`
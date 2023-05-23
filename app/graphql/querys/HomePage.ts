import { gql } from "graphql-request";




export const GET_HOME_PAGE = gql`
  query getHomePage($id:String!){
    homePage(id:$id) {
    title
    subtitle
    cta
    companiesTitle
    companiesList
    companiesImage {
      description
      url
    }
    servicesCollection{
      items {
        title
        text
      }
    }
    technologiesCollection{
      items {
        image {
          url
          description
        }
        title
        text
      }
    }
    carouselCollection {
      items {
        description
        url
      }
    }
    seo {
      seoTitle
      description
      keywords
    }
  }
  }
`;
export interface IHomePage {
    title: string;
    subtitle: string;
    cta: string;
    companiesTitle: string;
    companiesList: string[];
    companiesImage: {
      description: string;
      url: string;
    }
    servicesCollection: {
      items: {
        title: string;
        text: string;
      }[];
    };
    technologiesCollection: {
      items: {
        image: {
          url: string;
          description: string;
        };
        title: string;
        text: string;
      }[];
    };
    carouselCollection: {
      items: {
        description: string;
        url: string;
      }[];
    };
    seo: {
      seoTitle: string;
      description: string;
      keywords: string[];
    };
  }
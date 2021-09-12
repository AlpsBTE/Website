export interface ISet {
  navItems: {
    aboutUs: string;
    gallery: string;
    downloads: string;
    faq: string;
    application: string;
    contact: string;
  };
  pages: {
    home: {
      headline: string;
      joinUs: string;
      contentBlocks: {
        mission: {
          title: string;
          description: string;
        };
        server: {
          title: string;
          description: string;
        };
        how: {
          title: string;
          description: string;
        };
      };
    };
  };
}

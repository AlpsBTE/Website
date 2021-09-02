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
      nested: {
        target: string;
      };
    };
  };
}

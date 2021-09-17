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
      copiedToClipboard: string;
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
    contact: {
      title: string;
      contact: {
        outreach: string;
        community: string;
        management: string;
      };
      socialMedia: string;
    };
  };
  footer: {
    copyright: string;
    rightsReserved: string;
    quickLinks: {
      team: string;
      showcase: string;
      help: string;
      socials: string;
    };
  };
}

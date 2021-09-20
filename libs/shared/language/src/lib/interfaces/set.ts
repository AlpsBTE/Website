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
    aboutUs: {
      title: string;
      description: string;
      contactUs: string;
    };
    gallery: { title: string; description: string };
    downloads: { title: string; description: string };
    faq: { title: string; description: string };
    application: {
      title: string;
      description: string;
      steps: {
        discord: {
          title: string;
          description: string;
        };
        plotSystem: {
          title: string;
          description: string;
        };
        applicationForm: {
          title: string;
          description: string;
        };
        becomingBuilder: {
          title: string;
          description: string;
        };
      };
    };
    contact: {
      title: string;
      description: string;
      contact: {
        outreach: string;
        community: string;
        management: string;
      };
      socialMedia: string;
    };
    error: {
      title: string;
      description: string;
      backHome: string;
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

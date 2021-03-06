/* eslint-disable */
export enum StaffRole {
  Manager,
  Helper,
  Reviewer,
  Developer,
  PublicRelation,
}

export interface IStaff {
  discordUsername: string;
  role: StaffRole;
  displayName: string;
  email?: `${string}@alps-bte.com`;
  /**
   * Defines whether a staff member will be displayed on the website contact section
   */
  contactable?: boolean;
}

export const contact = <const>{
  cinnazeyy: {
    discordUsername: 'Cinnazeyy#2440',
    role: StaffRole.Manager,
    displayName: 'Cinnazeyy',
    email: 'office@alps-bte.com',
    contactable: true,
  },
  r3tuxn: {
    discordUsername: 'R3tuxn#7169',
    role: StaffRole.Manager,
    displayName: 'R3tuxn',
    email: 'r3tuxn@alps-bte.com',
    contactable: false,
  },
  kami: {
    discordUsername: 'Kami#3480',
    role: StaffRole.Manager,
    displayName: 'Kami',
    email: 'kami@alps-bte.com',
    contactable: false,
  },
  napartas: {
    discordUsername: 'N. Apartas#7089',
    role: StaffRole.Manager,
    displayName: 'N. Apartas',
    email: 'press@alps-bte.com',
    contactable: true,
  },
  blackstarhd: {
    discordUsername: 'BlackStarHD#1333',
    role: StaffRole.Helper,
    displayName: 'BlackStar',
    email: 'blackstarhd@alps-bte.com',
  },
  chaosschnitzel: {
    discordUsername: 'ChaosSchnitzl#4206',
    role: StaffRole.Helper,
    displayName: 'ChaosSchnitzel',
    email: 'chaosschnitzel@alps-bte.com',
  },
  gartensocke: {
    discordUsername: 'Gartensocke#1525',
    role: StaffRole.PublicRelation,
    displayName: 'Gartensocke',
    email: 'gartensocke@alps-bte.com',
    contactable: true,
  },
  behemoth: {
    discordUsername: 'Behemoth#4026',
    role: StaffRole.Developer,
    displayName: 'Behemoth',
    contactable: true,
  },
  hohi: {
    discordUsername: 'Hohi#0675',
    role: StaffRole.Developer,
    displayName: 'Hohi',
    contactable: true,
  },
  jokil: {
    discordUsername: 'jo_kil#1977',
    role: StaffRole.Developer,
    displayName: 'jo_kil',
    contactable: false,
  },
  fxbyy: {
    discordUsername: 'Fxbyy#1753',
    role: StaffRole.PublicRelation,
    displayName: 'Fxbyy',
    email: 'fxbyy@alps-bte.com',
    contactable: true,
  },
};

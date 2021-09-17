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
  email?: string;
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
    email: 'cinnazeyy@alps-bte.com',
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
};

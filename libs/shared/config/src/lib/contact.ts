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
}

export const contact = <const>{};

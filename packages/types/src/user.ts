import { T_Model } from "./document";

export enum T_UserRole {
  Super = "super",
  Admin = "admin",
  User = "user",
  Moderator = "mod",
}

export type T_User = {
  name: string;
  email: string;
  image?: string;
  providers: string[];
  role?: T_UserRole;
} & T_Model;

import { SVGProps } from "react";

export interface IFooterClasses {
  root?: string;
  container?: string;
  list?: string;
  item?: string;
  copyrightText?: string;
}

export interface IIcon extends SVGProps<SVGSVGElement> {
  active?: boolean;
}

export interface IUser {
  fullName: string;
  id: string;
  isVerified: boolean;
  profilePictureUrl: string;
  username: string;
}

export interface ITag {
  posts: number;
  title: string;
  slug: string;
  id: string;
}

export interface IResource {
  height: number;
  width: number;
  src: string;
  type: "image" | "video";
}

export interface IPost {
  caption: string;
  id: string;
  slug: string;
  likers: IUser[];
  numComments: number;
  numLikes: number;
  owner: IUser;
  resources: IResource[];
  thumbnailSrc?: string;
  postedAt: number;
}

export interface IAnchorOrigin {
  horizontal?: "center" | "right" | "left";
  vertical?: "bottom" | "top";
}

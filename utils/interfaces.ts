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

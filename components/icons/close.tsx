import { IIcon } from "../../utils";

const CloseIcon = ({ active = false, ...rest }: IIcon) => {
  return (
    <svg {...rest} aria-label="Close" height="24" viewBox="0 0 24 24">
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="3"
        y2="21"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="21"
        y2="3"
      ></line>
    </svg>
  );
};

export default CloseIcon;

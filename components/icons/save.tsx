import { IIcon } from "../../utils/interfaces";

const SaveIcon = ({ active = false, ...rest }: IIcon) => {
  if (active) {
    return (
      <svg {...rest} aria-label="Remove" role="img" viewBox="0 0 24 24">
        <path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path>
      </svg>
    );
  }
  return (
    <svg {...rest} aria-label="Save" role="img" viewBox="0 0 24 24">
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};

export default SaveIcon;

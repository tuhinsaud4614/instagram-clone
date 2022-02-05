import { IIcon } from "../../utils/interfaces";

const CommentIcon = ({ active = false, ...rest }: IIcon) => {
  return (
    <svg {...rest} aria-label="Comment" role="img" viewBox="0 0 24 24">
      <path
        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

export default CommentIcon;

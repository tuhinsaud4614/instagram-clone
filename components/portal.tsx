import { ReactNode } from "react";
import ReactDom from "react-dom";

interface Props {
  children: ReactNode;
}

const Portal = ({ children }: Props) => {
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  return ReactDom.createPortal(
    children,
    document.getElementById("presentational") as HTMLElement
  );
};

export default Portal;

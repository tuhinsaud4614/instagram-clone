import classNames from "classnames";
import { ReactChild } from "react";
import { Portal } from ".";
import styles from "../styles/Dialog.module.css";

interface Props {
  header?: ReactChild;
  children?: ReactChild;
  footer?: ReactChild;
  show: boolean;
  onClose?(): void;
}

const Dialog = ({ header, children, footer, show = false, onClose }: Props) => {
  return (
    <Portal>
      {show && (
        <div
          className="bg-black/65 fixed inset-0 flex justify-center items-center z-100 animate-dialog"
          onClick={() => {
            onClose && onClose();
          }}
        >
          <div
            className={classNames("m-5 max-h-[calc(100%-40px)]", styles.Root)}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="bg-white rounded-xl overflow-hidden max-h-full">
              <div className=" flex flex-col">
                {header}
                {children}
                {footer}
              </div>
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
};

export default Dialog;

import classNames from "classnames";
import { ReactNode } from "react";
import { Portal } from ".";

interface Props {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  show: boolean;
  onClose?(): void;
  classes?: {
    backdrop?: string;
    container?: string;
    root?: string;
    content?: string;
  };
}

const Dialog = ({
  header,
  children,
  classes,
  footer,
  show = false,
  onClose,
}: Props) => {
  return (
    <Portal>
      {show && (
        <div
          className={classNames(
            "bg-black/65 fixed inset-0 flex justify-center items-center z-100",
            classes?.backdrop
          )}
          onClick={(e) => {
            e.stopPropagation();
            onClose && onClose();
          }}
        >
          <div
            className={classNames("animate-dialog", classes?.container)}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              className={classNames(
                "bg-white overflow-hidden max-h-full",
                classes?.root
              )}
            >
              <div className={classNames("flex flex-col", classes?.content)}>
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

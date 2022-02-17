import { useState } from "react";
import { IoIosMore } from "react-icons/io";
import { Dialog } from ".";

const MoreButton = () => {
  const [show, setShow] = useState(false);
  return (
    <button
      className="p-2 flex items-center justify-center"
      onClick={() => {
        setShow(true);
      }}
    >
      <IoIosMore size={24} className="text-neutral-800" />
      <Dialog
        show={show}
        onClose={() => {
          console.log("hi");
          setShow(false);
        }}
        classes={{
          container: "w-65 md1:w-100 m-5 max-h-[calc(100%-40px)]",
          root: "rounded-xl",
        }}
      >
        <button
          type="button"
          style={{ minHeight: 48 }}
          onClick={() => setShow(false)}
          className="dialog-btn block w-full text-accent-alt border-b border-sliver-200"
        >
          Report
        </button>
        <button
          type="button"
          style={{ minHeight: 48 }}
          onClick={() => setShow(false)}
          className="dialog-btn block w-full text-accent-alt border-b border-sliver-200"
        >
          Unfollow
        </button>
        <button
          type="button"
          style={{ minHeight: 48 }}
          onClick={() => setShow(false)}
          className="dialog-btn block w-full text-neutral-800 font-normal border-b border-sliver-200"
        >
          Go to post
        </button>
        <button
          type="button"
          style={{ minHeight: 48 }}
          onClick={() => setShow(false)}
          className="dialog-btn block w-full text-neutral-800 font-normal border-b border-sliver-200"
        >
          Share to...
        </button>
        <button
          type="button"
          style={{ minHeight: 48 }}
          onClick={() => setShow(false)}
          className="dialog-btn block w-full text-neutral-800 font-normal border-b border-sliver-200"
        >
          Copy Link
        </button>
        <button
          type="button"
          style={{ minHeight: 48 }}
          onClick={() => setShow(false)}
          className="dialog-btn block w-full text-neutral-800 font-normal border-b border-sliver-200"
        >
          Embed
        </button>
        <button
          type="button"
          style={{ minHeight: 48 }}
          onClick={() => setShow(false)}
          className="dialog-btn block w-full text-neutral-800 font-normal"
        >
          Cancel
        </button>
      </Dialog>
    </button>
  );
};

export default MoreButton;

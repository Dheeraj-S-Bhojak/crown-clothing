import { useEffect, useRef } from "react";
export const useClickOutSide = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let thisHandler = (event) => {
      event.stopPropagation();
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", thisHandler);
    return () => {
      document.removeEventListener("mousedown", thisHandler);
    };
  });
  return domNode;
};

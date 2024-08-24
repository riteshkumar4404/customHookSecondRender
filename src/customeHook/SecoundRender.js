import React, { createRef, useEffect, useRef } from "react";

export default function useSecondRender(fn, dep) {
  let renderRef = useRef(0);
  console.log("called");
  useEffect(() => {
    if (renderRef.current < 2) {
      renderRef.current += 1;
      console.log(renderRef.current)
      return;
    }
    fn();
  }, [dep]);
}

import classNames from "classnames";
import React from "react";

export default function Mask({children,show}) {
  if(show)
  return (
    <div
      style={{ height: window.outerHeight }}
      className={classNames("w-full bg-black/50 absolute z-30 top-0 left-0 flex justify-center transition-all duration-300 items-center",{
        "opacity-0 pointer-events-none":!show
      })}
    >{children}</div>
  );
}

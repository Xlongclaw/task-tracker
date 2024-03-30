import classNames from "classnames";
import React from "react";

export default function XTextField({ placeholder,onChange }) {
  const [focused, setFocused] = React.useState(false);
  const [inputValue,setInputValue] = React.useState("")
  const inputRef = React.useRef(null);


  React.useEffect(()=>{
    onChange(inputValue)
  },[inputValue])

  return (
    <div
      onClick={() => {
        setFocused(true);
        inputRef.current.focus();
      }}
      onBlur={() => setFocused(false)}
      className={classNames("text-sm font-medium border w-48 cursor-text relative rounded-full px-6 py-3 flex gap-4 items-center transition-all hover:border-black hover:text-black",{
        "border-accent":focused,
        "border-zinc-600 text-zinc-600":!focused
      })}
    >
      <h4
        className={classNames("transition-all", {
          "absolute top-[-10px] left-4 bg-white px-2 text-xs text-accent":
            focused === true || inputValue!=="" ,
        })}
      >
        {placeholder}
      </h4>
      <input
        ref={inputRef}
        spellCheck={false}
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        className={classNames(" focus:outline-none bg-inherit", {
          "w-0": focused  === false,
          "w-full": focused === true || inputValue!=="",
        })}
        type="text"
      />
    </div>
  );
}

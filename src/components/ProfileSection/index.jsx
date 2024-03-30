import React from "react";
import { FULL_NAME, USER_AVATAR, USER_NAME } from "./constants";

export default function ProfileScetion() {
  return (
    <div className="flex gap-2 hover:bg-zinc-200 p-3 cursor-pointer rounded-xl items-center">
      <div className="w-12 h-12 rounded-full border border-black overflow-hidden p-1">
        <img className="rounded-full" src={USER_AVATAR} />
      </div>
      <div>
        <h3 className="font-semibold text-sm">{FULL_NAME}</h3>
        <h3 className="text-xs font-medium text-accent">{USER_NAME}</h3>
      </div>
    </div>
  );
}

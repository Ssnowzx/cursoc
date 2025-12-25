import React from "react";

const FeatureTag = ({ icon: Icon, text, color }) => (
  <div
    className={`flex items-center gap-2 border-[3px] border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${color} font-bold text-sm whitespace-nowrap`}
  >
    <Icon size={18} strokeWidth={3} />
    {text}
  </div>
);

export default FeatureTag;

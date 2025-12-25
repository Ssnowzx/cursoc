import React from "react";

const Card = ({ children, className = "", title, color = "bg-white" }) => {
  return (
    <div
      className={`border-[3px] border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden ${color} ${className}`}
    >
      {title && (
        <div className="border-b-[3px] border-black bg-white px-4 py-2 font-black text-lg flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-black"></div>
          {title}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Card;

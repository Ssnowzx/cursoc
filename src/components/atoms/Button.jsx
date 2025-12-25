import React from "react";

const Button = ({ children, variant = "primary", className = "", onClick }) => {
  const baseStyle =
    "font-bold border-[3px] border-black rounded-lg px-6 py-3 transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2 inline-flex cursor-pointer select-none";

  const variants = {
    primary:
      "bg-[#a3e635] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#bef264]",
    secondary:
      "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50",
    dark: "bg-black text-white shadow-[4px_4px_0px_0px_rgba(163,230,53,1)] hover:bg-gray-900",
    accent:
      "bg-[#c084fc] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#d8b4fe]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

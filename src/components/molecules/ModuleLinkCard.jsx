import React from "react";
import { ArrowRight } from "lucide-react";

const ModuleLinkCard = ({ number, title, desc, onClick, color }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer block h-full flex flex-col relative overflow-visible z-10"
    >
      {/* Caixa Principal */}
      <div
        className={`h-full border-[3px] border-black rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] ${color} relative overflow-visible flex flex-col p-6`}
      >
        {/* Conteúdo (Topo) */}
        <div className="flex-grow mb-6">
          <div className="flex justify-between items-start mb-4">
            <span className="font-black text-4xl opacity-20 font-mono">
              {number < 10 ? `0${number}` : number}
            </span>
            <div className="bg-black text-white p-2 rounded-full border-2 border-black group-hover:rotate-45 transition-transform">
              <ArrowRight size={16} />
            </div>
          </div>

          <h3 className="text-2xl font-black mb-3 leading-tight text-black">
            {title}
          </h3>

          <p className="font-medium text-gray-900 opacity-90 text-sm leading-relaxed line-clamp-3">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModuleLinkCard;

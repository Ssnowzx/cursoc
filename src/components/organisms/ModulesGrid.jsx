import React from "react";
import { BookOpen } from "lucide-react";
import FeatureTag from "../atoms/FeatureTag";
import ModuleLinkCard from "../molecules/ModuleLinkCard";
import { modulesList } from "../../data/modules";

const ModulesGrid = ({ onModuleSelect }) => {
  return (
    <section
      id="modulos"
      className="py-20 px-4 border-t-[3px] border-black bg-white pattern-grid pattern-gray-100 pattern-opacity-50 pattern-size-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
              Trilha de{" "}
              <span className="bg-[#a3e635] px-2 border-[3px] border-black rounded inline-block transform -rotate-1">
                Estudos
              </span>
            </h2>
            <p className="text-xl font-bold text-gray-600">
              Clique em um módulo para iniciar.
            </p>
          </div>

          <div className="hidden md:block">
            <FeatureTag
              icon={BookOpen}
              text={`${modulesList.length} Módulos Disponíveis`}
              color="bg-cyan-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modulesList.map((mod, i) => (
            <div key={i} className="relative overflow-visible">
              <ModuleLinkCard
                number={i + 1}
                title={mod.title}
                desc={mod.desc}
                color={mod.color}
                onClick={() => onModuleSelect(i)}
              />

              {/* CTA button rendered as sibling so it's not clipped by card ancestors */}
              <div className="absolute left-6 right-6 -bottom-6 z-[9999]">
                <button
                  onClick={() => onModuleSelect(i)}
                  className="w-full bg-black text-white font-bold py-3 px-4 rounded-lg border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                >
                  Ler Aula
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;

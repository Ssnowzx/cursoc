import React from "react";
import { Terminal, Database, Layers } from "lucide-react";

const WhyLearnSection = () => {
  return (
    <section className="py-20 px-4 bg-[#c084fc] border-t-[3px] border-b-[3px] border-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-black mb-8 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] stroke-black"
          style={{ WebkitTextStroke: "1.5px black" }}
        >
          POR QUE APRENDER C?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Terminal size={32} className="mx-auto mb-2" />
            <h3 className="font-black text-lg">A Base de Tudo</h3>
            <p className="text-sm">
              Sistemas operacionais, kernels e drivers são feitos em C.
            </p>
          </div>
          <div className="bg-white p-6 border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Database size={32} className="mx-auto mb-2" />
            <h3 className="font-black text-lg">Performance</h3>
            <p className="text-sm">
              Nada supera a velocidade de um código C bem escrito.
            </p>
          </div>
          <div className="bg-white p-6 border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Layers size={32} className="mx-auto mb-2" />
            <h3 className="font-black text-lg">Entenda a Máquina</h3>
            <p className="text-sm">
              Saiba exatamente como o processador e a memória trabalham.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnSection;

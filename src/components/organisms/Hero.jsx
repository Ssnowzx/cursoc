import React from "react";
import { Zap, ArrowRight, ExternalLink, Terminal } from "lucide-react";
import Button from "../atoms/Button";
import Card from "../atoms/Card";

const Hero = () => {
  return (
    <header className="pt-40 pb-12 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
      <div className="space-y-8 animate-in slide-in-from-left duration-700">
        <div className="inline-flex items-center gap-2 bg-[#c084fc] border-[3px] border-black px-4 py-1 rounded-full font-black text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <Zap size={16} fill="black" /> Curso Open Source
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter">
          APRENDA C <br />
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-[#22d3ee] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] stroke-black"
            style={{ WebkitTextStroke: "2px black" }}
          >
            DE GRAÇA
          </span>
        </h1>
        <p className="text-xl font-medium text-gray-800 max-w-md">
          Material completo, direto ao ponto e sem cadastro. Do Hello World à
          Alocação Dinâmica de Memória.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="dark"
            className="text-lg px-8"
            onClick={() => {
              document
                .getElementById("modulos")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Começar a Ler <ArrowRight size={20} />
          </Button>
          <Button
            variant="secondary"
            className="text-lg px-8"
            onClick={() =>
              window.open("https://github.com/Ssnowzx/cursoc", "_blank")
            }
          >
            Ver Repositório <ExternalLink size={20} />
          </Button>
        </div>
      </div>

      {/* Hero Image / Visual */}
      <div className="relative flex justify-center md:justify-end mt-8 md:mt-0 animate-in slide-in-from-right duration-700">
        <div className="relative w-full max-w-md animate-float">
          <div className="absolute -top-6 -right-6 w-full h-full bg-[#a3e635] border-[3px] border-black rounded-xl z-0"></div>

          <Card
            title="terminal_aula_01"
            className="relative z-10 bg-[#1e1e1e] text-white"
          >
            <div className="font-mono text-sm md:text-base space-y-2">
              <p className="text-gray-400">// Sem login, sem paywall.</p>
              <p>&nbsp;</p>
              <p>
                <span className="text-[#c084fc]">void</span>{" "}
                <span className="text-yellow-300">aprender_c</span>() {"{"}
              </p>
              <p className="pl-4">
                <span className="text-[#569cd6]">while</span>(
                <span className="text-[#a3e635]">1</span>) {"{"}
              </p>
              <p className="pl-8">
                <span className="text-yellow-300">estudar</span>();
              </p>
              <p className="pl-8">
                <span className="text-yellow-300">evoluir</span>();
              </p>
              <p className="pl-4">{"}"}</p>
              <p>{"}"}</p>

              <div className="mt-6 pt-4 border-t-2 border-gray-700 flex gap-2 items-center">
                <span className="text-[#a3e635] font-bold">$</span>
                <span className="text-white">gcc main.c -o app && ./app</span>
                <span className="w-2.5 h-5 bg-[#a3e635] animate-pulse block"></span>
              </div>
            </div>
          </Card>

          <div className="absolute -bottom-4 -left-8 animate-float-delayed hidden md:block">
            <div className="bg-white border-[3px] border-black px-4 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 font-bold rotate-[-6deg]">
              <Terminal size={20} />
              <span>GCC Ready</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

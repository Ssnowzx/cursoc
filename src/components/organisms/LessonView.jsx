import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Zap, Check, Copy, Play } from "lucide-react";
import Button from "../atoms/Button";
import { modulesContent } from "../../data/modules";

const LessonView = ({ moduleIndex, onBack, onNext, onPrev }) => {
  const content = modulesContent[moduleIndex];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fffdf5] pt-28 pb-12 px-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <Button variant="secondary" onClick={onBack} className="text-sm px-4">
            <ArrowLeft size={18} /> Voltar para o Grid
          </Button>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              disabled={moduleIndex === 0}
              className="p-3 border-[3px] border-black rounded-lg bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <span className="font-black font-mono text-xl bg-yellow-300 px-3 py-2 border-[3px] border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              {moduleIndex + 1 < 10 ? `0${moduleIndex + 1}` : moduleIndex + 1}
            </span>
            <button
              onClick={onNext}
              disabled={!modulesContent[moduleIndex + 1]}
              className="p-3 border-[3px] border-black rounded-lg bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Theory */}
          <div className="space-y-6 flex flex-col h-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              {content.title}
            </h1>

            <div className="bg-[#c084fc] p-6 border-[3px] border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-black text-white text-lg mb-4 flex items-center gap-2 border-b-2 border-black/20 pb-2">
                <Zap size={20} className="text-yellow-300 fill-yellow-300" />{" "}
                CONCEITO
              </h3>
              <p className="font-bold text-lg leading-relaxed text-black whitespace-pre-line">
                {content.theory}
              </p>
            </div>

            <div className="bg-white p-6 border-[3px] border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-black text-gray-400 text-sm mb-2 uppercase flex items-center gap-2">
                <Check size={16} /> Dica do Dev
              </h3>
              <p className="font-medium text-gray-800 italic border-l-4 border-yellow-400 pl-4">
                "{content.highlight}"
              </p>
            </div>

            {/* BOTÃO DE PRÓXIMA AULA DENTRO DA LEITURA */}
            {modulesContent[moduleIndex + 1] ? (
              <div className="mt-8 pt-4 border-t-2 border-gray-200">
                <p className="font-bold text-gray-500 mb-2 uppercase text-sm">
                  Próximo Passo:
                </p>
                <button
                  onClick={onNext}
                  className="w-full bg-[#a3e635] text-black font-black text-xl py-4 border-[3px] border-black rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between px-6"
                >
                  {modulesContent[moduleIndex + 1].title}{" "}
                  <ArrowRight size={24} strokeWidth={3} />
                </button>
              </div>
            ) : (
              <div className="mt-8 pt-4 border-t-2 border-gray-200">
                <p className="font-bold text-center text-xl">
                  🎉 Você concluiu o curso!
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Code Editor */}
          <div className="relative group lg:sticky lg:top-28">
            <div className="absolute -top-3 -right-3 w-full h-full bg-[#a3e635] border-[3px] border-black rounded-xl z-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></div>

            <div className="relative z-10 bg-[#1e1e1e] border-[3px] border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              {/* Editor Header */}
              <div className="bg-[#2d2d2d] border-b-[3px] border-black p-3 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 font-mono text-xs">
                  aula_
                  {moduleIndex < 9 ? "0" + (moduleIndex + 1) : moduleIndex + 1}
                  .c
                </span>
                <button
                  onClick={handleCopy}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Copiar código"
                >
                  {copied ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Code Area */}
              <pre className="p-6 overflow-x-auto custom-scrollbar bg-[#1e1e1e] max-h-[60vh]">
                <code className="font-mono text-sm md:text-base leading-relaxed text-[#d4d4d4]">
                  {content.code.split("\n").map((line, i) => {
                    // Função simples de syntax highlighting
                    const highlightLine = (text) => {
                      // Escape HTML entities to keep original code safe
                      let safeText = text
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;");

                      // Use inline styles instead of Tailwind class names to avoid rendering issues
                      return safeText
                        .replace(
                          /(\/\/.*)/g,
                          '<span style="color:#6a9955;font-style:italic">$1</span>'
                        ) // line comments
                        .replace(
                          /(\/\*[\s\S]*?\*\/)/g,
                          '<span style="color:#6a9955;font-style:italic">$1</span>'
                        ) // block comments
                        .replace(
                          /(".*?")/g,
                          '<span style="color:#ce9178">$1</span>'
                        ) // strings
                        .replace(
                          /('.*?')/g,
                          '<span style="color:#ce9178">$1</span>'
                        ) // chars
                        .replace(
                          /\b(int|float|char|double|void|return|if|else|for|while|do|switch|case|break|continue|struct|typedef|default)\b/g,
                          '<span style="color:#c586c0;font-weight:700">$1</span>'
                        )
                        .replace(
                          /\b(\d+)\b/g,
                          '<span style="color:#b5cea8">$1</span>'
                        )
                        .replace(
                          /\b(printf|scanf|malloc|free|strcpy|strcmp|fopen|fclose|fprintf)\b/g,
                          '<span style="color:#dcdcaa">$1</span>'
                        )
                        .replace(
                          /(#include)/g,
                          '<span style="color:#c586c0;font-weight:700">$1</span>'
                        );
                    };

                    return (
                      <div
                        key={i}
                        className="table-row hover:bg-[#2d2d2d] transition-colors"
                      >
                        <span className="table-cell text-right pr-4 text-[#6e7681] select-none w-8 border-r border-[#404040] mr-4 opacity-50">
                          {i + 1}
                        </span>
                        <span
                          className="table-cell pl-4 whitespace-pre font-mono text-sm md:text-base leading-relaxed text-[#d4d4d4]"
                          dangerouslySetInnerHTML={{
                            __html: highlightLine(line) || "\u00A0",
                          }}
                        />
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>

            <div className="mt-8 flex justify-end relative z-40">
              <Button
                variant="dark"
                className="w-full md:w-auto relative z-50"
                onClick={() =>
                  window.open(
                    "https://www.onlinegdb.com/online_c_compiler",
                    "_blank"
                  )
                }
              >
                <Play size={18} className="text-[#a3e635]" /> Testar Código
                Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonView;

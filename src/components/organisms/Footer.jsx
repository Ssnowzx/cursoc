import React from "react";
import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 border-t-[6px] border-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-white text-black p-1 rounded border-2 border-white">
              <Code size={24} strokeWidth={3} />
            </div>
            <span className="font-black text-2xl">CURSO_C</span>
          </div>
          <p className="font-medium text-gray-400 max-w-xs">
            Projeto Open Source.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="#sobre" className="font-bold hover:text-[#a3e635]">
            Sobre
          </a>
          <a
            href="https://github.com/Ssnowzx/cursoc"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:text-[#a3e635]"
          >
            Contribuir
          </a>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-gray-800 font-mono text-sm text-gray-500">
        Made with ☕ by{" "}
        <a
          href="https://github.com/Ssnowzx"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline"
        >
          Snows
        </a>
      </div>
    </footer>
  );
};

export default Footer;

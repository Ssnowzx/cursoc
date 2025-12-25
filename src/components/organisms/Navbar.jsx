import React, { useState } from "react";
import { Code, Github, Linkedin, Menu, X } from "lucide-react";

const Navbar = ({ onLogoClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center p-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={onLogoClick}
        >
          <div className="bg-black text-white p-1 rounded border-2 border-black">
            <Code size={24} strokeWidth={3} />
          </div>
          <span className="font-black text-2xl tracking-tighter hover:text-[#a3e635] transition-colors">
            CURSO<span className="text-[#a3e635]">_C</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-bold">
          <a
            href="#modulos"
            className="hover:underline decoration-[3px] decoration-[#a3e635] underline-offset-4"
          >
            Módulos
          </a>
          <div className="flex gap-3">
            <a
              href="https://github.com/Ssnowzx"
              target="_blank"
              rel="noreferrer"
              className="p-2 border-2 border-black rounded hover:bg-[#a3e635] transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-ribeiro-madruga-b19b851b4/"
              target="_blank"
              rel="noreferrer"
              className="p-2 border-2 border-black rounded hover:bg-[#0077b5] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div className="px-4 py-2 bg-yellow-300 border-[3px] border-black rounded font-black text-sm uppercase transform rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            100% Free
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white border-[3px] border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-4 md:hidden z-40 animate-in slide-in-from-top-5">
          <a
            href="#modulos"
            className="font-bold text-xl py-2 border-b-2 border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Módulos
          </a>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Ssnowzx"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-bold"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-ribeiro-madruga-b19b851b4/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-bold"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

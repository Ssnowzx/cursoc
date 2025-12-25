import React, { useState } from "react";
import Home from "./pages/Home";
import LessonView from "./components/organisms/LessonView";
import { modulesContent } from "./data/modules";
import "./styles/global.css";

export default function App() {
  const [selectedModule, setSelectedModule] = useState(null);

  // Handler para scroll suave
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Se houver um módulo selecionado, renderiza a visualização da aula
  if (selectedModule !== null) {
    return (
      <LessonView
        moduleIndex={selectedModule}
        onBack={() => {
          setSelectedModule(null);
          scrollToTop();
        }}
        onNext={() => {
          if (modulesContent[selectedModule + 1]) {
            setSelectedModule(selectedModule + 1);
            scrollToTop();
          }
        }}
        onPrev={() => {
          if (selectedModule > 0) {
            setSelectedModule(selectedModule - 1);
            scrollToTop();
          }
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fffdf5] text-black font-sans selection:bg-[#a3e635]">
      <Home
        onModuleSelect={(index) => {
          setSelectedModule(index);
          scrollToTop();
        }}
        onLogoClick={() => setSelectedModule(null)}
      />
    </div>
  );
}

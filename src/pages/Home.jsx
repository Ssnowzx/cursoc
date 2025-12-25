import React, { useEffect, useState } from "react";
import Navbar from "../components/organisms/Navbar";
import Hero from "../components/organisms/Hero";
import ModulesGrid from "../components/organisms/ModulesGrid";
import WhyLearnSection from "../components/organisms/WhyLearnSection";
import Footer from "../components/organisms/Footer";
import About from "./About";

const Home = ({ onModuleSelect, onLogoClick }) => {
  const [route, setRoute] = useState(window.location.hash || "");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route === "#sobre") {
    return <About />;
  }

  return (
    <>
      <Navbar onLogoClick={onLogoClick} />
      <Hero />
      <ModulesGrid onModuleSelect={onModuleSelect} />
      <WhyLearnSection />
      <Footer />
    </>
  );
};

export default Home;

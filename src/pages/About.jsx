import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#fffdf5] text-black font-sans">
      <Navbar
        onLogoClick={() => {
          window.location.hash = "";
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <main className="max-w-7xl mx-auto pt-36 pb-24 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-start-2 lg:col-span-10">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-[0.95]">
              A história real da linguagem C
            </h1>

            <article className="text-gray-800 space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                A linguagem C foi criada no início dos anos 1970 por Dennis
                Ritchie no Bell Labs, como parte do trabalho de criação do
                sistema operacional Unix. C nasceu da necessidade de uma
                linguagem que oferecesse controle de baixo nível (manipulação de
                memória, ponteiros, acesso a hardware) sem abrir mão de
                portabilidade entre máquinas — uma combinação que até então era
                difícil de obter.
              </p>

              <p>
                Antes do C existiam linguagens experimentais como B (de Ken
                Thompson) e BCPL, que influenciaram diretamente sua sintaxe e
                filosofia. Ritchie consolidou essas ideias e adicionou tipos,
                operadores e um modelo de compilação eficiente. Assim, partes do
                próprio Unix foram reescritas em C, o que provou que a linguagem
                poderia ser usada para sistemas de produção.
              </p>

              <p>
                Em 1978 Brian Kernighan e Dennis Ritchie publicaram "The C
                Programming Language" (conhecido como K&R), o primeiro livro que
                serviu como referência informal. Com o tempo, houve a
                necessidade de padronizar a linguagem: surgiu o padrão ANSI C em
                1989 e, mais tarde, revisões como C99, C11 e C18 trouxeram novas
                funcionalidades e garantias de portabilidade.
              </p>

              <p>
                O legado do C é imenso: compiladores, sistemas operacionais,
                compiladores de outras linguagens e grande parte do software de
                infraestrutura foram escritos em C. A linguagem ensinou gerações
                de programadores sobre gerenciamento de memória, modelos de
                dados simples e eficiência — conceitos que permanecem essenciais
                até hoje.
              </p>

              <h3 className="text-2xl font-black mt-4">
                Por que estudar C ainda importa?
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  Entendimento profundo de como o computador organiza memória;
                </li>
                <li>Melhor controle de desempenho e recursos;</li>
                <li>Base para aprender outras linguagens de baixo nível;</li>
                <li>
                  Grande presença em sistemas embarcados, kernels e ferramentas.
                </li>
              </ul>

              <p>
                Se quiser se aprofundar, recomenda-se ler a obra original de
                Kernighan &amp; Ritchie e artigos históricos sobre Unix e a
                evolução dos compiladores. Esta página resume a história para te
                dar o contexto necessário enquanto aprende na prática com os
                módulos do curso.
              </p>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

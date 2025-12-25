export const modulesContent = {
    0: {
        title: "Introdução ao C",
        theory: "O C é uma linguagem de programação de baixo nível relativa: oferece controle direto sobre memória e desempenho, ao mesmo tempo que mantém uma sintaxe simples. Nesta introdução você verá por que o C é usado em sistemas operacionais, drivers e aplicações de alta performance, e quais conceitos fundamentais (compilação, execução, tipos básicos) irá aprender nesta trilha.",
        code: `// Bem-vindo ao C.
// Este é um comentário. O computador ignora isso.

// C é usado em:
// - Windows, Linux, Mac
// - Jogos 3D
// - Carros e Aviões`,
        highlight: "C é a linguagem que construiu o mundo moderno."
    },
    1: {
        title: "Configurando o Ambiente",
        theory: "Vamos preparar seu ambiente de desenvolvimento: editor (como VS Code), compilador (GCC, Clang) e ferramentas de execução/debug. Você verá como compilar um arquivo C, executar o binário gerado e como organizar projetos simples — além de dicas para configurar extensões e atalhos que aceleram seu fluxo de trabalho.",
        code: `/* No Terminal (Prompt de Comando) */

// 1. Verifique se instalou
gcc --version

// 2. Para rodar seu código
gcc meucodigo.c -o programa
./programa`,
        highlight: "O GCC é o compilador mais famoso do mundo."
    },
    2: {
        title: "Hello World",
        theory: "O primeiro programa mostra a estrutura mínima em C: includes, a função `main()` e chamadas de saída como `printf`. Aqui você aprenderá o fluxo de execução, a importância do `return` em `main` e regras básicas de sintaxe (pontos e vírgulas, chaves e includes).",
        code: `#include <stdio.h> // Traz o comando printf

int main() {
    printf("Ola, Mundo!");
    return 0;
}`,
        highlight: "Não esqueça o ponto e vírgula ';' no final das linhas!"
    },
    3: {
        title: "Variáveis e Tipos",
        theory: "Variáveis são nomes que representam espaços de memória; cada uma tem um tipo que determina o que pode ser guardado e quanto espaço ocupa. Neste módulo abordamos tipos primitivos (`int`, `float`, `char`, `double`), inicialização, escopo e conversões básicas — além de erros comuns como usar variáveis não inicializadas.",
        code: `#include <stdio.h>

int main() {
    int idade = 25;       // Inteiro
    float altura = 1.75;  // Decimal
    char letra = 'C';     // Um caractere

    // %d para int, %f para float, %c para char
    printf("Tenho %d anos", idade);
    
    return 0;
}`,
        highlight: "int = número sem vírgula. float = número com vírgula."
    },
    4: {
        title: "Entrada de Dados",
        theory: "Aprenda a ler dados do usuário usando `scanf` e lidar com formatos (`%d`, `%f`, `%s`). Veremos como validar entradas, evitar estouros de buffer em strings e por que `scanf` requer o operador `&` para variáveis não-strings. Também discutimos alternativas mais seguras para cenários reais.",
        code: `#include <stdio.h>

int main() {
    int numero;

    printf("Digite um numero: ");
    
    // O '&' é obrigatório aqui!
    scanf("%d", &numero); 

    printf("Voce digitou: %d", numero);
    return 0;
}`,
        highlight: "Use & antes da variável no scanf."
    },
    5: {
        title: "Matemática Básica",
        theory: "Operadores aritméticos, relacionais e lógicos são a base da lógica em programas. Aqui você pratica soma, subtração, multiplicação, divisão e módulo, além de precedência de operadores e conversões entre tipos inteiros e ponto flutuante. Também abordamos overflow e boas práticas ao trabalhar com números.",
        code: `#include <stdio.h>

int main() {
    int a = 10;
    int b = 3;

    int soma = a + b;
    int vezes = a * b;
    
    // Resto da divisão (Módulo)
    int resto = a % b; // 10 dividido por 3 sobra 1

    printf("Soma: %d", soma);
    return 0;
}`,
        highlight: "O operador % pega o resto da divisão."
    },
    6: {
        title: "Decisões (If/Else)",
        theory: "Estruturas condicionais permitem executar código apenas quando condições são verdadeiras. Veremos `if`, `else if` e `else`, como combinar condições com operadores lógicos (`&&`, `||`, `!`) e como evitar erros comuns na comparação de valores e no uso de chaves para blocos de código.",
        code: `#include <stdio.h>

int main() {
    int idade = 16;

    if (idade >= 18) {
        printf("Pode dirigir.");
    } else {
        printf("Nao pode dirigir.");
    }

    return 0;
}`,
        highlight: "Use chaves { } para agrupar os comandos."
    },
    7: {
        title: "Menu (Switch)",
        theory: "`switch` é indicado para selecionar entre várias opções discretas (menus). Aprenda a usar `case` e `break`, como agrupar casos semelhantes e quando preferir `if/else` em vez de `switch`. Também veremos o papel do `default` e armadilhas com fall-through.",
        code: `#include <stdio.h>

int main() {
    int opcao = 1;

    switch(opcao) {
        case 1:
            printf("Iniciar Jogo");
            break; // Importante para parar aqui!
        case 2:
            printf("Sair");
            break;
        default:
            printf("Opcao invalida");
    }
    return 0;
}`,
        highlight: "Sempre use o 'break' para não rodar as opções de baixo junto."
    },
    8: {
        title: "Repetição (While)",
        theory: "`while` executa um bloco enquanto uma condição se mantiver verdadeira — ideal para loops com condição de parada externa. Este módulo mostra controle do fluxo com incrementos, como evitar loops infinitos e casos práticos de leitura/validação até receber entrada válida.",
        code: `#include <stdio.h>

int main() {
    int contador = 0;

    while (contador < 5) {
        printf("Rodando... %d\\n", contador);
        contador++; // Aumenta 1
    }

    return 0;
}`,
        highlight: "Cuidado para não criar um loop infinito (que nunca para)."
    },
    9: {
        title: "Repetição (For)",
        theory: "`for` é usado quando você sabe (ou espera) quantas vezes repetir uma ação: inicialização; condição; incremento. Aprenda padrões comuns (iteração por arrays), variáveis de controle e otimizações simples para evitar cálculos desnecessários dentro do laço.",
        code: `#include <stdio.h>

int main() {
    // De 0 até 9
    for (int i = 0; i < 10; i++) {
        printf("Numero: %d\\n", i);
    }

    return 0;
}`,
        highlight: "Estrutura: for (inicio; condição; passo)"
    },
    10: {
        title: "Listas (Vetores)",
        theory: "Arrays (vetores) guardam uma sequência de elementos do mesmo tipo em memória contígua. Aqui tratamos declaração, inicialização, acesso por índice (começando em 0), iteração com `for` e cuidados com limites para evitar corrupção de memória (out-of-bounds).",
        code: `#include <stdio.h>

int main() {
    int notas[3] = {8, 7, 10};

    printf("Primeira nota: %d", notas[0]);
    printf("Segunda nota: %d", notas[1]);
    
    // Mudando valor
    notas[2] = 5;

    return 0;
}`,
        highlight: "notas[0] é o primeiro. notas[2] é o terceiro."
    },
    11: {
        title: "Texto (Strings)",
        theory: "Strings em C são arrays de `char` terminados por `\0`. Abordamos funções úteis da `<string.h>` (`strcpy`, `strlen`, `strcmp`), como concatenar/formatar com segurança e perigos de buffer overflow ao manipular textos — e técnicas básicas para evitar erros.",
        code: `#include <stdio.h>
#include <string.h>

int main() {
    char nome[20] = "Maria";

    printf("Ola, %s", nome);

    // Para copiar texto, use strcpy
    strcpy(nome, "Joao"); 
    
    return 0;
}`,
        highlight: "Não use sinal de igual (=) para mudar texto depois de criar."
    },
    12: {
        title: "Tabelas (Matrizes)",
        theory: "Matrizes são arrays multidimensionais (ex.: linhas e colunas). Veremos declaração, acesso por índices `[linha][coluna]`, iteração, e exemplos práticos como somar linhas/colunas. Também discutimos como elas são representadas na memória (row-major) e implicações de desempenho.",
        code: `#include <stdio.h>

int main() {
    // Matriz 2x2
    int m[2][2] = {
        {1, 2},
        {3, 4}
    };

    // Linha 0, Coluna 1
    printf("Valor: %d", m[0][1]); // Imprime 2

    return 0;
}`,
        highlight: "Primeiro colchete é Linha, segundo é Coluna."
    },
    13: {
        title: "Funções",
        theory: "Funções encapsulam tarefas e ajudam a organizar código: definimos assinatura (tipo de retorno e parâmetros), escopo de variáveis e reutilização. Aprenda a declarar e chamar funções, passar argumentos por valor, e quando usar funções para melhorar legibilidade e testes.",
        code: `#include <stdio.h>

// Minha função de somar
int somar(int a, int b) {
    return a + b;
}

int main() {
    int resultado = somar(5, 5);
    printf("Deu: %d", resultado);
    return 0;
}`,
        highlight: "Funções deixam o código principal limpo e organizado."
    },
    14: {
        title: "Ponteiros (Básico)",
        theory: "Ponteiros armazenam endereços de memória e são centrais em C para manipular dados e arrays eficientemente. Neste módulo você verá declaração (`int *p`), operador `&` para obter endereço e `*` para acessar o valor apontado, além de exemplos de quando usar ponteiros em funções.",
        code: `#include <stdio.h>

int main() {
    int numero = 10;
    int *p = &numero; // p aponta para numero

    // Muda o valor de 'numero' usando o ponteiro
    *p = 50; 

    printf("Numero agora: %d", numero); // 50
    return 0;
}`,
        highlight: "*p acessa o valor. p acessa o endereço."
    },
    15: {
        title: "Ponteiros e Listas",
        theory: "Explora a relação entre arrays e ponteiros: o nome do array decai para um ponteiro para seu primeiro elemento. Veja aritmética de ponteiros, como percorrer arrays com `*(p + i)` e usos práticos, incluindo passagem eficiente de arrays para funções.",
        code: `#include <stdio.h>

int main() {
    int lista[3] = {10, 20, 30};
    int *p = lista;

    printf("%d", *p);     // 10
    
    p++; // Avança para o próximo
    
    printf("%d", *p);     // 20
    return 0;
}`,
        highlight: "Ponteiros podem 'andar' pela memória."
    },
    16: {
        title: "Structs (Objetos)",
        theory: "`struct` permite combinar diferentes tipos em um único registro (como um objeto simples). Aprenda a declarar structs, criar instâncias, acessar campos com `.` e `->` (quando usando ponteiros), e como structs ajudam a modelar dados do mundo real.",
        code: `#include <stdio.h>

struct Aluno {
    int idade;
    float nota;
};

int main() {
    struct Aluno a;
    
    a.idade = 18;
    a.nota = 9.5;

    printf("Nota: %.1f", a.nota);
    return 0;
}`,
        highlight: "Use ponto (.) para acessar os dados dentro da struct."
    },
    17: {
        title: "Memória Dinâmica",
        theory: "Alocação dinâmica (`malloc`, `calloc`, `realloc`) permite reservar memória em tempo de execução. Veja como alocar, inicializar, usar e liberar memória com `free`, além de cuidados com leaks, uso após `free` (dangling pointers) e checagem de retorno de `malloc`.",
        code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    // Cria espaço para 1 inteiro na memória
    int *p = (int*) malloc(sizeof(int));

    *p = 10;
    printf("%d", *p);

    free(p); // Limpa a memória depois
    return 0;
}`,
        highlight: "Sempre use 'free()' quando terminar de usar malloc."
    },
    18: {
        title: "Arquivos",
        theory: "Operações com arquivos (`fopen`, `fclose`, `fprintf`, `fscanf`) permitem persistir dados. Praticamos abrir modos (`r`, `w`, `a`), ler/escrever, tratar erros de I/O e fechar corretamente arquivos para garantir integridade dos dados.",
        code: `#include <stdio.h>

int main() {
    // 'w' = write (escrever)
    FILE *f = fopen("teste.txt", "w");

    fprintf(f, "Ola Arquivo!");

    fclose(f); // Salva e fecha
    return 0;
}`,
        highlight: "Se não fechar com fclose, pode perder dados."
    },
    19: {
        title: "Projeto Final",
        theory: "Neste projeto você integra conceitos aprendidos: organização em funções, uso de arrays/structs, leitura/escrita, e controle de fluxo. O objetivo é construir um pequeno sistema funcional (ex.: lista de tarefas) aplicando boas práticas, modularidade e testes básicos.",
        code: `#include <stdio.h>

// Exemplo de estrutura de um programa
struct Tarefa {
    char texto[100];
    int feita;
};

int main() {
    printf("1. Adicionar Tarefa\\n");
    printf("2. Listar Tarefas\\n");
    printf("3. Sair\\n");
    
    // Lógica do menu aqui...
    return 0;
}`,
        highlight: "Comece simples e vá adicionando funcionalidades."
    },
};

export const modulesList = [
    { title: "Introdução", desc: "História do C, funcionamento do compilador e áreas de atuação.", color: "bg-[#fffdf5]" },
    { title: "Configuração", desc: "Instalando VS Code, MinGW e configurando o ambiente.", color: "bg-[#fffdf5]" },
    { title: "Hello World", desc: "Sua primeira linha de código. Entendendo a estrutura main.", color: "bg-[#fffdf5]" },
    { title: "Variáveis e Tipos", desc: "Int, float, char, double. Armazenando dados na memória.", color: "bg-[#fffdf5]" },
    { title: "Entrada e Saída", desc: "Funções printf e scanf. Interagindo com o usuário.", color: "bg-[#fffdf5]" },
    { title: "Operadores", desc: "Aritméticos, relacionais e lógicos. Fazendo contas e comparações.", color: "bg-[#a3e635]" },
    { title: "Condicionais (If/Else)", desc: "Tomada de decisão simples e composta no código.", color: "bg-[#fffdf5]" },
    { title: "Switch Case", desc: "Seleção múltipla para menus e opções organizadas.", color: "bg-[#fffdf5]" },
    { title: "Laços (While/Do-While)", desc: "Repetição condicional. Loops infinitos e validações.", color: "bg-[#fffdf5]" },
    { title: "Laços (For)", desc: "Repetição contada. O laço mais usado na programação.", color: "bg-[#fffdf5]" },
    { title: "Vetores (Arrays)", desc: "Armazenando coleções de dados do mesmo tipo.", color: "bg-[#22d3ee]" },
    { title: "Strings", desc: "Manipulação de textos, char arrays e biblioteca string.h.", color: "bg-[#fffdf5]" },
    { title: "Matrizes", desc: "Arrays multidimensionais. Criando tabelas e mapas.", color: "bg-[#fffdf5]" },
    { title: "Funções", desc: "Modularização, parâmetros, retorno e escopo de variáveis.", color: "bg-[#c084fc]" },
    { title: "Ponteiros (Básico)", desc: "Endereços de memória, operador * e &. O início do poder.", color: "bg-[#fde047]" },
    { title: "Ponteiros (Avançado)", desc: "Aritmética de ponteiros, ponteiros para ponteiros e arrays.", color: "bg-[#fde047]" },
    { title: "Structs", desc: "Criando seus próprios tipos de dados complexos.", color: "bg-[#fffdf5]" },
    { title: "Alocação Dinâmica", desc: "Malloc, calloc, realloc e free. Gerenciando o Heap.", color: "bg-[#fdba74]" },
    { title: "Arquivos", desc: "Lendo e escrevendo dados em arquivos de texto e binários.", color: "bg-[#fffdf5]" },
    { title: "Projeto Final", desc: "Unindo tudo o que foi aprendido em um sistema completo.", color: "bg-[#fca5a5]" },
];

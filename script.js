const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quail tipo de filme é melhor, ação ou aventura?",
        alternativas: [
            {
                texto: "Ação",
                afirmacao: "Todos nós sabemos que ação é melhor."
            },
            {
                texto: "Aventura",
                afirmacao: "Aventura é muito bom"
            }
        ]
    },
    {
        enunciado: "Por que você acha isso?",
        alternativas: [
            {
                texto: "Porque ação expressa mais as emoções e tem mais impacto no filme",
                afirmacao: "O termo ação nos filmes refere-se a um gênero cinematográfico focado na energia física, movimento constante e situações de alto risco. É o tipo de filme onde o conflito principal é resolvido por meio de proezas físicas, combates e perseguições, em vez de apenas diálogos."
            },
            {
                texto: "Aventura trás jornadas emocionantes em lugares incríveis e perigosos com um objetivo determinado pelo protagonista.",
                afirmacao: "O termo aventura nos filmes se refere a um gênero cinematográfico focado em jornadas, exploração e superação de grandes desafios em cenários extraordinários. Diferente do cinema de ação puro, que foca em combates e perseguições físicas, a aventura é movida pela descoberta do desconhecido e pelo senso de maravilhamento."
            }
        ]
    },
    {
        enunciado: "E por que você não gosta do outro tema?",
        alternativas: [
            {
                texto: "Por que nos filmes de ação, não tem desenvolvimento da história dos personagem.",
                afirmacao: "Um ponto negativo recorrente em filmes de ação é a tendência de priorizar o espetáculo visual e os efeitos especiais em detrimento do desenvolvimento de personagens e do enredo.

Quando isso acontece, a narrativa pode se tornar previsível e rasa, fazendo com que as sequências de luta ou perseguição pareçam repetitivas ou desconectadas da história principal."
            },
            {
                texto: "Porque os personagens são "carregados" pelo roteiro",
                afirmacao: "Por focar muito na jornada, no ritmo acelerado e na exploração de novos cenários, os roteiros frequentemente recorrem a resoluções simplistas para tirar os protagonistas de situações impossíveis — como encontrar mapas perfeitos por acaso, ter vilões que erram no momento mais conveniente ou descobrir itens mágicos/tecnológicos exatamente quando são necessários."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

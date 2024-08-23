const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
  {
    enunciado: "Você acredita que o Rio Grande do Sul conseguirá se recuperar economicamente após as enchentes",
    alternativas: [
        {
            texto: "Sim, o estado tem recursos e estratégias para a recuperação econômica.",
            afirmacao: "O Rio Grande do Sul tem a capacidade de se recuperar economicamente após as enchentes, com recursos e estratégias adequadas para a recuperação. ",
        },
        {
            texto: "Não,a recuperação econômica será lenta e difícil.",
            afirmacao: "A recuperação econômica do Rio Grande do Sul após as enchentes será lenta e difícil..",
        }
    ]
},
{
    enunciado: "Você acha que as autoridades estão tomando medidas eficazes para prevenir futuras enchentes?",
    alternativas: [
        {
            texto: "Sim, há esforços significativos para melhorar a infraestrutura e a gestão de recursos hídricos.",
            afirmacao: "As autoridades estão tomando medidas eficazes para prevenir futuras enchentes, com melhorias na infraestrutura e gestão de recursos hídricos."
        },
        {
            texto: "Não, as medidas para prevenir futuras enchentes são insuficientes.",
            afirmacao: "As medidas para prevenir futuras enchentes são insuficientes, e as enchentes não resultaram em avanços significativos na consciência ambiental. "
        }
    ]
},
{
    enunciado: "Você considera que as enchentes tiveram um impacto positivo em alguma área, como a consciência ambiental",
    alternativas: [
        {
            texto: "Sim, as enchentes elevaram a consciência sobre a necessidade de práticas sustentáveis.",
            afirmacao: "Além disso, as enchentes aumentaram a consciência sobre a necessidade de práticas sustentáveis."
        },
        {
            texto: "Não, as enchentes não resultaram em avanços significativos na consciência ambiental",
            afirmacao: "A reconstrução das áreas afetadas enfrentará muitos obstáculos e será realizada de maneira lenta"
        }
    ]
},
{
    enunciado: "A reconstrução das áreas afetadas enfrentará muitos obstáculos e será realizada de maneira lenta",
    alternativas: [
        {
            texto: "Sim, há planos bem estruturados para uma reconstrução eficaz e rápida",
            afirmacao: "A reconstrução das áreas afetadas está sendo realizada de maneira rápida e eficiente, e as enchentes abrirão oportunidades para novos investimentos em infraestrutura e projetos sustentáveis.A reconstrução das áreas afetadas está sendo realizada de maneira rápida e eficiente, e as enchentes abrirão oportunidades para novos investimentos em infraestrutura e projetos sustentáveis."
        },
        {
            texto: "Não, a reconstrução será lenta e enfrentará muitos obstáculos.",
            afirmacao: "Além disso, as enchentes reduzirão a capacidade de atrair novos investimentos, limitando as oportunidades de desenvolvimento."
        }
    ]
},
{
    enunciado: "*Você acha que as enchentes abrirão oportunidades para novas iniciativas e investimentos no estado?",
    alternativas: [
        {
            texto: "Sim, elas podem levar a novos investimentos em infraestrutura e projetos sustentáveis.",
            afirmacao: "as enchentes abrirão oportunidades para novos investimentos em infraestrutura e projetos sustentáveis."
        },
        {
            texto: "Não, as enchentes reduzirão a capacidade de atrair novos investimentos.",
            afirmacao: "as enchentes reduzirão a capacidade de atrair novos investimentos, limitando as oportunidades de desenvolvimento"
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
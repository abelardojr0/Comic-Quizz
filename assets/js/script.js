const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
];
const vogais = ["a", "e", "i", "o", "u"];
const vogaisEmbaralhadas = vogais.sort(() => Math.random() - 0.5); // EMBARALHANDO AS LETRAS DO ALFABETO

const alfabeto = letras.sort(() => Math.random() - 0.5); // EMBARALHANDO AS LETRAS DO ALFABETO

const personagens = [
  // ARRAY COM OS personagens DISPONIVEIS, LEMBRANDO ELES ESTÃO ORDENADOS NA ORDEM DAS FASES
  "hulk",
  "batman",
  "homem-de-ferro",
  "super-homem",
  "homem-aranha",
  "thor",
  "flash",
  "mulher-maravilha",
  "lanterna-verde",
  "aquaman",
  "capitão-américa",
  "wolverine",
  "capitã-marvel",
  "coringa",
  "feiticeira-escarlate",
  "thanos",
  "supergirl",
  "robin",
  "deadpool",
  "professor-xavier",
  "arlequina",
  "senhor-das-estrelas",
  "tempestade",
  "mulher-gato",
  "loki",
  "doutor-estranho",
  "groot",
  "arqueiro-verde",
  "batgirl",
  "coisa",
  "viúva-negra",
  "homem-formiga",
  "venom",
  "pantera-negra",
  "charada",
  "rocket-raccoon",
  "falcão",
  "justiceiro",
  "lex-luthor",
  "nick-fury",
  "ultron",
  "mysterio",
  "visão",
  "pinguim",
  "mulher-hulk",
  "hulk-vermelho",
  "gavião-arqueiro",
  "caveira-vermelha",
  "fênix-negra",
  "rei-do-crime",
  "ciclope",
  "surfista-prateado",
  "shazam",
  "magneto",
  "senhor-fantástico",
  "máquina-de-combate",
  "doutor-octopus",
  "cyborg",
  "nebulosa",
  "caçador-de-marte",
  "mercúrio",
  "colossus",
  "demolidor",
  "gavião-negro",
  "vespa",
  "tocha-humana",
  "soldado-invernal",
  "mística",
  "galactus",
  "flecha",
  "duas-caras",
  "fera",
  "dente-de-sabre",
  "lagarto",
  "doutor-destino",
  "senhor-incrível",
  "duende-verde",
  "miss-marvel",
  "patriota-de-ferro",
  "vampira",
  "mulher-invisível",
  "motoqueiro-fantasma",
  "punho-de-ferro",
  "noturno",
  "era-venenosa",
  "cavaleiro-da-lua",
  "blade",
  "heimdall",
  "adão-negro",
  "homem-areia",
  "kick-ass",
  "hela",
  "bane",
  "ravena",
  "senhor-destino",
  "superboy",
  "monge-de-ferro",
  "rainha-branca",
  "power-man",
  "mulher-gavião",
  "gelado",
  "gamora",
  "fanático",
  "drax-o-destruidor",
  "abutre",
  "asa-noturna",
  "elektra",
  "hit-girl",
  "capuz-vermelho",
  "aranha-fantasma",
  "exterminador",
  "darkseid",
  "lobo",
  "mulher-aranha",
  "professor-zoom",
  "mutano",
  "ronan",
  "abominável",
  "mantis",
  "jaqueta-amarela",
  "adam-warlock",
  "capitão-átomo",
  "gambit",
  "batwoman",
  "violeta",
  "harpia",
  "hellboy",
  "magnum",
  "ossos-cruzados",
  "spawn",
  "invencível",
  "o-doutrinador",
  "anjo",
  "brainiac",
  "hércules",
  "besouro-azul",
  "valquíria",
  "mercenário",
  "namor",
  "morbius",
  "sinestro",
  "zatanna",
  "yondu",
  "tornado-vermelho",
  "jubileu",
  "canário-negro",
  "sandman",
  "gorila-grodd",
  "mulher-leopardo",
  "poderosa",
  "mefisto",
  "raio-negro",
  "sif",
  "rino",
  "kilowog",
  "bizarro",
  "barão-mordo",
  "arraia-negra",
  "apocalypse",
  "electro",
  "doutor-manhattan",
  "dominó",
  "senhor-frio",
  "psylocke",
  "lince-negra",
  "modok",
  "shocker",
  "senhor-sinistro",
  "síndrome",
  "bispo",
  "apocalipse",
  "garota-esquilo",
  "malekith",
  "carnificina",
  "zezé",
  "sentinela",
  "juiz-dredd",
  "nova",
  "mandarim",
  "kraven-o-caçador",
  "gorr",
  "rorschach",
  "kang",
  "fauce-de-ébano",
  "omega-red",
  "barão-von-strucker",
  "bill-raio-beta",
  "surtur",
  "ego",
  "trigon",
  "dormammu",
  "anti-monitor",
];

const nomes = [
  "bruce banner",
  "bruce wayne",
  "tony stark",
  "clark kent",
  "peter parker",
  "thor odinson",
  "barry allen",
  "diana prince",
  "hal jordan",
  "arthur curry",
  "steven rogers",
  "james howlett",
  "carol danvers",
  "jack white",
  "wanda maximoff",
  "dione",
  "kara zor-el",
  "damian wayne",
  "wade wilson",
  "charles xavier",
  "harleen quinzel",
  "peter quill",
  "ororo munroe",
  "selina kyle",
  "loki laufeyson",
  "stephen strange",
  "groot",
  "oliver queen",
  "barbara gordon",
  "benjamin grimm",
  "natasha romanoff",
  "scott lang",
  "eddie brock",
  "t'challa",
  "edward nigma",
  "rocket-raccoon",
  "sam wilson",
  "frank castle",
  "alexander luthor",
  "nicholas joseph",
  "mark",
  "quentin beck",
  "victor shade",
  "oswald cobblepot",
  "jennifer walters",
  "thunderbolt ross",
  "clint barton",
  "johann schmidt",
  "jean grey",
  "wilson fisk",
  "scott summers",
  "norrin radd",
  "billy batson",
  "erik lehnsherr",
  "reed richards",
  "james rhodes",
  "otto octavius",
  "victor stone",
  "ms. peale",
  "j'onn j'onzz",
  "pietro maximoff",
  "piotr rasputin",
  "matt murdock",
  "carter hall",
  "janet van dyne",
  "johnny storm",
  "bucky barnes",
  "raven darkholme",
  "galan",
  "roberto pêra",
  "harvey dent",
  "henry mccoy",
  "victor creed",
  "curt connors",
  "victor von doom",
  "beto pêra",
  "norman osborn",
  "kamala khan",
  "norman osborn",
  "anna lebeau",
  "sue richards",
  "johnny blaze",
  "danny rand",
  "kurt wagner",
  "pamela isley",
  "steven grant",
  "eric brooks",
  "rig heimdall",
  "theo adam",
  "william baker",
  "dave lizewski",
  "hela odinsdottir",
  "bane dorrance",
  "rachel roth",
  "kent nelson",
  "conner kent",
  "obadiah stane",
  "emma frost",
  "luke cage",
  "shayera hall",
  "luciano barro",
  "gamora whoberi",
  "cain marko",
  "arthur douglas",
  "adrian toomes",
  "dick grayson",
  "elektra natchios",
  "mindy mccready",
  "jason todd",
  "gwen stacy",
  "slade wilson",
  "uxas",
  "lobo da estepe",
  "jessica drew",
  "eobard thawne",
  "garfield logan",
  "saoirse ronan",
  "emil blonsky",
  "mantis brandt",
  "darren cross",
  "adam magus",
  "nathaniel adams",
  "remy lebeau",
  "katherine kane",
  "violeta pêra",
  "bobbi morse",
  "anung un rama",
  "simon williams",
  "brock rumlow",
  "al simmons",
  "mark grayson",
  "miguel",
  "warren worthington",
  "vril dox",
  "hércules",
  "dan garret",
  "brunnhilde",
  "benjamin poindexter",
  "namor mckenzie",
  "michael morbius",
  "thaal sinestro",
  "zatanna zatara",
  "yondu udonta",
  "ulthoon",
  "jubilation lee",
  "dinah lance",
  "murphy",
  "gorila grodd",
  "barbara minerva",
  "kara zor-l",
  "mefisto",
  "blackagar boltagon",
  "sif",
  "aleksei sytsevich",
  "kilowog",
  "bizarro",
  "karl mordo",
  "david kane",
  "apocalypse",
  "maxwell dillon",
  "jonathan osterman",
  "neena thurman",
  "victor fries",
  "betsy braddock",
  "kitty pryde",
  "george tarleton",
  "herman scultz",
  "nathaniel essex",
  "bochecha",
  "luke bishop",
  "en sabah nur",
  "doreen green",
  "malcolm keith",
  "cletus kasady",
  "zezé-pêra",
  "robert reynolds",
  "joseph dredd",
  "richard rider",
  "gene khan",
  "sergei kravinoff",
  "gorr",
  "walter kovacs",
  "nathaniel richards",
  "fauce-de-ébano",
  "arkady rossovich",
  "wolfgang von strucker",
  "bill-raio-beta",
  "surtur",
  "nu-xandar",
  "trigon",
  "dormammu",
  "anti-monitor",
];

function preventBack() {
  window.history.forward();
}

setTimeout("preventBack()", 0);

window.onunload = function () {
  null;
};

// window.history.forward(1); // ISSO AQUI IMPEDE O JOGADOR DE VOLTAR PELO BOTÃO DO NAVEGADOR.
// GERAÇÃO DAS LETRAS --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const numeroFase = document.querySelector("[data-fase]"); // AQUI EU TO SELECIONANDO O BODY DO HTML QUE TEM NELE UM DATA-FASE = NUMERO DA FASE QUE O USUARIO ESTÁ
const containerImagem = document.querySelector("[data-container-imagem]"); // AQUI EU PEGO O CONTAINER DA IMAGEM
const arrayResposta = []; // ARRAY QUE VAI ARMAZENAR TODAS AS LETRAS QUE ESTÃO NOS MOSTRUÁRIO DE RESPOSTAS
const concluidos = JSON.parse(localStorage.getItem("concluidos") || "[]"); // ARRAY QUE VAI ADICIONAR AS COISAS NO LOCAL STORAGE
const fase = +numeroFase.dataset.fase; // AQUI TO ATRIBUINDO EXATAMENTE O VALOR DESSE DATA-FASE A UMA VARIAVEL

let faseTela = fase; // AQUI EU CRIO UM LET QUE VAI SERVIR PARA EU PASSAR AS FASES QUANDO O USUARIO ACERTAR
const heroi = personagens[fase - 1]; // ESSA VARIAVEL VAI RECEBER O NOME DO HEROI DA VEZ, PRA ISSO ELE ACESSA O ARRAY DOS personagens E PEGA O HEROI ESCOLHIDO USANDO A VARIAVEL FASE, QUE GUARDA O NUMERO DA FASE JOGADA
let tamanhoNomeHeroi = 0; //VARIAVEL CRIADA COM O INTUITO DE DIMIUIR UM NO TAMANHO DO HEROI.LENGTH CASO TENHA UM HÍFEM, EM RESUMO, VOU USAR PARA O HÍFEM NÃO ENTRAR NO CALCULO QUANDO EU FOR COMPARAR SE ACERTOU OU ERROU

const moedas = localStorage.getItem("moedas") || []; // VAI PEGAR O ITEM MOEDAS DO LOCALSTORAGE

let contMoedas; // CONTADOR DE MOEDAS

if (moedas.length === 0) {
  contMoedas = 1000; // QUANTDADE DE MOEDAS INICIAIS
} else {
  contMoedas = +moedas; // QUANTIDADE DE MOEDAS ATUALIZADAS DE CADA PÁGINA
}
localStorage.setItem("moedas", contMoedas); // AQUI EU ADICIONO UM ITENS CHAMADO MOEDAS NO LS E PASSO O VALOR ATUALIZADO DAS MOEDAS PARA ELE

const moedasJogo = document.querySelector("[data-moedas]"); // ESSA VARIAVEL RECEBE O NÚMERO DE MOEDAS QUE APARECE NA TELA
if (moedasJogo) {
  // SE A TELA EM QUESTÃO TIVER MOEDAS (LOGIN NÃO TEM POR EXEMPLO)
  moedasJogo.innerText = moedas; // O TEXTO DAS MOEDAS DO JOGO
}

const progresso = localStorage.getItem("progresso") || []; // AQUI EU CRIO UM VARIAVEL QUE VAI RECEBER O ITEM PROGRESSO DO LOCALSTORAGE, SE NÃO EXISTIR ESSE ITEM ELE VIRA APENAS UM ARRAY VAZIO
let contProgresso; //CONTADOR DOS PROGRESSOS
if (progresso.length === 0) {
  // SE O ITEM PROGRESSO DO LS ESTIVER VAZIO
  contProgresso = 0; // ENTÃO O CONTADOR É 0, OU SEJA, TA COMENÇANDO O JOGO
} else {
  contProgresso = progresso; // SENÃO, O CONTADOR VAI SER EXATAMENTE O QUE TIVER NO LS
}

//BARRA DE PROGRSSO DOS NÍVEIS, 0/12 --------------------------------------------------------------------------------------------------------------------
const progressoSpan1 = document.querySelector("[data-progresso-1]");
if (progressoSpan1 && contProgresso <= 12) {
  // SE ESTIVER NA TELA QUE APARECE O CONTADOR DE PROGRESSO
  progressoSpan1.innerText = contProgresso; // FAÇO O NÚMERO SE ATUALIZAR.
} else if (progressoSpan1 && contProgresso > 12) {
  progressoSpan1.innerText = 12;
}
const progressoSpan2 = document.querySelector("[data-progresso-2");
if (progressoSpan2 && contProgresso <= 24) {
  // SE O SEGUNDO PROGRESSO TIVER LIBERADO E O CONTADOR FOR MENOR QUE 24
  progressoSpan2.innerText = contProgresso - 12; // O NÚMERO QUE VAI APARECER NO PROGRESSO DO NIVEL 2 VAI SER IGUAL AO CONTADOR DE PROGRESSO MENOS OS 12 NIVEIS JÁ PASSADOS, ASSIM POR EXEMPLO SE ELE TA NA PRIMEIRA FASE DO NIVEL 2, O CONT PROGRESSO TA NO 12, 12 - 12 = 0 QUE É ONDE VAI ESTAR O PROGRESSO DO NIVEL DOIS, E POR AI VAI
} else if (progressoSpan2 && contProgresso > 24) {
  // SE O CONT PROGRESSO TIVER ACIMA DE 24, ELE ENTÃO FINALIZOU O NV 2 ENTÃO O NÚMERO DO PROGRESSO É PARA ESTAR NO MÁXIMO, NO CASO, 12
  progressoSpan2.innerText = 12;
}
const progressoSpan3 = document.querySelector("[data-progresso-3");
if (progressoSpan3 && contProgresso <= 36) {
  progressoSpan3.innerText = contProgresso - 24;
} else if (progressoSpan3 && contProgresso > 36) {
  progressoSpan3.innerText = 12;
}
const progressoSpan4 = document.querySelector("[data-progresso-4");
if (progressoSpan4 && contProgresso <= 48) {
  progressoSpan4.innerText = contProgresso - 36;
} else if (progressoSpan4 && contProgresso > 48) {
  progressoSpan4.innerText = 12;
}
const progressoSpan5 = document.querySelector("[data-progresso-5");
if (progressoSpan5 && contProgresso <= 60) {
  progressoSpan5.innerText = contProgresso - 48;
} else if (progressoSpan5 && contProgresso > 60) {
  progressoSpan5.innerText = 12;
}
const progressoSpan6 = document.querySelector("[data-progresso-6");
if (progressoSpan6 && contProgresso <= 72) {
  progressoSpan6.innerText = contProgresso - 60;
} else if (progressoSpan6 && contProgresso > 72) {
  progressoSpan6.innerText = 12;
}
const progressoSpan7 = document.querySelector("[data-progresso-7");
if (progressoSpan7 && contProgresso <= 84) {
  progressoSpan7.innerText = contProgresso - 72;
} else if (progressoSpan7 && contProgresso > 84) {
  progressoSpan7.innerText = 12;
}
const progressoSpan8 = document.querySelector("[data-progresso-8");
if (progressoSpan8 && contProgresso <= 96) {
  progressoSpan8.innerText = contProgresso - 84;
} else if (progressoSpan8 && contProgresso > 96) {
  progressoSpan8.innerText = 12;
}
const progressoSpan9 = document.querySelector("[data-progresso-9");
if (progressoSpan9 && contProgresso <= 108) {
  progressoSpan9.innerText = contProgresso - 96;
} else if (progressoSpan9 && contProgresso > 108) {
  progressoSpan9.innerText = 12;
}
const progressoSpan10 = document.querySelector("[data-progresso-10");
if (progressoSpan10 && contProgresso <= 120) {
  progressoSpan10.innerText = contProgresso - 108;
} else if (progressoSpan10 && contProgresso > 120) {
  progressoSpan10.innerText = 12;
}
const progressoSpan11 = document.querySelector("[data-progresso-11");
if (progressoSpan11 && contProgresso <= 132) {
  progressoSpan11.innerText = contProgresso - 120;
} else if (progressoSpan11 && contProgresso > 132) {
  progressoSpan11.innerText = 12;
}
const progressoSpan12 = document.querySelector("[data-progresso-12");
if (progressoSpan12 && contProgresso <= 144) {
  progressoSpan12.innerText = contProgresso - 132;
} else if (progressoSpan12 && contProgresso > 144) {
  progressoSpan12.innerText = 12;
}
const progressoSpan13 = document.querySelector("[data-progresso-13");
if (progressoSpan13 && contProgresso <= 156) {
  progressoSpan13.innerText = contProgresso - 144;
} else if (progressoSpan13 && contProgresso > 156) {
  progressoSpan13.innerText = 12;
}
const progressoSpan14 = document.querySelector("[data-progresso-14");
if (progressoSpan14 && contProgresso <= 168) {
  progressoSpan14.innerText = contProgresso - 156;
} else if (progressoSpan14 && contProgresso > 168) {
  progressoSpan14.innerText = 12;
}
const progressoSpan15 = document.querySelector("[data-progresso-15");
if (progressoSpan15 && contProgresso <= 180) {
  progressoSpan15.innerText = contProgresso - 168;
} else if (progressoSpan15 && contProgresso > 180) {
  progressoSpan15.innerText = 12;
}
const progressoSpan16 = document.querySelector("[data-progresso-16");
if (progressoSpan16 && contProgresso <= 192) {
  progressoSpan16.innerText = contProgresso - 180;
} else if (progressoSpan16 && contProgresso > 192) {
  progressoSpan16.innerText = 12;
}

//PORCENTAGEM DE ACERTO DOS NÍVEIS NA TELA DE CATEGORIAS --------------------------------------------------------------------------------------------------------------
const porcento1 = document.querySelector("[data-porcento-1]");
if (porcento1 && contProgresso <= 12) {
  // SE A PORCENTAGEM ESTIVER NA TELA ATUAL E O CONTPROGRESSSO FOR MENOR QUE 12, SIGNIFICA QUE O JOGADOR ESTÁ NO NV 1
  porcento1.innerText = `${((contProgresso / 12) * 100).toFixed(1)}%`; // O TEXTO DA PORCENTAGEM VAI SER O QUANTO TIVER NO CONT PROGRESSO DIVIDIDO POR 12, QUE É A QUANTIDADE DE PERSONARGEM POR FASE, ARREDONDADO PRA FICAR SÓ UM NÚMERO, VAI FICAR TIPO 1/12 = 0.8 * 100 = 8%
} else if (porcento1 && contProgresso >= 12) {
  // SE O CONT PROGRESSO TIVER ACIMA DE 12 SIGINIFICA QUE ELE FINALIZOU O NV1 ENTÃO O MARCADOR FICA EM 100%
  porcento1.innerText = `100%`;
}
const porcento2 = document.querySelector("[data-porcento-2]");
if (porcento2 && contProgresso >= 12 && contProgresso <= 24) {
  porcento2.innerText = `${(((contProgresso - 12) / 12) * 100).toFixed(1)}%`;
} else if (porcento2 && contProgresso >= 24) {
  porcento2.innerText = `100%`;
}
const porcento3 = document.querySelector("[data-porcento-3]");
if (porcento3 && contProgresso >= 24 && contProgresso <= 36) {
  porcento3.innerText = `${(((contProgresso - 24) / 12) * 100).toFixed(1)}%`;
} else if (porcento3 && contProgresso >= 36) {
  porcento3.innerText = `100%`;
}
const porcento4 = document.querySelector("[data-porcento-4]");
if (porcento4 && contProgresso >= 36 && contProgresso <= 48) {
  porcento4.innerText = `${(((contProgresso - 36) / 12) * 100).toFixed(1)}%`;
} else if (porcento4 && contProgresso >= 48) {
  porcento4.innerText = `100%`;
}
const porcento5 = document.querySelector("[data-porcento-5]");
if (porcento5 && contProgresso >= 48 && contProgresso <= 60) {
  porcento5.innerText = `${(((contProgresso - 48) / 12) * 100).toFixed(1)}%`;
} else if (porcento5 && contProgresso >= 60) {
  porcento5.innerText = `100%`;
}
const porcento6 = document.querySelector("[data-porcento-6]");
if (porcento6 && contProgresso >= 60 && contProgresso <= 72) {
  porcento6.innerText = `${(((contProgresso - 60) / 12) * 100).toFixed(1)}%`;
} else if (porcento6 && contProgresso >= 72) {
  porcento6.innerText = `100%`;
}
const porcento7 = document.querySelector("[data-porcento-7]");
if (porcento7 && contProgresso >= 72 && contProgresso <= 84) {
  porcento7.innerText = `${(((contProgresso - 72) / 12) * 100).toFixed(1)}%`;
} else if (porcento7 && contProgresso >= 84) {
  porcento7.innerText = `100%`;
}
const porcento8 = document.querySelector("[data-porcento-8]");
if (porcento8 && contProgresso >= 84 && contProgresso <= 96) {
  porcento8.innerText = `${(((contProgresso - 84) / 12) * 100).toFixed(1)}%`;
} else if (porcento8 && contProgresso >= 96) {
  porcento8.innerText = `100%`;
}
const porcento9 = document.querySelector("[data-porcento-9]");
if (porcento9 && contProgresso >= 96 && contProgresso <= 108) {
  porcento9.innerText = `${(((contProgresso - 96) / 12) * 100).toFixed(1)}%`;
} else if (porcento9 && contProgresso >= 108) {
  porcento9.innerText = `100%`;
}
const porcento10 = document.querySelector("[data-porcento-10]");
if (porcento10 && contProgresso >= 108 && contProgresso <= 120) {
  porcento10.innerText = `${(((contProgresso - 108) / 12) * 100).toFixed(1)}%`;
} else if (porcento10 && contProgresso >= 120) {
  porcento10.innerText = `100%`;
}
const porcento11 = document.querySelector("[data-porcento-11]");
if (porcento11 && contProgresso >= 120 && contProgresso <= 132) {
  porcento11.innerText = `${(((contProgresso - 120) / 12) * 100).toFixed(1)}%`;
} else if (porcento11 && contProgresso >= 132) {
  porcento11.innerText = `100%`;
}
const porcento12 = document.querySelector("[data-porcento-12]");
if (porcento12 && contProgresso >= 132 && contProgresso <= 144) {
  porcento12.innerText = `${(((contProgresso - 132) / 12) * 100).toFixed(1)}%`;
} else if (porcento12 && contProgresso >= 144) {
  porcento12.innerText = `100%`;
}
const porcento13 = document.querySelector("[data-porcento-13]");
if (porcento13 && contProgresso >= 144 && contProgresso <= 156) {
  porcento13.innerText = `${(((contProgresso - 144) / 12) * 100).toFixed(1)}%`;
} else if (porcento13 && contProgresso >= 156) {
  porcento13.innerText = `100%`;
}
const porcento14 = document.querySelector("[data-porcento-14]");
if (porcento14 && contProgresso >= 156 && contProgresso <= 168) {
  porcento14.innerText = `${(((contProgresso - 156) / 12) * 100).toFixed(1)}%`;
} else if (porcento14 && contProgresso >= 168) {
  porcento14.innerText = `100%`;
}
const porcento15 = document.querySelector("[data-porcento-15]");
if (porcento15 && contProgresso >= 168 && contProgresso <= 180) {
  porcento15.innerText = `${(((contProgresso - 168) / 12) * 100).toFixed(1)}%`;
} else if (porcento15 && contProgresso >= 180) {
  porcento15.innerText = `100%`;
}
const porcento16 = document.querySelector("[data-porcento-16]");
if (porcento16 && contProgresso >= 180 && contProgresso <= 192) {
  porcento16.innerText = `${(((contProgresso - 180) / 12) * 100).toFixed(1)}%`;
} else if (porcento16 && contProgresso >= 192) {
  porcento16.innerText = `100%`;
}
// BOTÃO DE SAIR DO JOGO, PARA TROCAR DE JOGADOR POR EXEMPLO, REINÍCIAR TUDO
const sair = document.querySelector("[data-sair]");
function limparStorage() {
  localStorage.clear(); // SIMPLESMENTE LIMPA O LS
}
if (sair) {
  sair.addEventListener("click", limparStorage);
}
// GESTÃO DO NICKNAME DIGITADO NA TELA DE LOGIN
const nickname = document.querySelector("[data-nickname]");
const botaoJogar = document.querySelector("[data-jogar]");
const form = document.querySelector("[data-form]");

function validarNick({ target }) {
  // VALIDANDO
  if (target.value.length >= 3) {
    // SE TIVER PELO MENOS 3 DIGITOS, O BOTÃO HABILITA
    botaoJogar.removeAttribute("disabled");
  } else {
    // SENÃO, DESABILITA
    botaoJogar.setAttribute("disabled", "");
  }
}

if (nickname) {
  // SE A TELA APARECER O NICKNAME
  nickname.addEventListener("input", validarNick);
}

function logar(event) {
  // FUNÇÃO QUE FAZ O LOGIN
  event.preventDefault();
  localStorage.setItem("nickname", nickname.value); // GRAVA NO LS O NOME DIGITADO
  window.location = "assets/pages/categorias.html"; // ENCAMINHA O USUÁRIO PARA A TELA DE CATEGORIAS
}
if (form) {
  form.addEventListener("submit", logar);
}

const usuario = document.querySelector("[data-usuario]");
if (usuario) {
  usuario.innerText = localStorage.nickname; // FAZENDO O NOME DO USUÁRIO PARECER NAS TELAS PÓS LOGIN
}

// CHECA SE ELE JÁ ESTÁ LOGADO, SE JÁ TIVER, E ACABAR DE ABRIR O JOGO, NÃO VAI PARA A TELA DE LOGIN, E SIM PARA A DE CATEGORIAS PARA JOGAR
const url = window.location.href;
if (!url.includes("assets") && localStorage.nickname !== undefined) {
  // SE NA URL ATUAL NÃO TIVER O NOME ASSETS, QUER DIZER QUE ELE NÃO ESTÁ EM NENHUMA SUB-PAGE E SIM NA PRINCIPAL, E SE ELE TA NA TELA INICIAL, MAS, JÁ TEM ALGUM HISTÓRICO DELE, OU SEJA, ELE JÁ JOGOU, ENTÃO ELE SERÁ REDIRECIONADO DIRETO PARA AS CATEGORIAS PARA CONTINUAR JOGANDO.
  window.location = "assets/pages/categorias.html";
}

// COMEÇANDO O JOGO!-------------------------------------------------------------------------
if (heroi) {
  const heroiArray = heroi.split(""); // SIMPLES, UMA VARIAVEL QUE SERÁ O ARRAY COM AS LETRAS SEPARADAS DO HEROI ESCOLIHO POR EXEMPLO ["H", "U", "L", "K"]

  const mostruarioArray = []; // AQUI VAI O ARRAY QUE MONTARÁ O MOSTRUARIO COM AS LETRAS DISPONIVEIS DAQUELA PARTIDA

  let contadorHifem = 0; //VARIAVEL QUE VAI CONTAR A QUANTIDADE DE HIFENS QUE TEM NO NOME DO HEROI

  for (let i = 0; i < heroi.length; i++) {
    if (heroi[i] === "-") {
      contadorHifem++; //CONTANTO A QUANTIDADE DE HIFENS
    }
  }

  tamanhoNomeHeroi = heroi.length - contadorHifem; // O TAMANHO DO NOME DO HEROI VAI FICAR O TAMANHO TOTAL MENOS(-) A QUANTIDADE DE HIFENS.

  containerImagem.style.backgroundImage = `url(../../img/escuras/${
    personagens[fase - 1]
  }.png)`; // COLOCO COMO IMAGEM DO CARD, EXATAMENTE O HEROI DA VEZ.

  let contHifem = 0;
  const nomeSemHifem = []; // DESTAQUE PRA ESSA VARIAVEL MÁGICA QUE ME SALVOU, É SIMPLESMENTE UM ARRAY COM O NOME DO HEROI SEM OS HIFENS

  heroiArray.forEach((caracter) => {
    // VOU FAZER UM FOREACH EM CADA LETRA DO NOME DO HEROI
    if (caracter !== "-") {
      // SE NÃO FOR UM HIFÉM ENTÃO:ADICIONO ESSE CARACTER NO ARRAY DO MOSTRUARIO, OU SEJA, AQUELA LETRA VAI ESTÁ DISPONIVEL NESSE JOGO
      mostruarioArray.push(caracter);
      nomeSemHifem.push(caracter.toLocaleUpperCase()); // AQUI EU ADICIONO TODAS AS LETRAS QUE NÃO SÃO HIFENS NAQUELE ARRAY MÁGICO
    } else {
      contHifem++;
    }
  });

  const alfabetoSemHeroi = alfabeto.filter((item) => {
    // CRIAÇÃO DE UM ARRAY QUE VAI POSSUIR TODAS AS LETRAS DO ALFABETO QUE NÃO ESTEJAM NO NOME DO HEROI
    return mostruarioArray.indexOf(item) === -1; // ELE FILTRA O ALFABETO E SE NÃO INCLUIR AS LETRAS DO NOME DO HEROI ELE RETORNA, OU SEJA, ELE VAI RETORNAR TODAS AS LETRAS DIFERENTES DAS LETRAS DO NOME DO HÉROI
    // OU return mostruario.includes(item)
  });
  let quantidadeAleatorio = 0; // AQUI VAI CONTROLAR QUANTOS CARACTERS O MOSTRUARIO VAI TER
  if (heroi.length - contHifem <= 5) {
    // SE O NOME DO HEROI FOR MENOR IGUAL A 5
    quantidadeAleatorio = 7; // VAI TER SÓ UMA FILEIRA
  } else if (heroi.length - contHifem > 4 && heroi.length - contHifem <= 12) {
    quantidadeAleatorio = 14; // DUAS FILEIRAS
  } else if (heroi.length - contHifem > 12) {
    quantidadeAleatorio = 21; // TRÊS FILEIRAS
  }
  const mostruarioAleatorio = quantidadeAleatorio - (heroi.length - contHifem); // TRUQUE PARA SABER QUANTAS LETRAS ALETAORIAS DO ALFABETO EU VOU PRECISAR USAR, QUE VAI SER SEMPRE 20(MAX) - A QUANTIDADE DE LETRAS QUE TIVER O HEROI DA VEZ.

  for (let i = 0; i < mostruarioAleatorio; i++) {
    // UM LOOP PARA DISTRIBUIR AS LETRAS ALEATORIAS
    mostruarioArray.push(alfabetoSemHeroi[i]); // VAI ADICIONAR ESSA LETRA QUE É DIFERENTE DAS LETRAS DO NOME DO HEROI NO ARRAY
  }

  const embaralhar = mostruarioArray.sort(() => Math.random() - 0.5); // E PARA FINALIZAR EU PEGO ESSE ARRAY COM ESSAS 20 LETRAS, NO EXEMPLO DO HULK, 4 DO HEROI E 16 ALEATORIAS DO ALFABETO

  //CRIAR CARD DE LETRAS --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  // FAZENDO O EFEITO DAS MOEDAS QUANDO GANHA AS MOEDAS POR TER ACERTADO O HÉROI
  const contador = document.querySelector(".contador");
  let somando = 0; // O NUMEROZIM COMEÇA DE ZERO PARA IR ATÉ 100
  // E CHAMO A FUNÇÃO QUE VAI ANIMAR
  function aumentarMoedas() {
    contador.innerText = `${+localStorage.moedas - 50 + somando}`; // O TEXTO QUE VAI APARECER VAI SER O TANTO DE MOEDA QUE SE TEM - 100 (POR QUE VOCE AINDA NÃO GANHO ELAS) + O somando
    somando++;
    if (somando < 51) {
      // E ISSO VAI RODAR 100 VEZES FAZENDO COM QUE ELE O NUMERO FINAL FICA ACRESCIDO DOS 100, MAS COM EFEITO CRESCENTE
      setTimeout(aumentarMoedas, 5);
    }
  }

  // BUSCANDO OS CONTAINERS
  const container = document.querySelector("[data-container]");
  const containerResposta = document.querySelector("[data-container-resposta]");
  const containerMostruario = document.querySelector(
    "[data-container-mostruario]"
  );

  // FUNÇÃO QUE VAI CRIAR UM ELEMENTO ALEATORIO COM UMA TAG UM DATASET E UMA CLASSE
  function criarElemento(tag, dataset, classe) {
    const elemento = document.createElement(tag);
    elemento.setAttribute(dataset, "");
    elemento.className = classe;
    return elemento;
  }

  // CRIANDO UMA CARD DE RESPOSTA (AS QUE FICAM EM CIMA)
  function criarCardResposta(hifem) {
    let cardResposta; // PRIMEIRO DE TUDO, EU CRIO UMA VARIAVEL QUE VAI CRIAR O ELEMENTO ( ESTOU DECLARANDO ESTRANHO ASSIM PQ PRECISO QUE ELA MUDE DE ACORDO COM O IF)

    if (hifem === "sim") {
      cardResposta = criarElemento("div", "data-vazio", "card vazio"); // SE TIVER HIFÉM O CARD SERÁ DIFERENTE, DE ACORDO COM A CLASSE VAZIO CRIADA NO CSS
    } else if (hifem === "nao") {
      cardResposta = criarElemento(
        "div",
        "data-resposta",
        "card card-resposta"
      ); // SE NÃO FOR UM HÍFEM, AI APENAS CRIA NORMAL O CARD
    }
    return cardResposta; // DEPOIS RETORNA O CARD QUE FOR CRIADO DEPENDENDO DO IF
  }

  //CRIANDO CARD DO MOSTRUARIO
  function criarCardMostruario(letra) {
    // PARAMETRO: A LETRA EM QUESTÃO (GERADA ALETORIAMENTE)
    const cardMostruario = criarElemento("div", "data-mostruario", "card"); // SEM MTO SEGREDO, APENAS CHAMA A FUNÇÃO CRIAR ELEMENTO E CRIA UM CARD, NORMAL
    cardMostruario.innerText = letra; // AQUI EU ADICIONO A LETRA EM QUESTÃO AO CARD CRIADO

    return cardMostruario;
  }

  // FUNÇÃO QUE CARREGA O JOGO, QUE FAZ TUDO APARECER
  function carregarJogo() {
    embaralhar.forEach((letra) => {
      // PRIMEIRO VOU MONTAR O MOSTRUARIO, PARA ISSO PUXA AQUELA FUNÇÃO QUE ESTÁ COM OS 20 CARACTERES EMBARALHADOS, RODO UM FOREACH NELA
      const cardMostruario = criarCardMostruario(letra.toLocaleUpperCase()); // AQUI EU CHAMO AQUELA FUNÇÃO PARA PODER CRIAR O CARD E PASSO NELA JUSTAMENTE A LETRA ALEATORIA DO FOR
      containerMostruario.appendChild(cardMostruario); // DEPOIS ADICIONO ESSE CARD AO CONTAINER DO MOSTRUARIO
    });

    heroi.split("").forEach((letra) => {
      // AGORA O FOREACH É PARA CRIAR OS CARDS DE RESPOSTA(OS DE CIMA)
      if (letra === "-") {
        // PRIMEIRO CHECO SE É UM HÍFEM, SE FOR CRIO AQUELE CARD TRANSPARENTE
        const cardResposta = criarCardResposta("sim");
        containerResposta.appendChild(cardResposta);
      } else {
        //SE NÃO, CRIO UM CARD NORMAL
        const cardResposta = criarCardResposta("nao");
        containerResposta.appendChild(cardResposta);
      }
    });
  }

  carregarJogo(); // CHAMO A FUNÇÃO PARA QUE ELA INICIE O JOGO

  //MANIPULAÇÃO DOS DADOS

  const mostruario = document.querySelectorAll("[data-mostruario]"); //TODAS AS LETRAS DOS CARDS DO MOSTRUARIO
  const respostas = document.querySelectorAll("[data-resposta]"); // TODAS AS CAIXAS DE RESPOSTA
  let cont = 0; //CONTADOR PARA CONTROLAR QUANTAS LETRAS PODEM SER CLICADAS.

  //DISTRIBUIR CARDS NO HTML
  for (let i = 0; i < quantidadeAleatorio; i++) {
    //ESSE FOR VAI RODAR 21 VEZES OU SEJA, VAI ATRIBUIR 21 VALORES AOS 21 CARDS DO HTML
    mostruario[i].innerText = embaralhar[i].toLocaleUpperCase(); // DISTRIBUI OS VALORES CADA UM EM UM LUGAR
    mostruario[i].dataset.posicao = [i]; // ADICIONA UM DATASET CHAMADO POSIÇÃO PARA QUE EU POSSA SABER EM QUAL LUGAR ELE ESTÁ, PARA CASO ELE PRECISE VOLTAR PARA O MESMO LUGAR
  }
  // DISTRIBUIR CARDS RESPOSTAS COMO SEUS DATASETS
  for (let i = 0; i < nomeSemHifem.length; i++) {
    respostas[i].dataset.letra_resposta = nomeSemHifem[i]; // CRIO UM DATASET COM A LETRA QUE É PRA FICAR NA RESPOSTA
    respostas[i].dataset.posicao_resposta = i; // CRIO UM DATASET QUE VAI RECEBER O LUGAR DO CARD RESPOSTA
  }

  //SELECIONAR ITEM
  function clickMostruario({ target }) {
    if (cont < heroi.length && target.innerText !== "") {
      //SE E ENQUANTO ESSE CONTADOR FOR MENOR QUE O TAMANHO DO NOME DO HEROI E TAMBÉM NÃO FOR VAZIO, ENTÃO ELE VAI ENTRAR AQUI
      cont++; // VAI ADICIONAR +1 NO CONTADOR PARA MARCAR QUE ESTÁ UTILIZANDO JÁ UMA LETRA
      if (cont > 0 && usoRevelarLetra === 0) {
        limpar.classList.add("ativar");
      }
      const letraClicada = target.innerText; //ARMAZENO NESSA VARIAVEL O VALOR DO TEXTO DO BOTÃO CLICADO, NO CASO, A LETRA CLICADO
      target.classList.add("card-clicado"); //ESCONDO O CARD CLICADO
      target.innerText = ""; // E TIRO O TEXTO DE DENTRO DELE

      for (let i = 0; i <= heroi.length; i++) {
        // AQUI É FOR QUE VAI ADICIONAR O VALOR CLICADO NO LUGAR CORRESPONDENDO NO CONTAINER DE RESPOSTAS
        if (respostas[i].innerText === "") {
          // MAS ANTES TEM A CONDIÇÃO, SÓ IRÁ ADICIONAR A CARDS QUE ESTEJAM VAZIOS, SE NÃO IRIA SOBREESCREVER, CASO ESTEJA VAZIO ENTÃO:
          respostas[i].innerText = letraClicada; // FAZ O TEXTO DO CARD DA RESPOSTA VIRAR O MESMO TEXTO DO CARD QUE FOI CLICADO
          respostas[i].dataset.posicao_clicado = target.dataset.posicao; // ADICIONA UM NOVO DATASET AO CARD DA RESPOSTA QUE RECEBEU A LETRA, QUE É REFERENTE A POSIÇÃO DO TERMO QUE FOI CLICADO, QUE VAI VARIAR DE 0 A 19, POIS SÃO 20 ITENS, VOU USAR ISSO DEPOIS PARA DEVOLVER O ITEM PARA O MESMO LUGAR DELE CASO ELE SEJA REMOVIDO DAS RESPOSTAS.
          respostas[i].dataset.posicao_resposta = i; // DATASET PARA MARCAR A POSIÇÃO QUE A LETRA FOI INSERIADA NAS RESPOSTAS.
          arrayResposta[i] = letraClicada; // ADICIONANO AO ARRAY DAS RESPOSTAS O VALOR QUE FOI CLICADO NA POSIÇÃO RESPECTIVA A SUA POSIÇÃO
          i = heroi.length; // AQUI É APENAS UM TRUQUE PARA ENCERRAR O FOR ASSIM QUE ENCONTAR UM CARD DA RESPOSTA VAZIO, SE NÃO FAÇO ISSO, ELE IA ADICIONAR EM TODOS OS VAZIOS.
        }
      }

      //CONDIÇÃO QUE CHECA A VITÓRIA
      checarVitoria();
    }
  }

  mostruario.forEach((item) => {
    item.addEventListener("click", clickMostruario);
  });

  // FAZER O ITEM VOLTAR PARA O LUGAR DELE
  function clickResposta({ target }) {
    if (target.dataset.posicao_clicado) {
      container.classList.remove("tremer");
      cont--; // PRIMEIRAMENTE EU DIMINUO 1 DO CONT, OU SEJA, ABRO UM LUGAR, INDICANDO QUE ELE PODE CLICAR EM MAIS UMA LETRA
      if (cont === 0) {
        limpar.classList.remove("ativar");
      }
      const repor = document.querySelector(
        `[data-posicao="${target.dataset.posicao_clicado}"]`
      ); // AQUI EU BUSCO NO HTML EXATAMENTE O CARD QUE TINHA SIDO ESCONDIDO, USANDO A POSIÇÃO DELE QUE EU TINHA GRAVADO ANTES
      repor.classList.remove("card-clicado"); // AQUI EU TIRO A CLASSE DE REMOVIDO DELE, FAZENDO ELE APARECER DE NOVO
      repor.innerHTML = target.innerText; // DEVOLVO O TEXTO DELE, QUE ELE TINHA ANTES DE SER REMOVIDO
      target.innerText = ""; // E APAGO O TEXTO DO CARD DE RESPOSTA QUE FOI REMOVIDO, PARA ELE VOLTAR A SER UMA CAIXINHA VAZIA
      arrayResposta[target.dataset.posicao_resposta] = " "; //ATRIBUINDO UM ESPAÇO VAZIO NA POSIÇÃO DO ARRAY QUE A LETRA ESTAVA.

      delete target.dataset.posicao_clicado; // DELETA OS DATASETS PARA NÃO GERAR CONFUSÃO
      delete target.dataset.posicao_resposta;
    }
  }

  respostas.forEach((resposta) => {
    resposta.addEventListener("click", clickResposta);
  });

  // CHECA SE AO PREENCHER TODOS OS CAMPOS, OS VALORES ESTÃO CORRETOS
  function checarVitoria() {
    if (arrayResposta.join("") === nomeSemHifem.join("")) {
      //AQUI EU CHECO SE O RESULTADO DA PALAVRA QUE FOI FORMADA É IGUAL A PALAVRA ESPERADA.
      acertou(); // SE SIM, CHAMO O METODO DE VITORIA
    } else if (
      arrayResposta.join("") != nomeSemHifem.join("") && // SE O NOME NÃO FOR IGUAL
      arrayResposta.join("").length === tamanhoNomeHeroi && // E O TAMANHO DO ARRAY DE RESPOSTAS FOR IGUAL AO TAMANHO DO NOME DO HEROI ESPERADO
      cont === nomeSemHifem.length // E O CONTADOR DE PALAVRAS CLICADAS FOR IGUAL AO NOME DO HEROI ESPERADO
    ) {
      setTimeout(() => {
        container.classList.add("tremer"); // FAZ A TELA TREMER PARA NOTIFICAR O ERRO
      }, 100);
    }
  }

  // LIMPAR LETRAS DIGITADAS ( ESSA FUNÇÃO SÓ FUNCIONA EM ALGUMAS SITUAÇÕES ESPECÍFICAS )
  const limpar = document.querySelector("[data-limpar]");
  function limparRespostas({ target }) {
    while (arrayResposta.length) {
      // ESSE WHILE SERVE PARA ZERAR UM ARRAY
      arrayResposta.pop(); // NO CASO TO ZERANDO O ARRAY QUE FICA AS LETRAS JÁ DIGITADAS NAS RESPOSTAS
    }
    respostas.forEach((resposta) => {
      // UM LOOP DENTRO DE TODAS AS RESPOSTAS
      const devolver = document.querySelector(
        `[data-posicao="${resposta.dataset.posicao_clicado}"]` // ESSA VARIAVEL VAI PEGAR EXATAMENTE A RESPOSTA COM A LETRA RESPECTIVA
      );
      if (devolver) {
        // SE ELE TIVER PEGADO ALGUMA
        cont = 0; // ZERA O CONTADOR
        container.classList.remove("tremer"); // TIRA A CLASSE DE TREMER
        devolver.classList.remove("card-clicado"); // FAZ O CARD RESPECTIVO FICAR VISÍVEL DE NOVO
        devolver.innerHTML = resposta.innerText; // FAZ A LETRA VOLTAR PRO CARD
        resposta.dataset.letra_resposta = resposta.innerText; // DEVOLVE O DATASET QUE EU TINHA TIRADO
        resposta.innerText = ""; // TIRA A LETRA DO CARD DE RESPOSTA
        delete resposta.dataset.posicao_clicado; // DELETA TODOS OS DATASETS QUE O CARD RESPOSTA GANHA QUANDO UMA LETRA VAI PARA ELE
        delete resposta.dataset.posicao_resposta;
        delete resposta.dataset.letra_resposta;
      }
    });
  }
  limpar.addEventListener("click", limparRespostas);

  // COVOCA O MODAL QUE IRÁ APARECER AO ACERTAR O PERSONARGEM
  function acertou() {
    const nomeHeroi = document.querySelector("[data-nome-heroi]"); // PRIMEIRO PEGO O PARAGRAFO QUE VAI FICAR O NOME DO HEROI ACERTADO
    const containerModalAcerto = document.querySelector(
      '[data-modal="container-acerto"]'
    ); // PEGO O CONTAINER COMPLETO TAMBÉM
    const avancar = document.querySelector("[data-avancar]"); // O BOTÃO DE AVANÇAR DO MODAL
    const imagemAcerto = document.querySelector("[data-imagem-acerto]"); // A IMAGEM DO HEROI QUE VAI APARECER NO MODAL
    nomeHeroi.innerText = heroi
      .toLocaleUpperCase()
      .replace("-", " ")
      .replace("-", " "); // ATRIBUO AO TEXTO DO PARAGRAFO O NOME EM MAIUSCULO DO HEROI DA ACERTADO
    containerModalAcerto.classList.add("ativo"); // ATIVO O MODAL, PRA ELE APARECER
    contProgresso++; // ACRESCENTO O CONTADOR DE PROGRESSO, POIS ELE FOI BEM SUCEDIDO.
    localStorage.setItem("progresso", contProgresso); // ATUALIZO O PROGRESSO NO LOCALSTORAGE
    concluidos.push({ heroi: nomeHeroi.innerText, fase: faseTela }); // E ADICIONO O NOME DO HEROI E A FASE DELE NO NO ARRAY QUE VAI PRO LOCAL STORAGE
    localStorage.setItem("concluidos", JSON.stringify(concluidos)); // E AQUI ADICIONO O ARRAY NO LOCAL STORAGE.
    contMoedas += 50;
    localStorage.setItem("moedas", contMoedas);

    // CHAMAR A PRÓXIMA FASE (UM POUCO COMPLICADO POR QUE NÃO PODE CHAMAR FASES QUE JÁ FORAM, E NEM PULAR DE NÍVEL SEM TER CONCLUÍDO O NV)
    const concluidas = []; // ARRAY QUE VAI GUARDAR AS FASES CONCLUIDAS

    function proximaFase(event) {
      // ESSA É A FUNÇÃO QUE VAI SER CHAMADA QUANDO CLICADO NO BOTÃO DE AVANÇAR
      event.preventDefault();
      setTimeout(() => {
        // ESPERA UM POUCO E:
        concluidos.forEach((concluido) => {
          // PRIMEIRO EU VARRO O ARRAY DE FASES CONCLUIDAS QUE TA NO LOCAL STORAGE
          concluidas.push(concluido.fase); // E ADICIONO AS FASE ATUAL CONCLUÍDA AO ARRAY DE CONCLUÍDAS, QUE CRIEI ALI EM CIMA
        });

        const numProg = +progresso; // // SÓ PQ TAVA BUGANDO A TIPAGEM NA COMPARAÇÃO LA EM BAIXO

        //VOLTAR AQUI DEPOIS PARA AJEITAR ISSO, AJEITEI ATÉ AGORA QUE SE ELE PASSAR DA ÚLTIMA SEM PASSAR DO RESTO, NÃO LIBERA, VOLTA PRO MENU, MAS TENHO QUE FAZER ISSO PRA TODOS.
        for (let i = 0; i < 192; i++) {
          // ESSE FOR VAI RODAR POR TODAS AS FASES DISPONIVEIS
          if (!concluidas.join(",").includes(faseTela + 1)) {
            // SE DENTRO DO ARRAY DE FASES CONCLUIDAS, NÃO TIVER O NUMERO DA PROXIMA FASE ( SIGNIFICA QUE ELA NÃO FOI CONCLUIDA, ENTÃO ENTRA AQUI)
            faseTela++;
            // ACRESCENTE 1 NA VARIAVEL DAS FASE PARA QUE A VARIAVEL VIRE O VALOR DA PROXIMA FASE
            if (progresso === "11") {
              // SE A FASETELA FOR 11 QUER DIZER QUE ELE TERMINOU O NIVEL 1
              window.location = "../niveis/nivel2.html"; // ENTÃO EM VEZ DE ABRIR O PRÓXIMO HEROI, ABRE O MENU DO NIVEL 2
            } else if (progresso === "23") {
              // SE A FASETELA FOR 21 QUER DIZER QUE ELE TERMINOU O NIVEL 2
              window.location = "../niveis/nivel3.html"; // ENTÃO EM VEZ DE ABRIR O PRÓXIMO HEROI, ABRE O MENU DO NIVEL 3
            } else if (progresso === "35") {
              window.location = "../niveis/nivel4.html";
            } else if (progresso === "47") {
              window.location = "../niveis/nivel5.html";
            } else if (progresso === "59") {
              window.location = "../niveis/nivel6.html";
            } else if (progresso === "71") {
              window.location = "../niveis/nivel7.html";
            } else if (progresso === "83") {
              window.location = "../niveis/nivel8.html";
            } else if (progresso === "95") {
              window.location = "../niveis/nivel9.html";
            } else if (progresso === "107") {
              window.location = "../niveis/nivel10.html";
            } else if (progresso === "119") {
              window.location = "../niveis/nivel11.html";
            } else if (progresso === "131") {
              window.location = "../niveis/nivel12.html";
            } else if (progresso === "143") {
              window.location = "../niveis/nivel13.html";
            } else if (progresso === "155") {
              window.location = "../niveis/nivel14.html";
            } else if (progresso === "167") {
              window.location = "../niveis/nivel15.html";
            } else if (progresso === "179") {
              window.location = "../niveis/nivel16.html";
            } else if (faseTela === 13 && numProg !== 11) {
              // SE A FASE TELA SERIA A 13 E O PROGRESSO AINDA NÃO É 11 OU SEJA ELE NÃO TERMINOU O NV, VOLTA PRO MENU DE NVS
              window.location = "../niveis/nivel1.html";
            } else if (faseTela === 25 && numProg !== 23) {
              window.location = "../niveis/nivel2.html";
            } else if (faseTela === 37 && numProg !== 35) {
              window.location = "../niveis/nivel3.html";
            } else if (faseTela === 49 && numProg !== 47) {
              window.location = "../niveis/nivel4.html";
            } else if (faseTela === 61 && numProg !== 59) {
              window.location = "../niveis/nivel5.html";
            } else if (faseTela === 73 && numProg !== 71) {
              window.location = "../niveis/nivel6.html";
            } else if (faseTela === 85 && numProg !== 83) {
              window.location = "../niveis/nivel7.html";
            } else if (faseTela === 97 && numProg !== 95) {
              window.location = "../niveis/nivel8.html";
            } else if (faseTela === 109 && numProg !== 107) {
              window.location = "../niveis/nivel9.html";
            } else if (faseTela === 121 && numProg !== 119) {
              window.location = "../niveis/nivel10.html";
            } else if (faseTela === 133 && numProg !== 131) {
              window.location = "../niveis/nivel11.html";
            } else if (faseTela === 145 && numProg !== 143) {
              window.location = "../niveis/nivel12.html";
            } else if (faseTela === 157 && numProg !== 155) {
              window.location = "../niveis/nivel13.html";
            } else if (faseTela === 169 && numProg !== 167) {
              window.location = "../niveis/nivel14.html";
            } else if (faseTela === 181 && numProg !== 179) {
              window.location = "../niveis/nivel15.html";
            } else if (faseTela === 193 && numProg !== 191) {
              window.location = "../niveis/nivel16.html";
            } else if (faseTela === 193 && numProg === 191) {
              // SE A FASE TELA SERIA A 193(NEM EXISTE MAS, SIGINICA QUE ELE PASSOU DA 192) E O PROGRESSO TA EM 191 O QUE SIGINIFICA QUE ELE PASSOU POR TODAS AS FASES
              window.location = "../categorias.html"; // VOLTA PARA AS CATEGORIAS
              setTimeout(() => {
                // ESPERA UM POUQUINHO
                window.alert("Parabéns, você zerou o jogo!"); // E EXIBE A MENSAGEM DE VITÓRIA
              }, 500);
            } else {
              window.location = `fase${faseTela}.html`; // SE NÃO, APENAS CONTINUA INDO PARA O PRÓXIMO HEROI
            }

            i = 192; // E ENCERRA O FOR
          } else {
            // SE A FASE JÁ EXISTIR SÓ ADICIONO MAIS UM NO CONTADOR, PARA CONFERIR A PRÓXIMA FASE.
            faseTela++;
          }
        }
      }, 250);
    }

    // ADICIONANDO A IMAGEM COLORIDA DO HEROI RESPECTIVO NO MODAL DE ACERTO
    imagemAcerto.style.backgroundImage = `url(../../img/coloridos/${
      personagens[fase - 1]
    }.png)`;

    somando = 0;
    aumentarMoedas();
    avancar.addEventListener("click", proximaFase);
  }
  // MODAL DE BÔNUS ---------------------
  const qtdeCaracters = document.querySelector("[data-caracters]"); // NÚMERO DE CARACTERS QUE O NOME DO PERSONARGEM ATUAL TEM
  qtdeCaracters.innerText = nomes[faseTela - 1].length; // AQUI SÓ PEGO NA LISTA NOMES O NOME DA VEZ E VEJO O TAMANHO
  const underlines = document.querySelector("[data-underlines]"); // PARAGRAFOS DE UNDERLINES QUE APARECE NA TELA
  const arrayUnderlines = []; // ARRAY QUE VAI ADMINISTRAR ESSAS UNDERLINES

  nomes[faseTela - 1].split("").forEach((letra) => {
    //CRIAÇÃO DAS UNDERLINES INICIAIS
    if (letra !== " ") {
      // SE NÃO FOR UM ESPAÇO VAZIO
      arrayUnderlines.push("_"); // ADICIONA UM _ NO ARRAY
    } else if (letra === " ") {
      arrayUnderlines.push(" "); //SE FOR VAZIO, ADICIONA UM VAZIO
    }
  });
  underlines.innerText = arrayUnderlines.join("").replace(",", ""); //AGORA MONTA FAZ O QUE VAI APARECER NA TELA SER IGUAL O ARRAY QUE FOI MONTADO.

  const botaoBonus = document.querySelector("[data-bonus]"); // CAPTURAR O BOTAO
  const botaoFecharBonus = document.querySelector(
    '[data-modal="fechar-bonus"]'
  ); // CAPTURAR O BOTÃO DE FECHAR
  const containerModalBonus = document.querySelector(
    '[data-modal="container-bonus"]'
  ); // CAPTURAR TODO O MODAL
  const inputBonus = document.querySelector("[data-input-bonus]"); //INPUT QUE SERÁ DIGITADO O NOME DO PERSONAGEM

  inputBonus.setAttribute("maxLength", nomes[faseTela - 1].length); // AQUI EU LIMITO A QUANTIDADE DE CARACTERS QUE PODERÁ SER DIGITADA NESSE INPUT DE ACORDO COM O TAMANHO DO NOME DO PERSONARGEM DA RODADA.
  const botaoRespostaBonus = document.querySelector(
    "[data-botao-resposta-bonus]"
  ); //BOTÃO DE DENTRO DO MODAL DE BONUS
  const formBonus = document.querySelector("[data-form-bonus]"); //FORMULARIO DA RESPOSTA DO NOME
  const boxBonus = document.querySelector("[data-box-bonus]"); // A CAIXINHA DO MODAL, SÓ PRA MUDAR A COR DE TIVER ERRADO.
  if (nomes[faseTela - 1] === heroi) {
    botaoBonus.classList.add("remover");
  }

  if (
    botaoBonus &&
    botaoFecharBonus &&
    containerModalBonus &&
    inputBonus &&
    formBonus &&
    botaoRespostaBonus &&
    boxBonus
  ) {
    // SE TODO MUNDO EXISTIR
    function toggleModalBonus(event) {
      // ESSÃO FUNÇÃO ABRE E FECHA O MODAL
      event.preventDefault();
      containerModalBonus.classList.toggle("ativo"); // O TOOGLE FAZ COM QUE SE JÁ TIVER ATIVADO, ELE DESATIVO, E VICE VERSA
    }
    function cliqueForaModalBonus(event) {
      // SE CLICAR FORA DO MODAL
      if (event.target === this) {
        // SE CLICOU NO MODAL EXTERNO
        toggleModalBonus(event); // ENTÃO CHAMA A FUNÇÃO DE FECHAR O MODAL
      }
    }
    function validarResposta(event) {
      botaoFecharBonus.classList.remove("errado"); // REMOVE OS VERMELHOS
      boxBonus.classList.remove("errado");
      botaoRespostaBonus.classList.remove("errado");
      const tamanhoInput = event.target.value.length; // VAI PEGAR QUANTAS LETRAS JÁ FORAM DIGITADAS NO INPUT
      if (event.data !== null) {
        // SE O QUE O USUARIO DIGITOU FOI DIFERENTE DE BACKSPACE(APAGAR)
        qtdeCaracters.innerText = nomes[faseTela - 1].length - tamanhoInput; // AQUI É SÓ PRA ATUALIZAR O NÚMERO DE CARACTERS QUE AINDA FALTA DIGITAR PARA COMPLETAR O NOME

        arrayUnderlines[tamanhoInput - 1] =
          event.target.value[tamanhoInput - 1].toLocaleUpperCase(); //ENTÃO ADICIONO ESSA LETRA DIGITADA NO ARRAY DAS UNDERLINES
        underlines.innerText = arrayUnderlines.join("").replace(",", ""); // E MOSTRO O CAMPO ATUALIZADO COM A NOVA LETRA
      } else {
        qtdeCaracters.innerText = nomes[faseTela - 1].length - tamanhoInput; // AQUI É SÓ PRA ATUALIZAR O NÚMERO DE CARACTERS QUE AINDA FALTA DIGITAR PARA COMPLETAR O NOME
        // SENÃO, OU SEJA, ELE DIGITOU "APAGAR"
        if (arrayUnderlines[tamanhoInput] === " ") {
          // SE ELE TA TENTANDO APAGAR UM ESPAÇO VAZIO, ELE APENAS CONTINUA VAZIO
          arrayUnderlines[tamanhoInput] = " ";
          underlines.innerText = arrayUnderlines.join("").replace(",", ""); // ATUALIZO NA TELA
        } else {
          // SE ELE TIVER TENTANDO APAGAR UM ESPAÇO QUE TENHA UM CARACTES, VOLTA A SER UM UNDERLINE
          arrayUnderlines[tamanhoInput] = "_";
          underlines.innerText = arrayUnderlines.join("").replace(",", ""); //ATUALIZO NA TELA
        }
      }

      if (tamanhoInput >= 3) {
        // SE TIVER PELO MENOS 3 DIGITOS, O BOTÃO HABILITA
        botaoRespostaBonus.removeAttribute("disabled");
      } else {
        // SENÃO, DESABILITA
        botaoRespostaBonus.setAttribute("disabled", "");
      }
    }

    function checarInputBonus(event) {
      event.preventDefault();
      if (inputBonus.value.toLocaleLowerCase() === nomes[faseTela - 1]) {
        // SE O VALOR DIGITADO, TRANSFORMADO EM MINUSCULO FOR CORRESPONDENDO O NOME DO PERSONARGEM DA VEZ
        contMoedas += 50; // O JOGADOR GANHA 50 MOEDAS
        localStorage.setItem("moedas", contMoedas); //ATUALIZO NO LS
        somando = 0; // ZERA O CONTADOR PARA FAZER O EFEITIM
        aumentarMoedas(); // FAZ O EFEITIM
        toggleModalBonus(event); // FECHA O MODAL
        botaoBonus.classList.add("remover"); // REMOVE O BOTÃO
      } else {
        // SE ELE TIVER ERRADO
        botaoFecharBonus.classList.add("errado"); // DEIXA TUDO VERMELHO
        boxBonus.classList.add("errado");
        botaoRespostaBonus.classList.add("errado");
      }
    }

    inputBonus.addEventListener("input", validarResposta);
    formBonus.addEventListener("submit", checarInputBonus);
    botaoBonus.addEventListener("click", toggleModalBonus);
    botaoFecharBonus.addEventListener("click", toggleModalBonus);
    containerModalBonus.addEventListener("click", cliqueForaModalBonus);
  }

  //MENU DICAS ---------------------------------------------------------------------------------------------------------------------------------------------
  //EFEITINHO DE GASTAR MOEDAS BONITIM, É IGUAL O DE SOMAR, SÓ QUE DIMINUINDO.
  let subtraindo = 0;
  function diminuirMoedas() {
    moedasJogo.innerText = `${contMoedas + 30 - subtraindo}`;
    subtraindo++;
    if (subtraindo < 31) {
      setTimeout(diminuirMoedas, 5);
    }
  }
  // ATIVAÇÃO DO BOTÃO DE DICAS
  const botaoDica = document.querySelector("[data-botao-dica]"); // CAPTURAR O BOTAO
  const botaoFechar = document.querySelector('[data-modal="fechar"]'); // CAPTURAR O BOTÃO DE FECHAR
  const containerModal = document.querySelector('[data-modal="container"]'); // CAPTURAR TODO O MODAL

  if (botaoDica && botaoFechar && containerModal) {
    // SE TODO MUNDO EXISTIR
    function toggleModal(event) {
      if (contMoedas < custoRevelar.innerText) {
        revelarLetra.classList.add("desativado");
      }
      if (contMoedas < custoRemover.innerText) {
        removerLetra.classList.add("desativado");
      }
      if (contMoedas < custoColorir.innerText) {
        colorirImagem.classList.add("desativado");
      }
      if (contMoedas < custoResposta.innerText) {
        mostrarResposta.classList.add("desativado");
      }
      // ESSÃO FUNÇÃO ABRE E FECHA O MODAL
      event.preventDefault();
      containerModal.classList.toggle("ativo"); // O TOOGLE FAZ COM QUE SE JÁ TIVER ATIVADO, ELE DESATIVO, E VICE VERSA
    }
    function cliqueForaModal(event) {
      // SE CLICAR FORA DO MODAL
      if (event.target === this) {
        // SE CLICOU NO MODAL EXTERNO
        toggleModal(event); // ENTÃO CHAMA A FUNÇÃO DE FECHAR O MODAL
      }
    }

    botaoDica.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }

  // REVELAR LETRA (REVELA UMA DAS LETRAS CORRETAS E A COLOCA NO SEU LUGAR);
  const revelarLetra = document.querySelector("[data-revelar-letra]");
  const custoRevelar = document.querySelector("[data-custo-revelar]");
  custoRevelar.innerText = 5; // CUSTO INICIAL PARA USAR ESSA DICA
  let usoRevelarLetra = 0; // QUANTAS VEZES JÁ USOU A DICA
  const indexLetraCertaMostruario = []; // ARRAY QUE VAI RECEBER O INDEX DA LETRA CERTA DO NOME DO HEROI LA NO MOSTRUARIO

  function adicionarLetraCerta(event) {
    limpar.classList.remove("ativar"); // PRIMEIRO QUE SE USAR ESSA DICA, NÃO PODE MAIS USAR AQUELE BOTÃO DE LIMPAR TUDO

    event.preventDefault();

    if (usoRevelarLetra < 5 && !event.target.className.includes("desativado")) {
      // SE O USO AINDA FOR MENOR QUE 5 E ELE NÃO TIVER DESATIVADO
      mostruario.forEach((item) => {
        // AQUI E RODO POR TODO O MOSTRUARIO
        if (
          !alfabetoSemHeroi
            .join("")
            .toLocaleUpperCase()
            .includes(item.innerText)
        ) {
          // E SE A LETRA DO MOSTRUARIO FOR A LETRA DO NOME DO HEROI
          indexLetraCertaMostruario.push(item.dataset.posicao); // EU ADICIONO NO ARRAY O NOME DO DATASET DE POSICAO QUE EU TINHA ATRIBUIDO.
        }
      });

      const indexCertoEmbaralhado = indexLetraCertaMostruario.sort(
        () => Math.random() - 0.5
      ); // EMBARALHO PARA ELE NÃO IR COLOCANDO AS LETRAS EM ORDEM

      let rodarApenasUmaVez = 0; // VARIAVEL TRUQUE PARA ENCERRAR O FOREACH

      indexCertoEmbaralhado.forEach((indexCerto) => {
        // FOR POR TODOS OS INDICES CORRETOS
        respostas.forEach((resposta) => {
          // E DENTRO DAQUELE FOR, OUTRO FOR, ESSE RODANDO PELAS RESPOSTAS
          if (
            mostruario[indexCerto].innerText ===
              resposta.dataset.letra_resposta &&
            rodarApenasUmaVez === 0 &&
            resposta.innerText === ""
          ) {
            cont++; // PRIMEIRO CONTA +1 PARA O CONTADOR DE QUANTIDADE DE LETRAS JÁ CLICADAS
            contMoedas = +contMoedas - +custoRevelar.innerText; // ATUALIZA AS MOEDAS DESCONTANDO O CUSTO COBRADO PELA DICA
            // moedasJogo.innerText = contMoedas; // COLOCO ESSE NOVO NÚMERO NA TELA
            localStorage.setItem("moedas", contMoedas); // ADICIONO A ALTERAÇÃO AO LS
            custoRevelar.innerText = +custoRevelar.innerText + 5; // AUMENTO O CUSTO PARA USAR AQUELA MESMA DICA
            usoRevelarLetra++; // CONTO +1 NO CONTADOR DE USOS DESSA DICA
            subtraindo = 0; // ZERO A VARIAVEL QUE VAI FAZER O EFEITIM
            diminuirMoedas(); // CHAMO O EFEITO
            // SE A LETRA CERTA DO MOSTRUARIO FOR IGUAL AO DATASET COM O NOME DA LETRA Q EU TINHA ATRIBUIDO ANTES
            resposta.innerText = resposta.dataset.letra_resposta; // O TEXTO DA RESPOSTA VAI VIRAR O VALOR DO SEU DATASET
            arrayResposta[resposta.dataset.posicao_resposta] =
              resposta.dataset.letra_resposta; // VOU ADICIONAR ESSE MESMO VALOR NO ARRAY DAS RESPOSTAS
            resposta.classList.add("letra-comprada"); // ADICIONO UMA CLASSE QUE FAZ A LETRA QUE FOI COMPRADA FICAR DIFERENTE DAS OUTRAS LETRAS
            delete resposta.dataset.letra_resposta; // VOU DESTRUIR O DATASET, PRA NÃO CAUSAR REPETIÇÃO
            mostruario[indexCerto].classList.add("card-clicado"); // ADICIONO A CLASSE PARA O CARD SUMIR
            mostruario[indexCerto].innerText = ""; // TIRO O TEXTO DO CARD PARA NÃO CORRER RISCO DE COM UM MISS CLICK O USUARIO PEGAR DE NOVO AQUELE VALOR.
            rodarApenasUmaVez++; // ESSE INCREMENTO É UMA GAMBIARRA PRA ENCERRAR O FOREACH
            toggleModal(event); // FECHO O MODAL
          }
        });
      });
      checarVitoria(); // CHECO A VITORIA
    }
    if (usoRevelarLetra === 5) {
      // SE ELE JÁ USOU 5 VEZES
      revelarLetra.classList.add("desativado"); //DESATIVA AQUELA DICA
    }
  }

  revelarLetra.addEventListener("click", adicionarLetraCerta);

  // REMOVER UMA LETRA ERRADA (RETIRA DO JOGO UMA LETRA QUE NÃO CONTENHA NO NOME DO HERÓI)
  const removerLetra = document.querySelector("[data-remover-letra]");
  const custoRemover = document.querySelector("[data-custo-remover]");
  custoRemover.innerText = 0; // CUSTO INICIAL DA DICA
  let usoRemoverLetra = 0; // QUANTIDADE DE USOS DA DICA

  function excluirLetraErrada(event) {
    event.preventDefault();
    if (usoRemoverLetra < 5 && !event.target.className.includes("desativado")) {
      // SE O USO FOR MENOR QUE 5 E NÃO TIVER DESATIVADO
      const letraErrada = []; // ARRAY QUE VAI ARMAZENAR O LUGAR DAS LETRAS QUE NÃO FAZEM PARTE DO NOME DO HEROI ATUAL
      for (let i = 0; i < mostruario.length; i++) {
        if (!nomeSemHifem.join("").includes(mostruario[i].innerText)) {
          // COM ESSA GAMBIARRA EU DESCUBRO QUAIS CARDS POSSUEM ALGUMA LETRA QUE EXISTA NO NOME DO HEROI
          letraErrada.push(i); // E AI ADICIONA AO ARRAY O INDICE DESSA LETRA QUE NÃO EXISTE NO NOME DO HERÓI
        }
      }
      const letraErradaEmbaralhada = letraErrada.sort(
        () => Math.random() - 0.5
      ); // AQUI EU PEGO AQUELES INDICES COLETADOS EM ORDEM E EMBARALHO ELES, PARA QUE QDO FOR REMOVER UMA LETRA, SEJA DE UM LUGAR ALEATORIO
      if (letraErradaEmbaralhada.length >= 1) {
        //ISSO AQUI CHECA QUANTAS VEZES ELE PODE TENTAR EXLUIR LETRAS ERRADAS, QUE LOGICAMENTE EM QUE SER SÓ A QUANTIDADE DE VEZES IGUAL A QUANTIDADE DE LETRAS ERRADAS QUE EXISTAM
        for (let i = 0; i < quantidadeAleatorio; i++) {
          // O FOR VAI RODAR 21 VEZES SÓ POR PRECAUÇÃO ( POIS É O TOTAL DE CARDS)
          mostruario[letraErradaEmbaralhada[i]].classList.add("card-clicado"); // AQUI É O SEGUINTE: NO MOSTRUARIO, QUE É O ARRAY QUE FICAM OS CARDS DAS LETRAS EU VOU NA POSIÇÃO DE UM DOS NUMEROS DE INDICE QUE EU JÁ SEI QUE NÃO TEM LETRA DO NOME DO HEROI, ELE TA DENTRO DO I POR QUE VAI RODAR.
          mostruario[letraErradaEmbaralhada[i]].innerText = ""; // DEPOIS TIRO O TEXTO DESSE CARD EXLUIDO
          //ATUALIZADO AS MOEDAS GASTAS E AS DO LOCAL STORAGE
          contMoedas = +contMoedas - +custoRemover.innerText; // ATUALIZO A QUANTIDADE DE MOEDAS QUE O USER TEM
          subtraindo = 0; // ZERO A VARIAVEL QUE VAI FAZER O EFEITIM
          diminuirMoedas(); // CHAMO O EFEITO
          localStorage.setItem("moedas", contMoedas); // ADICIONO A QUANTIDADE ATUALIZADA NO LS
          custoRemover.innerText = +custoRemover.innerText + 5; // ATUAMENTO O CUSTO DESSA DICA

          usoRemoverLetra++; // CONTO O USO DA DICA
          i = 20; // E ENCERRO O LOOP
        }
        if (letraErradaEmbaralhada.length === 1) {
          // SE NÃO TIVER MAIS LETRAS VÁLIDAS ( OU SEJA, ERRADAS) PARA DESCARTAR, DESATIVA O BOTÃO DAS DICAS
          removerLetra.classList.add("desativado");
        }
      }
      toggleModal(event);
    }
    if (usoRemoverLetra === 5) {
      // SE JÁ USOU 5 VEZES, TAMBÉM DESABILITA
      removerLetra.classList.add("desativado");
    }
  }

  removerLetra.addEventListener("click", excluirLetraErrada);

  // COLORIR IMAGEM ( FUNÇÃO SIMPLES DE COLORIR A IMAGEM DO PERSONARGEM)
  const colorirImagem = document.querySelector("[data-colorir]");
  const custoColorir = document.querySelector("[data-custo-colorir]");
  custoColorir.innerText = 15; // CUSTO DA DICA

  function colorirPersonargem(event) {
    event.preventDefault();
    if (!event.target.className.includes("desativado")) {
      // SE NÃO TIVER DESATIVADO
      contMoedas = +contMoedas - +custoColorir.innerText; // ATUALIZA QTDE DE MOEDAS
      subtraindo = 0; // ZERO A VARIAVEL QUE VAI FAZER O EFEITIM
      diminuirMoedas(); // CHAMO O EFEITO
      localStorage.setItem("moedas", contMoedas); // ATUALIZA O LS COM ESSE VALOR
      containerImagem.style.backgroundImage = `url(../../img/coloridos/${
        personagens[fase - 1]
      }.png)`; // MUDA A IMAGEM PARA COLORIDO
      colorirImagem.classList.add("desativado"); // DESATIVA ESSA DICA
      toggleModal(event); // FECHA O MODAL
    }
  }
  colorirImagem.addEventListener("click", colorirPersonargem);

  // MOSTRA A RESPOSTA E PASSA DE NÍVEL (REVELEVAR A RESPOSTA INTEIRA)
  const mostrarResposta = document.querySelector("[data-mostrar-resposta]");
  const custoResposta = document.querySelector("[data-custo-resposta]");
  custoResposta.innerText = 150; // CUSTO INICIAL DA DICA

  function revelarResposta(event) {
    event.preventDefault();

    if (!event.target.className.includes("desativado")) {
      contMoedas = +contMoedas - +custoResposta.innerText; // ATUALIZA AS MOEDAS
      moedasJogo.innerText = +contMoedas + 50; // ATUALIZA AS MOEDAS DA TELA
      localStorage.setItem("moedas", contMoedas); //ATUALIZA O LS

      for (let i = 0; i < nomeSemHifem.join("").length; i++) {
        // ESSE FOR VAI RODAR EM TODAS OS CARDS DE RESPOSTA, E VAI ADICIONAR UM A UM A SUA LETRA RESPECTIVA DO NOME DO HEROI ATUAL
        respostas[i].innerHTML = nomeSemHifem.join("").split("")[i]; // QUE É O QUE EU ESTOU FAZENDO AQUI, ATRIBUINDO A PRIMEIRA RESPOSTA, A PRIMEIRA LETRA DO NOME DO HEROI ATUAL, E POR AI VAI.
        arrayResposta[i] = nomeSemHifem.join("").split("")[i]; // E DEPOIS ADICIONA ISSO NO ARRAYRESPOSTA PRA EU PODER VERIFICAR A VITORIA
      }
      toggleModal(event);

      checarVitoria(); // AQUI APENAS VERIFICO, E OBVIO QUE VAI SER POSITIVO.
    }
  }

  mostrarResposta.addEventListener("click", revelarResposta);
}

// SCRIPT REFERENTE A PÁGINA DE CATEGORIAS, DEPOIS VOU MIGRAR COM MODULE
const categorias = document.querySelectorAll("[data-categoria]");
// AQUI EU VOU FAZER O CONTROLE DE QUAIS NVS ENTÃO LIBERADOS OU NÃO
categorias.forEach((cat) => {
  if (contProgresso >= 12 && cat.dataset.categoria === "2") {
    // SE O CONTPROGRSSSO FOR MAIOR OU IGUAL A 12 SIGIFICA QUE O USER JÁ FINALIZOU O NV1, ENTÃO ELE PEGA A CAT 2 E DESBLOQUEIA
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 24 && cat.dataset.categoria === "3") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 36 && cat.dataset.categoria === "4") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 48 && cat.dataset.categoria === "5") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 60 && cat.dataset.categoria === "6") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 72 && cat.dataset.categoria === "7") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 84 && cat.dataset.categoria === "8") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 96 && cat.dataset.categoria === "9") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 108 && cat.dataset.categoria === "10") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 120 && cat.dataset.categoria === "11") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 132 && cat.dataset.categoria === "12") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 144 && cat.dataset.categoria === "13") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 156 && cat.dataset.categoria === "14") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 168 && cat.dataset.categoria === "15") {
    cat.classList.remove("bloqueada");
  } else if (contProgresso >= 180 && cat.dataset.categoria === "16") {
    cat.classList.remove("bloqueada");
  }
});
// FUNÇÃO QUE CONTROLA QUAL O NV CORRETO A SE ABRIR
function abrirCategoria(event) {
  event.preventDefault();
  if (event.target.className.includes("bloqueada") === false) {
    // SE AQUELA CATEGORIA NÃO TIVER BLOQUEADA
    if (event.target.dataset.categoria === "1") {
      //VERIFICO QUAL NÍVEL QUE FOI CLICADO E O ABRO
      window.location = `niveis/nivel1.html`;
    } else if (event.target.dataset.categoria === "2") {
      // SE A CLICADA FOI A CATEGORIA 2
      window.location = `niveis/nivel2.html`; // ENTÃO ABRIR NV 2
    } else if (event.target.dataset.categoria === "3") {
      window.location = `niveis/nivel3.html`;
    } else if (event.target.dataset.categoria === "4") {
      window.location = `niveis/nivel4.html`;
    } else if (event.target.dataset.categoria === "5") {
      window.location = `niveis/nivel5.html`;
    } else if (event.target.dataset.categoria === "6") {
      window.location = `niveis/nivel6.html`;
    } else if (event.target.dataset.categoria === "7") {
      window.location = `niveis/nivel7.html`;
    } else if (event.target.dataset.categoria === "8") {
      window.location = `niveis/nivel8.html`;
    } else if (event.target.dataset.categoria === "9") {
      window.location = `niveis/nivel9.html`;
    } else if (event.target.dataset.categoria === "10") {
      window.location = `niveis/nivel10.html`;
    } else if (event.target.dataset.categoria === "11") {
      window.location = `niveis/nivel11.html`;
    } else if (event.target.dataset.categoria === "12") {
      window.location = `niveis/nivel12.html`;
    } else if (event.target.dataset.categoria === "13") {
      window.location = `niveis/nivel13.html`;
    } else if (event.target.dataset.categoria === "14") {
      window.location = `niveis/nivel14.html`;
    } else if (event.target.dataset.categoria === "15") {
      window.location = `niveis/nivel15.html`;
    } else if (event.target.dataset.categoria === "16") {
      window.location = `niveis/nivel16.html`;
    }
  }
}

categorias.forEach((categoria) => {
  categoria.addEventListener("click", abrirCategoria);
});

// SCRIPT REFERENTE A PÁGINA DE NÍVEIS, DEPOIS VOU MIGRAR COM MODULE
const nivel1 = document.querySelectorAll("[data-level-1]");

nivel1.forEach((nivel, index) => {
  // RODO POR TODOS OS CARDS DO NV 1
  nivel.style.backgroundImage = `url("../../img/escuras/${personagens[index]}.png")`; // E COLOCO EM CADA UM DELE A IMAGEM ESCURA DO SEU HEROI RESPECTIVO, ESTÁ EM ORDEM ISSO

  for (let i = 0; i < concluidos.length; i++) {
    // AQUI EU VER QUEM JÁ FOI CONCLUIDO, ENTÃO FAÇO O LOOP DENTRO DE TODO O ARRAY DE CONCLUIDOS DO LS
    if (concluidos[i].fase === +nivel.dataset.nivel) {
      // E SE O ARRAY DE CONCLUIDOS TIVER O NIVEL QUE ESTÁ SENDO CHEGADO
      nivel.classList.add("concluido"); // MARCA ELE COMO CONCLUÍDO
      nivel.setAttribute("href", "#"); // TIRA O HREF DELE
      nivel.style.backgroundImage = `url("../../img/coloridos/${personagens[index]}.png")`; // TROCA A IMAGEM POR UMA COLORIDA
      nivel.innerText = concluidos[i].heroi; // E COLOCA O NOME DO HEROI NO MEIO DO CARD
    }
  }
});

// NIVEL 2 ------------------------------------------------------------------
const nivel2 = document.querySelectorAll("[data-level-2]");

nivel2.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 12]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 12) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 12]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 3 ------------------------------------------------------------------
const nivel3 = document.querySelectorAll("[data-level-3]");

nivel3.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 24]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 24) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 24]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 4 ------------------------------------------------------------------
const nivel4 = document.querySelectorAll("[data-level-4]");

nivel4.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 36]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 36) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 36]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 5 ------------------------------------------------------------------
const nivel5 = document.querySelectorAll("[data-level-5]");

nivel5.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 48]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 48) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 48]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 6 ------------------------------------------------------------------
const nivel6 = document.querySelectorAll("[data-level-6]");

nivel6.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 60]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 60) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 60]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 7 ------------------------------------------------------------------
const nivel7 = document.querySelectorAll("[data-level-7]");

nivel7.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 72]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 72) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 72]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 8 ------------------------------------------------------------------
const nivel8 = document.querySelectorAll("[data-level-8]");

nivel8.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 84]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 84) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 84]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 9 ------------------------------------------------------------------
const nivel9 = document.querySelectorAll("[data-level-9]");

nivel9.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 96]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 96) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 96]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 10 ------------------------------------------------------------------
const nivel10 = document.querySelectorAll("[data-level-10]");

nivel10.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 108]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 108) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 108]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 11 ------------------------------------------------------------------
const nivel11 = document.querySelectorAll("[data-level-11]");

nivel11.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 120]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 120) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 120]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 12 ------------------------------------------------------------------
const nivel12 = document.querySelectorAll("[data-level-12]");

nivel12.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 132]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 132) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 132]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 13 ------------------------------------------------------------------
const nivel13 = document.querySelectorAll("[data-level-13]");

nivel13.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 144]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 144) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 144]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 14 ------------------------------------------------------------------
const nivel14 = document.querySelectorAll("[data-level-14]");

nivel14.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 156]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 156) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 156]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 15 ------------------------------------------------------------------
const nivel15 = document.querySelectorAll("[data-level-15]");

nivel15.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 168]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 168) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 168]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

// NIVEL 16 ------------------------------------------------------------------
const nivel16 = document.querySelectorAll("[data-level-16]");

nivel16.forEach((nivel, index) => {
  nivel.style.backgroundImage = `url("../../img/escuras/${
    personagens[index + 180]
  }.png")`;

  for (let i = 0; i < concluidos.length; i++) {
    if (concluidos[i].fase === +nivel.dataset.nivel + 180) {
      nivel.classList.add("concluido");
      nivel.setAttribute("href", "#");
      nivel.style.backgroundImage = `url("../../img/coloridos/${
        personagens[index + 180]
      }.png")`;
      nivel.innerText = concluidos[i].heroi;
    }
  }
});

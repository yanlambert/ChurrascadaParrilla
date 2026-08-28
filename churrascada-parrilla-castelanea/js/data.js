/* ==========================================================================
   CHURRASCADA PARRILLA CASTELANEA — DADOS DO RESTAURANTE
   --------------------------------------------------------------------------
   Este arquivo concentra TODAS as informações editáveis do site:
   textos de identidade, cardápio, carnes, bebidas, experiências, galeria
   e avaliações. A interface (index.html / script.js) apenas LÊ estes dados
   e os renderiza — para atualizar preços, pratos ou fotos, edite somente
   este arquivo, sem precisar mexer no layout.

   IMPORTANTE: nenhum prato, preço, ingrediente ou avaliação foi inventado.
   Onde a informação oficial ainda não foi enviada, o campo aparece como
   `null` ou com uma nota "A CONFIRMAR" — troque pelo dado real assim que
   o cardápio/fotos oficiais forem fornecidos.
   ========================================================================== */

const RESTAURANT = {
  nome: "Churrascada Parrilla Castelanea",
  nomeCurto: "Churrascada",
  categoria: "Restaurante · Churrascaria · Parrilla",
  slogan: "Especialistas em oferecer as melhores carnes com a melhor experiência.",
  instagram: "https://www.instagram.com/churrascadaparrillapetropolis/",
  instagramHandle: "@churrascadaparrillapetropolis",
  telefone: "(24) 2245-6380",
  telefoneLink: "tel:+552422456380",
  whatsapp: null, // A CONFIRMAR — nenhum WhatsApp oficial foi fornecido
  reservaOnlineLink: null, // A CONFIRMAR — preparado para receber link de reservas futuramente
  endereco: {
    linha1: "R. Cristovão Colombo, 125",
    bairro: "Castelânea",
    cidade: "Petrópolis - RJ",
    cep: "25640-322",
    mapsEmbed: "https://www.google.com/maps?q=R.+Cristov%C3%A3o+Colombo,+125+-+Castel%C3%A2nea,+Petr%C3%B3polis+-+RJ,+25640-322&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=R.+Cristov%C3%A3o+Colombo,+125+-+Castel%C3%A2nea,+Petr%C3%B3polis+-+RJ,+25640-322"
  },
  avaliacaoNota: 4.5,
  avaliacaoTotal: 471,
  faixaPreco: "R$ 60–140 por pessoa",
  servicos: ["Refeição no local", "Retirada na porta", "Entrega sem contato"],
  horario: {
    resumo: "Aberto até 00:00",
    nota: "Consulte nossos horários atualizados." // dias/horários completos não confirmados — não inventar
  }
};

/* Categorias do cardápio — somente as confirmadas nas informações do projeto.
   Novas categorias podem ser adicionadas aqui quando o cardápio oficial completo
   for enviado (ex.: Entradas, Acompanhamentos, Saladas, Sobremesas). */
const MENU_CATEGORIES = [
  { id: "carnes", label: "Carnes" },
  { id: "parrilla", label: "Parrilla" },
  { id: "hamburgueres", label: "Mini Hambúrgueres" },
  { id: "bebidas", label: "Cervejas & Chopp" }
];

/* Itens do cardápio.
   Estrutura pronta para uso: { id, nome, descricao, categoria, preco, imagem, destaque }
   Nenhum item foi inventado — o cardápio oficial completo (pratos e preços)
   ainda não foi enviado. Assim que chegar, adicione cada prato aqui seguindo
   este formato; o site atualiza sozinho, sem alterar o layout. */
const MENU_ITEMS = [
  // Exemplo de formato para o proprietário / equipe preencherem:
  // {
  //   id: "bife-ancho",
  //   nome: "Bife de Ancho",
  //   descricao: "Corte nobre grelhado na parrilla, ponto no fogo de brasa.",
  //   categoria: "carnes",
  //   preco: "R$ 00,00",
  //   imagem: "images/carnes/carne-1.svg",
  //   destaque: true
  // },
];

/* Carnes em destaque na página inicial (seção "O fogo é o nosso ingrediente").
   Populada a partir de MENU_ITEMS assim que o cardápio oficial for cadastrado. */
const CARNES_DESTAQUE = MENU_ITEMS.filter(item => item.categoria === "carnes" && item.destaque);

/* Cervejas e chopp — as avaliações confirmam variedade e chopp de duas
   cervejarias da cidade, mas sem nomes/preços específicos fornecidos. */
const BEBIDAS = {
  texto: "As avaliações de quem já esteve na Churrascada confirmam: boa variedade de cervejas e chopp de duas cervejarias de Petrópolis para acompanhar a brasa.",
  itens: [] // A CONFIRMAR — nomes, rótulos e preços do cardápio oficial de bebidas
};

/* Experiências — somente as mencionadas/confirmadas nas informações do projeto. */
const EXPERIENCIAS = [
  {
    id: "parrilla",
    titulo: "Parrilla",
    descricao: "Carnes preparadas com o cuidado e a intensidade do fogo, no estilo parrilla.",
    imagem: "images/parrilla/parrilla-1.svg",
    botaoTexto: "Ver Cardápio",
    botaoLink: "#cardapio"
  },
  {
    id: "rodizio-mini-burger",
    titulo: "Rodízio de Mini-Hambúrgueres",
    descricao: "Pequenos no tamanho, grandes no sabor — o rodízio de mini-hambúrgueres é uma das experiências mais elogiadas pelos clientes.",
    imagem: "images/hamburgueres/mini-burger.svg",
    botaoTexto: "Saiba Mais",
    botaoLink: "#mini-hamburgueres"
  },
  {
    id: "carnes",
    titulo: "Carnes",
    descricao: "Uma experiência dedicada aos amantes de carne, dos cortes à brasa ao ponto perfeito.",
    imagem: "images/carnes/carne-2.svg",
    botaoTexto: "Ver Carnes",
    botaoLink: "#carnes"
  },
  {
    id: "cervejas-chopp",
    titulo: "Cervejas & Chopp",
    descricao: "Boa variedade de cervejas e chopp de duas cervejarias da cidade, para acompanhar a brasa.",
    imagem: "images/bebidas/bebida-1.svg",
    botaoTexto: "Ver Mais",
    botaoLink: "#bebidas"
  }
];

/* Diferenciais — seção de 4 cards */
const DIFERENCIAIS = [
  { titulo: "Parrilla", texto: "Carnes preparadas com o cuidado e a intensidade do fogo." },
  { titulo: "Carnes", texto: "Uma experiência dedicada aos amantes de carne." },
  { titulo: "Ambiente", texto: "Um espaço agradável, tranquilo e bem decorado." },
  { titulo: "Experiência", texto: "Mais do que comer: uma experiência gastronômica." }
];

/* Galeria — categorias e imagens (placeholders até o envio das fotos reais/Instagram) */
const GALERIA_CATEGORIAS = ["TODOS", "CARNES", "PARRILLA", "HAMBÚRGUERES", "BEBIDAS", "AMBIENTE"];

const GALERIA_ITENS = [
  { imagem: "images/galeria/galeria-1.svg", categoria: "CARNES", alt: "Carne na brasa" },
  { imagem: "images/galeria/galeria-2.svg", categoria: "PARRILLA", alt: "Grelha em brasa" },
  { imagem: "images/galeria/galeria-3.svg", categoria: "HAMBÚRGUERES", alt: "Mini-hambúrgueres" },
  { imagem: "images/galeria/galeria-4.svg", categoria: "BEBIDAS", alt: "Cerveja e chopp" },
  { imagem: "images/galeria/galeria-5.svg", categoria: "AMBIENTE", alt: "Ambiente da casa" },
  { imagem: "images/galeria/galeria-6.svg", categoria: "CARNES", alt: "Corte na parrilla" },
  { imagem: "images/galeria/galeria-7.svg", categoria: "PARRILLA", alt: "Fogo de brasa" },
  { imagem: "images/galeria/galeria-8.svg", categoria: "AMBIENTE", alt: "Mesa da Churrascada" }
];

/* Avaliações reais fornecidas — nenhuma foi inventada. */
const AVALIACOES = [
  {
    texto: "Fui algumas vezes ao restaurante e a comida é excelente e os garçons atenciosos.",
    destaques: ["Comida excelente", "Atendimento atencioso"]
  },
  {
    texto: "Boa variedade de cervejas e chopp de duas cervejarias da cidade.",
    destaques: ["Variedade de cervejas", "Chopp local"]
  },
  {
    texto: "Pedimos o rodízio de mini hambúrguer, muito gostoso, além da entrada ser ótima!",
    destaques: ["Rodízio de mini-hambúrguer", "Entrada ótima"]
  },
  {
    texto: "Ambiente bonito, bem organizado, bom atendimento...",
    destaques: ["Ambiente bonito", "Bom atendimento"]
  },
  {
    texto: "Comida extremamente saborosa e um ótimo atendimento. Ambiente excelente.",
    destaques: ["Comida saborosa", "Ambiente excelente"]
  }
];

/* Pontos positivos recorrentes nas avaliações — usados como "tags" na seção de avaliações */
const PONTOS_POSITIVOS = [
  "Carnes saborosas",
  "Ambiente agradável e aconchegante",
  "Atendimento atencioso",
  "Cervejas e chopp",
  "Rodízio de mini-hambúrgueres",
  "Comida saborosa"
];

/* Links de navegação (header e footer) */
const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#a-churrascada", label: "A Churrascada" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#carnes", label: "Carnes" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" }
];

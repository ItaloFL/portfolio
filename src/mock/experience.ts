import { Experience } from "@/screens/experience";

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Portal Atribuna",
    type: "Freelancer",
    role: "Desenvolvedor Full Stack",
    duration: "5 meses",
    period: "Nov 2025 – Mar 2026",
    description:
      "Responsável pelo desenvolvimento completo do website institucional e CMS personalizado do portal de notícias, cobrindo frontend, backend, banco de dados, integração com serviços externos e deploy em produção.",
    highlights: [
      "Desenvolveu o portal público em React.js com TypeScript, entregando mais de 10 funcionalidades incluindo galeria responsiva, lightbox e renderização de PDFs via canvas",
      "Agilizou o fluxo de publicação dos redatores ao construir um CMS personalizado com editor rich text (TipTap) e automatizar o upload e recorte de imagens via Cloudinary.",
      "Desenvolveu API REST em Node.js e Express com autenticação JWT, controle de acesso por perfil e cache com Redis, reduzindo 60% a carga no banco em horários de pico",
      "Garantiu a escalabilidade do sistema modelando o banco de dados (PostgreSQL/Prisma) com paginação e indexação adequadas, acelerando o tempo de resposta das queries.",
      "Impulsionou o alcance orgânico do portal aplicando rigorosas práticas de SEO, acessibilidade e garantindo 100% de responsividade (mobile-first).",
    ],
    techs: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Cloudinary",
      "TanStack Query",
      "TailwindCSS",
      "Docker",
    ],
  },
  {
    id: 2,
    company: "WebAcademy Motorola",
    type: "Programa Profissionalizante",
    role: "Desenvolvedor Frontend",
    duration: "8 meses",
    period: "Ago 2025 – Mar 2026",
    description:
      "Integrante do programa profissionalizante WebAcademy em parceria com a Motorola, atuando no desenvolvimento de um sistema de gestão patrimonial interno (GIAP) na Universidade Federal do Acre.",
    highlights: [
      "Desenvolveu e refatorou componentes Angular, melhorando a performance de carregamento e a experiência de navegação",
      "Aumentou a produtividade dos usuários do sistema ao implementar um visualizador de PDFs nativo, eliminando a quebra de fluxo com o uso de apps externos.",
      "Elevou a confiabilidade dos dados no frontend aplicando padrões de programação reativa com RxJS para gerenciar estados complexos e requisições assíncronas.",
      "Colaborou ativamente na padronização e qualidade de software da equipe através de code reviews frequentes dentro de fluxos de metodologia ágil (Scrum).",
    ],
    techs: [
      "Angular",
      "TypeScript",
      "RxJS",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: 3,
    company: "SomosUm",
    type: "Freelancer",
    role: "Desenvolvedor Backend",
    duration: "7 meses",
    period: "Jun 2022 – Dez 2022",
    description:
      "Desenvolveu o backend de uma plataforma de classificados comunitária, sendo responsável pela arquitetura da API, modelagem de dados e qualidade via testes automatizados.",
    highlights: [
      "Viabilizou o lançamento da plataforma estruturando a API REST (Node.js/Express) para o gerenciamento seguro de usuários, permissões e anúncios de ponta a ponta.",
      "Garantiu a integridade das transações modelando o banco de dados relacional (PostgreSQL/Prisma) focado na conexão entre produtos, usuários e pedidos.",
      "Assegurou a estabilidade e preveniu bugs em produção ao escrever uma suíte robusta de testes unitários e de integração com Jest cobrindo rotas críticas.",
      "Reduziu atritos entre os ambientes de desenvolvimento e produção ao configurar todo o ecossistema da aplicação via containers Docker.",
    ],
    techs: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "Jest",
    ],
  },
];

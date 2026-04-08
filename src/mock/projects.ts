import coffeHouse from "../assets/coffe-house.png";
import coffeDelivery from "../assets/coffe-delivery.png";
import kytecar from "../assets/test-repo-img.png";
import porfolio from "../assets/print-portfolio.jpg";
import giap from "../assets/giap-print.png";
import atribuna from "../assets/atribuna-print.png";
import Docker from "../assets/tools-logo/Docker.svg";
import React from "../assets/tools-logo/React.svg";
import Prisma from "../assets/tools-logo/PrismaORM.svg";
import TailwindCSS from "../assets/tools-logo/TailwindCSS.svg";
import TypeScript from "../assets/tools-logo/TypeScript.svg";
import PostgreSQL from "../assets/tools-logo/PostgresSQL.svg";
import Zod from "../assets/knowlege-logo/Zod.svg";
import Git from "../assets/knowlege-logo/Git.svg";
import Redis from "../assets/knowlege-logo/Redis.svg";

export interface Project {
  idProject: number;
  imgURL: string;
  title: string;
  description: string;
  repoLink: string | null;
  sourceLink: string;
  techIcons: string[];
  tag?: string;
}

export const PROJECTS: Project[] = [
  {
    idProject: 1,
    imgURL: giap,
    title: "GIAP - Gestão Patrimonial",
    tag: "Frontend",
    description:
      "Sistema feito para realizar o controle efetivo dos patrimonios do WebAcademy na Universiade Federal do Acre",
    repoLink: null,
    sourceLink: "https://giapdocker-front.srv750236.hstgr.cloud/",
    techIcons: [React, TailwindCSS, TypeScript, Git, Zod],
  },
  {
    idProject: 2,
    imgURL: atribuna,
    title: "Portal A Tribuna",
    tag: "Full-Stack",
    description:
      "Website e CMS feito para um Jornal local do Acre para facilitar a visualização e o fluxo de publicação de noticias",
    repoLink: null,
    sourceLink: "https://atribuna.net.br/",
    techIcons: [
      React,
      TailwindCSS,
      TypeScript,
      Git,
      Zod,
      Prisma,
      Docker,
      PostgreSQL,
      Redis,
    ],
  },
  {
    idProject: 3,
    imgURL: porfolio,
    title: "Portfólio",
    tag: "Frontend",
    description:
      "Website criado para demonstrar capacidades técnicas e presença na web, com tema claro/escuro e integração com Spotify.",
    repoLink: "https://github.com/ItaloFL/portfolio",
    sourceLink: "https://portfolio-italofls-projects.vercel.app",
    techIcons: [React, TailwindCSS, TypeScript, Git, Zod],
  },
  {
    idProject: 4,
    imgURL: kytecar,
    title: "Kyte Car",
    tag: "Full-Stack",
    description:
      "Plataforma de gestão de veículos com foco em testes integrados com datas, construída com stack moderna e banco relacional.",
    repoLink: "https://github.com/ItaloFL/kytecar-api",
    sourceLink: "https://kytecar-web.vercel.app",
    techIcons: [React, Prisma, TailwindCSS, TypeScript, Docker, PostgreSQL],
  },
  {
    idProject: 5,
    imgURL: coffeHouse,
    title: "Coffe House",
    tag: "Full-Stack",
    description:
      "E-commerce de cafés com catálogo de produtos, sistema de pedidos e envio, desenvolvido com backend containerizado.",
    repoLink: "https://github.com/ItaloFL/coffehouse-web",
    sourceLink: "https://coffehouse-web.vercel.app",
    techIcons: [React, TypeScript, Docker, PostgreSQL],
  },
  {
    idProject: 6,
    imgURL: coffeDelivery,
    title: "Coffe Delivery",
    tag: "Frontend",
    description:
      "Desafio Rocketseat focado em Context API e gerenciamento de estado global em aplicações de delivery.",
    repoLink: "https://github.com/ItaloFL/Coffe-Delivery",
    sourceLink: "https://coffe-delivery-vert.vercel.app",
    techIcons: [React, Prisma, TailwindCSS, TypeScript],
  },
];

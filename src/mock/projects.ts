import coffeHouse from "../assets/coffe-house.png";
import coffeDelivery from "../assets/coffe-delivery.png";
import kytecar from "../assets/test-repo-img.png";
import Docker from "../assets/tools-logo/Docker.svg";
import React from "../assets/tools-logo/React.svg";
import Prisma from "../assets/tools-logo/PrismaORM.svg";
import TailwindCSS from "../assets/tools-logo/TailwindCSS.svg";
import TypeScript from "../assets/tools-logo/TypeScript.svg";
import PostgreSQL from "../assets/tools-logo/PostgresSQL.svg";

export const PROJECTS = [
  {
    idProject: 1,
    imgURL: kytecar,
    title: "Kyte Car",
    description:
      "O website KyteCar foi um projeto criado para desenvolver minhas habilidades em Testes integrados com datas e criação de dates",
    repoLink: "https://github.com/ItaloFL/kytecar-api",
    sourceLink: "https://kytecar-web.vercel.app",
    techIcons: [React, Prisma, TailwindCSS, TypeScript, Docker, PostgreSQL],
  },
  {
    idProject: 2,
    imgURL: coffeHouse,
    title: "Coffe House",
    description:
      "Website feito loja de venda de cafés, onde seu intuito é apresentar todos os tipos e valores de cafés, sendo possivel também o pedido e envio dos mesmos",
    repoLink: "https://github.com/ItaloFL/coffehouse-web",
    sourceLink: "https://coffehouse-web.vercel.app",
    techIcons: [React, TypeScript, Docker, PostgreSQL],
  },
  {
    idProject: 3,
    imgURL: coffeDelivery,
    title: "Coffe Delivery",
    description:
      "Website feito em desafio da Rocketseat realizado para fortificar em conhecimentos de criação de pagina web",
    repoLink: "https://github.com/ItaloFL/Coffe-Delivery",
    sourceLink: "https://coffe-delivery-vert.vercel.app",
    techIcons: [React, Prisma, TailwindCSS, TypeScript],
  },
];

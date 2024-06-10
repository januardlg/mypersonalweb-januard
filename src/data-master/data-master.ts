import { IPortolioData } from "./data-mater";

import { IStacksList } from "./data-mater";

import HTMLIcon from "../../public/icons/html-icon.png";
import CSSIcon from "../../public/icons/css-icon.png";
import JavascriptIcon from "../../public/icons/javascript-icon.png";
import TypescriptIcon from "../../public/icons/typescript-icon.png";
import ReactIcon from "../../public/icons/react-icon.png";
import NextIcon from "../../public/icons/nextjs-icon.png";
import BootstrapIcon from "../../public/icons/bootstrap-icon.png";
import TailwindIcon from "../../public/icons/tailwind-icon.png";

import FoodRecipeImage from "../../public/images/portofolio/food-recipe.png";
import TodoListImage from "../../public/images/portofolio/todo-list.png"
import NextCommerceImage from "../../public/images/portofolio/next-commerce.png";

export const STACKS_LOGOS: Array<IStacksList> = [
  {
    id: 1,
    alt: "HTML5",
    src: HTMLIcon,
  },
  {
    id: 2,
    alt: "CSS3",
    src: CSSIcon,
  },
  {
    id: 3,
    alt: "Javascript",
    src: JavascriptIcon,
  },
  {
    id: 4,
    alt: "Typescript",
    src: TypescriptIcon,
  },
  {
    id: 5,
    alt: "ReactJS",
    src: ReactIcon,
  },
  {
    id: 6,
    alt: "NextJS",
    src: NextIcon,
  },
  {
    id: 7,
    alt: "Bootstrap",
    src: BootstrapIcon,
  },
  {
    id: 8,
    alt: "Tailwind",
    src: TailwindIcon,
  },
];

export const PORTOFOLIO_DATAS: Array<IPortolioData> = [
  {
    id: 0,
    name: "Food Recipe",
    category: 1,
    descriptions: [
      {
        id: 0,
        keterangan:
          "A user-friendly web application to assist users in discovering and bookmarking captivating culinary recipes",
      },
    ],
    techStacks: [1, 2, 3, 5, 7],
    repoLink: "https://github.com/januard064/Food-Recipes",
    demoLink: "https://food-recipes-mealdb.netlify.app/",
    portofolioImageUrl: FoodRecipeImage,
  },
  {
    id: 1,
    name: " Todo List Web",
    category: 1,
    descriptions: [
      {
        id: 0,
        keterangan:
          "Task management web application that can help individuals organize, track, and manage their tasks and activities. This project use Firebase API for data management.",
      },
    ],
    techStacks: [1, 2, 3, 5, 7],
    repoLink: "https://github.com/januard064/TodoList-ReactJs-Firebase",
    demoLink: "https://todolist-firebase.netlify.app/",
    portofolioImageUrl: TodoListImage,
  },
  {
    id: 2,
    name: " Next Commerce",
    category: 1,
    descriptions: [
      {
        id: 0,
        keterangan:
          "An e-commerce web application. Using Tailwind CSS for styling. It leverages Next.js to harness the advantages of client-side and server side rendering.",
      },
    ],
    techStacks: [1, 2, 3, 6, 8],
    repoLink: "https://github.com/januard064/ecommerce-next",
    demoLink:
      "https://ecommerce-next-jsov-3d17-hebrlclb7-januard064s-projects.vercel.app/",
    portofolioImageUrl: NextCommerceImage,
  },
];

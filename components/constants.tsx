import { IProject, ProjectType } from "@/lib/interfaces";
import { Github, Linkedin, Send } from "lucide-react";

export const headerNavLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const socialProviders = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-dimitrov-94593a180/",
    icon: <Linkedin size={26} strokeWidth={1.5} />,
  },
  {
    name: "Github",
    href: "https://github.com/ddimitrov1108",
    icon: <Github size={26} strokeWidth={1.5} />,
  },
  {
    name: "Telegram",
    href: "https://t.me/@d_dimitrov",
    icon: <Send size={26} strokeWidth={1.5} />,
  },
];

export const techStackIcons = [
  "nextjs.svg",
  "react.svg",
  "redux.svg",
  "ts.svg",
  "js.svg",
  "tailwindcss.svg",
  "shadcnui.svg",
  "headlessui.svg",
  "scss.svg",
  "prisma.svg",
  "mysql.svg",
  "postgresql.svg",
  "html.svg",
  "css.svg",
];

export const projects: {
  types: ProjectType[];
  tabs: {
    name: string;
    type: ProjectType;
  }[];
  data: IProject[];
} = {
  types: ["application", "branding"],
  tabs: [
    {
      name: "Applications",
      type: "application",
    },
    {
      name: "Branding",
      type: "branding",
    },
  ],
  data: [
    {
      img: "hair-products.jpg",
      url: "https://hair-products-itm9.onrender.com/",
      source: "https://github.com/ddimitrov1108/hair-products",
      type: "branding",
      name: "Hair Products Quiz",
      description: "Discover ideal hair products based on your needs.",
      tech: ["react.svg", "ts.svg", "tailwindcss.svg"],
    },
    {
      img: "taskdoer.png",
      url: undefined,
      source: "https://github.com/ddimitrov1108/task-doer",
      type: "application",
      name: "TaskDoer",
      description: "Efficiently manage and prioritize tasks.",
      tech: [
        "nextjs.svg",
        "ts.svg",
        "tailwindcss.svg",
        "prisma.svg",
        "mysql.svg",
      ],
    },
    {
      img: "sellstone.jpg",
      url: "https://sellstone.eu",
      source: undefined,
      type: "branding",
      name: "Marketing Landing Page",
      description: "Boost your business with effective marketing.",
      tech: ["react.svg", "tailwindcss.svg"],
    },
    {
      img: "tickets-burgas.jpg",
      url: undefined,
      source: "https://github.com/ddimitrov1108/tickets-burgas",
      type: "application",
      name: "Public Transport Ticketing App",
      description: "Purchase and validate public transport tickets.",
      tech: ["react.svg", "redux.svg", "tailwindcss.svg", "csharp.svg"],
    },
    {
      img: "saxo-trading.png",
      url: undefined,
      source: undefined,
      type: "application",
      name: "Trading Platform",
      description: "Trade confidently with advanced tools.",
      tech: ["vue.svg", "tailwindcss.svg", "scss.svg"],
    },
  ],
};

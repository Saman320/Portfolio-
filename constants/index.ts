import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 110,
    height: 110,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Aceternity UI",
    image: "aceternity-ui.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Saman320",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/saman-siddiqui-0023b3292/",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
   {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 110,
    height: 110,
  },
  {
    skill_name: "Aceternity UI",
    image: "aceternity-ui.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "FastAPI",
    image: "fastapi.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Gemini",
    image: "gemini.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "DeepSeek",
    image: "deepseek.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Openai",
    image: "openai.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Pydantic",
    image: "pydantic.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Next.Js",
    image: "next.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tailwind Css",
    image: "tailwind.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "SDK Agent",
    image: "sdk-agents.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "E-Commerce Web Application",
    description:
      'Designed and developed a full-featured e-commerce website using Next.js with TypeScript for scalability and performance. Integrated Sanity CMS for dynamic product and content management, and used Framer Motion to create smooth, engaging animations and interactions. The project focuses on clean UI, fast load times, and a modern shopping experience with a responsive, production-ready architecture..',
    image: "/projects/project-1.png",
    link: "https://ui-ux-hackathon-pied.vercel.app/",
  },
  {
    title: "Avion Furniture Marketplace",
    description:
      'Step into the refined world of modern commerce through "Avion Furniture" — a fully functional and aesthetically curated full-stack website that transforms the online furniture shopping experience. Moving beyond ordinary e-commerce designs, this project blends sleek UI with real-time features like dynamic product views, smart filtering, and secure checkout, all built with cutting-edge web technologies to deliver both elegance and efficiency.',
    image: "/projects/project-2.png",
    link: "https://avionfurnituremarketplace.vercel.app/",
  },
  {
    title: "Men’s Perfume Website",
    description:
      'Developed a modern men’s perfume website using Next.js and TypeScript, with Sanity CMS for easy product and content management. Added smooth UI animations using Framer Motion to enhance the browsing experience. The website is designed with a clean, premium look, responsive layout, and optimized performance to reflect a luxury fragrance brand.',
    image: "/projects/project-3.png",
    link: "https://mens-perfume-website.vercel.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/AreebaZafarChohan",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/areebazafar715",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/areeba-zafar-973917303/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "My Blogs",
        icon: null,
        link: "https://medium.com/@areebazafar715",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://github.com/AreebaZafarChohan",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:areebazafar715@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact Me",
    link: "#contact",
  }
] as const;



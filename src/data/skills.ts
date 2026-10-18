// Languages
import JavaScriptIcon from "../assets/icons/skills/javascript.svg";
import TypeScriptIcon from "../assets/icons/skills/typescript.svg";
import PythonIcon from "../assets/icons/skills/python.svg";
import GoIcon from "../assets/icons/skills/go.svg";

// Frontend
import HtmlIcon from "../assets/icons/skills/html.svg";
import CssIcon from "../assets/icons/skills/css.svg";
import AstroIcon from "../assets/icons/skills/astro.svg";
import ReactIcon from "../assets/icons/skills/react.svg";
import TailwindIcon from "../assets/icons/skills/tailwindcss.svg";
import NextIcon from "../assets/icons/skills/nextjs.svg";
import ZustandIcon from "../assets/icons/skills/zustand.svg";

// Backend
import NodeIcon from "../assets/icons/skills/nodejs.svg";
import NetIcon from "../assets/icons/skills/net.svg";
import RedisIcon from "../assets/icons/skills/redis.svg";
import ExpressIcon from "../assets/icons/skills/express.svg";
import ZodIcon from "../assets/icons/skills/zod.svg";
import DrizzleIcon from "../assets/icons/skills/drizzle.svg";

// Database
import MySQLIcon from "../assets/icons/skills/mysql.svg";
import PostgreSQLIcon from "../assets/icons/skills/postgresql.svg";
import SequalizeIcon from "../assets/icons/skills/sequalize.svg";
import MongoDBIcon from "../assets/icons/skills/mongodb.svg";

// Tools
import PnpmIcon from "../assets/icons/skills/pnpm.svg";
import GitIcon from "../assets/icons/skills/git.svg";
import DockerIcon from "../assets/icons/skills/docker.svg";
import GitHubIcon from "../assets/icons/social/github.svg";
import FigmaIcon from "../assets/icons/skills/figma.svg";
import ViteIcon from "../assets/icons/skills/vite.svg";
import PostmanIcon from "../assets/icons/skills/postman.svg";

// Deploy
import NginxIcon from "../assets/icons/skills/nginx.svg";
import CloudefareIcon from "../assets/icons/skills/cloudfare.svg";
import NetlifyIcon from "../assets/icons/skills/netlify.svg";
import VercelIcon from "../assets/icons/skills/vercel.svg";

// OS
import ZshIcon from "../assets/icons/skills/zshShell.svg";
import ArchIcon from "../assets/icons/os/arch.svg";
import NeoVimIcon from "../assets/icons/os/neovim.svg";
import VimIcon from "../assets/icons/os/vim.svg";
import VsCodeIcon from "../assets/icons/os/vscode.svg";

export const SKILLS_DATA = {
  languages: [
    {
      id: "javascript",
      name: "JavaScript",
      level: "ADVANCED" as const,
      icon: JavaScriptIcon,
    },
    {
      id: "typescript",
      name: "TypeScript",
      level: "ADVANCED" as const,
      icon: TypeScriptIcon,
    },
    {
      id: "python",
      name: "Python",
      level: "INTERMEDIATE" as const,
      icon: PythonIcon,
    },
    {
      id: "go",
      name: "Go",
      level: "INTERMEDIATE" as const,
      icon: GoIcon,
    },
  ],
  frontend: [
    {
      id: "html",
      name: "HTML",
      level: "ADVANCED" as const,
      icon: HtmlIcon,
    },
    {
      id: "css",
      name: "CSS",
      level: "ADVANCED" as const,
      icon: CssIcon,
    },
    {
      id: "astro",
      name: "AstroJs",
      level: "ADVANCED" as const,
      icon: AstroIcon,
    },
    {
      id: "react",
      name: "ReactJs",
      level: "ADVANCED" as const,
      icon: ReactIcon,
    },
    {
      id: "tailwindcss",
      name: "TailwindCSS",
      level: "ADVANCED" as const,
      icon: TailwindIcon,
    },
    {
      id: "nextjs",
      name: "NextJs",
      level: "ADVANCED" as const,
      icon: NextIcon,
    },
    {
      id: "zustand",
      name: "Zustand",
      level: "ADVANCED" as const,
      icon: ZustandIcon,
    },
  ],
  backend: [
    {
      id: "nodejs",
      name: "NodeJs",
      level: "ADVANCED" as const,
      icon: NodeIcon,
    },
    {
      id: "net",
      name: ".NET",
      level: "INTERMEDIATE" as const,
      icon: NetIcon,
    },
    {
      id: "express",
      name: "ExpressJs",
      level: "ADVANCED" as const,
      icon: ExpressIcon,
    },
    {
      id: "zod",
      name: "Zod",
      level: "INTERMEDIATE" as const,
      icon: ZodIcon,
    },
    {
      id: "drizzle",
      name: "Drizzle",
      level: "INTERMEDIATE" as const,
      icon: DrizzleIcon,
    },
  ],
  database: [
    {
      id: "mysql",
      name: "MySQL",
      level: "INTERMEDIATE" as const,
      icon: MySQLIcon,
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      level: "INTERMEDIATE" as const,
      icon: PostgreSQLIcon,
    },
    {
      id: "sequelize",
      name: "Sequelize",
      level: "INTERMEDIATE" as const,
      icon: SequalizeIcon,
    },
    {
      id: "mongodb",
      name: "MongoDB",
      level: "INTERMEDIATE" as const,
      icon: MongoDBIcon,
    },
    {
      id: "redis",
      name: "Redis",
      level: "INTERMEDIATE" as const,
      icon: RedisIcon,
    },
  ],
  tools: [
    {
      id: "pnpm",
      name: "pnpm",
      level: "ADVANCED" as const,
      icon: PnpmIcon,
    },
    {
      id: "git",
      name: "Git",
      level: "ADVANCED" as const,
      icon: GitIcon,
    },
    {
      id: "github",
      name: "GitHub",
      level: "ADVANCED" as const,
      icon: GitHubIcon,
    },
    {
      id: "docker",
      name: "Docker",
      level: "INTERMEDIATE" as const,
      icon: DockerIcon,
    },
    {
      id: "figma",
      name: "Figma",
      level: "INTERMEDIATE" as const,
      icon: FigmaIcon,
    },
    {
      id: "vite",
      name: "Vite",
      level: "ADVANCED" as const,
      icon: ViteIcon,
    },
    {
      id: "postman",
      name: "Postman",
      level: "ADVANCED" as const,
      icon: PostmanIcon,
    },
  ],
  deploy: [
    {
      id: "nginx",
      name: "Nginx",
      level: "INTERMEDIATE" as const,
      icon: NginxIcon,
    },
    {
      id: "cloudflare",
      name: "Cloudflare",
      level: "INTERMEDIATE" as const,
      icon: CloudefareIcon,
    },
    {
      id: "netlify",
      name: "Netlify",
      level: "ADVANCED" as const,
      icon: NetlifyIcon,
    },
    {
      id: "vercel",
      name: "Vercel",
      level: "ADVANCED" as const,
      icon: VercelIcon,
    },
  ],
  os: [
    {
      id: "zsh",
      name: "Zsh",
      level: "ADVANCED" as const,
      icon: ZshIcon,
    },
    {
      id: "arch",
      name: "Arch Linux",
      level: "INTERMEDIATE" as const,
      icon: ArchIcon,
    },
    {
      id: "neovim",
      name: "NeoVim",
      level: "ADVANCED" as const,
      icon: NeoVimIcon,
    },
    {
      id: "vim",
      name: "Vim",
      level: "INTERMEDIATE" as const,
      icon: VimIcon,
    },
    {
      id: "vscode",
      name: "VS Code",
      level: "ADVANCED" as const,
      icon: VsCodeIcon,
    },
  ],
} as const;

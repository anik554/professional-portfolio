import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import HotelClassIcon from "@mui/icons-material/HotelClass";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import Groups2Icon from "@mui/icons-material/Groups2";
import type { ColorPaletteProp } from "@mui/joy";

export const navbarButtons = [
  { id: 1, label: "Home", value: "HOME", icons: <HomeIcon /> },
  { id: 2, label: "About", value: "ABOUT", icons: <PersonIcon /> },
  { id: 3, label: "Resume", value: "RESUME", icons: <AssignmentIcon /> },
  { id: 4, label: "Works", value: "WORKS", icons: <BusinessCenterIcon /> },
  {
    id: 5,
    label: "Contact",
    value: "CONTACT",
    icons: <PermContactCalendarIcon />,
  },
];

export const whatIdoOptions = [
  {
    id: 1,
    value: "Building modern single-page applications (SPAs)",
    icons: <HotelClassIcon />,
  },
  {
    id: 2,
    value:
      "Integrating REST APIs and state management with React Query / Redux",
    icons: <AcUnitIcon />,
  },
  {
    id: 3,
    value: "Designing responsive layouts using Material UI and Tailwind CSS",
    icons: <DesignServicesIcon />,
  },
  {
    id: 4,
    value: "Writing clean, maintainable code with a focus on performance",
    icons: <NoteAltIcon />,
  },
  {
    id: 5,
    value: "Collaborating with teams to ship production-ready features",
    icons: <Groups2Icon />,
  },
];

export const educationData = [
  {
    id: 1,
    year: "On-going",
    degree: "MSc. in CSE",
    organization: "Jagannath University, Dhaka",
  },
  {
    id: 2,
    year: "2013 - 2018",
    degree: "BSc. in CSE",
    organization: "State University of Bangladesh, Dhaka",
  },
  {
    id: 3,
    year: "2009 - 2012",
    degree: "Higher Secondary Certificate",
    organization: "Kurigram Govt. College, Kurigram",
  },
  {
    id: 4,
    year: "2004 - 2009",
    degree: "Secondary School Certificate",
    organization: "Kurigram Govt. High School, Kurigram",
  },
];

export const experienceData = [
  {
    id: 1,
    experience: "2021 - Till Now",
    designation: "Front End Developer",
    organization: "Crystal Technology Bangladesh Ltd, Dhaka",
  },
  {
    id: 2,
    experience: "2019 - 2021",
    designation: "Sr.Executive IT",
    organization: "Crystal Technology Bangladesh Ltd, Dhaka",
  },
  {
    id: 3,
    experience: "2018 - 2019",
    designation: "Support Engineer",
    organization: "Crystal Technology Bangladesh Ltd, Dhaka",
  },
];

export const skillsData = [
  { id: 1, skill: "React.js", mark: 93, color: "primary" },
  { id: 2, skill: "Next.js", mark: 88, color: "success" },
  { id: 3, skill: "Redux / RTK Query", mark: 85, color: "warning" },
  { id: 4, skill: "Node Js", mark: 85, color: "neutral" },
] satisfies Array<{
  id: number;
  skill: string;
  mark: number;
  color: ColorPaletteProp;
}>;

export const knowledgesFrontend = [
  { id: 1, label: "HTML5" },
  { id: 2, label: "CSS3" },
  { id: 3, label: "JavaScript (ES6+)" },
  { id: 4, label: "TypeScript" },
  { id: 5, label: "React.js" },
  { id: 6, label: "Next.js" },
  { id: 7, label: "Redux / RTK Query" },
  { id: 8, label: "Tailwind CSS" },
  { id: 9, label: "Material UI" },
  { id: 10, label: "Responsive Design" },
  { id: 11, label: "REST API Integration" },
];
export const knowledgesBackend = [
  { id: 1, label: "PostgreSQL" },
  { id: 2, label: "Prisma" },
  { id: 3, label: "MongoDB" },
  { id: 4, label: "Mongoose" },
  { id: 5, label: "Zod Validation" },
  { id: 6, label: "Docker" },
  { id: 7, label: "GhaphQL" },
  { id: 8, label: "AWS" },
  { id: 9, label: "CI/CD" },
  { id: 10, label: "Redis" },
  { id: 11, label: "Express Js with TypeScript" },
  { id: 12, label: "REST API Integration" },
];

export const portfolioWorks = [
  {
    id: 1,
    title: "Beging Web",
    type: { developed: "Frontend", using: ["HTML", "CSS"] },
    pjoectLink: "https://anik554.github.io/Programming-Hero-Assignment1/",
  },
  {
    id: 2,
    title: "Fitness Center (Responsive)",
    type: {
      developed: "Frontend",
      using: ["HTML", "CSS", "Grid"],
    },
    pjoectLink: "https://anik554.github.io/Assignment-2/",
  },
  {
    id: 3,
    title: "Rinterio",
    type: {
      developed: "Frontend",
      using: ["HTML", "CSS", "Tailwind-CSS"],
    },
    pjoectLink: "https://anik554.github.io/Assignment-3/",
  },
  {
    id: 4,
    title: "Donate Bangladesh",
    type: {
      developed: "Frontend",
      using: ["HTML", "CSS", "Tailwind-CSS","JavaScript","DOM"],
    },
    pjoectLink: "https://anik554.github.io/Donate_Bangladesh/",
  },
  {
    id: 5,
    title: "Peddy Web",
    type: {
      developed: "Frontend",
      using: ["HTML", "CSS", "Tailwind-CSS","Daisy-ui","JavaScript","DOM"],
    },
    pjoectLink: "https://peddy-web.surge.sh/",
  },
  {
    id: 6,
    title: "Dream BPL-11",
    type: {
      developed: "Frontend",
      using: ["HTML", "CSS", "Tailwind-CSS","Daisy-ui","JavaScript","React JS"],
    },
    pjoectLink: "https://dream-bpl-11.surge.sh/",
  },
  {
    id: 7,
    title: "Gadget Heaven",
    type: {
      developed: "Frontend",
      using: ["HTML", "CSS", "Tailwind-CSS","Daisy-ui","JavaScript","React JS"],
    },
    pjoectLink: "https://gadget-heavenshop.surge.sh/",
  },
  {
    id: 8,
    title: "Green BD Travel",
    type: {
      developed: "Frontend",
      using: ["HTML", "CSS", "Tailwind-CSS","Daisy-ui","JavaScript","React JS","Firebase"],
    },
    pjoectLink: "https://green-bd-travel.web.app/",
  },
  {
    id: 9,
    title: "Food Tiger",
    type: {
      developed: "Full Stack",
      using: ["HTML", "CSS", "Material UI","JavaScript","React JS","Firebase","Express js", "MongoDB"],
    },
    pjoectLink: "https://food-tiger-e5f40.web.app/",
  },
  {
    id: 10,
    title: "Pet Adaption",
    type: {
      developed: "Full Stack",
      using: ["HTML", "CSS", "Tailwind-CSS","Daisy-ui","JavaScript","React JS","Firebase","Express js", "MongoDB",""],
    },
    pjoectLink: "https://pet-adoption-27f98.web.app/",
  },
];

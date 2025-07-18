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
  { id: 1, skill: "HTML5", mark: 95, color: "primary" },
  { id: 2, skill: "CSS3", mark: 92, color: "success" },
  { id: 3, skill: "JavaScript (ES6+)", mark: 90, color: "danger" },
  { id: 4, skill: "TypeScript", mark: 85, color: "warning" },
  { id: 5, skill: "React.js", mark: 93, color: "neutral" },
  { id: 6, skill: "Next.js", mark: 88, color: "info" },
  { id: 7, skill: "Redux / RTK Query", mark: 85, color: "primary" }, // fix: avoid 'inherit'
  { id: 8, skill: "Tailwind CSS", mark: 90, color: "warning" },
  { id: 9, skill: "Material UI", mark: 87, color: "danger" },
  { id: 10, skill: "Responsive Design", mark: 95, color: "success" }, // fix: avoid 'error'
  { id: 11, skill: "REST API Integration", mark: 90, color: "success" },
];

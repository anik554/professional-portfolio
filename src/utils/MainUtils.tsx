import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import HotelClassIcon from '@mui/icons-material/HotelClass';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Groups2Icon from '@mui/icons-material/Groups2';


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

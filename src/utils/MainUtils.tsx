import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export const navbarButtons = [
  { id: 1, label: "Home", value: "HOME", icons: <HomeIcon /> },
  { id: 2, label: "About", value: "ABOUT", icons: <PersonIcon /> },
  { id: 3, label: "Resume", value: "RESUME", icons: <AssignmentIcon /> },
  { id: 4, label: "Works", value: "WORKS", icons: <BusinessCenterIcon /> },
  { id: 5, label: "Contact", value: "CONTACT", icons: <PermContactCalendarIcon /> },
];

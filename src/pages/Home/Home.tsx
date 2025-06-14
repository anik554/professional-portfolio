import { Avatar, Box, Button, Typography } from "@mui/material";
import ProfileImage from "../../assets/images/anik_imtiaz.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";

export const Home = () => {
  return (
    <Box
      width="100%"
      height="80vh"
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        alt="Remy Sharp"
        src={ProfileImage}
        sx={{ width: 250, height: 250, p: 2 }}
      />
      <Box my={2}>
        <Typography textAlign={"center"} variant="h5" fontWeight={"bold"}>
          Md. Anik Imtiaz
        </Typography>
        <Typography textAlign={"center"} color="text.secondary">
          Front End Developer
        </Typography>
      </Box>
      <Box display={"flex"} gap={1} my={1}>
        <a
          href="https://facebook.com/yourProfile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar sx={{ cursor: "pointer" }}>
            <FacebookIcon />
          </Avatar>
        </a>
        <a
          href="https://github.com/yourUsername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar sx={{ cursor: "pointer" }}>
            <GitHubIcon />
          </Avatar>
        </a>
        <a
          href="https://github.com/yourUsername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar sx={{ cursor: "pointer" }}>
            <LinkedInIcon />
          </Avatar>
        </a>
      </Box>
      <Box my={1}>
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          startIcon={<DownloadIcon />}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};

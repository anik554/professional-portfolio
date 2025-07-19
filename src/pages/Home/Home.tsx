import { Avatar, Box, Button, Typography } from "@mui/material";
import ProfileImage from "../../assets/images/anik_imtiaz.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";

export const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_of_Anik_Imtiaz.pdf";
    link.download = "Resume of Anik Imtiaz.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
        sx={{ width: 200, height: 200}}
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
          href="https://www.facebook.com/share/1EywPf1nu9/?mibextid=wwXIfr"
          target="_blank"
          rel="Facebook Profile"
        >
          <Avatar sx={{ cursor: "pointer" }}>
            <FacebookIcon />
          </Avatar>
        </a>
        <a
          href="https://github.com/anik554"
          target="_blank"
          rel="Github Profile"
        >
          <Avatar sx={{ cursor: "pointer" }}>
            <GitHubIcon />
          </Avatar>
        </a>
        <a
          href="https://www.linkedin.com/in/anik-imtiaz-b65816209/"
          target="_blank"
          rel="linkedin Profile"
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
          onClick={handleDownload}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};

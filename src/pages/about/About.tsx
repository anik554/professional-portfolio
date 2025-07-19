import {
  Box,
  Card,
  CardContent,
  Divider,
  Fab,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ProfileImage from "../../assets/images/anik_imtiaz.jpg";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CakeIcon from "@mui/icons-material/Cake";
import { whatIdoOptions } from "../../utils/MainUtils";

const About = () => {
  return (
    <Box width={"100%"} component={Paper} elevation={1} my={5} sx={{borderRadius:5}}>
      <Box p={3}>
        <Box display={"flex"} gap={3}>
          <Typography variant="h4" fontWeight={"bold"}>
            About Me
          </Typography>
          <Typography variant="h4" fontWeight={"bold"} color="warning">
            —————
          </Typography>
        </Box>
        <Box mt={4}>
          <Grid container spacing={2}>
            <Grid size={4}>
              <Box sx={{ width: 350, height: 400 }}>
                <img
                  src={ProfileImage}
                  alt="Profile Image"
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
            </Grid>
            <Grid size={8}>
              <Box mb={2}>
                <Typography variant="h5" fontWeight={"bold"}>
                  Who am i?
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography>
                  I'm a Frontend Developer from Dhaka, Bangladesh, passionate
                  about building modern, responsive, and user-friendly web
                  interfaces. I specialize in turning complex requirements into
                  clean, efficient, and visually appealing user experiences
                  using technologies like React, TypeScript, and Material UI.{" "}
                  <br />
                  <br /> I focus on writing maintainable code, optimizing
                  performance, and delivering pixel-perfect UI that aligns with
                  your brand and goals. <br />
                  <br />
                  My goal is to translate your ideas into functional,
                  high-quality web applications that not only look great but
                  also perform seamlessly across all devices. <br />
                  <br />
                  I've built frontend solutions for startups, agencies, and
                  global brands — and I'm always excited to take on new
                  challenges.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="h5" fontWeight={"bold"}>
                  Personal Info
                </Typography>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <Box display={"flex"} alignItems={"center"} gap={2}>
                      <Fab aria-label="like">
                        <PhoneIphoneIcon color="success" />
                      </Fab>
                      <Box>
                        <Typography color="text.secondary">Phone</Typography>
                        <Typography>+8801734699652</Typography>
                      </Box>
                    </Box>
                    &nbsp;
                    <Box display={"flex"} alignItems={"center"} gap={2}>
                      <Fab aria-label="like">
                        <LocationOnIcon color="primary" />
                      </Fab>
                      <Box>
                        <Typography color="text.secondary">Location</Typography>
                        <Typography>Mohammadpur, Dhaka</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid size={6}>
                    <Box display={"flex"} alignItems={"center"} gap={2}>
                      <Fab aria-label="like">
                        <MailIcon color="warning" />
                      </Fab>
                      <Box>
                        <Typography color="text.secondary">Email</Typography>
                        <Typography>anikimtiaz1993@gmail.com</Typography>
                      </Box>
                    </Box>
                    &nbsp;
                    <Box display={"flex"} alignItems={"center"} gap={2}>
                      <Fab aria-label="like">
                        <CakeIcon color="secondary" />
                      </Fab>
                      <Box>
                        <Typography color="text.secondary">Birthday</Typography>
                        <Typography>November 02, 1993</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box my={2}>
          <Box mb={2}>
            <Typography variant="h4">What I do!</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
              gap: 3,
              alignItems: "flex-start",
            }}
          >
            {whatIdoOptions?.map((dos) => (
              <Card
                key={dos.id}
                sx={{
                  bgcolor: "lightgray",
                  maxWidth: 350,
                  height: 100,
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  {dos.icons}
                  <Typography fontWeight={500}>{dos.value}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

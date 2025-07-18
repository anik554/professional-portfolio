import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import {
  educationData,
  experienceData,
  skillsData,
} from "../../utils/MainUtils";
import SchoolIcon from "@mui/icons-material/School";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import Skills from "../../components/skill/Skills";
import EngineeringIcon from '@mui/icons-material/Engineering';
const Resume = () => {
  return (
    <Box
      width={"100%"}
      component={Paper}
      elevation={1}
      my={5}
      sx={{ borderRadius: 5 }}
    >
      <Box p={3}>
        <Box display={"flex"} gap={3}>
          <Typography variant="h4" fontWeight={"bold"}>
            Resume
          </Typography>
          <Typography variant="h4" fontWeight={"bold"} color="warning">
            —————
          </Typography>
        </Box>
        <Box mt={4}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <SchoolIcon color="success" />
                <Typography
                  variant="h5"
                  sx={{
                    display: "inline-block",
                    borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
                    paddingBottom: "2px",
                  }}
                >
                  Education
                </Typography>
              </Box>
              <Box mt={2}>
                {educationData.map((item) => (
                  <Card key={item.id} sx={{ mb: 2 }}>
                    <CardContent>
                      <Box>
                        <Typography>{item.year}</Typography>
                        <Typography>{item.degree}</Typography>
                        <Typography>{item.organization}</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
            <Grid size={6}>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <HomeRepairServiceIcon color="secondary" />
                <Typography
                  variant="h5"
                  sx={{
                    display: "inline-block",
                    borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
                    paddingBottom: "2px",
                  }}
                >
                  Experience
                </Typography>
              </Box>
              <Box mt={2}>
                {experienceData.map((item) => (
                  <Card key={item.id} sx={{ mb: 2 }}>
                    <CardContent>
                      <Box>
                        <Typography>{item.experience}</Typography>
                        <Typography>{item.designation}</Typography>
                        <Typography>{item.organization}</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4}>
          <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
            <EngineeringIcon color="warning" />
            <Typography
              variant="h5"
              sx={{
                display: "inline-block",
                borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
                paddingBottom: "2px",
              }}
            >
              Working Skills
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid size={6}>
              {skillsData.map((skill) => (
                <Skills key={skill.id} skill={skill.skill} mark={skill.mark} barColor={skill.color!}/>
              ))}
            </Grid>
            <Grid size={6}>
              <Typography>dsjds</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
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
            Contacts
          </Typography>
          <Typography variant="h4" fontWeight={"bold"} color="warning">
            —————
          </Typography>
        </Box>
        <Box mt={4}>
          <Grid container spacing={2}>
            <Grid size={4}>
              <Card>
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
                >
                  <Box>
                    <PhoneAndroidIcon color="secondary" fontSize="large" />
                  </Box>
                  <Box>
                    <Typography gutterBottom>+8801734699652</Typography>
                    <Typography>+8801687176678</Typography>
                  </Box>
                </CardContent>
              </Card>
              <br />
              <Card>
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
                >
                  <Box>
                    <MarkEmailReadIcon color="warning" fontSize="large" />
                  </Box>
                  <Box>
                    <Typography gutterBottom>
                      anikimtiaz1993@gmail.com
                    </Typography>
                    <Typography>anikimtiaz924@gmail.com</Typography>
                  </Box>
                </CardContent>
              </Card>
              <br />
              <Card>
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
                >
                  <Box>
                    <LocationOnIcon color="primary" fontSize="large" />
                  </Box>
                  <Box>
                    <Typography gutterBottom>
                      Mohammadpur, Dhaka-1207
                    </Typography>
                    <Typography>Chad uddan housing</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={8}>
              <Card>
                <CardContent>
                  <form
                    action="https://formsubmit.co/anikimtiaz1993@gmail.com"
                    method="POST"
                  >
                    <Box
                      sx={{
                        maxWidth: "70%",
                        display: "grid",
                        gap: 2,
                        margin: "0 auto",
                      }}
                    >
                      <Typography
                        variant="h5"
                        alignItems={"center"}
                        gutterBottom
                      >
                        I'm always open to discussing produuct design work or
                        partnerships
                      </Typography>
                      <input
                        type="hidden"
                        name="_next"
                        value="http://localhost:5173/contact"
                      />
                      <TextField
                        label="Name"
                        name="name"
                        type="text"
                        required
                        size="small"
                        fullWidth
                      />
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        required
                        size="small"
                        fullWidth
                      />
                      <TextareaAutosize
                        maxRows={20}
                        minRows={5}
                        name="message"
                        aria-label="maximum height"
                        placeholder="Message"
                        style={{width:"100%"}}
                      />
                      <Button variant="contained" type="submit" size="small">
                        Submit
                      </Button>
                    </Box>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingBottom: "66.66%",
              height: 0,
              overflow: "hidden",
              mt: 4,
            }}
          >
            <Box
              component="iframe"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Chadd%20Uddan&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;

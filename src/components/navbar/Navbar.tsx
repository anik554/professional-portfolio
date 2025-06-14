import { Box, Button, Grid, Typography } from "@mui/material";
import { navbarButtons } from "../../utils/MainUtils";
import type { NavbarButtonsType } from "../../utils/portfolio-types";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = (value: string) => {
    if (value === "HOME") {
      navigate("/");
    } else if (value === "ABOUT") {
      navigate("/about");
    } else if (value === "RESUME") {
      navigate("/resume");
    } else if (value === "WORKS") {
      navigate("/works");
    } else if (value === "CONTACT") {
      navigate("/contact");
    } else {
      console.log(value);
    }
  };

  return (
    <Box width={"100%"}>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid size={4}>
          <Box sx={{ float: "left" }}>
            <Typography variant="h4" fontWeight={"bold"} >Portfolio</Typography>
          </Box>
        </Grid>
        <Grid size={8}>
          {Array.isArray(navbarButtons)
            ? navbarButtons
                .slice()
                .sort((a, b) => b.id - a.id)
                .map((button: NavbarButtonsType) => (
                  <Box key={button.id} sx={{ float: "right", ml: 1 }}>
                    <Button
                      variant="contained"
                      startIcon={button.icons}
                      sx={{ textTransform: "none" }}
                      onClick={() => handleButtonClick(button.value)}
                    >
                      {button.label}
                    </Button>
                  </Box>
                ))
            : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;

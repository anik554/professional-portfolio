import { Box, Button, Grid, Typography } from "@mui/material";
import { navbarButtons } from "../../utils/MainUtils";
import type { NavbarButtonsType } from "../../utils/portfolio-types";
import { useLocation, useNavigate } from "react-router";
import { getPathByValue } from "../../utils/function-utils";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleButtonClick = (value: string) => {
    navigate(getPathByValue(value));
  };

  return (
    <Box width={"100%"}>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid size={4}>
          <Box sx={{ float: "left" }}>
            <Typography variant="h4" fontWeight={"bold"}>
              Portfolio
            </Typography>
          </Box>
        </Grid>
        <Grid size={8}>
          {navbarButtons
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((button: NavbarButtonsType) => {
              const targetPath = getPathByValue(button.value);
              const isActive = location.pathname === targetPath;
              return (
                <Box key={button.id} sx={{ float: "right", ml: 1 }}>
                  <Button
                    variant={isActive ? "contained" : "outlined"}
                    startIcon={button.icons}
                    sx={{ textTransform: "none" }}
                    onClick={() => handleButtonClick(button.value)}
                  >
                    {button.label}
                  </Button>
                </Box>
              );
            })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;

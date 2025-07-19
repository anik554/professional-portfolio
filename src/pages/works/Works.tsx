import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import { portfolioWorks } from "../../utils/MainUtils";
import { useState } from "react";

const Works = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  const handleClick = (id:number, link:string) => {
    setSelectedCard(id);
    window.open(link,"_blank")
  };
  console.log(selectedCard);
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
            Projects
          </Typography>
          <Typography variant="h4" fontWeight={"bold"} color="warning">
            —————
          </Typography>
        </Box>
        <Box mt={4}>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
              gap: 2,
            }}
          >
            {portfolioWorks.map((working) => (
              <Card key={working.id}>
                <CardActionArea
                  onClick={() => handleClick(working.id, working.pjoectLink)}
                  data-active={selectedCard === working.id ? "" : undefined}
                  sx={{
                    height: "100%",
                    "&[data-active]": {
                      backgroundColor: "action.selected",
                      "&:hover": {
                        backgroundColor: "action.selectedHover",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ height: "100%" }}>
                    <Typography variant="h5" component="div">
                      {working.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {working.type.developed} {working.type.using.join(", ")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Works;

import { Box, Container } from "@mui/material";
import "./App.css";
import Routers from "./pages/routers/Routers";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Box className="app-background">
      <Container sx={{ my:5 }} maxWidth={"lg"}>
        <Navbar />
        <Routers />
      </Container>
    </Box>
  );
}

export default App;

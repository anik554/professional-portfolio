import { Box, Paper, Typography } from "@mui/material"

const Works = () => {
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
            Portfolio
          </Typography>
          <Typography variant="h4" fontWeight={"bold"} color="warning">
            —————
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Works
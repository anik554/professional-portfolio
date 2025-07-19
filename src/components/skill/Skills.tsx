import { Box, Paper, Typography } from "@mui/material";
import LinearProgress from "@mui/joy/LinearProgress";
import { type ColorPaletteProp } from "@mui/joy/styles";

interface ISkill {
  skill: string;
  mark: number;
  barColor: ColorPaletteProp;
}

const Skills = ({ skill, mark, barColor }: ISkill) => {
  return (
    <Box component={Paper} elevation={2} p={2} mb={2}>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="subtitle2">{skill}</Typography>
        <Typography variant="subtitle2">{mark}%</Typography>
      </Box>
      <LinearProgress
        determinate
        value={mark}
        color={barColor}
      />
    </Box>
  );
};

export default Skills;

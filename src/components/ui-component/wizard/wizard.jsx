import { Box, Fade } from "@mui/material";

const Wizard = ({ steps, activeStep }) => {
  return (
    <Box>
      {steps.map((StepContent, index) => (
        <Fade timeout={750} in={activeStep === index} key={index}>
          <Box hidden={activeStep !== index}>{StepContent}</Box>
        </Fade>
      ))}
    </Box>
  );
};

export default Wizard;

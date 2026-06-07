import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { ThemeContext } from "../../context/themeContext";

export default function DotsMobileStepper(props) {
  const { data } = props;
  const { theme } = React.useContext(ThemeContext);

  const muiTheme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <div>{data[activeStep]}</div>
      <MobileStepper
        variant="dots"
        steps={data.length}
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: "400",
          flexGrow: 1,
          "& .MuiMobileStepper-dot": { backgroundColor: "darkgray" },
          "& .MuiMobileStepper-dotActive": { backgroundColor: theme.color },
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === data.length - 1}
            sx={{ color: "black" }}
          >
            Next
            {muiTheme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" 
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{ color: "black" }}>
            {muiTheme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </>
  );
}
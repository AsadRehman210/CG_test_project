import React from "react";
import Stepper from "react-stepper-horizontal";
import exit from "../../assets/images/exit.svg";

const ReactHorizontalStepper = ({ activeStep, totalSteps, steps }) => {
  const getStepStyle = (index) => {
    if (index === activeStep - 1) {
      return {
        barStyle: "solid",
        circleStyle: { backgroundColor: "#0468B4", color: "#0468B4" },
      };
    } else if (index < activeStep - 1) {
      return {
        barStyle: "solid",
        circleStyle: { backgroundColor: "#2FC18A", color: "#00244D" },
      };
    } else {
      return {
        barStyle: "dashed",
        circleStyle: { backgroundColor: "#FFFFFF", color: "#72869C" },
      };
    }
  };

  return (
    <div className="px-[1.375rem] md:px-[2.375rem] flex flex-col items-start bg-[#FAFAFA] rounded-lt-3xl min-w-[34.375rem]">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center pt-[20px] md:pt-0 gap-y-0 gap-x-6 w-full max-w-6xl pb-[20px]">
        {/* Quitter Button */}
        <div className="flex items-center cursor-pointer mb-4 sm:mb-0">
          <img
            src={exit} // Replace with your own icon if needed
            alt="Quitter"
            className="w-[0.75rem] h-[0.75rem] mr-2 text-[#72869C]"
          />
          <span className="text-[#72869C] font-normal text-xs hover:underline cursor-pointer">
            Quitter
          </span>
        </div>

        {/* Stepper */}
        <div className="w-full">
          <Stepper
            steps={steps.map((step, index) => ({
              title: step,
              ...getStepStyle(index),
            }))}
            activeStep={activeStep - 1}
            completeColor="#2FC18A" // Dark gray for completed steps
            size={30} // Size of step indicators
            circleFontSize={16}
            defaultColor="#72869C"
            activeColor="#0468B4"
          />
        </div>
      </div>
    </div>
  );
};

export default ReactHorizontalStepper;

import React, { useState } from "react";
import Header from "../components/homologations/Header";
import ReactHorizontalStepper from "../components/homologations/Stepper";
import Generalites from "../components/homologations/generalites/Generalites";
import RequestDetails from "../components/homologations/requestdetails/RequestDetails";
import { ReactComponent as SaveIcon } from "../assets/images/save.svg";

export default function Homologations() {
  const [formData, setFormData] = useState({});
  const [activeStep, setActiveStep] = useState(1);
  const [isGeneralitesValid, setIsGeneralitesValid] = useState(true);
  const totalSteps = 5;

  const steps = [
    "Généralités",
    "Détails de la demande",
    "Documents à attacher",
    "Résumé des informations",
    "Paiement des frais",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    alert("Form saved successfully!");
  };

  const handleNext = () => {
    setActiveStep(Math.min(activeStep + 1, totalSteps));
  };

  const handlePrevious = () => {
    setActiveStep(Math.max(activeStep - 1, 1));
  };

  return (
    <div className="bg-[#F5F5F5] rounded-tl-0 lg:rounded-tl-3xl rounded-bl-0 lg:rounded-bl-3xl h-screen overflow-hidden flex flex-col items-center pb-[2.375rem] px-[1.375rem] md:px-[2.375rem]">
      <Header />
      <div className="w-full bg-white shadow-lg rounded-3xl flex-1 flex flex-col overflow-x-auto ">
        <ReactHorizontalStepper
          activeStep={activeStep}
          totalSteps={totalSteps}
          steps={steps}
        />

        <div className="px-[1.375rem] md:px-[2.375rem] flex flex-col py-[2.375rem] flex-1 lg:overflow-auto min-w-[34.375rem]">
          <h2 className="text-lg font-bold text-[#00244D]">
            {steps[activeStep - 1]} {/* Display current step */}
          </h2>

          {/* Dynamically display form data based on the step */}
          {activeStep === 1 && (
            <Generalites formData={formData} handleChange={handleChange} />
          )}

          {activeStep === 2 && (
            <RequestDetails formData={formData} handleChange={handleChange} />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-auto shadow-[0px_-10px_34px_0px_#00244D0A] p-[1.375rem] md:p-[2.375rem] min-w-[34.375rem]">
          <button
            className={`bg-white text-[#00244D] border border-[#00244D] font-medium text-xs px-8 py-2 rounded-md hover:bg-[#0468B4] hover:text-white hover:border-[#0468B4] ${
              activeStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrevious}
            disabled={activeStep === 1} // Disable "Retour" on the first step
          >
            Retour
          </button>
          <div className="flex space-x-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 flex justify-center items-center gap-[0.375rem] bg-white text-[#0468B4] border border-[#0468B4] text-xs rounded-md"
            >
              <SaveIcon className="w-[1rem] h-[1rem]" />
              Sauvegarder
            </button>
            <button
              className={`bg-[#0468B4] text-xs text-white px-8 py-2 rounded-md hover:bg-blue-700 ${
                !isGeneralitesValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { steps } from "@/config/steps"; // Import step configuration

interface FormContextType {
  currentStep: number;
  stepTitle: string;
  totalSteps: number;
  setStep: (step: number) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = steps.length; // Get total number of steps

  useEffect(() => {
    document.title = `Stap ${currentStep} van ${totalSteps}: ${
      steps.find((s) => s.id === currentStep)?.title || ""
    }`;
  }, [currentStep, totalSteps]);

  return (
    <FormContext.Provider
      value={{
        currentStep,
        stepTitle: steps.find((s) => s.id === currentStep)?.title || "",
        totalSteps, // Expose total steps in context
        setStep: setCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}

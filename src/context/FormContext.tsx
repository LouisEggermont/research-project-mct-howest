"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { steps } from "@/config/steps"; // Import step configuration

interface FormContextType {
  currentStep: number;
  stepKey: string;
  stepTitle: string;
  totalSteps: number;
  setStep: (step: number) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = steps.length;

  // Dynamically find the current step's key and title
  const currentStepData = steps.find((s) => s.id === currentStep) || steps[0];

  useEffect(() => {
    document.title = `Stap ${currentStep} van ${totalSteps}: ${currentStepData.title}`;
  }, [currentStep, totalSteps, currentStepData.title]);

  return (
    <FormContext.Provider
      value={{
        currentStep,
        stepKey: currentStepData.key, // ✅ Automatically determines step key
        stepTitle: currentStepData.title,
        totalSteps,
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

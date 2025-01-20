"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext";
import { Button } from "@/components/aria/Button";
import { steps } from "@/config/steps";

export default function Sidebar() {
  const { currentStep, setStep, totalSteps } = useFormContext();

  return (
    <aside className="w-64 p-4 bg-gray-100 dark:bg-gray-800">
      <ul className="space-y-2">
        {steps.map((step, index) => (
          <li key={step.key}>
            {/* <button
              onClick={() => setStep(index + 1)}
              className={`w-full text-left p-2 rounded-lg ${
                currentStep === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-transparent"
              }`}
            >
              {index + 1}. {step.title}
            </button> */}
            <Button
              onPress={() => setStep(index + 1)}
              variant={currentStep === index + 1 ? "primary" : "secondary"}
              className="w-full text-left p-2 rounded-lg border-0"
            >
              {index + 1}. {step.title}
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

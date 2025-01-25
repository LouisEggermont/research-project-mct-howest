"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext";
import { Button } from "@/components/aria/Button";
import { steps } from "@/config/steps";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  className?: string;
}

export default function Sidebar(props: SidebarProps) {
  const { currentStep, setStep, totalSteps } = useFormContext();

  return (
    <aside className={twMerge("", props.className)}>
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

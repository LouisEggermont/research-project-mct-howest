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
  const { currentStep, setStep } = useFormContext();

  return (
    <nav
      className={twMerge("space-y-2 max-h-max", props.className)}
      aria-labelledby="form-sidebar-title"
    >
      {/* Sidebar Title */}
      <h2 id="form-sidebar-title" className="text-lg font-semibold">
        Formulier Navigatie
      </h2>

      {/* List of Steps */}
      <ul className="space-y-2">
        {steps.map((step, index) => (
          <li key={step.key}>
            <Button
              onPress={() => setStep(index + 1)}
              variant={currentStep === index + 1 ? "primary" : "secondary"}
              className="w-full text-left p-2 rounded-lg border-0"
              aria-current={currentStep === index + 1 ? "step" : undefined}
            >
              {index + 1}. {step.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

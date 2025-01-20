"use client";
import React, { useEffect, useRef } from "react";
import { useFormContext } from "@/context/FormContext";
import { Button } from "@/components/aria/Button";
import { Form } from "@/components/aria/Form";

interface FormStepProps {
  children: React.ReactNode;
}

export default function FormStep({ children }: FormStepProps) {
  const { stepTitle, currentStep, totalSteps, setStep } = useFormContext();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, [currentStep]);

  return (
    <Form className="space-y-6">
      {/* Step Title */}
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-semibold focus-visible:outline-none"
      >
        {stepTitle}
      </h2>

      {/* Step Content (passed as children) */}
      <div>{children}</div>

      {/* Navigation Buttons */}
      <div className="flex gap-2">
        {currentStep > 1 && (
          <Button onPress={() => setStep(currentStep - 1)}>Vorige</Button>
        )}
        {currentStep < totalSteps ? (
          <Button onPress={() => setStep(currentStep + 1)}>Volgende</Button>
        ) : (
          <Button type="submit">Verzenden</Button>
        )}
      </div>
    </Form>
  );
}

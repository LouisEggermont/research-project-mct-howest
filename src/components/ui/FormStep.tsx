"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "@/context/FormContext";
import { useActionState } from "react";
import { Button } from "@/components/aria/Button";
import { Form } from "@/components/aria/Form";
import { validateForm } from "@/app/actions/validateForm";

interface FormStepProps {
  children: React.ReactNode;
}

export default function FormStep({ children }: FormStepProps) {
  const { stepTitle, stepKey, currentStep, totalSteps, setStep } =
    useFormContext();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, [currentStep]);

  // ✅ Initialize validation state
  const [errorState, formAction] = useActionState(validateForm, { errors: {} });
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    setValidationErrors({ ...errorState?.errors }); // Create a new object reference
  }, [errorState?.errors]);

  return (
    <Form
      action={formAction}
      validationErrors={validationErrors}
      className="space-y-6"
    >
      {/* Step Title */}
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-semibold focus-visible:outline-none"
      >
        {stepTitle}
      </h2>

      {/* Hidden Input to Track Step Key */}
      <input type="hidden" name="step" value={stepKey} />

      {/* Step Content */}
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

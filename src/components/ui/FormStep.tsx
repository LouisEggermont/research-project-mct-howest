"use client";
import { useEffect, useRef } from "react";
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
  const prevIsPending = useRef(false);

  // ✅ Initialize validation state
  const [errorState, formAction, isPending] = useActionState(validateForm, {
    errors: {},
  });

  useEffect(() => {
    // Detect when submission completes (isPending flips from true to false)
    if (prevIsPending.current && !isPending) {
      // Only progress if there are no errors
      if (
        Object.keys(errorState.errors).length === 0 &&
        currentStep < totalSteps
      ) {
        setStep(currentStep + 1);
      }
    }
    prevIsPending.current = isPending;
  }, [isPending, errorState.errors, currentStep, totalSteps, setStep]);

  useEffect(() => {
    headingRef.current?.focus();
  }, [currentStep]);

  return (
    <Form
      id={`step-form-${stepKey}`}
      action={formAction}
      validationErrors={errorState.errors}
    >
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-semibold focus-visible:outline-none"
      >
        {stepTitle}
      </h2>

      <input type="hidden" name="step" value={stepKey} />

      <div>{children}</div>

      <div className="flex gap-2">
        {currentStep > 1 && (
          <Button onPress={() => setStep(currentStep - 1)}>Vorige</Button>
        )}

        {currentStep < totalSteps ? (
          <Button type="submit" isDisabled={isPending}>
            {isPending ? "Controleren..." : "Volgende"}
          </Button>
        ) : (
          <Button type="submit" isDisabled={isPending}>
            {isPending ? "Verzenden..." : "Verzenden"}
          </Button>
        )}
      </div>
    </Form>
  );
}

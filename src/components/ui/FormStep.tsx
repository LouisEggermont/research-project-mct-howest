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
          <Button type="submit" className="flex" isDisabled={isPending}>
            {/* Spinner */}
            {isPending && (
              <svg
                className="hidden motion-safe:block motion-safe:animate-spin h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v3.6a4.4 4.4 0 100 8.8V20a8 8 0 01-8-8z"
                />
              </svg>
            )}
            {isPending ? "Verwerken..." : "Volgende"}
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

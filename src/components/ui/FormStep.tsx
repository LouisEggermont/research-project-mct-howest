"use client";
import { useEffect, useRef } from "react";
import { useFormContext } from "@/context/FormContext";
import { useActionState } from "react";
import { Button } from "@/components/aria/Button";
import { Form } from "@/components/aria/Form";
import { validateForm } from "@/app/actions/validateForm";
import Spinner from "./Spinner";

interface FormStepProps {
  children: React.ReactNode;
}

export default function FormStep({ children }: FormStepProps) {
  const { stepTitle, stepKey, currentStep, totalSteps, setStep } =
    useFormContext();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const prevIsPending = useRef(false);

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
      className="max-w-md px-6 bg-white dark:bg-gray-900"
    >
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-300 ">
          Stap {currentStep} van {totalSteps}
        </p>
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="text-2xl font-semibold focus-visible:outline-none"
        >
          {stepTitle}
        </h2>
        <p className="sr-only ">
          Stap {currentStep} van {totalSteps}
        </p>
      </div>

      <input type="hidden" name="step" value={stepKey} />

      <div>{children}</div>

      <nav className="flex gap-2 mt-6">
        {currentStep > 1 && (
          <Button onPress={() => setStep(currentStep - 1)}>Vorige</Button>
        )}

        {currentStep < totalSteps ? (
          <Button type="submit" className="flex" isDisabled={isPending}>
            {/* Spinner */}
            {isPending && <Spinner className="mr-2" />}
            {isPending ? "Verwerken..." : "Volgende"}
          </Button>
        ) : (
          <Button type="submit" isDisabled={isPending}>
            {isPending ? "Verzenden..." : "Verzenden"}
          </Button>
        )}
      </nav>
    </Form>
  );
}

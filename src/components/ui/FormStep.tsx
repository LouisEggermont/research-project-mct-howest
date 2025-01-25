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
      className="w-full px-6 bg-white dark:bg-gray-900 sm:w-64 md:w-96 lg:w-128 xl:w-160"
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

      {children}

      <nav aria-label="Vorige/Volgende stap" className="mt-6 min-w-0">
        <ul className="flex gap-2 justify-end">
          {currentStep > 1 && (
            <li>
              <Button
                onPress={() => setStep(currentStep - 1)}
                aria-label={`Ga naar de vorige stap, Stap ${
                  currentStep - 1
                } van ${totalSteps}`}
              >
                Vorige
              </Button>
            </li>
          )}

          {currentStep < totalSteps ? (
            <li>
              <Button
                type="submit"
                className="flex"
                isDisabled={isPending}
                aria-label={
                  currentStep < totalSteps
                    ? `Ga naar de volgende stap, Stap ${
                        currentStep + 1
                      } van ${totalSteps}`
                    : "Formulier verzenden"
                }
                aria-current={currentStep === totalSteps ? "step" : undefined}
              >
                {isPending && <Spinner className="mr-2" />}
                {isPending ? "Verwerken..." : "Volgende"}
              </Button>
            </li>
          ) : (
            <li>
              <Button type="submit" isDisabled={isPending}>
                {isPending ? "Verzenden..." : "Verzenden"}
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </Form>
  );
}

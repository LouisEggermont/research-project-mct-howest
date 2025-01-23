// Original component
// import React from "react";
// import { FormProps, Form as RACForm } from "react-aria-components";
// import { twMerge } from "tailwind-merge";

// export function Form(props: FormProps) {
//   return (
//     <RACForm
//       {...props}
//       className={twMerge("flex flex-col gap-4", props.className)}
//     />
//   );
// }

//  edited component to move focus to the first invalid field with serverside validation errors are present and enable or dissable validation dynamically
import React, { useEffect } from "react";
import { FormProps, Form as RACForm } from "react-aria-components";
import { twMerge } from "tailwind-merge";

// ✅ Check if validation should be disabled
const disableValidation = process.env.NEXT_PUBLIC_DISABLE_VALIDATION === "true";

export function Form({ validationErrors, ...props }: FormProps) {
  useEffect(() => {
    if (!disableValidation && validationErrors) {
      // ✅ Find the first field with an error and move focus
      const firstErrorField = Object.keys(validationErrors)[0];
      if (firstErrorField) {
        const inputElement = document.querySelector(
          `[name="${firstErrorField}"]`
        ) as HTMLInputElement;
        inputElement?.focus(); // Move focus to the first invalid field
      }
    }
  }, [validationErrors]);

  return (
    <RACForm
      {...props}
      validationErrors={disableValidation ? {} : validationErrors} // ✅ Disable validation dynamically
      className={twMerge("flex flex-col gap-4", props.className)}
      validationBehavior={disableValidation ? "aria" : "native"} // ✅ Dynamically switch validation behavior
    />
  );
}

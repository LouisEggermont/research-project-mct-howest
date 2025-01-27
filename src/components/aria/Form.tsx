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

const disableValidation =
  process.env.NEXT_PUBLIC_DISABLE_CLIENT_VALIDATION === "true";

export function Form({ validationErrors, ...props }: FormProps) {
  useEffect(() => {
    if (!disableValidation && validationErrors) {
      const firstErrorField = Object.keys(validationErrors)[0];
      if (firstErrorField) {
        const inputElement = document.querySelector(
          `[name="${firstErrorField}"]`
        ) as HTMLInputElement;
        inputElement?.focus();
      }
    }
  }, [validationErrors]);

  return (
    <RACForm
      key={JSON.stringify(validationErrors)}
      {...props}
      // validationErrors={disableValidation ? {} : validationErrors}
      validationErrors={validationErrors}
      className={twMerge("flex flex-col gap-4", props.className)}
      validationBehavior={disableValidation ? "aria" : "native"}
    />
  );
}

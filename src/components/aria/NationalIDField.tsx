import React, { useState } from "react";
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Label, fieldGroupStyles } from "./Field";
import { composeTailwindRenderProps } from "./utils";

const segmentStyles = tv({
  base: "inline p-0.5 type-literal:px-0 rounded outline outline-0 forced-color-adjust-none caret-transparent text-gray-800 dark:text-zinc-200 forced-colors:text-[ButtonText]",
  variants: {
    isPlaceholder: {
      true: "text-gray-400 dark:text-zinc-500",
    },
    isFocused: {
      true: "bg-blue-600 text-white dark:text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
    },
  },
});

interface NationalIDFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function NationalIDField({
  label,
  description,
  errorMessage,
  ...props
}: NationalIDFieldProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleChange");
    const newValue = e.target.value;
    // Apply masking logic here
    const maskedValue = maskRijksregisternummer(newValue);
    setValue(maskedValue);
  };

  const maskRijksregisternummer = (value: string) => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    // Apply the mask "99.99.99-999.99"
    let maskedValue = "";
    for (let i = 0; i < numericValue.length; i++) {
      if (i === 2 || i === 4) {
        maskedValue += ".";
      } else if (i === 6) {
        maskedValue += "-";
      } else if (i === 9) {
        maskedValue += ".";
      }
      maskedValue += numericValue[i];
    }

    // Ensure the length does not exceed the mask
    return maskedValue.slice(0, 15);
  };

  return (
    <AriaTextField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1"
      )}
    >
      {label && <Label>{label}</Label>}
      <div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="flex-1 min-w-[150px] px-2 py-1.5 text-sm"
          placeholder="99.99.99-999.99"
        />
      </div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}

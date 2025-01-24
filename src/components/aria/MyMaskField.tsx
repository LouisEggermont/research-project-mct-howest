import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import {
  Description,
  FieldError,
  Input,
  Label,
  fieldBorderStyles,
} from "./Field";
import { composeTailwindRenderProps, focusRing } from "./utils";

const inputStyles = tv({
  extend: focusRing,
  base: "border-2 rounded-md",
  variants: {
    ...fieldBorderStyles.variants,
    isFocused: {
      ...fieldBorderStyles.variants.isFocusWithin,
    },
  },
});

export interface MaskFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  mask: string | object; // Define the mask pattern
  onChange?: (value: string) => void; // Handle value change
}

export function MaskField({
  label,
  description,
  errorMessage,
  mask,
  onChange,
  ...props
}: MaskFieldProps) {
  const [value, setValue] = useState("");

  return (
    <AriaTextField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1"
      )}
    >
      {label && <Label>{label}</Label>}

      {/* Hidden IMaskInput to handle masking logic */}
      <IMaskInput
        tabIndex={-1}
        mask={mask as unknown as string}
        value={value}
        onAccept={(val) => {
          setValue(val);
          if (onChange) onChange(val);
        }}
        className="hidden"
      />
      {/* Visible Input from react-aria-components */}
      <Input
        maxLength={mask.toString().length}
        // minLength={mask.toString().length}
        value={value}
        onChange={(e) => {
          const newValue = e.target.value.replace(/[^0-9.-]/g, ""); // Restrict to numbers, dots, and dashes
          setValue(newValue);
        }}
        className={inputStyles}
      />

      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}

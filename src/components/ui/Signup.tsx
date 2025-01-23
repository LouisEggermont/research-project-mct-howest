"use client";

import { startTransition } from "react";
import { useActionState } from "react";
import createUser from "@/app/actions";
import { Form } from "../aria/Form";
import { TextField } from "../aria/TextField";
import { Button } from "../aria/Button";

export function Signup() {
  const initialState = {
    errors: {},
    message: "",
  };

  const [state, formAction] = useActionState(createUser, initialState);
  console.log(state);

  return (
    <Form id="signup-form" action={formAction} validationErrors={state?.errors}>
      <TextField label="Email" name="email" type="text" />
      <TextField label="Phone" name="phone" type="text" />

      <Button
        type="button"
        onPress={async () => {
          const formElement = document.getElementById(
            "signup-form"
          ) as HTMLFormElement;
          if (!formElement) return;

          const formData = new FormData(formElement);

          // check for client-side validation
          if (!formElement.checkValidity()) {
            formElement.reportValidity();
            return;
          }
          // check for server-side validation if client-side validation passes
          startTransition(() => {
            formAction(formData);
          });
        }}
      >
        Sign up
      </Button>
    </Form>
  );
}

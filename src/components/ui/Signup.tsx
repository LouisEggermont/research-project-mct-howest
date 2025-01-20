"use client";

import { useActionState } from "react";
import createUser from "@/app/actions";
import { useEffect, useState } from "react";
import { Form } from "../aria/Form";
import { TextField } from "../aria/TextField";
import { Button } from "../aria/Button";

// const initialState = {
//   errors: {}, // Ensure it starts as an empty object
//   message: "",
// };

export function Signup() {
  const initialState = {
    errors: {}, // Ensure it starts as an empty object
    message: "",
  };

  const [state, formAction] = useActionState(createUser, initialState);
  const [validationErrors, setValidationErrors] = useState({});

  // Force re-render when state.errors updates
  useEffect(() => {
    setValidationErrors({ ...state?.errors }); // Create a new object reference
  }, [state?.errors]);

  return (
    <Form action={formAction} validationErrors={validationErrors}>
      <TextField label="Email" name="email" type="text" />
      {/* <p aria-live="polite">{state?.errors?.email}</p> */}
      <Button type="submit">Sign up</Button>
    </Form>
  );
}

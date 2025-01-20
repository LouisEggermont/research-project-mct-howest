"use client";

import { useActionState } from "react";
import createUser from "@/app/actions";

const initialState = {
  message: "",
};

export function Signup() {
  const [state, formAction, pending] = useActionState(createUser, initialState);
  console.log(state);
  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="text" />
      {/* ... */}
      <p aria-live="polite">{state?.errors?.email}</p>
      <button disabled={pending}>Sign up</button>
    </form>
  );
}

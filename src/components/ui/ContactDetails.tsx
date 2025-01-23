"use client";
import { TextField } from "@/components/aria/TextField";
import FormStep from "./FormStep"; // Import the wrapper

export default function ContactDetails() {
  return (
    <FormStep>
      <TextField label="Telefoonnummer" name="phone" />
      <TextField label="E-mailadres" name="email" type="email" />
    </FormStep>
  );
}

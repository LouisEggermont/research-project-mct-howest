"use client";
import React from "react";
import { TextField } from "@/components/aria/TextField";
import FormStep from "./FormStep"; // Import the wrapper

export default function ContactDetails() {
  return (
    <FormStep>
      <TextField label="Telefoonnummer" name="phone" isRequired />
      <TextField label="E-mailadres" name="email" type="email" isRequired />
    </FormStep>
  );
}

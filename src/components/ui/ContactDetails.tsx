"use client";
import React from "react";
import { Button } from "@/components/aria/Button";
import { TextField } from "@/components/aria/TextField";
import { Form } from "@/components/aria/Form";

interface ContactDetailsProps {
  formData: {
    phone: string;
    email: string;
  };
  handleChange: (field: string, value: string) => void;
  setStep: (step: number) => void;
}

export default function ContactDetails({
  formData,
  handleChange,
  setStep,
}: ContactDetailsProps) {
  return (
    <Form className="space-y-4">
      <h2 id="step-two-title">Deel 2: Contactgegevens</h2>

      <TextField
        label="Telefoonnummer"
        value={formData.phone}
        onChange={(value) => handleChange("phone", value)}
      />

      <TextField
        label="E-mailadres"
        value={formData.email}
        onChange={(value) => handleChange("email", value)}
        type="email"
      />

      <div className="flex gap-2">
        <Button onPress={() => setStep(1)}>Vorige</Button>
        <Button onPress={() => setStep(3)}>Volgende</Button>
      </div>
    </Form>
  );
}

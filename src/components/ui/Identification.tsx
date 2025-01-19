"use client";
import React from "react";
import { Button } from "@/components/aria/Button";
import { TextField } from "@/components/aria/TextField";
import { Form } from "@/components/aria/Form";

interface IdentificationProps {
  formData: { nationalID: string };
  handleChange: (field: string, value: string) => void;
  setStep: (step: number) => void;
}

export default function Identification({
  formData,
  handleChange,
  setStep,
}: IdentificationProps) {
  return (
    <Form className="space-y-4">
      <h2 id="step-three-title">Deel 3: Identificatie</h2>

      <TextField
        label="Rijksregisternummer"
        value={formData.nationalID}
        onChange={(value) => handleChange("nationalID", value)}
        isRequired
      />

      <div className="flex gap-2">
        <Button onPress={() => setStep(2)}>Vorige</Button>
        <Button type="submit">Verzenden</Button>
      </div>
    </Form>
  );
}

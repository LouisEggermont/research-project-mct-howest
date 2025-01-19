"use client";
import React from "react";
import { Button } from "@/components/aria/Button";
import { TextField } from "@/components/aria/TextField";
import { Form } from "@/components/aria/Form";

interface PersonalDataProps {
  formData: {
    officialFirstNames: string;
    lastName: string;
  };
  handleChange: (field: string, value: string) => void;
  setStep: (step: number) => void;
}

export default function PersonalData({
  formData,
  handleChange,
  setStep,
}: PersonalDataProps) {
  return (
    <Form className="space-y-4">
      <h2 id="step-one-title">Deel 1: Identificatiegegevens</h2>

      <fieldset>
        <legend>Persoonlijke gegevens</legend>
        <TextField
          label="Voornaam"
          value={formData.officialFirstNames}
          onChange={(value) => handleChange("officialFirstNames", value)}
          isRequired
        />
        <TextField
          label="Achternaam"
          value={formData.lastName}
          onChange={(value) => handleChange("lastName", value)}
          isRequired
        />
      </fieldset>

      <Button onPress={() => setStep(2)}>Volgende</Button>
    </Form>
  );
}

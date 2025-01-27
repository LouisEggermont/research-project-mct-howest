"use client";

import React from "react";
import { useFormContext } from "@/context/FormContext";

import Introduction from "./Introduction";
import Identification from "./Identification";
import ContactDetails from "./ContactDetails";
import PersonalData from "./PersonalData";
import Representative from "./Representative";

import FormStep from "./FormStep";

const stepComponents: Record<string, React.FC> = {
  introduction: Introduction,
  personal: PersonalData,
  representative: Representative,
  contact: ContactDetails,
  identification: Identification,
};

export default function MultiPageForm() {
  const { stepKey } = useFormContext();
  const StepComponent = stepComponents[stepKey];

  return (
    <FormStep>
      {StepComponent ? <StepComponent /> : <p>Ongeldige stap</p>}
    </FormStep>
  );
}

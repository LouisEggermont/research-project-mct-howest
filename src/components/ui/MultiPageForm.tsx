"use client";

import React from "react";
import { useFormContext } from "@/context/FormContext";
import Sidebar from "./Sidebar";
import Identification from "./Identification";
import ContactDetails from "./ContactDetails";
import PersonalData from "./PersonalData";
import Representative from "./Representative";

const stepComponents: Record<string, React.FC> = {
  personal: PersonalData,
  representative: Representative,
  contact: ContactDetails,
  identification: Identification,
};

export default function MultiPageForm() {
  const { stepKey } = useFormContext(); // ✅ Removed `currentStep` since it's unused
  const StepComponent = stepComponents[stepKey];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        {StepComponent ? <StepComponent /> : <p>Ongeldige stap</p>}
      </div>
    </div>
  );
}

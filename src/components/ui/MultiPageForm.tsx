"use client";
import React from "react";
import { FormProvider, useFormContext } from "@/context/FormContext";
import PersonalData from "./PersonalData";
import ContactDetails from "./ContactDetails";
import Identification from "./Identification";
import Sidebar from "./Sidebar";

export default function MultiPageForm() {
  return (
    <FormProvider>
      <FormContainer />
    </FormProvider>
  );
}

function FormContainer() {
  const { currentStep } = useFormContext();

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {currentStep === 1 && <PersonalData />}
        {currentStep === 2 && <ContactDetails />}
        {currentStep === 3 && <Identification />}
      </main>
    </div>
  );
}

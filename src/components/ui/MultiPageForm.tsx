"use client";
import React, { useState } from "react";
import PersonalData from "./PersonalData";
import ContactDetails from "./ContactDetails";
import Identification from "./Identification";
import Sidebar from "./Sidebar";

export default function MultiPageForm() {
  const [currentStep, setStep] = useState(1);
  const [formData, setFormData] = useState({
    officialFirstNames: "",
    lastName: "",
    gender: "",
    nationality: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    street: "",
    postalCode: "",
    city: "",
    phone: "",
    email: "",
    dossierNumber: "",
    nationalID: "",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <Sidebar currentStep={currentStep} setStep={setStep} />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {currentStep === 1 && (
          <PersonalData
            formData={formData}
            handleChange={handleChange}
            setStep={setStep}
          />
        )}
        {currentStep === 2 && (
          <ContactDetails
            formData={formData}
            handleChange={handleChange}
            setStep={setStep}
          />
        )}
        {currentStep === 3 && (
          <Identification
            formData={formData}
            handleChange={handleChange}
            setStep={setStep}
          />
        )}
      </main>
    </div>
  );
}

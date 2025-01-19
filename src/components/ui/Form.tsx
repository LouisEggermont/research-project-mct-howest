"use client";
import React, { useState } from "react";
// import { Form, Button, TextField } from "react-aria-components";
import { Form } from "@/components/aria/Form";
import { Button } from "@/components/aria/Button";
import { TextField } from "@/components/aria/TextField";

export default function IdentificationForm() {
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
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">Identificatiegegevens</h1>
      <Form className="space-y-6">
        {/* Persoonlijke Gegevens */}
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-semibold">
            Persoonlijke Gegevens
          </legend>
          <TextField
            label="Officiële voornamen"
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
          <TextField
            label="Geslacht"
            value={formData.gender}
            onChange={(value) => handleChange("gender", value)}
          />
          <TextField
            label="Nationaliteit"
            value={formData.nationality}
            onChange={(value) => handleChange("nationality", value)}
          />
          <div className="grid grid-cols-3 gap-4">
            <TextField
              label="Geboortedag"
              value={formData.birthDay}
              onChange={(value) => handleChange("birthDay", value)}
              isRequired
              type="number"
            />
            <TextField
              label="Geboortemaand"
              value={formData.birthMonth}
              onChange={(value) => handleChange("birthMonth", value)}
              isRequired
              type="number"
            />
            <TextField
              label="Geboortejaar"
              value={formData.birthYear}
              onChange={(value) => handleChange("birthYear", value)}
              isRequired
              type="number"
            />
          </div>
        </fieldset>

        {/* Contactgegevens */}
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-semibold">Contactgegevens</legend>
          <TextField
            label="Straat en huisnummer"
            value={formData.street}
            onChange={(value) => handleChange("street", value)}
            isRequired
          />
          <TextField
            label="Postcode"
            value={formData.postalCode}
            onChange={(value) => handleChange("postalCode", value)}
            isRequired
          />
          <TextField
            label="Gemeente"
            value={formData.city}
            onChange={(value) => handleChange("city", value)}
            isRequired
          />
          <TextField
            label="Telefoon of GSM-nummer"
            value={formData.phone}
            onChange={(value) => handleChange("phone", value)}
          />
          <TextField
            label="E-mailadres"
            value={formData.email}
            onChange={(value) => handleChange("email", value)}
            type="email"
          />
        </fieldset>

        {/* Identificatie */}
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-semibold">Identificatie</legend>
          <TextField
            label="Rijksregisternummer"
            value={formData.nationalID}
            onChange={(value) => handleChange("nationalID", value)}
            isRequired
            description="Uw rijksregisternummer vindt u op de achterkant van uw identiteitskaart."
          />
          <TextField
            label="Dossiernummer (optioneel)"
            value={formData.dossierNumber}
            onChange={(value) => handleChange("dossierNumber", value)}
          />
        </fieldset>

        {/* Submit Button */}
        <Button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Verzenden
        </Button>
      </Form>
    </div>
  );
}

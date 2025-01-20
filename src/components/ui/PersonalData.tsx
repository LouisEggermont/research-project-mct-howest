"use client";
import React, { useState } from "react";
import { TextField } from "@/components/aria/TextField";
// import { Form } from "@/components/aria/Form";
import { RadioGroup, Radio } from "@/components/aria/RadioGroup";
import FormStep from "./FormStep";
import { NumberField } from "@/components/aria/NumberField";
import { DateField } from "../aria/DateField";

export default function PersonalData() {
  const [hasRepresentative, setHasRepresentative] = useState("no");
  const [contactAddress, setContactAddress] = useState("own");

  return (
    <FormStep>
      {/* Section: Personal Information */}
      <fieldset>
        <legend className="text-lg font-semibold">Persoonlijke Gegevens</legend>
        <TextField label="Officiële Voornamen" name="firstName" isRequired />
        <TextField label="Achternaam" name="lastName" isRequired />
        <TextField label="Straat en Huisnummer" name="street" isRequired />
        <NumberField
          label="Postcode en Gemeente"
          name="postalCode"
          isRequired
        />
        <TextField label="Telefoon- of GSM-nummer" name="phone" type="tel" />
        <TextField label="E-mailadres" name="email" type="email" />
        <TextField label="Dossiernummer" name="dossierNumber" />
        <DateField label="Geboortedatum" name="birthDate" isRequired />
        <TextField label="Geslacht" name="gender" isRequired />
        <TextField label="Nationaliteit" name="nationality" isRequired />
        <TextField label="Rijksregisternummer" name="nationalID" isRequired />
      </fieldset>

      {/* Section: Legal Representative */}
      <fieldset>
        <legend className="text-lg font-semibold">
          Wettelijk Vertegenwoordiger
        </legend>
        <RadioGroup
          label="Hebt u een of meer wettelijk vertegenwoordigers?"
          name="hasRepresentative"
          value={hasRepresentative} // Controlled state
          onChange={setHasRepresentative} // Ensure correct state management
        >
          <Radio value="yes">Ja</Radio>
          <Radio value="no">Nee</Radio>
        </RadioGroup>

        {/* Conditionally Show Representative Fields */}
        {hasRepresentative === "yes" && (
          <>
            <TextField
              label="Officiële Voornamen"
              name="repFirstName"
              isRequired
            />
            <TextField label="Achternaam" name="repLastName" isRequired />
            <TextField
              label="Straat en Huisnummer"
              name="repStreet"
              isRequired
            />
            <TextField
              label="Postcode en Gemeente"
              name="repPostalCode"
              isRequired
            />
            <TextField label="Telefoon- of GSM-nummer" name="repPhone" />
            <TextField label="E-mailadres" name="repEmail" type="email" />
            <TextField label="Dossiernummer" name="repDossierNumber" />
            <TextField
              label="Geboortedatum"
              name="repBirthDate"
              type="date"
              isRequired
            />
            <TextField label="Geslacht" name="repGender" isRequired />
            <TextField label="Nationaliteit" name="repNationality" isRequired />
            <TextField
              label="Rijksregisternummer"
              name="repNationalID"
              isRequired
            />
          </>
        )}
      </fieldset>

      {/* Section: Contact Address */}
      <fieldset>
        <legend className="text-lg font-semibold">Contactadres</legend>
        <RadioGroup
          label="Op welk adres wilt u de briefwisseling van het VAPH ontvangen?"
          name="contactAddress"
          value={contactAddress}
          onChange={setContactAddress}
        >
          <Radio value="own">
            Op mijn adres of dat van mijn wettelijk vertegenwoordiger
          </Radio>
          <Radio value="other">Op een ander adres</Radio>
        </RadioGroup>

        {/* Conditionally Show Alternate Contact Address */}
        {contactAddress === "other" && (
          <>
            <TextField
              label="Straat en Huisnummer"
              name="contactStreet"
              isRequired
            />
            <TextField
              label="Postcode en Gemeente"
              name="contactPostalCode"
              isRequired
            />
          </>
        )}
      </fieldset>
    </FormStep>
  );
}

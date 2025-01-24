"use client";
import React, { useState } from "react";
import { TextField } from "@/components/aria/TextField";
import { RadioGroup, Radio } from "@/components/aria/RadioGroup";
import FormStep from "./FormStep";
import { NumberField } from "@/components/aria/NumberField";
import { DateField } from "@/components/aria/DateField";
import FieldSet from "@/components/ui/FieldSet";
import MyNationalitySelect from "@/components/aria/MyNationalitySelect";
import { MaskField } from "../aria/MyMaskField";

export default function PersonalData() {
  const [hasRepresentative, setHasRepresentative] = useState("no");
  const [contactAddress, setContactAddress] = useState("own");

  return (
    <FormStep>
      {/* Section: Personal Information */}
      <FieldSet legend="Naam">
        <TextField label="Officiële Voornamen" name="firstName" />
        <TextField label="Achternaam" name="lastName" />
      </FieldSet>

      <FieldSet legend="Adres">
        <TextField label="Straat en Huisnummer" name="street" />
        <NumberField label="Postcode en Gemeente" name="postalCode" />
      </FieldSet>

      <FieldSet legend="Contactgegevens">
        <TextField label="Telefoon- of GSM-nummer" name="phone" type="tel" />
        <TextField label="E-mailadres" name="email" type="email" />
      </FieldSet>

      <FieldSet legend="Identificatie">
        <DateField label="Geboortedatum" name="birthDate" />
        <TextField label="Geslacht" name="gender" />
        <MyNationalitySelect></MyNationalitySelect>

        <MaskField
          label="Rijksregisternummer"
          name="nationalID"
          mask="00.00.00-000.00"
          inputMode="numeric"
          description="Vul de 11 cijfers van uw rijksregisternummer in"
        />
        <TextField
          label="Dossiernummer"
          name="dossierNumber"
          description="• Uw rijksregister nummer teruf op uw identiteitskaar: Het bestaan uit 11 cijfers.<br>• U hoeft enkel maar de cijfers in te vullen."
        />
      </FieldSet>

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
            <TextField label="Officiële Voornamen" name="repFirstName" />
            <TextField label="Achternaam" name="repLastName" />
            <TextField label="Straat en Huisnummer" name="repStreet" />
            <TextField label="Postcode en Gemeente" name="repPostalCode" />
            <TextField label="Telefoon- of GSM-nummer" name="repPhone" />
            <TextField label="E-mailadres" name="repEmail" type="email" />
            <TextField label="Dossiernummer" name="repDossierNumber" />
            <TextField label="Geboortedatum" name="repBirthDate" type="date" />
            <TextField label="Geslacht" name="repGender" />
            <TextField label="Nationaliteit" name="repNationality" />
            <TextField label="Rijksregisternummer" name="repNationalID" />
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
            <TextField label="Straat en Huisnummer" name="contactStreet" />
            <TextField label="Postcode en Gemeente" name="contactPostalCode" />
          </>
        )}
      </fieldset>
    </FormStep>
  );
}

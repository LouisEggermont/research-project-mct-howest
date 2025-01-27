"use client";
import React from "react";
import { TextField } from "@/components/aria/TextField";
import { DateField } from "@/components/aria/DateField";
import FieldSet from "@/components/ui/FieldSet";
import MyNationalitySelect from "@/components/aria/MyNationalitySelect";
import { MaskField } from "../aria/MyMaskField";
import { Radio, RadioGroup } from "../aria/RadioGroup";

export default function PersonalData() {
  return (
    <div>
      <FieldSet legend="Naam">
        <TextField label="Officiële Voornamen" name="firstName" />
        <TextField label="Achternaam" name="lastName" />
      </FieldSet>

      <FieldSet legend="Adres">
        <TextField label="Straat en Huisnummer" name="street" />
        <TextField label="Plaats" name="city" />
        <TextField
          label="Postcode"
          name="postalCode"
          inputMode="numeric"
          maxLength={4}
        />
      </FieldSet>

      <FieldSet legend="Contactgegevens">
        <TextField
          label="Telefoon- of GSM-nummer"
          name="phone"
          type="tel"
          description="Enkel cijfers, spaties en (+) zijn toegestaan"
        />
        <TextField label="E-mailadres" name="email" type="email" />
      </FieldSet>

      <FieldSet legend="Identificatie">
        <DateField label="Geboortedatum" name="birthDate" />
        <RadioGroup
          label="Geslacht"
          name="gender"
          description="Kies het geslacht dat overeenkomt met uw identiteitsdocument"
        >
          <Radio value="M">Man (M)</Radio>
          <Radio value="V">Vrouw (V)</Radio>
        </RadioGroup>
        <MyNationalitySelect
          label="Nationaliteit"
          name="repNationality"
          defaultSelectedKey="belgian"
        />

        <MaskField
          label="Rijksregisternummer"
          name="nationalID"
          mask="00.00.00-000.00"
          inputMode="numeric"
          description="Voer enkel de 11 cijfers van uw rijksregisternummer in "
        />
        <TextField
          label="Dossiernummer (Optioneel)"
          name="dossierNumber"
          description="U hoeft dit veld niet in te vullen als u geen dossiernummer heeft of niet kent"
        />
      </FieldSet>
    </div>
  );
}

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
        <TextField label="Officiële Voornamen" name="firstName" isRequired />
        <TextField label="Achternaam" name="lastName" isRequired />
      </FieldSet>

      <FieldSet legend="Adres">
        <TextField label="Straat en Huisnummer" name="street" isRequired />
        <TextField label="Plaats" name="city" isRequired />
        <TextField
          label="Postcode"
          name="postalCode"
          isRequired
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]{4}"
        />
      </FieldSet>

      <FieldSet legend="Contactgegevens">
        <TextField
          label="Telefoon- of GSM-nummer"
          name="phone"
          type="tel"
          isRequired
          description="Enkel cijfers, spaties en (+) zijn toegestaan"
          pattern="^\+?[0-9\s\-]{7,15}$"
        />
        <TextField
          label="E-mailadres"
          name="email"
          type="email"
          isRequired
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        />
      </FieldSet>

      <FieldSet legend="Identificatie">
        <DateField label="Geboortedatum" name="birthDate" isRequired />
        {/* <Select
          label="Geslacht"
          name="gender"
          isRequired
          placeholder="Selecteer een geslacht"
          description="Kies het geslacht dat overeenkomt met uw identiteitsdocument"
        >
          <SelectItem id="M" textValue="Man">
            Man (M)
          </SelectItem>

          <SelectItem id="M" textValue="Man">
            Man (M)
          </SelectItem>
          <SelectItem id="V" textValue="Vrouw">
            Vrouw (V)
          </SelectItem>
        </Select> */}

        <RadioGroup
          label="Geslacht"
          name="gender"
          isRequired
          description="Kies het geslacht dat overeenkomt met uw identiteitsdocument"
        >
          <Radio value="M">Man (M)</Radio>
          <Radio value="V">Vrouw (V)</Radio>
        </RadioGroup>
        <MyNationalitySelect
          label="Nationaliteit"
          name="repNationality"
          defaultSelectedKey="belgian"
          isRequired
        />

        <MaskField
          label="Rijksregisternummer"
          name="nationalID"
          mask="00.00.00-000.00"
          inputMode="numeric"
          description="Voer enkel de 11 cijfers van uw rijksregisternummer in "
          isRequired
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

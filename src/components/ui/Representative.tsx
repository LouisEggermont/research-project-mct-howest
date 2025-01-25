"use client";
import { useState } from "react";
import { TextField } from "@/components/aria/TextField";
import { Radio, RadioGroup } from "../aria/RadioGroup";
import { Checkbox, CheckboxGroup } from "../aria/Checkbox";
import { DateField } from "../aria/DateField";
import MyNationalitySelect from "../aria/MyNationalitySelect";
import { MaskField } from "../aria/MyMaskField";
import FormStep from "./FormStep";
import FieldSet from "./FieldSet";

export default function Representative() {
  const [hasRepresentative, setHasRepresentative] = useState("no");
  const [representativeTypes, setRepresentativeTypes] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSelectionChange = (newSelection: string[]) => {
    let error = "";

    // Validation: Prevent selecting both "one_parent" and "both_parents"
    if (
      newSelection.includes("one_parent") &&
      newSelection.includes("both_parents")
    ) {
      error =
        "U kunt niet zowel 'Een van mijn ouders' als 'Mijn beide ouders' selecteren.";
    }

    // Validation: Maximum of 2 selections
    if (newSelection.length > 2) {
      error = "U kunt maximaal 2 opties selecteren.";
    }

    setErrorMessage(error); // ✅ Update error message for React Aria
    setRepresentativeTypes(newSelection); // ✅ Always update selection state
  };

  // Determine if file upload is needed
  const requiresCourtFile = representativeTypes.some((type) =>
    ["guardian", "provisional_guardian", "temporary_custodian"].includes(type)
  );

  return (
    <FormStep>
      {/* Question 2: Do you have a legal representative? */}
      <FieldSet legend="Wettelijk Vertegenwoordiger">
        <RadioGroup
          label="Hebt u een of meer wettelijk vertegenwoordigers?"
          name="hasRepresentative"
          value={hasRepresentative}
          onChange={setHasRepresentative}
          isRequired
        >
          <Radio value="yes">Ja</Radio>
          <Radio value="no">Nee</Radio>
        </RadioGroup>
      </FieldSet>

      {/* Announcement for screen readers - Only when needed */}
      {hasRepresentative === "yes" && (
        <div className="sr-only" aria-live="polite">
          Vul de aanvullende gegevens van uw wettelijk vertegenwoordiger in.
        </div>
      )}

      {/* Question 3: Who acts as the legal representative? */}
      {hasRepresentative === "yes" && (
        <FieldSet legend="Wie is uw wettelijk vertegenwoordiger?">
          <CheckboxGroup
            label="Selecteer alle toepasselijke opties"
            name="representativeTypes"
            description="Als de wettelijk vertegenwoordiger een voogd, provoogd of (voorlopig) bewindvoerder is, voegt u bij uw aanvraag een kopie van het vonnis van de rechtbank waarin dat gestaafd wordt."
            value={representativeTypes}
            onChange={handleSelectionChange}
            errorMessage={errorMessage}
            isInvalid={Boolean(errorMessage)}
          >
            <Checkbox value="one_parent">Een van mijn ouders</Checkbox>
            <Checkbox value="both_parents">Mijn beide ouders</Checkbox>
            <Checkbox value="guardian">Een voogd</Checkbox>
            <Checkbox value="provisional_guardian">Een provoogd</Checkbox>
            <Checkbox value="temporary_custodian">
              Een (voorlopig) bewindvoerder
            </Checkbox>
            <Checkbox value="custodian">Een bewindvoerder</Checkbox>
          </CheckboxGroup>
        </FieldSet>
      )}

      {/* Question 4: First Legal Representative Details */}
      {representativeTypes.length > 0 && (
        <FieldSet legend="Eerste Wettelijke Vertegenwoordiger">
          <TextField
            label="Officiële Voornamen"
            name="repFirstName"
            aria-describedby="rep-info"
          />
          <TextField label="Achternaam" name="repLastName" />
          <TextField label="Straat en Huisnummer" name="repStreet" />
          <TextField label="Plaats" name="repCity" />
          <TextField
            label="Postcode"
            name="repPostalCode"
            description="Vul 4 cijfers in"
            inputMode="numeric"
            maxLength={4}
            pattern="[0-9]{4}"
          />
          <TextField
            label="Telefoon- of GSM-nummer"
            name="repPhone"
            type="tel"
          />
          <TextField label="E-mailadres" name="repEmail" type="email" />

          <DateField label="Geboortedatum" name="repBirthDate" />
          <RadioGroup
            label="Geslacht"
            name="repGender"
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
            name="repNationalID"
            mask="00.00.00-000.00"
            inputMode="numeric"
            description="Vul de 11 cijfers van uw rijksregisternummer in"
          />

          {/* Screen reader description (only for first name field) */}
          <div id="rep-info" className="sr-only">
            Vul de volledige officiële voornamen van uw vertegenwoordiger in.
          </div>
        </FieldSet>
      )}

      {/* Question 5: Second Legal Representative (only shown if needed) */}
      {representativeTypes.includes("both_parents") ||
      representativeTypes.length > 1 ? (
        <FieldSet legend="Tweede Wettelijke Vertegenwoordiger">
          <TextField label="Officiële Voornamen" name="rep2FirstName" />
          <TextField label="Achternaam" name="rep2LastName" />
          <TextField label="Straat en Huisnummer" name="rep2Street" />
          <TextField label="Plaats" name="rep2City" />
          <TextField
            label="Postcode"
            name="rep2PostalCode"
            description="Vul 4 cijfers in"
            inputMode="numeric"
            maxLength={4}
            pattern="[0-9]{4}"
          />
          <TextField
            label="Telefoon- of GSM-nummer"
            name="rep2Phone"
            type="tel"
          />
          <TextField label="E-mailadres" name="rep2Email" type="email" />

          <DateField label="Geboortedatum" name="rep2BirthDate" />
          <RadioGroup label="Geslacht" name="rep2Gender" isRequired>
            <Radio value="M">Man (M)</Radio>
            <Radio value="V">Vrouw (V)</Radio>
          </RadioGroup>

          <MyNationalitySelect
            label="Nationaliteit"
            name="rep2Nationality"
            defaultSelectedKey="belgian"
            isRequired
          />
          <MaskField
            label="Rijksregisternummer"
            name="rep2NationalID"
            mask="00.00.00-000.00"
            inputMode="numeric"
            description="Vul de 11 cijfers van uw rijksregisternummer in"
          />
        </FieldSet>
      ) : null}

      {requiresCourtFile && (
        <TextField
          label="Upload het vonnis van de rechtbank:"
          name="courtFile"
          type="file"
          description="Als de wettelijk vertegenwoordiger een voogd, provoogd of (voorlopig) bewindvoerder is, voegt u bij uw aanvraag een kopie van het vonnis van de rechtbank waarin dat gestaafd wordt."
        ></TextField>
      )}
    </FormStep>
  );
}

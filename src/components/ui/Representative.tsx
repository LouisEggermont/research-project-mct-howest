"use client";
import { useState } from "react";
import { TextField } from "@/components/aria/TextField";
import { Radio, RadioGroup } from "../aria/RadioGroup";
import { Checkbox, CheckboxGroup } from "../aria/Checkbox";
import { DateField } from "../aria/DateField";
import MyNationalitySelect from "../aria/MyNationalitySelect";
import { MaskField } from "../aria/MyMaskField";
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

    // Validation: "Mijn beide ouders" and any other option
    if (newSelection.includes("both_parents") && newSelection.length > 1) {
      error = "U kunt niet 'Mijn beide ouders' en een andere optie selecteren.";
    }

    setErrorMessage(error); // ✅ Update error message for React Aria
    setRepresentativeTypes(newSelection); // ✅ Always update selection state
  };
  // Determine if file upload is needed
  const requiresCourtFile = representativeTypes.some((type) =>
    ["guardian", "provisional_guardian", "temporary_custodian"].includes(type)
  );

  return (
    <div className="space-y-4">
      {/* Question 2: Do you have a legal representative? */}
      {/* <FieldSet legend="Wettelijk Vertegenwoordiger"> */}
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
      {/* </FieldSet> */}

      {/* Announcement for screen readers - Only when needed */}
      {/* {hasRepresentative === "yes" && (
        <div className="sr-only" aria-live="polite">
          Vul de aanvullende gegevens van uw wettelijk vertegenwoordiger in.
        </div>
      )} */}

      <span aria-live="polite" className="sr-only">
        {hasRepresentative === "yes" && "Vul de aanvullende gegevens in."}
      </span>

      {/* Question 3: Who acts as the legal representative? */}
      {hasRepresentative === "yes" && (
        <FieldSet legend="Wie is uw wettelijk vertegenwoordiger?">
          <CheckboxGroup
            label="Selecteer alle toepasselijke opties"
            name="representativeTypes"
            // description="Als de wettelijk vertegenwoordiger een voogd, provoogd of (voorlopig) bewindvoerder is, voegt u bij uw aanvraag een kopie van het vonnis van de rechtbank waarin dat gestaafd wordt."
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
        <div aria-labelledby="rep1Details">
          <h3 aria-label="rep1Details" className="text-1xl font-semibold">
            Gegevens van Eerste Wettelijke Vertegenwoordiger
          </h3>
          <FieldSet legend="Naam">
            <TextField
              label="Officiële Voornamen"
              name="rep1FirstName"
              isRequired
            />
            <TextField label="Achternaam" name="rep1LastName" isRequired />
          </FieldSet>

          <FieldSet legend="Adres">
            <TextField
              label="Straat en Huisnummer"
              name="rep1Street"
              isRequired
            />
            <TextField label="Plaats" name="rep1City" isRequired />
            <TextField
              label="Postcode"
              name="rep1PostalCode"
              isRequired
              inputMode="numeric"
              maxLength={4}
              pattern="[0-9]{4}"
            />
          </FieldSet>

          <FieldSet legend="Contactgegevens">
            <TextField
              label="Telefoon- of GSM-nummer"
              name="rep1Phone"
              type="tel"
              isRequired
              description="Enkel cijfers, spaties en (+) zijn toegestaan"
              pattern="^\+?[0-9\s\-]{7,15}$"
            />
            <TextField
              label="E-mailadres"
              name="rep1Email"
              type="email"
              isRequired
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
          </FieldSet>

          <FieldSet legend="Identificatie">
            <DateField label="Geboortedatum" name="rep1BirthDate" isRequired />
            <RadioGroup
              label="Geslacht"
              name="rep1Gender"
              isRequired
              description="Kies het geslacht dat overeenkomt met uw identiteitsdocument"
            >
              <Radio value="M">Man (M)</Radio>
              <Radio value="V">Vrouw (V)</Radio>
            </RadioGroup>
            <MyNationalitySelect
              label="Nationaliteit"
              name="rep1Nationality"
              defaultSelectedKey="belgian"
              isRequired
            />

            <MaskField
              label="Rijksregisternummer"
              name="rep1NationalID"
              mask="00.00.00-000.00"
              inputMode="numeric"
              description="Voer enkel de 11 cijfers van uw rijksregisternummer in "
              isRequired
            />
          </FieldSet>
        </div>
      )}

      {/* Question 5: Second Legal Representative (only shown if needed) */}
      {representativeTypes.includes("both_parents") ||
      representativeTypes.length > 1 ? (
        <div aria-labelledby="rep2Details">
          <h3 aria-label="rep2Details" className="text-1xl font-semibold">
            Gegevens van Tweede Wettelijke Vertegenwoordiger
          </h3>
          <FieldSet legend="Naam">
            <TextField
              label="Officiële Voornamen"
              name="rep2FirstName"
              isRequired
            />
            <TextField label="Achternaam" name="rep2LastName" isRequired />
          </FieldSet>

          <FieldSet legend="Adres">
            <TextField
              label="Straat en Huisnummer"
              name="rep2Street"
              isRequired
            />
            <TextField label="Plaats" name="rep2City" isRequired />
            <TextField
              label="Postcode"
              name="rep2PostalCode"
              isRequired
              inputMode="numeric"
              maxLength={4}
              pattern="[0-9]{4}"
            />
          </FieldSet>

          <FieldSet legend="Contactgegevens">
            <TextField
              label="Telefoon- of GSM-nummer"
              name="rep2Phone"
              type="tel"
              isRequired
              description="Enkel cijfers, spaties en (+) zijn toegestaan"
              pattern="^\+?[0-9\s\-]{7,15}$"
            />
            <TextField
              label="E-mailadres"
              name="rep2Email"
              type="email"
              isRequired
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
          </FieldSet>

          <FieldSet legend="Identificatie">
            <DateField label="Geboortedatum" name="rep2BirthDate" isRequired />
            <RadioGroup
              label="Geslacht"
              name="rep2Gender"
              isRequired
              description="Kies het geslacht dat overeenkomt met uw identiteitsdocument"
            >
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
              description="Voer enkel de 11 cijfers van uw rijksregisternummer in "
              isRequired
            />
          </FieldSet>
        </div>
      ) : null}

      {requiresCourtFile && (
        <TextField
          label="Upload het vonnis van de rechtbank:"
          name="courtFile"
          type="file"
          description="Als de wettelijk vertegenwoordiger een voogd, provoogd of (voorlopig) bewindvoerder is, voegt u bij uw aanvraag een kopie van het vonnis van de rechtbank waarin dat gestaafd wordt."
        ></TextField>
      )}
    </div>
  );
}

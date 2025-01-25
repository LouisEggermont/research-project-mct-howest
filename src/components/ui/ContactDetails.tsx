"use client";
import { TextField } from "@/components/aria/TextField";
import FormStep from "./FormStep"; // Import the wrapper
import FieldSet from "./FieldSet";
import { Radio, RadioGroup } from "../aria/RadioGroup";
import { useState } from "react";

export default function ContactDetails() {
  const [contactAddress, setContactAddress] = useState("own");
  return (
    <FormStep>
      <FieldSet legend="Contactadres">
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

        {contactAddress === "other" && (
          <>
            <TextField label="Straat en Huisnummer" name="contactStreet" />
            <TextField label="Postcode en Gemeente" name="contactPostalCode" />
          </>
        )}
      </FieldSet>
    </FormStep>
  );
}

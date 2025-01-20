"use client";
import React from "react";
import { TextField } from "@/components/aria/TextField";
import FormStep from "./FormStep";

export default function Identification() {
  return (
    <FormStep>
      <TextField label="Rijksregisternummer" name="nationalID" isRequired />
      <TextField label="Rijksregisternummer" name="nationalID" isRequired />
    </FormStep>
  );
}

"use client";
import { TextField } from "@/components/aria/TextField";

export default function Identification() {
  return (
    <div>
      <TextField label="Rijksregisternummer" name="nationalID" />
    </div>
  );
}

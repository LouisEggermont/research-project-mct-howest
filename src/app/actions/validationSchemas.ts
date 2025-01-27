import { z } from "zod";

export const personalDataSchema = z.object({
  firstName: z.string().min(1, "Voornaam is verplicht. (SERVER)"),
  lastName: z.string().min(1, "Achternaam is verplicht."),
  street: z.string().min(1, "Straat en Huisnummer is verplicht."),
  city: z.string().min(1, "Plaats is verplicht."),
  postalCode: z
    .string()
    .regex(/[0-9]{4}/, "Postcode moet 4 cijfers bevatten.")
    .min(4, "Postcode moet 4 cijfers bevatten.")
    .max(4, "Postcode moet 4 cijfers bevatten."),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-]{7,15}$/, "Telefoonnummer is ongeldig.")
    .min(1, "Telefoonnummer is verplicht."),
  email: z
    .string()
    .email("Ongeldig e-mailadres.")
    .min(1, "E-mailadres is verplicht."),
  birthDate: z.string().min(1, "Geboortedatum is verplicht."),
  gender: z.enum(["M", "V"]).refine((val) => val !== undefined, {
    message: "Geslacht is verplicht.",
  }),
  repNationality: z.string().min(1, "Nationaliteit is verplicht."),
  nationalID: z
    .string()
    .regex(
      /^\d{11}$/,
      "Ongeldig rijksregisternummer, moet 11 cijfers bevatten."
    )
    .min(1, "Rijksregisternummer is verplicht."),
  dossierNumber: z.string().optional(),
});

export const representativeSchema = z.object({
  // phone: z.string().min(1, "Telefoonnummer moet minstens 1 tekens bevatten."),
  // email: z.string().min(1, "Ongeldig e-mailadres."),
});

export const identificationSchema = z.object({
  nationalID: z
    .string()
    .regex(
      /^\d{11}$/,
      "Ongeldig rijksregisternummer, moet 11 cijfers bevatten."
    ),
});

export const contactDetailsSchema = z.object({
  phone: z.string().min(1, "Telefoonnummer moet minstens 1 tekens bevatten."),
  email: z.string().min(1, "Ongeldig e-mailadres."),
});

export const formSchemas: Record<
  string,
  z.ZodObject<Record<string, z.ZodTypeAny>>
> = {
  identification: identificationSchema,
  contact: contactDetailsSchema,
  personal: personalDataSchema,
  representative: representativeSchema,
};

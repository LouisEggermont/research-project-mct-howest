import { z } from "zod";

export const personalDataSchema = z.object({
  firstName: z.string().min(1, "Voornaam is verplicht."),
  lastName: z.string().min(1, "Achternaam is verplicht."),
});

export const representativeSchema = z.object({
  phone: z.string().min(1, "Telefoonnummer moet minstens 1 tekens bevatten."),
  email: z.string().min(1, "Ongeldig e-mailadres."),
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
  personalData: personalDataSchema,
  representative: representativeSchema,
};

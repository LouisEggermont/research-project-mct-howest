import { z } from "zod";

// ✅ Identification Step Validation
export const identificationSchema = z.object({
  nationalID: z
    .string()
    .regex(
      /^\d{11}$/,
      "Ongeldig rijksregisternummer, moet 11 cijfers bevatten."
    ),
});

// ✅ Contact Details Validation
export const contactDetailsSchema = z.object({
  phone: z.string().min(1, "Telefoonnummer moet minstens 1 tekens bevatten."),
  email: z.string().min(1, "Ongeldig e-mailadres."),
});

// ✅ Personal Data Validation
export const personalDataSchema = z.object({
  firstName: z.string().min(1, "Voornaam is verplicht."),
  lastName: z.string().min(1, "Achternaam is verplicht."),
});

// ✅ Define a type-safe schema mapping
export const formSchemas: Record<
  string,
  z.ZodObject<Record<string, z.ZodTypeAny>>
> = {
  identification: identificationSchema,
  contact: contactDetailsSchema,
  personalData: personalDataSchema,
};

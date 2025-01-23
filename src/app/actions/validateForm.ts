"use server";

import { formSchemas } from "./validationSchemas";

// Define a type for form state
interface FormState {
  errors: Record<string, string[]>; // Errors mapped by field name
}

export async function validateForm(prevState: FormState, formData: FormData) {
  console.log("formData", formData);
  const stepKey = formData.get("step"); // ✅ Get dynamic step key
  if (!stepKey || !formSchemas[stepKey as string]) {
    return { errors: { general: ["Invalid step"] } }; // Handle unknown steps
  }

  const schema = formSchemas[stepKey as string]; // ✅ Get correct validation schema
  const data = Object.fromEntries(formData.entries());
  const result = schema.safeParse(data);

  // if (!result.success) {
  //   return { errors: result.error.flatten().fieldErrors };
  // }
  if (!result.success) {
    return {
      errors: Object.fromEntries(
        Object.entries(result.error.flatten().fieldErrors).map(
          ([key, value]) => [
            key,
            value ?? [], // Ensure all errors are arrays
          ]
        )
      ),
    };
  }

  return { errors: {} }; // ✅ No validation errors
}

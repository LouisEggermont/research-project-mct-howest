"use server";

import { formSchemas } from "./validationSchemas";

interface FormState {
  errors: Record<string, string[]>;
}

export async function validateForm(prevState: FormState, formData: FormData) {
  if (process.env.NEXT_PUBLIC_DISABLE_SERVER_VALIDATION === "true") {
    console.log("[Server] Server-side validation is disabled.");
    return { errors: {} };
  }

  console.log("formData", formData);

  const stepKey = formData.get("step");

  if (!stepKey || !formSchemas[stepKey as string]) {
    return { errors: { general: ["Invalid step"] } };
  }

  const schema = formSchemas[stepKey as string];
  const data = Object.fromEntries(formData.entries());
  const result = schema.safeParse(data);

  await new Promise((resolve) => setTimeout(resolve, 10000));

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

  return { errors: {} };
}

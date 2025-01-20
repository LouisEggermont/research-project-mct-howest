"use server";

import { z } from "zod";

const schema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid Email",
    })
    .nonempty("Email cannot be empty"),
});

export default async function createUser(
  prevState: unknown,
  formData: FormData
) {
  console.log("formData", formData);
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  // Return early if the form data is invalid
  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //   };
  // }
  if (!validatedFields.success) {
    const formattedErrors = Object.fromEntries(
      Object.entries(validatedFields.error.flatten().fieldErrors).map(
        ([key, value]) => [key, value[0]] // Convert arrays to single strings
      )
    );

    console.log("Validation errors:", formattedErrors);
    return { errors: formattedErrors };
  }

  // Mutate data
}

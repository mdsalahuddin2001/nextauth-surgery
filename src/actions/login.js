"use server";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";

export const login = async (values) => {
  console.log(values);
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }
  const { email, password } = validatedFields.data;
  console.log({ email, password });
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    // TODO: handle error
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};

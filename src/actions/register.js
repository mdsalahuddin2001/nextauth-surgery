"use server";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: send verification email
  return { succecss: "Email Sent!" };
};

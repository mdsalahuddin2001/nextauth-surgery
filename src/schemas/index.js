import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});
export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z
    .string({
      required_error: "Password is required!",
    })
    .min(6, {
      message: "Password must be at least 6 character long!",
    }),
});

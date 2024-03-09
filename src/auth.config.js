import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "./data/user";
const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          console.log("yes", user);
          if (!user || !user.password) {
            return null;
          }
          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );
          if (isPasswordMatched) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
};

export default authConfig;

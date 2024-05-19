import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Name is Required").max(255),
  username: z.string().min(3, "Username is Required").max(255),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(255)
    .optional()
    .or(z.literal("")),
  role: z.string().min(3, "Role is Required").max(10),
});

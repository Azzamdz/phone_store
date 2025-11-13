import z from "zod";

export const UserSchema = z.object({
  fullname: z.string().min(3, "Fullname must be at least 3 characters long"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .refine((s) => s.includes(" "), {
      message: "Username must contain at least one space",
    }),

  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["user", "admin"], "Role must be either user or admin"),
});

export const updateUserSchema = z.object({
  fullName: z.string().min(3, "fullname minimal 3 karakter").optional(),
  username: z
    .string()
    .min(3, "username minimal 3 karakter")
    .refine((s) => !s.includes(" "), "username tidak boleh mengandung spasi")
    .optional(),
  email: z.email("email tidak valid").optional(),
  password: z.string().min(6, "password minimal 6 karakter").optional(),
  role: z
    .enum(["admin", "user"], {
      message: "role harus 'admin' atau 'user'",
    })
    .optional(),
  address: z.string().min(5, "alamat minimal 5 karakter").optional(),
  phone_number: z
    .string()
    .regex(/^\d{9,14}$/, "nomor HP tidak valid")
    .optional(),
  age: z
    .number({ invalid_type_error: "umur harus angka" })
    .min(10, "umur minimal 10 tahun")
    .max(100, "umur maksimal 100 tahun")
    .optional(),
});

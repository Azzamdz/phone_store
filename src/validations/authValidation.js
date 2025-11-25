import { z } from "zod";

export const registerSchema = z
  .object({
    fullname: z
      .string()
      .min(3, "Nama lengkap harus terdiri dari minimal 3 karakter"),

    username: z
      .string()
      .min(3, "Username harus terdiri dari minimal 3 karakter")
      .refine((s) => !s.includes(" "), {
        message: "Username tidak boleh mengandung spasi",
      }),

    email: z.string().email("Format email tidak valid"),

    password: z
      .string()
      .min(6, "Kata sandi harus terdiri dari minimal 6 karakter"),

    confirmPassword: z
      .string()
      .min(6, "Konfirmasi kata sandi harus terdiri dari minimal 6 karakter"),

    role: z.enum(["user", "admin"], {
      message: "Peran harus 'user' atau 'admin'",
    }),

    address: z.string().min(5, "Alamat harus terdiri dari minimal 5 karakter"),

    phone_number: z
      .string()
      .regex(/^\d{9,14}$/, "Nomor HP tidak valid (harus 9–14 digit)"),

    age: z
      .number({ invalid_type_error: "Umur harus berupa angka" })
      .min(10, "Umur minimal 10 tahun")
      .max(100, "Umur maksimal 100 tahun"),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dan confirm password harus sama",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.email("email tidak valid"),
  password: z.string().min(6, "password minimal 6 karakter"),
});

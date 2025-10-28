import z from "zod";

export const productSchema = z.object({
  user_id: z.number({
    required_error: "user_id harus diisi",
    invalid_type_error: "user_id harus berupa angka",
  }),
  name: z.string().min(3, "Nama produk minimal 3 karakter"),
  description: z
    .string()
    .min(5, "Deskripsi produk minimal 5 karakter")
    .max(255, "Deskripsi maksimal 255 karakter"),
  price: z
    .number({
      required_error: "Harga harus diisi",
      invalid_type_error: "Harga harus berupa angka",
    })
    .min(1, "Harga tidak boleh 0 atau negatif"),
  stock: z
    .number({
      required_error: "Stok harus diisi",
      invalid_type_error: "Stok harus berupa angka",
    })
    .min(0, "Stok tidak boleh negatif"),
});

export const updateProductSchema = z.object({
  user_id: z
    .number({
      invalid_type_error: "user_id harus berupa angka",
    })
    .optional(),
  name: z.string().min(3, "Nama produk minimal 3 karakter").optional(),
  description: z
    .string()
    .min(5, "Deskripsi produk minimal 5 karakter")
    .max(255, "Deskripsi maksimal 255 karakter")
    .optional(),
  price: z
    .number({
      invalid_type_error: "Harga harus berupa angka",
    })
    .min(1, "Harga minimal 1")
    .optional(),
  stock: z
    .number({
      invalid_type_error: "Stok harus berupa angka",
    })
    .min(0, "Stok tidak boleh negatif")
    .optional(),
});

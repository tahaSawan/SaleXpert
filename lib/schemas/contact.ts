import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Valid email required").max(254),
  business: z.string().max(200).optional().default(""),
  phone: z.string().max(40).optional().default(""),
  message: z.string().min(1, "Message is required").max(5000),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>

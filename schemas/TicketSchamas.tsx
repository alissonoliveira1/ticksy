
import * as z from "zod";
import { EventCategorySchema } from "./EventSchemas";

export const localEstados = z.object({
  estado: z.string(),
  capital: z.string(),
  sigla: z.string(),
})
export type LocalEstadosType = z.infer<typeof localEstados>

export const EventSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
  date: z.string(),
  time: z.string(),
  venue: z.string(),
  address: z.string(),
  category: EventCategorySchema,
  price: z.object({
    min: z.number(),
    max: z.number(),
     premium: z.number().optional(),
    currency: z.string(),
  }),
  availableTickets: z.number(),
  totalTickets: z.number(),
  organizer: z.string(),
  tags: z.array(z.string()),
  featured: z.boolean(),
});
export type Event = z.infer<typeof EventSchema>;


export const TicketSchema = z.object({
  id: z.string(),
  eventId: z.string(),
  type: z.enum(["standard", "vip", "early-bird"]),
  price: z.number(),
  quantity: z.number(),
  purchaseDate: z.string(),
  qrCode: z.string(),
  status: z.enum(["valid", "used", "expired"]),
});

export type Ticket = z.infer<typeof TicketSchema>;

export const SearchFiltersSchema = z.object({
  category: EventCategorySchema.optional(),
  dateRange: z
    .object({
      start: z.string(),
      end: z.string(),
    })
    .optional(),
  priceRange: z
    .object({
      min: z.number(),
      max: z.number(),
      premium: z.number(),
    })
    .optional(),
  location: z.string().optional(),
});

export type SearchFilters = z.infer<typeof SearchFiltersSchema>;

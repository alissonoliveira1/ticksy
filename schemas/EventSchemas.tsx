import {
  Book,
  Briefcase,
  Coffee,
  ContactRound,
  Cpu,
  Drama,
  Film,
  Gift, GraduationCap,
  Heart,
  LayoutGrid,
  Mail,
  Music,
  Network,
  Palette,
  PartyPopper,
  Smile,
  Ticket,
  Users,
  UsersRound,
  Volleyball
} from "lucide-react-native";
import { FC } from "react";
import { z } from "zod";

export const EventCategorySchema = z.enum([
  "all",
  "music",
  "sport",
  "theater",
  "conference",
  "festival",
  "comedy",
  "art",
  "food",
  "cinema",
  "party",
  "family",
  "education",
  "tech",
  "wellness",
  "charity",
  "university",
]);

export type EventCategory = z.infer<typeof EventCategorySchema>;


export interface Category {
  key: EventCategory;
  label: string;
  Icon: FC<any>;
}


export const categories: Category[] = [
  { key: "all", label: "Todos", Icon: LayoutGrid },
  { key: "music", label: "Música", Icon: Music },
  { key: "sport", label: "Esporte", Icon: Volleyball },
  { key: "theater", label: "Teatro", Icon: Drama },
  { key: "conference", label: "Conferência", Icon: Briefcase },
  { key: "festival", label: "Festival", Icon: Ticket },
  { key: "comedy", label: "Comédia", Icon: Smile },
  { key: "art", label: "Arte", Icon: Palette },
  { key: "food", label: "Gastronomia", Icon: Coffee },
  { key: "cinema", label: "Cinema", Icon: Film },
  { key: "party", label: "Festa", Icon: PartyPopper },
  { key: "family", label: "Família & Crianças", Icon: Users },
  { key: "education", label: "Educação", Icon: Book },
  { key: "tech", label: "Tecnologia & Startups", Icon: Cpu },
  { key: "wellness", label: "Bem-estar", Icon: Heart },
  { key: "charity", label: "Caridade", Icon: Gift },
  { key: "university", label: "Universitário", Icon: GraduationCap },
];

export const CategoryConnectSchema = z.enum([
  "Sugestões",
  "Meus Contatos",
  "Convites",
  "Comunidades",
]);

export type ConnectType = z.infer<typeof CategoryConnectSchema>;

export interface CategoryConnect {
  key: ConnectType;
  label: string;
  Icon: FC<any>;
}
export const ConnectArrey: CategoryConnect[] = [
  { key: "Sugestões", label: "Sugestões", Icon:   UsersRound  },
  { key: "Meus Contatos", label: "Meus Contatos", Icon: ContactRound },
  { key: "Convites", label: "Convites", Icon: Mail },
  { key: "Comunidades", label: "Comunidades", Icon: Network  },
]
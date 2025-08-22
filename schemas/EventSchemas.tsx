import {
    Book,
    Briefcase,
    Coffee,
    Cpu,
    Drama,
    Film,
    Gift,
    GraduationCap,
    Heart,
    LayoutGrid,
    Music,
    Palette,
    PartyPopper,
    Smile,
    Ticket,
    Users,
    Volleyball,
} from 'lucide-react-native';
import { FC } from 'react';

type EventCategory =
  | 'all'
  | 'music'
  | 'sport'
  | 'theater'
  | 'conference'
  | 'festival'
  | 'comedy'
  | 'art'
  | 'food'
  | 'cinema'
  | 'party'
  | 'family'
  | 'education'
  | 'tech'
  | 'wellness'
  | 'charity'
  | 'university';

interface Category {
  key: EventCategory ;
  label: string;
  Icon: FC<any>;
  
}

export const categories: Category[] = [
  { key: 'all', label: 'Todos', Icon: LayoutGrid },
  { key: 'music', label: 'Música', Icon: Music },
  { key: 'sport', label: 'Esporte', Icon: Volleyball },
  { key: 'theater', label: 'Teatro', Icon: Drama },
  { key: 'conference', label: 'Conferência', Icon: Briefcase },
  { key: 'festival', label: 'Festival', Icon: Ticket },
  { key: 'comedy', label: 'Comédia', Icon: Smile },
  { key: 'art', label: 'Arte', Icon: Palette },
  { key: 'food', label: 'Gastronomia', Icon: Coffee },
  { key: 'cinema', label: 'Cinema', Icon: Film },
  { key: 'party', label: 'Festa', Icon: PartyPopper },
  { key: 'family', label: 'Família & Crianças', Icon: Users },
  { key: 'education', label: 'Educação', Icon: Book },
  { key: 'tech', label: 'Tecnologia & Startups', Icon: Cpu },
  { key: 'wellness', label: 'Bem-estar', Icon: Heart },
  { key: 'charity', label: 'Caridade', Icon: Gift },
  { key: 'university', label: 'Universitário', Icon: GraduationCap },
];
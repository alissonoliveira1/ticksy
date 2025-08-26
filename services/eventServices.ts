
import { EventCategory } from "@/schemas/EventSchemas";
import { Event } from "@/schemas/TicketSchamas";
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Lady gaga - Gagacabana',
    description: 'show da Lady gaga.',
    image: 'https://i.ibb.co/hxKXJ9YS/banner.png',
    date: '2025-08-20',
    time: '20:00',
    venue: 'Parque de Exposições',
    address: 'Parque de Exposições',
    category: 'music',
    price: { min: 45, max: 120, currency: 'R$' },
    availableTickets: 250,
    totalTickets: 500,
    organizer: 'Jazz Events',
    tags: ['pop', 'musica livre', 'eventos'],
    featured: true
  },
  {
    id: '2',
    title: 'Bahia vs Vitoria',
    description: 'Bahia vs Vitoria.',
    image: 'https://i.ibb.co/hxKXJ9YS/banner.png',
    date: '2025-08-25',
    time: '21:00',
    venue: 'Estadio pituaçu',
    address: 'pituaçu, salvador',
    category: 'sport',
    price: { min: 80, max: 300, currency: 'R$' },
    availableTickets: 1200,
    totalTickets: 2000,
    organizer: 'esporte clube bahia',
    tags: ['futebol', 'brasileirão', 'classificação'],
    featured: true
  },
  {
    id: '3',
    title: 'Google IO 2025',
    description: 'Google IO.',
    image: 'https://i.ibb.co/hxKXJ9YS/banner.png',
    date: '2025-09-05',
    time: '09:00',
    venue: 'Parque de Exposições',
    address: 'Parque de Exposições',
    category: 'conference',
    price: { min: 25, max: 150, currency: 'R$' },
    availableTickets: 800,
    totalTickets: 1000,
    organizer: 'Google inc',
    tags: ['tecnologia', 'inovação', 'eventos'],
    featured: false
  },
  {
    id: '4',
    title: 'show do whindersson',
    description: 'um humor qualquer.',
    image: 'https://i.ibb.co/hxKXJ9YS/banner.png',
    date: '2025-08-30',
    time: '20:30',
    venue: 'Parque de Exposições',
    address: 'Parque de Exposições',
    category: 'comedy',
    price: { min: 30, max: 65, currency: 'R$' },
    availableTickets: 150,
    totalTickets: 200,
    organizer: 'Comedy Events',
    tags: ['humor', 'espetaculo', 'teatro'],
    featured: false
  }
];
export class EventService {
  static async getFeaturedEvents(): Promise<Event[]> {
    // Simuler un délai réseau
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockEvents.filter(event => event.featured);
  }

  static async getAllEvents(): Promise<Event[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockEvents;
  }

  static async getEventsByCategory(category: EventCategory): Promise<Event[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockEvents.filter(event => event.category === category);
  }
}
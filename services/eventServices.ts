
import { EventCategory } from "@/schemas/EventSchemas";
import { Event, LocalEstadosType } from "@/schemas/TicketSchamas";
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Lady gaga - Gagacabana',
    description: 'O Gagacabana é o maior festival de música e cultura da região, reunindo artistas renomados, novos talentos e uma energia contagiante à beira-mar. Prepare-se para viver momentos inesquecíveis com shows incríveis, experiências gastronômicas e um ambiente vibrante que celebra a diversidade e a alegria.',
    image: 'https://discovery-next.svc.sympla.com.br/_next/image?url=https%3A%2F%2Fassets.bileto.sympla.com.br%2Feventmanager%2Fproduction%2F38g907dptldhngvmruqn5ubj81vpnhe1lj8n9g4qd1ai3npslgp5bhp61p8hrp7ie9g4br8slh3bsh8cvplmaqudjgto116n3fpu936.webp&w=3840&q=75',
    date: '2025-08-20',
    time: '20:00',
    venue: 'Parque de Exposições',
    address: 'Av. Luís Viana Filho, 1590 - Itapuã, Salvador - BA, 41730-101',
    category: 'music',
    price: { min: 45, max: 120,premium:220, currency: 'R$' },
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
    image: 'https://discovery-next.svc.sympla.com.br/_next/image?url=https%3A%2F%2Fimages.sympla.com.br%2F688553aa010f4-xs.png&w=3840&q=75',
    date: '2025-08-25',
    time: '21:00',
    venue: 'Estadio pituaçu',
    address: 'Rua dos Rádioamadores, 159-357 - Pituaçu, Salvador - BA, 41740-090',
    category: 'sport',
    price: { min: 80, max: 100, currency: 'R$' },
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
    image: 'https://images.sympla.com.br/6827458dbf5c2-cover.png',
    date: '2025-09-05',
    time: '09:00',
    venue: 'Parque de Exposições',
    address: 'Av. Luís Viana Filho, 1590 - Itapuã, Salvador - BA, 41730-101',
    category: 'conference',
    price: { min: 25, max: 150,premium:220, currency: 'R$' },
    availableTickets: 800,
    totalTickets: 1000,
    organizer: 'Google inc',
    tags: ['tecnologia', 'inovação', 'eventos'],
    featured: true
  },
  {
    id: '4',
    title: 'show do whindersson',
    description: 'um humor qualquer.',
    image: 'https://assets.bileto.sympla.com.br/eventmanager/production/3vvqnq7u9kfgkt7pgi1r5a18ooa7nhuqb5h7agfb5n6v4qsough0qn0poc9nkukmqiavolm9fheh1481h29skjpqfk82rr69jpeftpr.webp',
    date: '2025-08-30',
    time: '20:30',
    venue: 'Parque de Exposições',
    address: 'Av. Luís Viana Filho, 1590 - Itapuã, Salvador - BA, 41730-101',
    category: 'comedy',
    price: { min: 30, max: 65, currency: 'R$' },
    availableTickets: 150,
    totalTickets: 200,
    organizer: 'Comedy Events',
    tags: ['humor', 'espetaculo', 'teatro'],
    featured: true
  }
];
export class EventService {
 static async getById(id: string): Promise<Event | null> {
  const event = mockEvents.find(event => event.id === id);
  return event ?? null;
}
  static async getFeaturedEvents(): Promise<Event[]> {
    
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




export const capitaisBrasil: LocalEstadosType[]  =[
  { estado: "Acre", sigla: "AC", capital: "Rio Branco" },
  { estado: "Alagoas", sigla: "AL", capital: "Maceió" },
  { estado: "Amapá", sigla: "AP", capital: "Macapá" },
  { estado: "Amazonas", sigla: "AM", capital: "Manaus" },
  { estado: "Bahia", sigla: "BA", capital: "Salvador" },
  { estado: "Ceará", sigla: "CE", capital: "Fortaleza" },
  { estado: "Distrito Federal", sigla: "DF", capital: "Brasília" },
  { estado: "Espírito Santo", sigla: "ES", capital: "Vitória" },
  { estado: "Goiás", sigla: "GO", capital: "Goiânia" },
  { estado: "Maranhão", sigla: "MA", capital: "São Luís" },
  { estado: "Mato Grosso", sigla: "MT", capital: "Cuiabá" },
  { estado: "Mato Grosso do Sul", sigla: "MS", capital: "Campo Grande" },
  { estado: "Minas Gerais", sigla: "MG", capital: "Belo Horizonte" },
  { estado: "Pará", sigla: "PA", capital: "Belém" },
  { estado: "Paraíba", sigla: "PB", capital: "João Pessoa" },
  { estado: "Paraná", sigla: "PR", capital: "Curitiba" },
  { estado: "Pernambuco", sigla: "PE", capital: "Recife" },
  { estado: "Piauí", sigla: "PI", capital: "Teresina" },
  { estado: "Rio de Janeiro", sigla: "RJ", capital: "Rio de Janeiro" },
  { estado: "Rio Grande do Norte", sigla: "RN", capital: "Natal" },
  { estado: "Rio Grande do Sul", sigla: "RS", capital: "Porto Alegre" },
  { estado: "Rondônia", sigla: "RO", capital: "Porto Velho" },
  { estado: "Roraima", sigla: "RR", capital: "Boa Vista" },
  { estado: "Santa Catarina", sigla: "SC", capital: "Florianópolis" },
  { estado: "São Paulo", sigla: "SP", capital: "São Paulo" },
  { estado: "Sergipe", sigla: "SE", capital: "Aracaju" },
  { estado: "Tocantins", sigla: "TO", capital: "Palmas" },
];

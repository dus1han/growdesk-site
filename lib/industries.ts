/**
 * Demo configurations for the product replicas.
 * All names, phone numbers and records are fictional (555-01xx numbers are reserved for fiction).
 * "clinic" mirrors the shipped GrowDesk build; the others show how a deployment is tailored.
 */

export type BookingStatus = "Booked" | "Completed" | "Checked in";

export interface Industry {
  id: string;
  label: string;
  brand: string;
  initial: string;
  accent: string;
  terms: {
    customers: string;
    bookings: string;
    bookingsToday: string;
    service: string;
    staff: string;
  };
  stages: { name: string; color: string; count: number }[];
  stats: { today: number; todayNote: string; upcoming: number; upcomingNote: string; followUps: number; followUpsNote: string; potential: number; potentialNote: string };
  today: { time: string; name: string; service: string; status: BookingStatus }[];
  customers: { name: string; service: string; stage: number; phone: string; source: string }[];
  followUps: { name: string; when: string; overdue?: boolean }[];
}

export const industries: Industry[] = [
  {
    id: "clinic",
    label: "Clinic",
    brand: "GrowDesk",
    initial: "G",
    accent: "#5b5bf6",
    terms: { customers: "Customers", bookings: "Bookings", bookingsToday: "Today's Consultations", service: "Treatment", staff: "Dr. Amira" },
    stages: [
      { name: "Interested", color: "#6366f1", count: 38 },
      { name: "Follow-up", color: "#f59e0b", count: 21 },
      { name: "Customer", color: "#16a34a", count: 64 },
      { name: "Lost", color: "#94a3b8", count: 9 },
    ],
    stats: { today: 12, todayNote: "+3 from yesterday", upcoming: 47, upcomingNote: "18 in the next 7 days", followUps: 8, followUpsNote: "2 overdue", potential: 59, potentialNote: "+4 new today" },
    today: [
      { time: "09:30", name: "Lina Haddad", service: "Dermal consultation", status: "Completed" },
      { time: "11:00", name: "Daniel Perera", service: "Laser therapy", status: "Checked in" },
      { time: "14:15", name: "Priya Nair", service: "Follow-up review", status: "Booked" },
      { time: "16:00", name: "Sara Malik", service: "First consultation", status: "Booked" },
    ],
    customers: [
      { name: "Sara Malik", service: "Skin rejuvenation", stage: 0, phone: "+1 555 0142", source: "WhatsApp" },
      { name: "Daniel Perera", service: "Laser therapy", stage: 1, phone: "+1 555 0178", source: "Instagram" },
      { name: "Lina Haddad", service: "Dermal consultation", stage: 2, phone: "+1 555 0119", source: "Referral" },
      { name: "Omar Farouk", service: "Hair restoration", stage: 0, phone: "+1 555 0163", source: "WhatsApp" },
      { name: "Priya Nair", service: "Acne treatment", stage: 2, phone: "+1 555 0101", source: "Walk-in" },
    ],
    followUps: [
      { name: "Daniel Perera", when: "Overdue · 2 days", overdue: true },
      { name: "Sara Malik", when: "Today" },
      { name: "Omar Farouk", when: "Tomorrow" },
    ],
  },
  {
    id: "salon",
    label: "Salon & Spa",
    brand: "Velvet Studio",
    initial: "V",
    accent: "#e0457b",
    terms: { customers: "Clients", bookings: "Appointments", bookingsToday: "Today's Appointments", service: "Service", staff: "Maya" },
    stages: [
      { name: "Enquiry", color: "#e0457b", count: 27 },
      { name: "Booked", color: "#8b5cf6", count: 33 },
      { name: "Regular", color: "#16a34a", count: 112 },
      { name: "Inactive", color: "#94a3b8", count: 14 },
    ],
    stats: { today: 19, todayNote: "+5 from yesterday", upcoming: 86, upcomingNote: "41 in the next 7 days", followUps: 11, followUpsNote: "Due today", potential: 27, potentialNote: "+6 new today" },
    today: [
      { time: "10:00", name: "Hannah Lee", service: "Balayage", status: "Completed" },
      { time: "12:30", name: "Aisha Rahman", service: "Signature facial", status: "Checked in" },
      { time: "15:00", name: "Chloe Martin", service: "Gel manicure", status: "Booked" },
      { time: "17:45", name: "Nadia Silva", service: "Deep tissue massage", status: "Booked" },
    ],
    customers: [
      { name: "Hannah Lee", service: "Balayage", stage: 2, phone: "+1 555 0124", source: "Instagram" },
      { name: "Aisha Rahman", service: "Signature facial", stage: 1, phone: "+1 555 0187", source: "WhatsApp" },
      { name: "Chloe Martin", service: "Gel manicure", stage: 2, phone: "+1 555 0136", source: "Walk-in" },
      { name: "Emma Brooks", service: "Bridal package", stage: 0, phone: "+1 555 0155", source: "Website" },
      { name: "Nadia Silva", service: "Deep tissue massage", stage: 1, phone: "+1 555 0109", source: "Referral" },
    ],
    followUps: [
      { name: "Emma Brooks", when: "Today" },
      { name: "Hannah Lee", when: "Rebook · 6 weeks" },
      { name: "Chloe Martin", when: "Friday" },
    ],
  },
  {
    id: "consultancy",
    label: "Consultancy",
    brand: "Northbridge",
    initial: "N",
    accent: "#0ea5e9",
    terms: { customers: "Clients", bookings: "Meetings", bookingsToday: "Today's Meetings", service: "Engagement", staff: "James" },
    stages: [
      { name: "Lead", color: "#0ea5e9", count: 16 },
      { name: "Proposal", color: "#f59e0b", count: 7 },
      { name: "Client", color: "#16a34a", count: 23 },
      { name: "Closed", color: "#94a3b8", count: 5 },
    ],
    stats: { today: 5, todayNote: "Same as yesterday", upcoming: 18, upcomingNote: "9 in the next 7 days", followUps: 6, followUpsNote: "1 overdue", potential: 23, potentialNote: "Lead or proposal" },
    today: [
      { time: "09:00", name: "Harbor Logistics", service: "ERP review", status: "Completed" },
      { time: "11:30", name: "Cedar Foods", service: "Process audit", status: "Checked in" },
      { time: "14:00", name: "Atlas Trading", service: "Automation roadmap", status: "Booked" },
      { time: "16:30", name: "Vertex Labs", service: "Discovery workshop", status: "Booked" },
    ],
    customers: [
      { name: "Harbor Logistics", service: "ERP review", stage: 2, phone: "+1 555 0147", source: "Referral" },
      { name: "Cedar Foods", service: "Process audit", stage: 1, phone: "+1 555 0172", source: "Website" },
      { name: "Atlas Trading", service: "Automation roadmap", stage: 1, phone: "+1 555 0115", source: "LinkedIn" },
      { name: "Bloom Retail", service: "Systems integration", stage: 0, phone: "+1 555 0193", source: "WhatsApp" },
      { name: "Vertex Labs", service: "Discovery workshop", stage: 0, phone: "+1 555 0128", source: "Event" },
    ],
    followUps: [
      { name: "Cedar Foods", when: "Overdue · 1 day", overdue: true },
      { name: "Atlas Trading", when: "Proposal · Today" },
      { name: "Bloom Retail", when: "Thursday" },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate",
    brand: "Keystone Homes",
    initial: "K",
    accent: "#d97706",
    terms: { customers: "Buyers", bookings: "Viewings", bookingsToday: "Today's Viewings", service: "Property", staff: "Rania" },
    stages: [
      { name: "Enquiry", color: "#d97706", count: 44 },
      { name: "Viewing", color: "#6366f1", count: 18 },
      { name: "Offer", color: "#0ea5e9", count: 6 },
      { name: "Closed", color: "#16a34a", count: 12 },
    ],
    stats: { today: 7, todayNote: "+2 from yesterday", upcoming: 29, upcomingNote: "13 in the next 7 days", followUps: 14, followUpsNote: "3 overdue", potential: 68, potentialNote: "+9 new today" },
    today: [
      { time: "10:30", name: "Michael Grant", service: "2-bed apartment, Harbour View", status: "Completed" },
      { time: "13:00", name: "Fatima Zahra", service: "Family villa, Park Lane", status: "Checked in" },
      { time: "15:30", name: "Tom Becker", service: "Townhouse, Riverside", status: "Booked" },
      { time: "18:00", name: "Grace Kim", service: "Penthouse, Skyline Tower", status: "Booked" },
    ],
    customers: [
      { name: "Michael Grant", service: "2-bed apartment", stage: 2, phone: "+1 555 0131", source: "Portal" },
      { name: "Fatima Zahra", service: "Family villa", stage: 1, phone: "+1 555 0166", source: "WhatsApp" },
      { name: "Tom Becker", service: "Townhouse", stage: 1, phone: "+1 555 0104", source: "Website" },
      { name: "Grace Kim", service: "Penthouse", stage: 0, phone: "+1 555 0189", source: "Instagram" },
      { name: "Leo Martins", service: "Studio apartment", stage: 3, phone: "+1 555 0152", source: "Referral" },
    ],
    followUps: [
      { name: "Tom Becker", when: "Overdue · 3 days", overdue: true },
      { name: "Michael Grant", when: "Offer · Today" },
      { name: "Grace Kim", when: "Saturday" },
    ],
  },
  {
    id: "fitness",
    label: "Fitness",
    brand: "Pulse Fitness",
    initial: "P",
    accent: "#16a34a",
    terms: { customers: "Members", bookings: "Sessions", bookingsToday: "Today's Sessions", service: "Programme", staff: "Coach Leo" },
    stages: [
      { name: "Trial", color: "#16a34a", count: 22 },
      { name: "Active", color: "#6366f1", count: 148 },
      { name: "Renewal", color: "#f59e0b", count: 17 },
      { name: "Paused", color: "#94a3b8", count: 11 },
    ],
    stats: { today: 24, todayNote: "+6 from yesterday", upcoming: 132, upcomingNote: "58 in the next 7 days", followUps: 17, followUpsNote: "Renewals due", potential: 22, potentialNote: "On trial" },
    today: [
      { time: "07:00", name: "Ryan Cole", service: "Personal training", status: "Completed" },
      { time: "09:30", name: "Mei Tanaka", service: "Strength · week 4", status: "Checked in" },
      { time: "12:00", name: "Jordan Ellis", service: "Trial class", status: "Booked" },
      { time: "18:30", name: "Sofia Costa", service: "Reformer pilates", status: "Booked" },
    ],
    customers: [
      { name: "Ryan Cole", service: "Personal training", stage: 1, phone: "+1 555 0112", source: "Walk-in" },
      { name: "Mei Tanaka", service: "Strength 12-week", stage: 1, phone: "+1 555 0185", source: "Instagram" },
      { name: "Jordan Ellis", service: "Trial class", stage: 0, phone: "+1 555 0149", source: "Website" },
      { name: "Sofia Costa", service: "Reformer pilates", stage: 2, phone: "+1 555 0137", source: "WhatsApp" },
      { name: "Ahmed Karim", service: "Nutrition coaching", stage: 3, phone: "+1 555 0170", source: "Referral" },
    ],
    followUps: [
      { name: "Sofia Costa", when: "Renewal · Today" },
      { name: "Jordan Ellis", when: "After trial · Tomorrow" },
      { name: "Ahmed Karim", when: "Win-back · Monday" },
    ],
  },
];

export const defaultIndustry = industries[0];

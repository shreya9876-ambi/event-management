export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  department: string;
  type: string;
  poster?: string;
  registeredCount?: number;
  maxCapacity?: number;
  organizer?: string;
  contact?: string;
  tags?: string[];
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Annual Tech Symposium 2024",
    description: "Join us for an exciting tech symposium featuring industry leaders, innovative startups, and cutting-edge research presentations. Network with professionals and explore the latest trends in technology.",
    date: "2024-10-15",
    time: "9:00 AM - 5:00 PM",
    venue: "Main Auditorium, Block A",
    department: "Computer Science",
    type: "Conference",
    registeredCount: 245,
    maxCapacity: 300,
    organizer: "Tech Club",
    contact: "tech.club@college.edu",
    tags: ["Technology", "AI", "Networking", "Innovation"]
  },
  {
    id: "2",
    title: "Cultural Night - Diversity Celebration",
    description: "Experience the rich cultural diversity of our campus through traditional dances, music performances, and authentic cuisine from around the world. A celebration of unity in diversity.",
    date: "2024-10-22",
    time: "6:00 PM - 10:00 PM",
    venue: "Student Center Hall",
    department: "Student Affairs",
    type: "Cultural",
    registeredCount: 180,
    maxCapacity: 250,
    organizer: "Cultural Committee",
    contact: "cultural@college.edu",
    tags: ["Culture", "Dance", "Music", "Food", "International"]
  },
  {
    id: "3",
    title: "Career Fair 2024",
    description: "Meet with top employers, explore internship opportunities, and network with industry professionals. Bring your resume and dress professionally for on-the-spot interviews.",
    date: "2024-11-05",
    time: "10:00 AM - 4:00 PM",
    venue: "Sports Complex",
    department: "Career Services",
    type: "Career",
    registeredCount: 320,
    maxCapacity: 400,
    organizer: "Career Development Office",
    contact: "careers@college.edu",
    tags: ["Jobs", "Internships", "Networking", "Professional Development"]
  },
  {
    id: "4",
    title: "Science Research Showcase",
    description: "Undergraduate and graduate students present their latest research findings across various scientific disciplines. Discover groundbreaking work happening right on our campus.",
    date: "2024-11-12",
    time: "2:00 PM - 6:00 PM",
    venue: "Science Building Atrium",
    department: "Natural Sciences",
    type: "Academic",
    registeredCount: 85,
    maxCapacity: 120,
    organizer: "Research Committee",
    contact: "research@college.edu",
    tags: ["Research", "Science", "Innovation", "Presentation"]
  },
  {
    id: "5",
    title: "Mental Health Awareness Workshop",
    description: "Learn about mental health resources, stress management techniques, and how to support yourself and others. Interactive sessions with mental health professionals.",
    date: "2024-11-18",
    time: "3:00 PM - 5:00 PM",
    venue: "Wellness Center, Room 201",
    department: "Student Health",
    type: "Workshop",
    registeredCount: 45,
    maxCapacity: 60,
    organizer: "Counseling Services",
    contact: "wellness@college.edu",
    tags: ["Mental Health", "Wellness", "Support", "Education"]
  },
  {
    id: "6",
    title: "Startup Pitch Competition",
    description: "Student entrepreneurs pitch their innovative business ideas to a panel of investors and industry experts. Win prizes and potential funding for your startup.",
    date: "2024-11-25",
    time: "1:00 PM - 5:00 PM",
    venue: "Business School Auditorium",
    department: "Business Administration",
    type: "Competition",
    registeredCount: 32,
    maxCapacity: 150,
    organizer: "Entrepreneurship Club",
    contact: "startup@college.edu",
    tags: ["Entrepreneurship", "Business", "Innovation", "Competition", "Funding"]
  }
];

export const departments = [
  "All Departments",
  "Computer Science",
  "Business Administration",
  "Natural Sciences",
  "Student Affairs",
  "Career Services",
  "Student Health"
];

export const eventTypes = [
  "All Types",
  "Conference",
  "Workshop",
  "Cultural",
  "Academic",
  "Career",
  "Competition",
  "Social"
];
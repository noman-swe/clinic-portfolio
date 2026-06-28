export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Tips for Keeping Your Heart Healthy",
    excerpt: "Discover simple lifestyle changes, dietary habits, and exercise routines that can significantly reduce your risk of cardiovascular diseases.",
    category: "Cardiology",
    date: "June 24, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=600&auto=format&fit=crop",
    slug: "tips-for-heart-healthy",
  },
  {
    id: 2,
    title: "Understanding Child Development Milestones",
    excerpt: "A comprehensive guide for parents to track their child's physical, cognitive, and emotional growth during early childhood stages.",
    category: "Paediatrics",
    date: "June 20, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop",
    slug: "child-development-milestones",
  },
  {
    id: 3,
    title: "The Role of Regular Health Checkups in Prevention",
    excerpt: "Why waiting for symptoms might be a mistake. Learn how routine diagnostic testing and screenings can detect illnesses early.",
    category: "Diagnostics",
    date: "June 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    slug: "role-of-regular-health-checkups",
  },
  {
    id: 4,
    title: "Managing Diabetes: Diet, Medication & Lifestyle",
    excerpt: "Practical strategies and expert medical advice on how to effectively balance your blood glucose levels and live a healthy life.",
    category: "Diabetology",
    date: "June 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=600&auto=format&fit=crop",
    slug: "managing-diabetes-diet-lifestyle",
  },
  {
    id: 5,
    title: "When to Visit an Emergency Room vs. Urgent Care",
    excerpt: "Understand the critical differences between severe trauma symptoms and minor illnesses to make the right choice during a medical crisis.",
    category: "Emergency Care",
    date: "June 05, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=600&auto=format&fit=crop",
    slug: "emergency-room-vs-urgent-care",
  },
  {
    id: 6,
    title: "Mental Health Awareness: Coping with Daily Stress",
    excerpt: "Psychological insights and actionable exercises to protect your mental well-being against professional and personal anxieties.",
    category: "Psychiatry",
    date: "May 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop",
    slug: "mental-health-coping-stress",
  },
];
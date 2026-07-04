export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  department: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
  tags: string[];
  content: string;
}

export const BlogPost: BlogPost[] = [
  {
    id: 1,
    slug: "tips-for-heart-healthy",
    title: "10 Essential Tips for Keeping Your Heart Healthy",
    excerpt:
      "Discover simple lifestyle changes, dietary habits, and exercise routines that can significantly reduce your risk of cardiovascular diseases.",
    category: "Cardiology",
    department: "Cardiology Department",
    author: "Dr. Ahmed Hasan",
    date: "June 24, 2026",
    readingTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=600&auto=format&fit=crop",
    tags: ["Cardiology", "Heart Health", "Lifestyle"],
    content: `
Maintaining a healthy heart starts with daily habits. Eating a balanced diet, exercising regularly, avoiding smoking, and managing stress all contribute to better cardiovascular health.

### Healthy Lifestyle
A heart-friendly lifestyle includes regular physical activity, sufficient sleep, and limiting processed foods.

### Regular Checkups
Routine health screenings help identify risk factors such as high blood pressure and cholesterol before they become serious.
`,
  },
  {
    id: 2,
    slug: "child-development-milestones",
    title: "Understanding Child Development Milestones",
    excerpt:
      "A comprehensive guide for parents to track their child's physical, cognitive, and emotional growth during early childhood stages.",
    category: "Paediatrics",
    department: "Paediatrics",
    author: "Dr. Nusrat Jahan",
    date: "June 20, 2026",
    readingTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop",
    tags: ["Child Care", "Growth", "Paediatrics"],
    content: `
Every child develops at their own pace, but developmental milestones provide useful guidance for parents.

### Physical Growth
Children gradually improve motor skills such as crawling, walking, and running.

### Cognitive Development
Language, memory, and problem-solving skills improve rapidly during early childhood.

### Emotional Development
Positive family interaction helps children develop confidence and social skills.
`,
  },
  {
    id: 3,
    slug: "role-of-regular-health-checkups",
    title: "The Role of Regular Health Checkups in Prevention",
    excerpt:
      "Why waiting for symptoms might be a mistake. Learn how routine diagnostic testing and screenings can detect illnesses early.",
    category: "Diagnostics",
    department: "Diagnostics",
    author: "Dr. Rahman",
    date: "June 15, 2026",
    readingTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    tags: ["Diagnostics", "Prevention", "Health Checkup"],
    content: `
Routine health checkups help detect diseases before symptoms appear.

### Early Detection
Regular screening can identify chronic illnesses at an early stage.

### Preventive Care
Timely diagnosis reduces complications and improves treatment outcomes.
`,
  },
  {
    id: 4,
    slug: "managing-diabetes-diet-lifestyle",
    title: "Managing Diabetes: Diet, Medication & Lifestyle",
    excerpt:
      "Practical strategies and expert medical advice on how to effectively balance your blood glucose levels and live a healthy life.",
    category: "Diabetology",
    department: "Diabetology",
    author: "Dr. Shafiq Islam",
    date: "June 10, 2026",
    readingTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=600&auto=format&fit=crop",
    tags: ["Diabetes", "Diet", "Lifestyle"],
    content: `
Managing diabetes requires a combination of healthy eating, medication, and regular exercise.

### Balanced Diet
Choose high-fiber foods and limit sugary beverages.

### Medication
Take prescribed medications consistently and monitor blood sugar levels regularly.
`,
  },
  {
    id: 5,
    slug: "emergency-room-vs-urgent-care",
    title: "When to Visit an Emergency Room vs. Urgent Care",
    excerpt:
      "Understand the critical differences between severe trauma symptoms and minor illnesses to make the right choice during a medical crisis.",
    category: "Emergency Care",
    department: "Emergency Department",
    author: "Dr. Kamal Hossain",
    date: "June 05, 2026",
    readingTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=600&auto=format&fit=crop",
    tags: ["Emergency", "Urgent Care", "Hospital"],
    content: `
Knowing where to seek treatment can save valuable time during a medical emergency.

### Visit the ER
Go to the emergency room for chest pain, severe bleeding, or breathing difficulty.

### Visit Urgent Care
Minor infections, fever, sprains, and small injuries can often be treated at urgent care centers.
`,
  },
  {
    id: 6,
    slug: "mental-health-coping-stress",
    title: "Mental Health Awareness: Coping with Daily Stress",
    excerpt:
      "Psychological insights and actionable exercises to protect your mental well-being against professional and personal anxieties.",
    category: "Psychiatry",
    department: "Psychiatry",
    author: "Dr. Farzana Akter",
    date: "May 28, 2026",
    readingTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop",
    tags: ["Mental Health", "Stress", "Wellness"],
    content: `
Mental health is just as important as physical health.

### Manage Stress
Practice mindfulness, regular exercise, and healthy sleep habits.

### Seek Help
Consult a mental health professional if stress becomes overwhelming or persistent.
`,
  },
];
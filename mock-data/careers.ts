import { GraduationCap } from "lucide-react";

export const careersMockData = {
  banner: {
    title: "We Are Here To Assist You",
    description:
      "Have questions about our medical departments, testing parameters, or booking metrics? Reach out directly.",
    breadcrumb: {
      label: "Home",
      href: "/",
    },
    currentPage: "Careers",
    icon: GraduationCap,
  },
  hrMessage: {
    title: "Message from Senior Director, HR",
    directorName: "Riasat Chowdhury",
    directorTitle: "Senior Director, HR",
    directorCompany: "Evercare Hospital Dhaka",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop", // ডিরেক্টরের ছবি
    paragraphs: [
      "At Evercare Hospital Dhaka, your career is a journey filled with opportunities for learning, growth, and making a meaningful impact. We believe our strength lies in our people.",
      "We provide a world-class environment where medical and non-medical professionals collaborate to deliver clinical excellence. Join our team and be part of a community that values precision, care, and continuous innovation.",
      "Explore open roles across various departments and take the first step towards a rewarding healthcare career with us.",
    ],
  },
  jobsSection: {
    title: "Apply for a job",
    departments: [
      "All Departments",
      "Medical",
      "Nursing",
      "Administration",
      "Customer Care",
    ],
    jobs: [
      {
        id: 1,
        title: "Resident Medical Officer",
        department: "Medical",
        type: "Full Time",
        location: "Evercare Hospital Dhaka",
        deadline: "Deadline: 15 July 2026",
      },
      {
        id: 2,
        title: "Staff Nurse",
        department: "Nursing",
        type: "Full Time",
        location: "Evercare Hospital Dhaka",
        deadline: "Deadline: 20 July 2026",
      },
      {
        id: 3,
        title: "Customer Care Officer",
        department: "Customer Care",
        type: "Full Time",
        location: "Evercare Hospital Dhaka",
        deadline: "Deadline: 12 July 2026",
      },
    ],
  },
  eventsSection: {
    title: "Employee Engagement & Events",
    events: [
      {
        id: 1,
        slug: "monthly-meet-greet-new-joinees",
        date: "14 May 2026",
        title: "Monthly Meet & Greet with New Joinees at Corporate Office",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop",

        excerpt:
          "Our monthly meet and greet program welcomed newly joined employees and introduced them to our work culture.",

        category: "Employee Event",
        department: "Human Resources",
        author: "HR Department",
        readingTime: "4 min",

        tags: ["HR", "Culture", "Employee"],

        content: `
          The Monthly Meet & Greet is designed to help newly joined employees become familiar with our organization.

          ### Welcome Session

          Senior leaders introduced the hospital's mission, values, and workplace culture.

          ### Networking

          Employees interacted with colleagues from multiple departments to build professional relationships.

          ### Team Activities

          Interactive games and discussions helped everyone connect in a relaxed environment.
        `,
      },

      {
        id: 2,
        slug: "campus-excellence-drive-afmc",
        date: "10 May 2026",
        title: "Campus Excellence Drive at Armed Forces Medical College (AFMC)",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop",

        excerpt:
          "Evercare HR team conducted a campus recruitment and career awareness session at AFMC.",

        category: "Campus Recruitment",
        department: "Human Resources",
        author: "Talent Acquisition Team",
        readingTime: "5 min",

        tags: ["Recruitment", "Campus", "AFMC"],

        content: `
          Our recruitment team visited Armed Forces Medical College.

          ### Career Session

          Students learned about career opportunities in healthcare.

          ### Q&A

          Candidates discussed internship and residency opportunities with HR.

          ### Recruitment

          Potential candidates were invited to participate in future recruitment drives.
        `,
      },

      {
        id: 3,
        slug: "seminar-international-medical-college",
        date: "28 April 2026",
        title: "Campus Drive/Seminar at International Medical College",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",

        excerpt:
          "A seminar highlighting career opportunities and professional development in modern healthcare.",

        category: "Seminar",
        department: "Human Resources",
        author: "HR Department",
        readingTime: "5 min",

        tags: ["Seminar", "Healthcare", "Career"],

        content: `
          The seminar focused on preparing students for careers in healthcare.

          ### Industry Insights

          Experts shared current healthcare industry trends.

          ### Professional Growth

          Participants learned about leadership and career development.

          ### Future Opportunities

          Students explored available positions within the organization.
        `,
      },
    ],
  },
};

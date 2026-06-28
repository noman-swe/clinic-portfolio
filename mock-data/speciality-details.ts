// @/mock-data/speciality-details.ts

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  iconName: "Clock" | "ShieldAlert" | "CheckCircle2"; // আইকন ম্যাপিং সহজ করার জন্য
}

export interface GuidelineItem {
  id: string;
  title: string;
  description: string;
  iconName: "CreditCard" | "Building2" | "HelpCircle";
  meta?: {
    location?: string;
    email?: string;
  };
}

// বিভাগীয় পরিচিতি ও সেবাসমূহ (Overview & Services) এর ডাটা
export const departmentServices: ServiceCard[] = [
  {
    id: "emergency",
    title: "24/7 Emergency Support",
    description:
      "Our experienced medical team and on-call specialist consultants are available around the clock to provide immediate and comprehensive emergency care for critically ill patients.",
    iconName: "Clock",
  },
  {
    id: "pre-post-care",
    title: "Pre & Post Care Unit",
    description:
      "We provide dedicated, high-tech pre-operative assessment and post-procedure monitoring to ensure safe treatment, faster recovery, and the highest standard of patient care.",
    iconName: "ShieldAlert",
  },
  {
    id: "specialized-services",
    title: "Specialized Clinical Services",
    description:
      "Our department offers comprehensive outpatient (OPD), day-care, and advanced therapeutic services designed to diagnose, manage, and treat complex and chronic medical conditions under one roof.",
    iconName: "CheckCircle2",
  },
];

// গুরুত্বপূর্ণ নির্দেশনার ডাটা (Important Patient Guidelines)
export const patientGuidelines: GuidelineItem[] = [
  {
    id: "payment",
    title: "Payment Policy",
    description:
      "Payments for consultations, diagnostic tests, procedures, and hospital services can be made directly at the billing counter using cash or major credit/debit cards.",
    iconName: "CreditCard",
  },
  {
    id: "insurance",
    title: "Corporate & Insurance Patients",
    description:
      "Patients covered by listed corporate organizations or health insurance providers are requested to submit the required authorization documents and supporting paperwork at the Cashless Desk during admission.",
    iconName: "Building2",
  },
  {
    id: "billing-inquiry",
    title: "Billing & Refund Enquiries",
    description:
      "For any questions regarding billing, payments, or refunds, please contact our Help Desk for prompt assistance.",
    iconName: "HelpCircle",
    meta: {
      location: "Ground Floor, Main Reception Desk",
      email: "billing@sonianursing.com",
    },
  },
];

// স্ট্যাটিক লেবেল বা টেক্সট এর জন্য কনস্ট্যান্ট (কার্ড বা সেকশনের টাইটেল ডাইনামিক করতে)
export const pageLabels = {
  heroTag: "Speciality Care Centre",
  heroSubtitleSuffix:
    "Sonia Nursing Home & Diagnostic Centre's Trusted, International-Standard Dynamic Care Unit",
  servicesTitle: "Department Overview & Services",
  faqTitle: "Conditions We Treat & Frequently Asked Questions",
  doctorsTitle: "Our Specialist Doctors",
  doctorsSubtitleSuffix:
    "dedicated consultant specialists, committed to delivering expert medical care with compassion and excellence.",
  guidelinesTitle: "Important Patient Guidelines",
};

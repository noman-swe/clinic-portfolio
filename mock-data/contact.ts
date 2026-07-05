import { Mail } from "lucide-react";
export const contactMockData = {
  banner: {
    title: "We Are Here To Assist You",
    description:
      "Have questions about our medical departments, testing parameters, or booking metrics? Reach out directly.",
    breadcrumb: {
      label: "Home",
      href: "/",
    },
    currentPage: "Contact Us",
    icon: Mail,
  },

  infoCards: [
    {
      id: 1,
      title: "Emergency Helpline",
      description: "Available 24 hours a day for direct critical admissions.",
      detail: "+880 1711-XXXXXX",
      iconName: "Phone" as const,
    },
    {
      id: 2,
      title: "Physical Location",
      description: "Visit our main diagnostic desk facility setup location.",
      detail: "Sonia Nursing Home, Dhaka, Bangladesh",
      iconName: "MapPin" as const,
    },
    {
      id: 3,
      title: "Visiting Schedule",
      description:
        "Standard out-patient consultations execution workflow hours.",
      detail: "Sat - Thu: 8:00 AM - 10:00 PM",
      iconName: "Clock" as const,
    },
  ],
  mapCoordinates: {
    // Place your standard hospital Google Map embedded URL link safely inside src parameters here
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.837851919934!2d90.4103131!3d23.7531181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzExLjIiTiA5MMKwMjQnMzcuMSJF!5e0!3m2!1sen!2sbd!4v1625412345678",
  },
};

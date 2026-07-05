// // @/types/banner.ts
// import { LucideIcon } from "lucide-react";
// export interface BannerData {
//   title: string;
//   description: string;
//   breadcrumb: {
//     label: string;
//     href: string;
//   };
//   currentPage: string;
//   icon?: LucideIcon;
// }
import { IconMap } from "@/mock-data/iconMap";
import { LucideIcon } from "lucide-react";

export interface BannerData {
  title: string;
  description: string;

  breadcrumb: {
    label: string;
    href: string;
  };

  currentPage: string;

  // Static page-এর জন্য
  iconName?: keyof typeof IconMap;

  // Dynamic page-এর জন্য
  icon?: LucideIcon;
}

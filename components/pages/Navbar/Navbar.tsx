"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import TopBar from "./TopBar";
import SoniaLogo from "@/components/shared/SoniaLogo";

interface NavbarProps {
    isMegaMenuOpen: boolean;
    setIsMegaMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type NavItem = {
    name: string;
    href?: string;
    megaMenu?: boolean;
};

export default function Navbar({
    isMegaMenuOpen,
    setIsMegaMenuOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
}: NavbarProps) {
    const pathname = usePathname();

    const navItems: NavItem[] = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Doctors", href: "/doctors" },
        { name: "Specialities", megaMenu: true },
        { name: "Blogs", href: "/blogs" },
        { name: "Careers", href: "/careers" },
    ];

    const designNavLink = (item: NavItem) => {
        const isActive = item.megaMenu
            ? pathname.startsWith("/specialities")
            : pathname === item.href;

        if (item.megaMenu) {
            return (
                <button
                    type="button"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    // অ্যাক্টিভ বা হোভার হলে ব্যাকগ্রাউন্ড sky-500 এবং টেক্সট white হবে
                    className={`relative flex h-11 items-center gap-1.5 px-4 text-[15px] font-semibold transition-all duration-200 rounded-md ${isActive || isMegaMenuOpen
                        ? "bg-primary text-white"
                        : "text-slate-600 hover:bg-primary hover:text-white"
                        }`}
                >
                    {item.name}
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""
                            }`}
                    />

                    {/* মেগা মেনুর নিচের ইন্ডিকেটর ট্রায়াঙ্গেল */}
                    {isMegaMenuOpen && (
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-x-8 border-b-8 border-x-transparent border-b-primary z-51" />
                    )}
                </button>
            );
        }

        return (
            // normal links
            <Link
                href={item.href ?? "/"}
                onMouseEnter={() => setIsMegaMenuOpen(false)}
                className={`px-4 text-[15px] font-semibold transition-all duration-200 flex h-11 items-center rounded-md ${isActive
                    ? "bg-primary text-white"
                    : "text-slate-600 hover:bg-primary hover:text-white"
                    }`}
            >
                {item.name}
            </Link>
        );
    };

    return (
        <>
            <div onMouseEnter={() => setIsMegaMenuOpen(false)}>
                <TopBar />
            </div>

            <div className="bg-white text-slate-600 relative border-b border-slate-100">
                <div className="mx-auto container px-6">
                    <div className="flex h-20 items-center justify-between">
                        <Link href="/">
                            <Image
                                src="/images/logo/sonia-logo.png"
                                alt="Logo"
                                width={210}
                                height={60}
                                priority
                                className="h-14 w-auto"
                            />
                            {/* <SoniaLogo /> */}
                        </Link>

                        {/* DESKTOP MENU */}
                        <div className="hidden lg:flex items-center gap-1 h-full">
                            {navItems.map((item) => (
                                <div key={item.name} className="flex items-center">
                                    {designNavLink(item)}
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="bg-primary px-6 py-3 font-semibold text-white text-sm rounded-sm transition-all duration-300 hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:ring-offset-white"
                        >
                            Send Query
                        </Link>

                        <button
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="border-t bg-white lg:hidden">
                    <div className="space-y-2 px-6 py-5">
                        {navItems.map((item) => {
                            const isActive = item.megaMenu
                                ? pathname.startsWith("/specialities")
                                : pathname === item.href;

                            return item.megaMenu ? (
                                <button
                                    key={item.name}
                                    className={`flex items-center justify-between gap-2 font-semibold w-full text-left p-2.5 rounded-md transition-all ${isActive ? "bg-sky-500 text-white" : "text-slate-600 hover:bg-sky-500 hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                    <ChevronDown size={18} />
                                </button>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href ?? "/"}
                                    className={`block font-semibold p-2.5 rounded-md transition-all ${isActive ? "bg-sky-500 text-white" : "text-slate-600 hover:bg-sky-500 hover:text-white"
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block bg-primary py-3 text-center font-semibold text-white transition hover:border rounded-sm"
                            >
                                Send Query
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
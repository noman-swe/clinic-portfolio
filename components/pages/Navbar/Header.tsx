"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import MegaMenu from "./MegaMenu";

export default function Header() {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-50 bg-white"
            onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
            <Navbar
                isMegaMenuOpen={isMegaMenuOpen}
                setIsMegaMenuOpen={setIsMegaMenuOpen}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />

            <MegaMenu
                setIsMegaMenuOpen={setIsMegaMenuOpen}
                isOpen={isMegaMenuOpen}
                setIsOpen={setIsMegaMenuOpen}
            />
        </header>
    );
}
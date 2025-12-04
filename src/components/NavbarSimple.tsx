import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarSimple = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Links to Main Page */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group"
                    >
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                            <ArrowLeft className="w-5 h-5 text-gold" />
                        </span>
                        <img src="/logo.png" alt="Frizerski Salon Uki" className="h-12 w-auto" />
                    </Link>

                    {/* Back to Main Button */}
                    <Link
                        to="/"
                        className="text-foreground/80 hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Nazad na Početnu
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavbarSimple;

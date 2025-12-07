import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoSpinning, setIsLogoSpinning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { name: "Početna", href: "#home" },
    { name: "Usluge", href: "#pricing" },
  ];

  const salonLinks = [
    { name: "O nama", href: "#about" },
    { name: "Tim", href: "#team" },
    { name: "Recenzije", href: "#reviews" },
    { name: "Galerija", href: "/galerija" },
    { name: "Saveti", href: "/saveti" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleLinkClick(e, "#home");
    setIsLogoSpinning(true);
    setTimeout(() => setIsLogoSpinning(false), 1500);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen
        ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center"
            onClick={handleLogoClick}
          >
            <img
              src="/logo.png"
              alt="Frizerski Salon Uki"
              className={`h-14 w-auto transition-transform duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isLogoSpinning ? "rotate-[360deg]" : "rotate-0"}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}

            {/* Dropdown for Salon */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider outline-none">
                Salon <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-background border-border">
                {salonLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <a
                      href={link.href}
                      className="w-full cursor-pointer text-foreground/80 hover:text-gold focus:text-gold focus:bg-gold/10"
                      onClick={(e) => {
                        if (link.href.startsWith("/")) {
                          setIsOpen(false);
                        } else {
                          handleLinkClick(e, link.href);
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#contact"
              className="text-foreground/80 hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider"
              onClick={(e) => handleLinkClick(e, "#contact")}
            >
              Kontakt
            </a>

            <Button
              className="bg-gold text-primary-foreground hover:bg-gold-dark hover:scale-105 transition-all btn-shimmer"
              onClick={(e) => {
                const anchor = e.currentTarget as unknown as HTMLAnchorElement;
                handleLinkClick(e as any, "#download-app");
              }}
            >
              Zakaži Termin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-xl animate-slide-up max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col px-4 py-6 space-y-4">
              {mainLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-gold hover:pl-2 transition-all font-medium text-lg border-b border-border/50 pb-2"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}

              <div className="py-2">
                <p className="text-gold text-sm font-semibold mb-2 uppercase tracking-wider">Salon</p>
                <div className="pl-4 space-y-3 border-l-2 border-gold/20">
                  {salonLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-foreground/80 hover:text-gold transition-all font-medium"
                      onClick={(e) => {
                        if (link.href.startsWith("/")) {
                          setIsOpen(false);
                        } else {
                          handleLinkClick(e, link.href);
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="text-foreground/80 hover:text-gold hover:pl-2 transition-all font-medium text-lg border-b border-border/50 pb-2"
                onClick={(e) => handleLinkClick(e, "#contact")}
              >
                Kontakt
              </a>

              <Button
                className="bg-gold text-primary-foreground hover:bg-gold-dark w-full mt-4 btn-shimmer"
                onClick={(e) => handleLinkClick(e as any, "#download-app")}
              >
                Zakaži Termin
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


import { useEffect } from "react";
import NavbarSimple from "@/components/NavbarSimple";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const galleryImages = [
    { src: gallery1, alt: "Precizno fade šišanje" },
    { src: gallery2, alt: "Profesionalno sređivanje brade" },
    { src: gallery3, alt: "Klasično brijanje britvom" },
    { src: gallery4, alt: "Moderno stilizovanje frizure" },
    { src: gallery5, alt: "Farbanje kose" },
    { src: gallery6, alt: "Dečije šišanje" },
    { src: gallery7, alt: "Detaljno iscrtavanje linija" },
    { src: gallery8, alt: "Vintage frizerska stolica" },
    // Duplicating for demo purposes to show grid
    { src: gallery1, alt: "Precizno fade šišanje 2" },
    { src: gallery3, alt: "Klasično brijanje britvom 2" },
    { src: gallery5, alt: "Farbanje kose 2" },
    { src: gallery7, alt: "Detaljno iscrtavanje linija 2" },
];

const GalerijaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <NavbarSimple />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full animate-bounce-slow btn-shimmer">
                            <span className="text-gold text-sm font-semibold">PORTFOLIO</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-text-reveal">
                            Galerija <span className="text-gold">Radova</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                            Pogledajte našu kolekciju frizura, brada i transformacija.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Placeholder slots for future images */}
                        {[1, 2, 3, 4].map((_, i) => (
                            <div
                                key={`placeholder-${i}`}
                                className="rounded-2xl aspect-square border-2 border-dashed border-gold/20 flex items-center justify-center bg-gold/5 animate-fade-in opacity-50 hover:opacity-100 transition-opacity duration-300"
                                style={{ animationDelay: `${(galleryImages.length + i) * 0.1}s`, animationFillMode: "both" }}
                            >
                                <span className="text-gold/50 text-sm font-medium">Uskoro više slika...</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/">
                            <Button variant="outline" className="border-gold/50 text-gold hover:bg-gold hover:text-black transition-all duration-300 group">
                                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                Nazad na Početnu
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalerijaPage;

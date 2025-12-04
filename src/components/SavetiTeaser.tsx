import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Scissors, User, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SavetiTeaser = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Scroll reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Click sound effect
    const playClickSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { });
        }
    };

    const icons = [
        { Icon: Scissors, label: "Frizure" },
        { Icon: User, label: "Brada" },
        { Icon: Sparkles, label: "Produkti" },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-8 md:py-10 px-4 bg-secondary/50 border-y border-gold/10 max-h-[200px] md:max-h-[260px] overflow-hidden"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
        >
            {/* Hidden audio for click sound */}
            <audio
                ref={audioRef}
                src="data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAABhgC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAAYYNzJNMAAAAAAD/+9DEAAAH+ANntAAAJEwBqz81kAAAJtAG1dwAE5znOc7gIAmCYP5QEHygIP/BB///ygIP/KAg//5QEAQBAMAwD4f/E/+CDg+D4Pg+H/ygIAgCYJh/8oCD/ygf/lg+D/5z//BwfD4Pg+D7///+XwfB8HwfB8oCD4Pg+D4f///lAQf/+l8H/+Xwf/5fB//l8H/+Xwf/5fB//l8H//5QEAQBAMMP/BAOAAA//tQxA4AAADSAAAAAAAAANIAAAAASZmZmZmZgAAAAkkkkkkkAAAACNmZmZmZgAAAASSSSSSQAAAAI2ZmZmZmAAAAACSSSSSSAAAAAmZmZmZmAAAAAkkkkkkkAAAACNmZmZmZgAAAAJJJJJJAAAAACNmZmZmYAAAABJJJJJIAAAAAjZmZmZmAAAABJJJJJJAAAAACZmZmZmYAAAAEkkkkkgAAAAA="
                preload="auto"
            />

            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    {/* Left: Title + Subtitle */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                            Saveti za kosu i bradu
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base">
                            Pro saveti. Nega. Styling. Pravi produkt.
                        </p>
                    </div>

                    {/* Right: Icons + CTA */}
                    <div className="flex items-center gap-6 md:gap-8">
                        {/* Icons */}
                        <div className="flex items-center gap-3">
                            {icons.map(({ Icon, label }, index) => (
                                <div
                                    key={label}
                                    className="group cursor-pointer"
                                    title={label}
                                >
                                    <Icon
                                        className="w-7 h-7 text-gold transition-transform duration-[250ms] group-hover:translate-x-[2px]"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Link to="/saveti" onClick={playClickSound}>
                            <Button
                                className="bg-gold text-black hover:bg-gold-dark rounded-full px-6 py-5 font-heading uppercase tracking-wider text-sm transition-all duration-200 hover:scale-[1.04] group btn-shimmer"
                            >
                                Pogledaj savete
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-[180ms] group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SavetiTeaser;

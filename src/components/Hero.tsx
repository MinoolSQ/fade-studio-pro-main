import { Button } from "@/components/ui/button";
import { Smartphone, Download, Scissors } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75 blur-[2px]"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Rotating Scissors Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5">
        <Scissors className="w-[800px] h-[800px] text-gold animate-spin-slow" strokeWidth={0.5} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Savršen Rez.
          </span>{" "}
          <span className="text-gradient-gold inline-block animate-text-reveal" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
            Urbani Vibe.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
          Gde se stil susreće sa preciznošću. Tvoj najbolji look počinje ovde.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "1.1s", animationFillMode: "both" }}>
          <Button
            size="lg"
            className="bg-gold text-primary-foreground hover:bg-gold-dark transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/30 group btn-shimmer"
          >
            <Smartphone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Google Play
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 hover:scale-105 group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            App Store
          </Button>
        </div>
      </div>

      {/* Floating elements for added depth */}
      <div
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-gold/5 blur-2xl"
      ></div>
      <div
        className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-gold/10 blur-3xl"
      ></div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

// Google Play Store Logo SVG
const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
  </svg>
);

// Apple Logo SVG
const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// Elegant Detailed Scissors SVG for premium rotating background
const ElegantScissors = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Top blade - with pointed tip */}
    <path
      d="M50 48 L5 32 L5 30 L7 31 L48 47"
      strokeWidth="0.6"
      fill="currentColor"
      fillOpacity="0.08"
    />
    {/* Top blade back edge */}
    <path d="M50 48 L7 35 L5 32" strokeWidth="0.4" opacity="0.3" />
    {/* Top blade edge detail */}
    <path d="M8 31 L46 47" strokeWidth="0.2" opacity="0.4" />

    {/* Bottom blade - with pointed tip */}
    <path
      d="M50 52 L5 68 L5 70 L7 69 L48 53"
      strokeWidth="0.6"
      fill="currentColor"
      fillOpacity="0.08"
    />
    {/* Bottom blade back edge */}
    <path d="M50 52 L7 65 L5 68" strokeWidth="0.4" opacity="0.3" />
    {/* Bottom blade edge detail */}
    <path d="M8 69 L46 53" strokeWidth="0.2" opacity="0.4" />

    {/* Top handle - elegant oval */}
    <ellipse cx="78" cy="32" rx="14" ry="9" strokeWidth="0.5" fill="currentColor" fillOpacity="0.04" />
    <ellipse cx="78" cy="32" rx="9" ry="5" strokeWidth="0.3" opacity="0.5" />
    {/* Handle connection */}
    <path d="M64 36 L50 48" strokeWidth="0.5" />
    {/* Handle decorative detail */}
    <path d="M72 30 Q78 32 84 30" strokeWidth="0.2" opacity="0.3" />

    {/* Bottom handle - elegant oval */}
    <ellipse cx="78" cy="68" rx="14" ry="9" strokeWidth="0.5" fill="currentColor" fillOpacity="0.04" />
    <ellipse cx="78" cy="68" rx="9" ry="5" strokeWidth="0.3" opacity="0.5" />
    {/* Handle connection */}
    <path d="M64 64 L50 52" strokeWidth="0.5" />
    {/* Handle decorative detail */}
    <path d="M72 70 Q78 68 84 70" strokeWidth="0.2" opacity="0.3" />

    {/* Center pivot screw */}
    <circle cx="50" cy="50" r="3" strokeWidth="0.5" fill="currentColor" fillOpacity="0.12" />
    <circle cx="50" cy="50" r="1.5" strokeWidth="0.3" opacity="0.7" />
  </svg>
);

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

      {/* Rotating Elegant Scissors Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.08]">
        <ElegantScissors className="w-[850px] h-[850px] text-gold animate-spin-slow" />
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
            <GooglePlayIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Google Play
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 hover:scale-105 group"
          >
            <AppleIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
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

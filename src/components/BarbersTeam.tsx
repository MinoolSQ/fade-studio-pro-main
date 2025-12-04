import BarberCard from "./BarberCard";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";

const barbers = [
  {
    name: "Marko",
    specialty: "Majstor za Fade",
    description: "10 godina iskustva u modernim fade stilovima.",
    image: barber1,
    instagram: "https://www.instagram.com/frizerskisalonuky/?hl=en",
  },
  {
    name: "Nikola",
    specialty: "Ekspert za Bradu",
    description: "Stručnjak za bradu i precizno oblikovanje.",
    image: barber2,
    instagram: "https://www.instagram.com/frizerskisalonuky/?hl=en",
  },
  {
    name: "Stefan",
    specialty: "Ekspert za Stajling",
    description: "Kreiranje detaljnih i urednih modernih frizura.",
    image: barber3,
    instagram: "https://www.instagram.com/frizerskisalonuky/?hl=en",
  },
];

const BarbersTeam = () => {
  return (
    <section id="team" className="py-24 px-4 bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0 opacity-50"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full animate-bounce-slow btn-shimmer">
            <span className="text-gold text-sm font-semibold">NAŠ TIM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-text-reveal" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Upoznaj <span className="text-gold">Majstore</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            Naša ekipa profesionalaca sa godinama iskustva i strašću prema stilu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <div
              key={barber.name}
              className="animate-fade-in"
            >
              <BarberCard {...barber} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarbersTeam;

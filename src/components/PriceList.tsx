import { Scissors, Sparkles, User, Package, Baby } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Muško šišanje",
    price: "1.500 RSD",
    duration: "30 min",
  },
  {
    icon: Sparkles,
    name: "Skin Fade",
    price: "2.000 RSD",
    duration: "45 min",
  },
  {
    icon: User,
    name: "Brada",
    price: "800 RSD",
    duration: "20 min",
  },
  {
    icon: Package,
    name: "Full Paket",
    price: "2.500 RSD",
    duration: "60 min",
  },
  {
    icon: Baby,
    name: "Kids Cut",
    price: "1.000 RSD",
    duration: "25 min",
  },
];

const PriceList = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full animate-fade-in">
            <span className="text-gold text-sm font-semibold">CENOVNIK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-text-reveal" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Naše <span className="text-gold">Usluge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            Transparentne cene. Profesionalna usluga. Bez kompromisa.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((service, index) => (
            <div 
              key={service.name}
              className="group bg-card border border-border hover:border-gold/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-gold/10 p-3 rounded-xl group-hover:bg-gold/20 transition-colors">
                    <service.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gold">{service.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceList;

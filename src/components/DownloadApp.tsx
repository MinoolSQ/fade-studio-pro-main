import { Button } from "@/components/ui/button";
import { Smartphone, Calendar, Zap } from "lucide-react";

const DownloadApp = () => {

  return (
    <section id="download-app" className="py-24 px-4 bg-gradient-to-br from-secondary via-background to-secondary relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(218,165,32,0.1),transparent_50%)] transition-transform duration-75"
      ></div>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(218,165,32,0.05),transparent_50%)] transition-transform duration-75"
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full animate-bounce-slow btn-shimmer">
            <span className="text-gold text-sm font-semibold">MOBILNA APLIKACIJA</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              Zakazivanje termina?
            </span>
            <br />
            <span className="text-gold inline-block animate-text-reveal" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
              5 sekundi.
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
            Preuzmi aplikaciju i izaberi svog frizera. Jednostavno, brzo, uvek dostupno.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300">
              <Calendar className="h-8 w-8 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Brzo zakazivanje</h3>
              <p className="text-sm text-muted-foreground">Izaberi termin u par klikova</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300">
              <Smartphone className="h-8 w-8 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Izaberi frizera</h3>
              <p className="text-sm text-muted-foreground">Rezerviši kod svog favorita</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300">
              <Zap className="h-8 w-8 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Push notifikacije</h3>
              <p className="text-sm text-muted-foreground">Nikad ne propusti termin</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gold text-primary-foreground hover:bg-gold-dark transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/30 min-w-[200px] btn-shimmer"
            >
              Google Play
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              App Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

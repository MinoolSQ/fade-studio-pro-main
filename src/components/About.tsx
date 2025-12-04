import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

const About = () => {

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={about1}
                alt="Moderan enterijer frizerskog salona"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
              />
            </div>
            <div className="overflow-hidden rounded-2xl mt-8">
              <img
                src={about2}
                alt="Profesionalni frizerski alat"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
              />
            </div>
            <div className="overflow-hidden rounded-2xl col-span-2">
              <img
                src={about3}
                alt="Premium proizvodi za negu"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full animate-bounce-slow btn-shimmer" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              <span className="text-gold text-sm font-semibold">O NAMA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-slide-right" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              Profesionalna ekipa.<br />
              <span className="text-gold">Urbani stil.</span>
            </h2>
            <div className="w-20 h-1 bg-gold animate-slide-right" style={{ animationDelay: "0.4s", animationFillMode: "both" }}></div>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
              Profesionalna ekipa, urbani stil, preciznost bez kompromisa.
              Godinama gradimo reputaciju kao jedno od najboljih mesta za fade, bradu i styling.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
              Svaki rez je umetničko delo. Svaki klijent je naš prioritet.
              Doživite najbolje šišanje u urbanoj atmosferi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

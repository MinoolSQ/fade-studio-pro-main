import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary relative overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] bg-background/50 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full animate-bounce-slow btn-shimmer">
            <span className="text-gold text-sm font-semibold">KONTAKT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-text-reveal" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Poseti <span className="text-gold">Nas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="bg-gold/10 p-3 rounded-xl group-hover:bg-gold/20 transition-colors">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Adresa</h3>
                <p className="text-muted-foreground">Karađorđeva 12<br />11300 Smederevo, Srbija</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-gold/10 p-3 rounded-xl group-hover:bg-gold/20 transition-colors">
                <Phone className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Telefon</h3>
                <p className="text-muted-foreground">+381 11 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-gold/10 p-3 rounded-xl group-hover:bg-gold/20 transition-colors">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Radno vreme</h3>
                <p className="text-muted-foreground">
                  Ponedeljak - Petak: 09:00 - 20:00<br />
                  Subota: 10:00 - 18:00<br />
                  Nedelja: Zatvoreno
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-gold/10 p-3 rounded-xl group-hover:bg-gold/20 transition-colors">
                <Instagram className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Instagram</h3>
                <a href="https://www.instagram.com/frizerskisalonuky/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark transition-colors">
                  @frizerskisalonuky
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden h-[400px] relative group">
            <iframe
              src="https://maps.google.com/maps?q=Kara%C4%91or%C4%91eva%2012%2C%20Smederevo&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barbershop location map"
            ></iframe>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Karađorđeva+12+Smederevo"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-gold text-primary-foreground px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold-dark font-medium flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              Otvori u mapama
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

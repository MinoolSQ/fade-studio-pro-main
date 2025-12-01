import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-secondary relative overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] bg-background/50 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full animate-fade-in">
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
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2853.623796164793!2d20.927887576687513!3d44.661940871072185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750ce117a29c063%3A0xc51872d25c136082!2sSmederevo!5e0!3m2!1sen!2srs!4v1716815432102!5m2!1sen!2srs"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barbershop location map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

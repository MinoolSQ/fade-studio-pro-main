import { Instagram } from "lucide-react";

interface BarberCardProps {
  name: string;
  specialty: string;
  description: string;
  image: string;
  instagram?: string;
}

const BarberCard = ({ name, specialty, description, image, instagram }: BarberCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-gold transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${specialty}`}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-6 space-y-3 relative z-10 bg-card transition-colors duration-300 group-hover:bg-card/95">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">{name}</h3>
          {instagram && (
            <a 
              href={instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors hover:scale-110 transform duration-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
        </div>
        
        <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full group-hover:bg-gold group-hover:text-black transition-all duration-300">
          <span className="text-gold text-xs font-semibold group-hover:text-black transition-colors duration-300">{specialty}</span>
        </div>
        
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

export default BarberCard;

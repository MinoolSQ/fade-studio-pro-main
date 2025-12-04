import { Instagram, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BarberCardProps {
  name: string;
  specialty: string;
  description: string;
  image: string;
  instagram?: string;
}

const BarberCard = ({ name, specialty, description, image, instagram }: BarberCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-gold transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2 h-full flex flex-col">
      <div className="relative overflow-hidden h-80">
        <img
          src={image}
          alt={`${name} - ${specialty}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>

      <div className="p-6 space-y-4 relative z-10 bg-card transition-colors duration-300 group-hover:bg-card/95 flex-grow flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-heading font-bold text-foreground group-hover:text-gold transition-colors duration-300 uppercase tracking-wide">{name}</h3>
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

        <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-md group-hover:bg-gold group-hover:text-black transition-all duration-300">
          <span className="text-gold text-sm font-heading font-bold tracking-wider uppercase group-hover:text-black transition-colors duration-300">{specialty}</span>
        </div>

        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 flex-grow">{description}</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full border-gold/50 text-gold hover:bg-gold hover:text-black mt-6 py-6 text-lg font-heading uppercase tracking-wider group/btn">
              <Info className="mr-2 h-5 w-5 group-hover/btn:animate-bounce-slow" />
              Više Informacija
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-gold/20">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gold mb-2">{name}</DialogTitle>
              <DialogDescription className="text-foreground/80 text-lg">
                {specialty}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl overflow-hidden h-64 w-full">
                <img src={image} alt={name} className="w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground">
                {description}
                <br /><br />
                {name} je deo našeg tima već godinama i poznat je po svojoj posvećenosti detaljima.
                Zakažite termin i uverite se u kvalitet.
              </p>
              <Button className="w-full bg-gold text-black hover:bg-gold-dark btn-shimmer">
                Zakaži kod {name}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BarberCard;

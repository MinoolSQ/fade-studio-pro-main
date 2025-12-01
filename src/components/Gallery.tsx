import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const galleryImages = [
  { src: gallery1, alt: "Precision fade haircut", speed: 0.1 },
  { src: gallery2, alt: "Professional beard trimming", speed: 0.15 },
  { src: gallery3, alt: "Classic straight razor shave", speed: 0.12 },
  { src: gallery4, alt: "Modern pompadour styling", speed: 0.18 },
  { src: gallery5, alt: "Hair coloring service", speed: 0.14 },
  { src: gallery6, alt: "Kids haircut service", speed: 0.16 },
  { src: gallery7, alt: "Detail line-up work", speed: 0.11 },
  { src: gallery8, alt: "Vintage barber chair", speed: 0.13 },
];

const GalleryImage = ({ image, index }: { image: typeof galleryImages[0]; index: number }) => {
  
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
    >
      <img 
        src={image.src} 
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full animate-fade-in">
            <span className="text-gold text-sm font-semibold">GALERIJA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-text-reveal" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Naši <span className="text-gold">Radovi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            Svaki rez, svaka brada, svaka transformacija je naša priča.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryImage key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

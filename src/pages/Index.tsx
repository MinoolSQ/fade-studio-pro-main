import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BarbersTeam from "@/components/BarbersTeam";
import PriceList from "@/components/PriceList";
import DownloadApp from "@/components/DownloadApp";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import SavetiTeaser from "@/components/SavetiTeaser";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <BarbersTeam />
      <PriceList />
      <DownloadApp />
      <Reviews />
      <Gallery />
      <SavetiTeaser />
      <Contact />

      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Frizerski salon Uki, Smederevo. Sva prava zadržana.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

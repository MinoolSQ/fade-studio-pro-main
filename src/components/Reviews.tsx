import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Nikola M.",
    review: "Najbolji fade u gradu. Marko je pravi majstor za preciznost.",
    rating: 5,
  },
  {
    name: "Stefan P.",
    review: "Brada nikad bolje sređena. Profesionalno i brzo.",
    rating: 5,
  },
  {
    name: "Aleksandar J.",
    review: "Uvek perfektan rez. Atmosfera je top, ekipa je odlična.",
    rating: 5,
  },
  {
    name: "Miloš K.",
    review: "Profesionalni, brzi i precizni. Uvek izađem zadovoljan.",
    rating: 5,
  },
  {
    name: "Luka D.",
    review: "Najbolje iskustvo šišanja koje sam imao. Svaka preporuka!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 px-4 bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0 opacity-30"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full animate-bounce-slow btn-shimmer">
            <span className="text-gold text-sm font-semibold">RECENZIJE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-text-reveal" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Šta klijenti <span className="text-gold">Kažu</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            Zadovoljni klijenti su naš najveći uspeh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

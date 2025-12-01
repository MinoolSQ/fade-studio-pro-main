import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  image?: string;
}

const ReviewCard = ({ name, review, rating, image }: ReviewCardProps) => {
  return (
    <div className="bg-card border border-border hover:border-gold/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-primary-foreground font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground italic leading-relaxed">"{review}"</p>
    </div>
  );
};

export default ReviewCard;

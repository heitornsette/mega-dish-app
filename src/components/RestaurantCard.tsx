import { Star, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  category: string;
  priceRange: string;
}

const RestaurantCard = ({
  name,
  image,
  rating,
  deliveryTime,
  category,
  priceRange,
}: RestaurantCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-border transition-all hover:shadow-lg hover:scale-[1.02]"
      onClick={() => navigate("/restaurant/1")}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-background/90 backdrop-blur text-foreground border-border">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2 truncate">{name}</h3>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-foreground">{rating}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span>{priceRange}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;

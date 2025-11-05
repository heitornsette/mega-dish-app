import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const MenuItem = ({ name, description, price, image }: MenuItemProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg">
      <div className="flex gap-4 p-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
          <p className="text-xl font-bold text-primary">
            R$ {price.toFixed(2).replace(".", ",")}
          </p>
        </div>
        <div className="relative flex-shrink-0">
          <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-muted">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <Button
            size="icon"
            variant="hero"
            className="absolute -bottom-2 -right-2 rounded-full shadow-lg h-10 w-10"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MenuItem;

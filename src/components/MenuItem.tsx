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
    <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-card-hover hover:scale-[1.02] border-border bg-gradient-card">
      <div className="flex gap-6 p-6">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-1 bg-gradient-primary rounded-full"></div>
            <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              R$ {price.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </div>
        <div className="relative flex-shrink-0">
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-muted shadow-card">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <Button
            size="icon"
            variant="hero"
            className="absolute -bottom-3 -right-3 rounded-full shadow-glow h-12 w-12 hover:scale-110 transition-transform"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MenuItem;

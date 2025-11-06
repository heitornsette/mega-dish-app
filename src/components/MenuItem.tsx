import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const MenuItem = ({ id, name, description, price, image }: MenuItemProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
    toast({
      title: "Item adicionado!",
      description: `${name} foi adicionado ao carrinho.`,
    });
  };

  return (
    <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-card-hover hover:scale-[1.02] border-border bg-gradient-card">
      <div className="flex flex-col h-full">
        {/* Imagem */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Botão adicionar sobre a imagem */}
          <Button
            size="icon"
            variant="hero"
            className="absolute bottom-3 right-3 rounded-full shadow-glow h-12 w-12 hover:scale-110 transition-transform"
            onClick={handleAddToCart}
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>

        {/* Conteúdo */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed flex-1">
            {description}
          </p>
          
          <div className="flex items-center gap-2 mt-auto">
            <div className="h-8 w-1 bg-gradient-primary rounded-full"></div>
            <p className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              R$ {price.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MenuItem;

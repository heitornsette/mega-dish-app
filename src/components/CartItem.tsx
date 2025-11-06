import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/contexts/CartContext";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="flex gap-3 py-3 border-b border-border last:border-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded-lg object-cover bg-muted"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-foreground truncate">
          {item.name}
        </h4>
        <p className="text-sm font-bold text-primary mt-1">
          R$ {item.price.toFixed(2).replace(".", ",")}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="text-sm font-medium w-8 text-center">
            {item.quantity}
          </span>
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7 ml-auto text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-foreground">
          R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
        </p>
      </div>
    </div>
  );
};

export default CartItem;

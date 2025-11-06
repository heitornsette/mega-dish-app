import { ArrowLeft, Star, Clock, MapPin, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuItem from "@/components/MenuItem";
import CartItem from "@/components/CartItem";
import restaurant1 from "@/assets/restaurant-1.jpg";

const Restaurant = () => {
  const navigate = useNavigate();
  const { items, totalPrice, updateQuantity, removeItem, clearCart, totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);


  const categories = ["Mais Pedidos", "Pratos Principais", "Acompanhamentos", "Bebidas", "Sobremesas"];

  const menuItems = [
    {
      id: 1,
      name: "X-Tudo Especial",
      description: "Hambúrguer artesanal, queijo cheddar, bacon, ovo, alface, tomate e molho especial",
      price: 32.90,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      category: "Mais Pedidos"
    },
    {
      id: 2,
      name: "Pizza Margherita",
      description: "Molho de tomate, mussarela, manjericão fresco e azeite",
      price: 45.00,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      category: "Mais Pedidos"
    },
    {
      id: 3,
      name: "Sushi Combo",
      description: "20 peças variadas de sushi e sashimi",
      price: 68.90,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      category: "Mais Pedidos"
    },
    {
      id: 4,
      name: "Batata Frita Grande",
      description: "Batata frita crocante com cheddar e bacon",
      price: 18.90,
      image: "https://images.unsplash.com/photo-1630384082869-1bc8b0c35815?w=400&h=300&fit=crop",
      category: "Acompanhamentos"
    },
    {
      id: 5,
      name: "Coca-Cola 2L",
      description: "Refrigerante Coca-Cola 2 litros",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
      category: "Bebidas"
    },
    {
      id: 6,
      name: "Brownie com Sorvete",
      description: "Brownie de chocolate quente com sorvete de baunilha",
      price: 22.90,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      category: "Sobremesas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header com imagem do restaurante */}
      <div className="relative h-80 bg-gradient-to-b from-primary/20 to-background overflow-hidden">
        <img
          src={restaurant1}
          alt="Burger House"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(4,76,244,0.1),transparent_50%)]" />
        
        {/* Botão voltar */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-6 left-6 rounded-full shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/90 dark:bg-black/50"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10 pb-32">
        {/* Card de informações do restaurante */}
        <div className="bg-gradient-card rounded-3xl shadow-card-hover p-8 mb-8 border border-border backdrop-blur-sm">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
                Burger House
              </h1>
              <div className="flex items-center gap-6 text-sm mb-4">
                <div className="flex items-center gap-2 bg-yellow-400/10 px-3 py-1.5 rounded-full">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-foreground text-base">4.8</span>
                  <span className="text-muted-foreground">(500+)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">25-35 min</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Hamburgueria • Fast Food</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <Badge className="bg-gradient-primary text-white border-0 shadow-sm px-4 py-1.5">
              🎉 Entrega Grátis
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 shadow-sm">
              💰 Cupons Disponíveis
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 shadow-sm">
              ✓ Aceita Vale
            </Badge>
          </div>
        </div>

        {/* Menu de categorias */}
        <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl py-6 mb-8 border-b border-border shadow-sm">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Mais Pedidos" ? "hero" : "outline"}
                size="lg"
                className="whitespace-nowrap shadow-sm hover:shadow-md transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Lista de itens do menu */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-primary rounded-full"></div>
            <h2 className="text-3xl font-bold text-foreground">Mais Pedidos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Carrinho fixo no rodapé */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-card border-t border-border p-4 md:p-6 shadow-elegant z-30 backdrop-blur-xl">
          <div className="container mx-auto">
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button size="xl" className="w-full shadow-glow hover:shadow-xl transition-all" variant="hero">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="text-lg font-bold">Ver Carrinho ({totalItems})</span>
                  <span className="ml-auto text-lg font-bold">
                    R$ {totalPrice.toFixed(2).replace(".", ",")}
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-lg p-0">
                <div className="flex flex-col h-full">
                  <SheetHeader className="p-6 border-b border-border bg-gradient-card">
                    <SheetTitle className="text-2xl font-bold text-foreground">
                      Seu Carrinho
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                      <div className="text-center py-12">
                        <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        <p className="text-lg font-semibold text-foreground mb-2">
                          Seu carrinho está vazio
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Adicione itens para começar seu pedido
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {items.map((item) => (
                          <CartItem
                            key={item.id}
                            item={item}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeItem}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {items.length > 0 && (
                    <div className="border-t border-border bg-gradient-card p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="font-medium text-foreground">
                            R$ {totalPrice.toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Taxa de entrega</span>
                          <span className="font-medium text-green-600">Grátis</span>
                        </div>
                        <div className="h-px bg-border my-3" />
                        <div className="flex justify-between text-lg">
                          <span className="font-bold text-foreground">Total</span>
                          <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">
                            R$ {totalPrice.toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button 
                          size="lg" 
                          className="w-full shadow-glow" 
                          variant="hero"
                          onClick={() => {
                            // Aqui você pode adicionar navegação para checkout
                            console.log("Finalizar pedido");
                          }}
                        >
                          Finalizar Pedido
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full"
                          onClick={clearCart}
                        >
                          Limpar Carrinho
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;

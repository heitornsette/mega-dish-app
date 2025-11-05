import { ArrowLeft, Star, Clock, MapPin, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import MenuItem from "@/components/MenuItem";
import restaurant1 from "@/assets/restaurant-1.jpg";

const Restaurant = () => {
  const navigate = useNavigate();

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
      <div className="relative h-64 bg-gradient-to-b from-primary/20 to-background">
        <img
          src={restaurant1}
          alt="Burger House"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Botão voltar */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 left-4 rounded-full shadow-lg"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        {/* Botão favoritar */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4 rounded-full shadow-lg"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-10">
        {/* Card de informações do restaurante */}
        <div className="bg-card rounded-2xl shadow-elegant p-6 mb-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">Burger House</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">4.8</span>
                  <span>(500+ avaliações)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>25-35 min</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Hamburgueria • Fast Food</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Entrega Grátis</Badge>
            <Badge variant="secondary">Cupons Disponíveis</Badge>
            <Badge variant="secondary">Aceita Vale</Badge>
          </div>
        </div>

        {/* Menu de categorias */}
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm py-4 mb-6 border-b border-border">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Mais Pedidos" ? "default" : "outline"}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Lista de itens do menu */}
        <div className="pb-24">
          <h2 className="text-2xl font-bold text-foreground mb-6">Mais Pedidos</h2>
          <div className="grid gap-4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Carrinho fixo no rodapé */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-elegant z-30">
        <div className="container mx-auto">
          <Button size="xl" className="w-full" variant="hero">
            <ShoppingCart className="h-5 w-5" />
            Ver Carrinho • R$ 0,00
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;

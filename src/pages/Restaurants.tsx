import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import CategoryCard from "@/components/CategoryCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { icon: "🍕", name: "Pizza" },
  { icon: "🍔", name: "Hambúrguer" },
  { icon: "🍣", name: "Japonês" },
  { icon: "🍝", name: "Italiano" },
  { icon: "🌮", name: "Mexicano" },
  { icon: "🥗", name: "Saudável" },
  { icon: "🍰", name: "Sobremesas" },
  { icon: "☕", name: "Cafés" },
];

const restaurants = [
  {
    id: 1,
    name: "Pizzaria Bella Napoli",
    image: "/placeholder.svg",
    rating: 4.8,
    deliveryTime: "30-40 min",
    category: "Pizza",
    priceRange: "$$",
  },
  {
    id: 2,
    name: "Burger House Premium",
    image: "/placeholder.svg",
    rating: 4.6,
    deliveryTime: "25-35 min",
    category: "Hambúrguer",
    priceRange: "$$$",
  },
  {
    id: 3,
    name: "Sushi Master",
    image: "/placeholder.svg",
    rating: 4.9,
    deliveryTime: "40-50 min",
    category: "Japonês",
    priceRange: "$$$$",
  },
  {
    id: 4,
    name: "Pasta & Vino",
    image: "/placeholder.svg",
    rating: 4.7,
    deliveryTime: "35-45 min",
    category: "Italiano",
    priceRange: "$$$",
  },
  {
    id: 5,
    name: "Taco Loco",
    image: "/placeholder.svg",
    rating: 4.5,
    deliveryTime: "20-30 min",
    category: "Mexicano",
    priceRange: "$$",
  },
  {
    id: 6,
    name: "Green Bowl",
    image: "/placeholder.svg",
    rating: 4.8,
    deliveryTime: "15-25 min",
    category: "Saudável",
    priceRange: "$$",
  },
  {
    id: 7,
    name: "Sweet Dreams",
    image: "/placeholder.svg",
    rating: 4.9,
    deliveryTime: "25-35 min",
    category: "Sobremesas",
    priceRange: "$$",
  },
  {
    id: 8,
    name: "Café Colonial",
    image: "/placeholder.svg",
    rating: 4.7,
    deliveryTime: "15-20 min",
    category: "Cafés",
    priceRange: "$",
  },
  {
    id: 9,
    name: "Pizza Express",
    image: "/placeholder.svg",
    rating: 4.4,
    deliveryTime: "20-30 min",
    category: "Pizza",
    priceRange: "$",
  },
  {
    id: 10,
    name: "Burguer & Co",
    image: "/placeholder.svg",
    rating: 4.6,
    deliveryTime: "30-40 min",
    category: "Hambúrguer",
    priceRange: "$$",
  },
  {
    id: 11,
    name: "Sakura Sushi",
    image: "/placeholder.svg",
    rating: 4.8,
    deliveryTime: "35-45 min",
    category: "Japonês",
    priceRange: "$$$",
  },
  {
    id: 12,
    name: "La Trattoria",
    image: "/placeholder.svg",
    rating: 4.7,
    deliveryTime: "40-50 min",
    category: "Italiano",
    priceRange: "$$$$",
  },
];

const Restaurants = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory = !selectedCategory || restaurant.category === selectedCategory;
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Delivery rápido e seguro</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Explore Restaurantes
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Descubra os melhores sabores da sua região
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar restaurantes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-14 text-lg bg-background/80 backdrop-blur-sm border-border shadow-card hover:shadow-card-hover transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 border-b border-border bg-gradient-card">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
            <h2 className="text-2xl font-bold text-foreground">Categorias</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )}
              >
                <CategoryCard
                  {...category}
                  className={
                    selectedCategory === category.name
                      ? "ring-2 ring-primary shadow-glow"
                      : ""
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                {filteredRestaurants.length} restaurantes encontrados
              </span>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-full sm:w-[180px] bg-background border-border">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevância</SelectItem>
                  <SelectItem value="rating">Avaliação</SelectItem>
                  <SelectItem value="delivery">Tempo de entrega</SelectItem>
                  <SelectItem value="price-low">Menor preço</SelectItem>
                  <SelectItem value="price-high">Maior preço</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px] bg-background border-border">
                  <SelectValue placeholder="Faixa de preço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="$">$ - Econômico</SelectItem>
                  <SelectItem value="$$">$$ - Moderado</SelectItem>
                  <SelectItem value="$$$">$$$ - Caro</SelectItem>
                  <SelectItem value="$$$$">$$$$ - Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {selectedCategory && (
            <div className="mb-8 flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="border-border hover:bg-accent"
              >
                ✕ Limpar filtro
              </Button>
              <span className="text-sm text-muted-foreground">
                Categoria: <span className="font-semibold text-foreground">{selectedCategory}</span>
              </span>
            </div>
          )}
          
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-4">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nenhum restaurante encontrado
              </h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar seus filtros ou buscar por outro termo
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery("");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 FoodDelivery. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Restaurants;

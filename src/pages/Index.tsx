import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Pizza, Sandwich, Coffee, Salad, IceCream, UtensilsCrossed } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";
import restaurant4 from "@/assets/restaurant-4.jpg";

const categories = [
  { icon: Sandwich, name: "Hambúrgueres" },
  { icon: Pizza, name: "Pizzas" },
  { icon: UtensilsCrossed, name: "Japonês" },
  { icon: Salad, name: "Saudável" },
  { icon: Coffee, name: "Café & Lanches" },
  { icon: IceCream, name: "Sobremesas" },
];

const restaurants = [
  {
    name: "Burger Palace",
    image: restaurant1,
    rating: 4.8,
    deliveryTime: "25-35 min",
    category: "Hambúrguer",
    priceRange: "$$",
  },
  {
    name: "Pizza Bella",
    image: restaurant2,
    rating: 4.9,
    deliveryTime: "30-40 min",
    category: "Pizza",
    priceRange: "$$$",
  },
  {
    name: "Sushi Master",
    image: restaurant3,
    rating: 4.7,
    deliveryTime: "35-45 min",
    category: "Japonês",
    priceRange: "$$$$",
  },
  {
    name: "Green Bowl",
    image: restaurant4,
    rating: 4.6,
    deliveryTime: "20-30 min",
    category: "Saudável",
    priceRange: "$$",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container px-4 md:px-6 py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                  Comida deliciosa
                  <span className="block text-primary">na sua porta</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Escolha entre milhares de restaurantes. Entrega rápida e pratos incríveis esperando por você.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button variant="hero" size="xl" className="gap-2">
                  <UtensilsCrossed className="h-5 w-5" />
                  Ver Restaurantes
                </Button>
                <Button variant="outline" size="xl">
                  Como funciona
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Delicious food spread"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Explore por categoria
          </h2>
          <p className="text-muted-foreground">
            Encontre exatamente o que você está procurando
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              icon={category.icon}
              name={category.name}
            />
          ))}
        </div>
      </section>

      {/* Popular Restaurants Section */}
      <section className="container px-4 md:px-6 py-12 md:py-16 bg-muted/30">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Restaurantes populares
          </h2>
          <p className="text-muted-foreground">
            Os favoritos da sua região
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.name}
              name={restaurant.name}
              image={restaurant.image}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              category={restaurant.category}
              priceRange={restaurant.priceRange}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Pronto para fazer seu pedido?
          </h2>
          <p className="text-lg text-muted-foreground">
            Milhares de restaurantes esperando para preparar sua refeição favorita
          </p>
          <Button variant="hero" size="xl" className="gap-2">
            <UtensilsCrossed className="h-5 w-5" />
            Começar agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <UtensilsCrossed className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">FoodExpress</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 FoodExpress. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

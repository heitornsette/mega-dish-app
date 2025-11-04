import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  name: string;
  onClick?: () => void;
}

const CategoryCard = ({ icon: Icon, name, onClick }: CategoryCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer overflow-hidden border-border bg-card p-6 transition-all hover:shadow-lg hover:scale-105 hover:border-primary/50"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent transition-colors group-hover:bg-primary/10">
          <Icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
        </div>
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
    </Card>
  );
};

export default CategoryCard;

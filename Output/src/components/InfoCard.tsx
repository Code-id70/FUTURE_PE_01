import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

const InfoCard = ({ icon: Icon, title, children }: InfoCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
          <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-card-border bg-card/80 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}

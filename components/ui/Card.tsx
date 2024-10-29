import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-background p-4 shadow-sm ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={`space-y-1.5 p-4 ${className}`} {...props} />;
}

export function CardTitle({ className, ...props }: CardProps) {
  return (
    <h3
      className={`font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: CardProps) {
  return <p className={`text-sm text-foreground/60 ${className}`} {...props} />;
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={`p-4 pt-0 ${className}`} {...props} />;
}

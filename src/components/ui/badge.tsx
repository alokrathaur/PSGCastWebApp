import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "destructive" | "glow";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-blue-50 text-blue-700 border-blue-200/80",
    secondary: "bg-slate-100 text-slate-700 border-slate-200/80",
    outline: "border-slate-300 text-slate-700 bg-white",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    warning: "bg-amber-50 text-amber-800 border-amber-200/80",
    destructive: "bg-rose-50 text-rose-700 border-rose-200/80",
    glow: "bg-indigo-50 text-indigo-700 border-indigo-200/80 shadow-xs",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border tracking-tight select-none",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

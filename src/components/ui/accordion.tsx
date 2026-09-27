import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "border border-slate-200/90 rounded-2xl bg-white shadow-xs transition-all overflow-hidden",
        isOpen && "border-blue-300 ring-2 ring-blue-500/10 shadow-sm",
        className
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 text-left text-base font-semibold text-slate-900 transition-all hover:text-blue-600"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200",
            isOpen && "rotate-180 text-blue-600"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
          {children}
        </div>
      )}
    </div>
  );
}

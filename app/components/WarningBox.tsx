import { AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

export function WarningBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 my-4">
      <div className="flex items-start gap-2.5">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-amber-900 mb-2 leading-snug">
            {title}
          </h3>
          <div className="text-sm text-amber-900/90 leading-relaxed space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

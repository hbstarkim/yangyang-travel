import { CheckCircle2 } from "lucide-react";

export function TipList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
          <span className="text-sm text-ink/85 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface DayHeaderProps {
  dayLabel: string;
  date: string;
  summary: string;
}

export function DayHeader({ dayLabel, date, summary }: DayHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-ocean to-sage rounded-2xl p-6 mb-5 text-white shadow-sm">
      <div className="text-3xl font-bold leading-tight">{dayLabel}</div>
      <div className="text-sm opacity-90 mt-1">{date}</div>
      <div className="text-xs opacity-75 mt-3 italic">{summary}</div>
    </div>
  );
}

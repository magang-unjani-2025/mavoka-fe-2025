import { TopCard } from "./TopCard";

type Stat = {
  title: string;
  value: number;
  label: string;
};

export default function DashboardTopCard({ stat }: { stat: Stat }) {
  return (
    <TopCard 
      title={stat.title} 
      value={stat.value} 
      label={stat.label} 
    />
  );
}

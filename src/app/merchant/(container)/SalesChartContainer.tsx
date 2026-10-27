import SalesBarChart from '../(component)/SalesBarChart';
import SalesChartHeader from '../(component)/SalesChartHeader';
import SalesChartInsight from '../(component)/SalesChartInsight';

export default function SalesChartContainer() {
  return (
    <section className="rounded-xl bg-neutral-10 border border-neutral-30 p-4 shadow-xs space-y-4">
      <SalesChartHeader />
      <SalesBarChart />
      <SalesChartInsight />
    </section>
  );
}

'use client';

import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { hourlySalesData } from '../_data/sales-chart';

const chartConfig = {
  todayVolume: {
    label: 'Hari Ini',
    color: 'var(--color-merchant-primary)',
  },
  averageVolume: {
    label: 'Rerata Harian',
    color: 'var(--color-neutral-40)',
  },
};

export default function SalesBarChart() {
  return (
    <ChartContainer config={chartConfig} className="h-56 w-full aspect-auto">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={hourlySalesData}
          margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--color-neutral-30)"
          />
          <XAxis
            dataKey="hour"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10, fill: 'var(--color-neutral-70)' }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10, fill: 'var(--color-neutral-70)' }}
            tickFormatter={(val) => `${val}`}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="averageVolume"
            fill="var(--color-neutral-40)"
            radius={[3, 3, 0, 0]}
            maxBarSize={12}
          />
          <Bar dataKey="todayVolume" radius={[3, 3, 0, 0]} maxBarSize={16}>
            {hourlySalesData.map((entry) => (
              <Cell
                key={entry.hour}
                fill={
                  entry.isPeak
                    ? 'var(--color-merchant-primary)'
                    : entry.isNow
                      ? 'var(--color-warning-main)'
                      : 'var(--color-merchant-primary-border)'
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

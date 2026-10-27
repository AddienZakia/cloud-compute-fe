'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { hourlySalesData } from '../_data/sales-chart';

const chartConfig = {
  todayVolume: {
    label: 'Hari Ini',
    color: 'var(--color-merchant-primary, #e85d04)',
  },
  averageVolume: {
    label: 'Rerata Harian',
    color: 'var(--color-neutral-40, #e0e0e0)',
  },
} satisfies ChartConfig;

export default function SalesBarChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[240px] w-full">
      <BarChart
        data={hourlySalesData}
        margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="var(--color-neutral-30, #ededed)"
        />
        <XAxis
          dataKey="hour"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 10, fill: 'var(--color-neutral-70, #757575)' }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 10, fill: 'var(--color-neutral-70, #757575)' }}
          tickFormatter={(val) => `${val}`}
        />
        <Tooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="averageVolume"
          fill="var(--color-neutral-40, #e0e0e0)"
          radius={[3, 3, 0, 0]}
          maxBarSize={12}
        />
        <Bar dataKey="todayVolume" radius={[3, 3, 0, 0]} maxBarSize={16}>
          {hourlySalesData.map((entry) => (
            <Cell
              key={entry.hour}
              fill={
                entry.isPeak
                  ? 'var(--color-merchant-primary, #e85d04)'
                  : entry.isNow
                    ? 'var(--color-warning-main, #ca7336)'
                    : 'var(--color-merchant-primary-border, #f5a87a)'
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

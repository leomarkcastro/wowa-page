'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Loader2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

interface BarChartMultipleProps {
  labels: {
    title: string;
    description: string;
    footer: React.ReactNode;
  };
  chartConfig: ChartConfig;
  data: any[];
  dataKeys: string[];
  xAxisKey: string;
  style?: {
    height?: string;
  };
  isLoading?: boolean;
  error?: Error | null;
}

export function BarChartMultiple({
  labels,
  chartConfig,
  data,
  dataKeys,
  xAxisKey,
  style,
  isLoading,
  error,
}: BarChartMultipleProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{labels.title}</CardTitle>
        <CardDescription>{labels.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className='flex h-[300px] items-center justify-center'>
            <Loader2 className='h-8 w-8 animate-spin text-muted-foreground' />
          </div>
        )}
        {error && (
          <div className='flex h-[300px] items-center justify-center'>
            <p className='text-destructive'>Failed to load chart data</p>
          </div>
        )}
        {!isLoading && !error && (
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={data}
              height={style?.height ? parseInt(style.height) : 300}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={xAxisKey}
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator='dashed' />}
              />
              {dataKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={`var(--color-${key})`}
                  radius={4}
                />
              ))}
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        {labels.footer}
      </CardFooter>
    </Card>
  );
}
